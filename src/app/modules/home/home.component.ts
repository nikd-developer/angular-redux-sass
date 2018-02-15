import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalsManagerService, ModalManagerState} from '../modals-manager/modals-manager.service';
import { AlertModal } from '../modals-manager/modals/alert-modal/alert-modal.component';
@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, AfterViewInit {
    constructor(private modalsManagerService: ModalsManagerService ) {
    }

    ngOnInit() {        
    }

    ngAfterViewInit() {
    }

    openModal() {
        this.modalsManagerService.showModal({
            component: AlertModal,
            callback: (result) => {
                console.log(result);
            },
            payload: {
                name: 'BIZ TECNO'
            }
        })
    }
}
