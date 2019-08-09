import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private api_url: 'http://127.0.0.1:8000/api/';
  httpHeader=new HttpHeaders({'content-type':'application-json'});
  constructor(private _http: HttpClient) { }
  getUsers(): Observable<any>
  {
    return this._http.get<any>(this.api_url+'users/',{headers: this.httpHeader});
  }
  getUserDetails(id): Observable<any>
  {
    return this._http.get<any>(this.api_url+'users/'+id+'/',{headers: this.httpHeader});
  }
  createUser(U): Observable<any>
  {
    const User={ username:U.username,mobile:U.mobile,email: U.email,password: U.password };
    return this._http.post<any>(this.api_url+'users/',User,{headers: this.httpHeader});
  }
  UpdateUser(U): Observable<any>
  {  
    const User={ username:U.username,mobile:U.mobile,email: U.email,password: U.password };
    return this._http.put<any>(this.api_url+'users'+U.id+'/',User,{headers: this.httpHeader});
  }
  deleteUser(U):  Observable<any>
  {
    return this._http.delete<any>(this.api_url+'users/'+U+'/',{headers: this.httpHeader});
  }
}
