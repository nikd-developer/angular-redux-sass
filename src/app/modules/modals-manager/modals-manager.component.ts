import {
    Component,
    Input,
    OnInit,
    OnDestroy
} from '@angular/core';
import { NgbModal, NgbActiveModal, NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalsManagerService, ModalManagerState } from './modals-manager.service'
import { Subscription } from 'rxjs/Subscription';
@Component({
    selector: 'app-modal-manager, [app-modal-manager]',
    template: ''
})
export class ModalsManagerComponent implements OnInit, OnDestroy {
    modalRef: NgbModalRef = null;
    subscription: Subscription;
    constructor(private modalManagerService: ModalsManagerService, private modalService: NgbModal) {
    }
    ngOnInit() {
        this.subscription = this.modalManagerService.getModalListener().subscribe((state: ModalManagerState) => {
            if (state.action) {
                if (this.modalRef) {
                    this.modalRef.dismiss('forcefully destroy by another modal');
                }
                this.open(state);
            } else {
                if (this.modalRef) {
                    this.modalRef.dismiss('destroy forcefully');
                }
                this.modalRef = null;
            }
        });
    }


    open(state: ModalManagerState) {
        this.modalRef = this.modalService.open(state.component);
        this.modalRef.componentInstance.inputs = state.payload || {};
        this.modalRef.result.then((result) => {
            if (state.callback) {
                result = {
                    state: true,
                    result: result
                };
                state.callback(result);
            }
        }, (reason) => {
            if (state.callback) {
                reason = {
                    state: false,
                    result: reason
                };
                state.callback(reason);
            }
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }


    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
