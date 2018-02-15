import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-alert-modal',
    templateUrl: './alert-modal.component.html'
})
export class AlertModal {
    @Input() inputs;
    constructor(public activeModal: NgbActiveModal) {
    }
}
