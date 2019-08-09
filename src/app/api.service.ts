import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Plans} from './planapp';
import {Login} from './loginapp';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  private baseURL="http://localhost:8000/";
  httpHeaders=new HttpHeaders({'content-type':'application/json'});

  getPlans(): Observable<Plans[]>{
    return this.http.get<Plans[]>(this.baseURL + 'plans/',{
     headers:this.httpHeaders 
    })
  }
  getlogin(): Observable<Login[]>{
      return this.http.get<Login[]>(this.baseURL + 'api/login/',{
       headers:this.httpHeaders 
      })
  }

  addaccount(login):Observable<Login[]>{
    const body={name:login.name,phone:login.phone,email:login.email,password:login.password};
    return this.http.post<Login[]>(this.baseURL+'api/login/',body,{headers:this.httpHeaders});
  }
}
