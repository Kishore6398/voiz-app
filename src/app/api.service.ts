import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Plans} from './planapp';
import {Login} from './loginapp';
import {Inquiry} from './inquiryapp';
import {Recharge} from './rechargeapp';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  private baseURL="http://localhost:8000/";
  httpHeaders=new HttpHeaders({'content-type':'application/json'});

  getPlans(): Observable<Plans[]>{
    return this.http.get<Plans[]>(this.baseURL + 'api/plans/',{
     headers:this.httpHeaders 
    })
  }
  getlogin(): Observable<Login[]>{
      return this.http.get<Login[]>(this.baseURL + 'api/login/',{
       headers:this.httpHeaders 
      })
  }
  getinquiry(): Observable<Inquiry[]>{
    return this.http.get<Inquiry[]>(this.baseURL + 'api/inquiry/',{
     headers:this.httpHeaders 
    })
  }
  getrecharge(): Observable<Recharge[]>{
    return this.http.get<Recharge[]>(this.baseURL + 'api/recharge/',{
     headers:this.httpHeaders 
    })
  }

  addaccount(login):Observable<Login[]>{
    const body={name:login.name,phone:login.phone,email:login.email,password:login.password};
    return this.http.post<Login[]>(this.baseURL+'api/login/',body,{headers:this.httpHeaders});
  }
  addinquiry(inquiry):Observable<Inquiry[]>{
    const body={name:inquiry.name,phone:inquiry.phone,email:inquiry.email,message:inquiry.message};
    return this.http.post<Inquiry[]>(this.baseURL+'api/inquiry/',body,{headers:this.httpHeaders});
  }
  addrecharge(recharge):Observable<Recharge[]>{
    const body={mobile:recharge.mobile,amount:recharge.amount};
    return this.http.post<Recharge[]>(this.baseURL+'api/recharge/',body,{headers:this.httpHeaders});
  }
}
