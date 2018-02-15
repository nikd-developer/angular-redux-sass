import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ModalsManagerService {
    modal: ModalManagerState;
    modalManagerSubject:BehaviorSubject<ModalManagerState>;
    constructor() {
        this.modal = {
            action: false,
            component: null
        };
        this.modalManagerSubject = new BehaviorSubject<ModalManagerState>(this.modalState());
    }

    getModalListener(): Observable<ModalManagerState> {
        return this.modalManagerSubject.asObservable();
    }

    showModal(state: ModalManagerState) {
        state.action = true;
        this.modalManagerSubject.next(state);
    }

    destroyModal() {
        this.modalManagerSubject.next({action: false, component: null});
    }

    modalState() {
        return this.modal;
    }
}


export interface ModalManagerState{
    action?: boolean; // true means create modal, false means destroy modal
    payload?: any;
    component: any;
    callback?: any;
}

