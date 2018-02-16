import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { AppState, getLoader } from '../../redux/app.reducer';
import * as Redux from 'redux';
import { AppStore } from '../../redux/app.store';
import * as UiActions from '../../redux/actions/ui.actions';


@Component({
    selector: 'app-loader,[app-loader]',
    templateUrl: './loader.component.html'
})
export class LoaderComponent implements OnInit, OnDestroy {
    counter: number;
    show: boolean;

    constructor( @Inject(AppStore) private store: Redux.Store<AppState> ) {
        this.counter = 0;
    }

    ngOnInit() {
        this.store.subscribe(() => this.updateState());
    }

    updateState() {
        const state = this.store.getState();
        const loader = getLoader(state);
        if(loader >= 1) {
            this.show = true;
        } else {
            this.show = false;
        }
    }

    ngOnDestroy() {
    }
}

