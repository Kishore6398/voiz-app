import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  uname:any;
  firstname:any;
  uemail:any;
  Recharge:any;
  mobile:any;
  amount:any;
  pid:any;
  rdate:any;
  recharge2:any;
  inquiry:any;
  prepaid:any;
  user_data: any;
  User:any;
  returnuname()
  {
    return this.uname
  }
  constructor(private data:DataService,private apiService:ApiService,private Cookie:CookieService) {
    /*this.apiService.getrecharge().subscribe(response => {
      this.uname=this.data.uname;
      console.log(this.uname);
      this.recharge2 = response;
      console.log(response);
     } )
     this.uname=this.data.uname;*/
     user_data:Cookie;
   }

  ngOnInit() {
   // this.uname=this.data.uname;
    //this.firstname=this.data.firstname;
   // this.uemail=this.data.uemail;
   this.uname=this.Cookie.get('uname');
   this.firstname=this.Cookie.get('firstname');
   this.uemail=this.Cookie.get('uemail');

    this.User = {'username':this.data.uname,'first_name':this.data.firstname,'email':this.data.uemail}
    // this.user_data = new CookieService('user_data',this.User);
    //this.Cookie.set('uname',this.data.uname);
    //this.Cookie.set('firstname',this.data.firstname);
   // this.Cookie.set('uemail',this.data.uemail);
    //console.log(this.user_data);
    this.apiService.getrecharge().subscribe(response => {
    
      console.log(this.uname);
      this.recharge2 = response;
      console.log(response);
     } )
     this.apiService.getinquiry().subscribe(response => {

      console.log(this.uname);
      this.inquiry = response;
      console.log(response);
     } )
     this.apiService.getform1().subscribe(response => {
      console.log(this.uname);
      this.prepaid = response;
      console.log(response);
     } )
    // this.uname=this.data.uname;


	  
  }
  getusertest(){
    this.apiService.getactivity(this.uname).subscribe(data => {
      this.Recharge = data;
      console.log("getuser fn")
      console.log(this.Recharge.pid);
      this.mobile=this.Recharge.mobile;
      this.amount=this.Recharge.amount;
      this.pid=this.Recharge.pid;
      this.rdate=this.Recharge.rdate;
      //this.uname=this.User.username;
    //  this.firstname=this.User.first_name;
     // this.uemail=this.User.email;
    },
    error => console.log(error)

    );
  }

   
}
