import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  uname:string;
  firstname:any;
  uemail:any;
  Recharge:any;
  mobile:any;
  amount:any;
  pid:any;
  rdate:any;
  recharge2:any;

  returnuname()
  {
    return this.uname
  }
  constructor(private data:DataService,private apiService:ApiService) {
    /*this.apiService.getrecharge().subscribe(response => {
      this.uname=this.data.uname;
      console.log(this.uname);
      this.recharge2 = response;
      console.log(response);
     } )
     this.uname=this.data.uname;*/
   }

  ngOnInit() {
    this.uname=this.data.uname;
    this.firstname=this.data.firstname;
    this.uemail=this.data.uemail;
    this.apiService.getrecharge().subscribe(response => {
      this.uname=this.data.uname;
      console.log(this.uname);
      this.recharge2 = response;
      console.log(response);
     } )
     this.uname=this.data.uname;


	  
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
