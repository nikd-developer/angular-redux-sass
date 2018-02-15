import { Injectable } from '@angular/core';
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
import { LoaderService } from '../_components/loader/loader.service';
@Injectable()
export class HttpService implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      this.loaderService.showLoader();
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
          this.loaderService.hideLoader();
          // It will call after every request finish
      })
    );
  }
}
