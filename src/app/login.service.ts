import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private api_url = environment.api_url;
  api_url:string= 'http://localhost:8000/api/';
  //httpHeader = new HttpHeaders({ 'content-type': 'application/json, application/x-www-form-urlencoded, multipart/form-data, text/plain', 'Access-Control-Allow-Origin': 'SAMEORIGIN', 'Access-Control-Allow-Credentials': 'true', 'Access-Control-Allow-Methods': 'POST, GET, PUT, PATCH, OPTIONS, DELETE', 'Access-Control-Allow-Headers': 'Content-Type, Accept, X-Requested-With, remember-me' });
  httpHeader = new HttpHeaders({'content-type': 'application/json','vary': 'accept'});
  constructor(private _http: HttpClient) { }
  getUsers(): Observable<any>
  {
    return this._http.get<any>(this.api_url+'user/',{headers: this.httpHeader});
  }
  getUserDetails(id): Observable<any>
  {
    return this._http.get<any>(this.api_url+'user/'+id+'/',{headers: this.httpHeader});
  }
  createUser(U): Observable<any>
  {
    const User={ username:U.username,mobile:U.mobile,email: U.email,password: U.password };
    return this._http.post<any>(this.api_url+'user/',User,{headers: this.httpHeader});
  }
  UpdateUser(U): Observable<any>
  {  
    const User={ username:U.username,mobile:U.mobile,email: U.email,password: U.password };
    return this._http.put<any>(this.api_url+'user'+U.id+'/',User,{headers: this.httpHeader});
  }
  deleteUser(U): Observable<any>
  {
    return this._http.delete<any>(this.api_url+'user/'+U+'/',{headers: this.httpHeader});
  }
}
