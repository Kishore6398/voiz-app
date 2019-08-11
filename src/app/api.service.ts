import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dongle} from './dongleapp';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  private baseURL="http://localhost:8000/";
  httpHeaders=new HttpHeaders({'Content-Type':'application/json'});

  getDongle(): Observable<Dongle[]>{
    return this.http.get<Dongle[]>(this.baseURL + 'api/plans/',{
     headers:this.httpHeaders 
    })
  }
 
 

 
}
