import { Injectable, Inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { catchError, finalize, map } from 'rxjs/operators';
import { AppState, getLoader } from '../../redux/app.reducer';
import * as Redux from 'redux';
import { AppStore } from '../../redux/app.store';
import * as UiActions from '../../redux/actions/ui.actions';
@Injectable()
export class HttpService implements HttpInterceptor {
  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.store.dispatch(UiActions.showLoader());
    // Added Token In Every Request
    // const token: any = localStorage.getItem('token');
    // if (token) {
    //   request = request.clone({
    //     setHeaders: {
    //       Authorization: `Bearer ${token}`
    //     }
    //   });
    // }
    return next.handle(request).pipe(map(event => {
      return event;
    }),
      catchError(error => {
        // redirect if required anything
        return Observable.throw(error);
      }),
      finalize(() => {
        this.store.dispatch(UiActions.hideLoader());
          // It will call after every request finish
      })
    );
  }
}
