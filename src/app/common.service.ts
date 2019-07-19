import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http: Http) { }
  login(user) {
// tslint:disable-next-line: deprecation
    return this.http.post('http://localhost:8080/api/login/', user).map((response: Response) => response.json());
  }
  signup(user) {
// tslint:disable-next-line: deprecation
    return this.http.post('http://localhost:8080/api/signup/', user).map((response: Response) => response.json());
  }
}
