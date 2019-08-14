import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Form1 } from "./form1app";
import { Form2 } from "./form2app";
import { Form3 } from "./form3app";
import { Form4 } from "./form4app";
import { Form5 } from "./form5app";
import { Dongle } from "./dongleapp";
import { Plans } from "./planapp";
import { Login } from "./loginapp";
import { Inquiry } from "./inquiryapp";
import { Recharge } from "./rechargeapp";
import { Feedback } from "./feedback";
import { CookieService } from "ngx-cookie-service";
import { user } from './user';
@Injectable({
  providedIn: "root",

})
export class ApiService {
  constructor(private http: HttpClient,private Cookie: CookieService) {}
  private baseURL = "http://localhost:8000/";
  httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });
  token=this.Cookie.get('usr_token');
  getAuthentication(){
    return new HttpHeaders (
      {
        'content-type': 'application/json',
        Authorization: `Token ${this.token}`
      }
    )
  }
  getDongle(): Observable<Dongle[]> {
    return this.http.get<Dongle[]>(this.baseURL + "api/dongleplans/", {
      headers: this.httpHeaders
    });
  }

  getPlans(): Observable<Plans[]> {
    return this.http.get<Plans[]>(this.baseURL + "api/plans/", {
      headers: this.httpHeaders
    });
  }
  getlogin(): Observable<Login[]> {
    return this.http.get<Login[]>(this.baseURL + "api/login/", {
      headers: this.httpHeaders
    });
  }

  getform1(): Observable<Form1[]> {
    return this.http.get<Form1[]>(this.baseURL + "api/form1/", {
      headers: this.httpHeaders
    });
  }
  getform2(): Observable<Form2[]> {
    return this.http.get<Form2[]>(this.baseURL + "api/form2/", {
      headers: this.httpHeaders
    });
  }
  getform3(): Observable<Form3[]> {
    return this.http.get<Form3[]>(this.baseURL + "api/form3/", {
      headers: this.httpHeaders
    });
  }
  getform4(): Observable<Form4[]> {
    return this.http.get<Form4[]>(this.baseURL + "api/form4/", {
      headers: this.httpHeaders
    });
  }
  getform5(): Observable<Form5[]> {
    return this.http.get<Form5[]>(this.baseURL + "api/form5/", {
      headers: this.httpHeaders
    });
  }
  getinquiry(): Observable<Inquiry[]> {
    return this.http.get<Inquiry[]>(this.baseURL + "api/inquiry/", {
      headers: this.httpHeaders
    });
  }
  getrecharge(): Observable<Recharge[]> {
    return this.http.get<Recharge[]>(this.baseURL + "api/recharge/", {
      headers: this.httpHeaders
    });
  }
  new: any;
  LoginUser(form) {
    const body ={ 'username': form.mobileInput,'password': form.passwordInput }

    this.new =  this.http.post(this.baseURL+'auth/',body, { headers: this.httpHeaders });
    console.log(this.new);
    return this.new
  }
  RegisterUser(form): Observable<any> {
    const body ={ 'username': form.mobileInput,'phone': form.mobileInput,'email': form.emailInput,'password': form.passwordInput, 'first_name': form.nameInput }
    // const body=JSON.stringify(form);
    return this.http.post(this.baseURL+'api/profile/',body, { headers: this.httpHeaders });
  }
  addaccount(login): Observable<Login[]> {
    const body = {
      username: login.phone,
      phone: login.phone,
      email: login.email,
      password: login.password
    };
    return this.http.post<Login[]>(this.baseURL + "api/profile/", body, {
      headers: this.httpHeaders
    });
  }

  addform1(form1,x): Observable<Form1[]> {
    const body = {
      name: form1.name,
      email: form1.email,
      mobile: form1.mobile,
      address: form1.address,
      city: form1.city,
      pincode: form1.pincode,
      num:x
    };
    return this.http.post<Form1[]>(this.baseURL + "api/form1/", body, {
      headers: this.httpHeaders
    });
  }
  addform2(form2,x): Observable<Form2[]> {
    const body = {
      name: form2.name,
      email: form2.email,
      mobile: form2.mobile,
      address: form2.address,
      city: form2.city,
      pincode: form2.pincode,
      num:x
    };
    return this.http.post<Form2[]>(this.baseURL + "api/form2/", body, {
      headers: this.httpHeaders
    });
  }
  addform3(form3): Observable<Form3[]> {
    const body = {
      name: form3.name,
      email: form3.email,
      mobile: form3.mobile,
      address: form3.address,
      city: form3.city,
      pincode: form3.pincode
    };
    return this.http.post<Form3[]>(this.baseURL + "api/form3/", body, {
      headers: this.httpHeaders
    });
  }
  addform4(form4): Observable<Form4[]> {
    const body = {
      name: form4.name,
      email: form4.email,
      mobile: form4.mobile,
      address: form4.address,
      city: form4.city,
      pincode: form4.pincode,
      newmob: form4.newmob,
    };
    return this.http.post<Form4[]>(this.baseURL + "api/form4/", body, {
      headers: this.httpHeaders
    });
  }
  addform5(form5): Observable<Form5[]> {
    const body = {
      name: form5.name,
      email: form5.email,
      mobile: form5.mobile,
      address: form5.address,
      city: form5.city,
      pincode: form5.pincode,
      newmob: form5.newmob,

    };
    return this.http.post<Form5[]>(this.baseURL + "api/form5/", body, {
      headers: this.httpHeaders
    });
  }
  addinquiry(inquiry): Observable<Inquiry[]> {
    const body = {
      name: inquiry.name,
      phone: inquiry.phone,
      email: inquiry.email,
      message: inquiry.message
    };
    return this.http.post<Inquiry[]>(this.baseURL + "api/inquiry/", body, {
      headers: this.httpHeaders
    });
  }
  addrecharge(x, y, z, id): Observable<Recharge[]> {
    const body = { mobile: x, amount: y, rdate: z, pid: id };
    return this.http.post<Recharge[]>(this.baseURL + "api/recharge/", body, {
      headers: this.httpHeaders
    });
  }

  getfeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.baseURL + "api/feedback/", {
      headers: this.httpHeaders
    });
  }
  addfeedback(feedback): Observable<Feedback[]> {
    const body = {
      fname: feedback.fname,
      femail: feedback.femail,
      fsubject: feedback.fsubject,
      fmessage: feedback.fmessage
    };
    return this.http.post<Feedback[]>(this.baseURL + "api/feedback/", body, {
      headers: this.httpHeaders
    });
  }
}
