import { Component, Inject, OnInit } from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { AppState } from './redux/app.reducer';
import * as Redux from 'redux';
import { AppStore } from './redux/app.store';
import * as UiActions from './redux/actions/ui.actions';
import * as UserActions  from './redux/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(AppStore) private store: Redux.Store<AppState>,
    private router: Router
  ) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });    
  }

  ngOnInit() {
    this.store.dispatch(UiActions.showLoader());
    setTimeout(() => {
      this.store.dispatch(UiActions.hideLoader());
    }, 4000);
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.store.dispatch(UiActions.showLoader());
    }
    if (event instanceof NavigationEnd) {
      this.store.dispatch(UiActions.hideLoader());
    }
  
    if (event instanceof NavigationCancel) {
      this.store.dispatch(UiActions.hideLoader());
    }
    if (event instanceof NavigationError) {
      this.store.dispatch(UiActions.hideLoader());
    }
  }

}


