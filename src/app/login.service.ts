import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private api_url = environment.api_url;
  api_url:string= 'http://localhost:8000/';
  //httpHeader = new HttpHeaders({ 'content-type': 'application/json, application/x-www-form-urlencoded, multipart/form-data, text/plain', 'Access-Control-Allow-Origin': 'SAMEORIGIN', 'Access-Control-Allow-Credentials': 'true', 'Access-Control-Allow-Methods': 'POST, GET, PUT, PATCH, OPTIONS, DELETE', 'Access-Control-Allow-Headers': 'Content-Type, Accept, X-Requested-With, remember-me' });
  httpHeader = new HttpHeaders({'content-type': 'application/json','vary': 'accept'});
  constructor(private _http: HttpClient,private Cookie:CookieService) { }
  token= this.Cookie.get('usr_token');
  getAuthentication()
  {

    return new HttpHeaders({
      'content-type':'application/json',
      Authorization: `Token ${this.token}`
    });
  }
  LoginUser(formval)
  {
<<<<<<< HEAD
    const body={'username':formval.mobileInput,'password':formval.passwordInput,'mobile': formval.mobileInput}
    console.log(formval);
    return this._http.post(this.api_url+'api/login/',{ headers: this.httpHeader })
  }
  registerUser(data): Observable<any>
=======
    const body={'phone':formval.mobileInput,'password':formval.passwordInput}
    console.log(body);
    let cred= this._http.get(this.api_url+'login/',{ headers: this.httpHeader });
    
    
  }

  registerUser(data)
>>>>>>> 60cf338faad14c8c458fe537c2c98991c858a3d8
  {
    const body={'username': data.mobileInput,'mobile':data.mobileInput,'email':data.emailInput,'password':data.passwordInput,'first_name':data.nameInput};
    return this._http.post<any>(this.api_url+'api/profile/',body,{headers: this.httpHeader});
  }
  getUserDetails(id): Observable<any>
  {
    return this._http.post<any>(this.api_url+'user/'+id+'/',{headers: this.httpHeader});
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

  login(user): Promise <any> {
    let url: string = 'login/';
    console.log(this.Cookie.get('csrftoken'));
    return this._http.post<any>(url, user, {headers:
                 this.httpHeader}).toPromise();
  }
 
  register(user): Promise <any>{
    let url: string = 'profile/';
    return this._http.post<any>(url, user, {headers:
                this.httpHeader}).toPromise();
  }
}
