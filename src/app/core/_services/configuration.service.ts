import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import * as _ from 'lodash';
@Injectable()
export class ConfigurationService {
    constructor(
        private http: HttpClient
    ) {
    }
    init(): Observable<any> | Promise<any> | boolean {
        console.log('configuration');
        return true;
    }
}
