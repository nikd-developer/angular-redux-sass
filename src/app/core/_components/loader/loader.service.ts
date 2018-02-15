import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { loaderState } from '../../../common/utility';
@Injectable()
export class LoaderService {
    loaderSubject = new BehaviorSubject<boolean>(this.loaderState());
    loader: boolean;
    constructor() {
        this.loader = false;
    }

    isLoading(): Observable<boolean> {
        return this.loaderSubject.asObservable();
    }

    showLoader() {
        this.loader = true;
        this.loaderSubject.next(true);
    }

    hideLoader() {
        this.loader = false;
        this.loaderSubject.next(false);
    }

    loaderState() {
        return this.loader;
    }
}
