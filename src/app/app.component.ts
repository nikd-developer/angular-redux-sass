import { Component, Inject } from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { AppState, getCurrentUser } from './redux/app.reducer';
import * as Redux from 'redux';
import { AppStore } from './redux/app.store';
import * as UserActions  from './redux/actions/user.actions';
import { LoaderService } from './core/_components/loader/loader.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    @Inject(AppStore) private store: Redux.Store<AppState>,
    private router: Router,
    private loaderService: LoaderService
  ) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });

    // redux Example
    // store.subscribe(() => this.updateState() );
    // this.updateState();
    // store.dispatch(UserActions.setCurrentUser({
    //   id: '123',
    //   name: 'abc'
    // }));
  }

  updateState() {
    const state = this.store.getState();
    console.log(getCurrentUser(state));
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loaderService.showLoader();
    }
    if (event instanceof NavigationEnd) {
      this.loaderService.hideLoader();
    }
  
    if (event instanceof NavigationCancel) {
      this.loaderService.hideLoader();
    }
    if (event instanceof NavigationError) {
      this.loaderService.hideLoader();
    }
  }

}


