import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import {CookieService} from 'ngx-cookie-service';
import { ToastrService } from  'ngx-toastr';


@Component({
  selector: 'app-customersupport',
  templateUrl: './customersupport.component.html',
  styleUrls: ['./customersupport.component.scss'],
  providers: [ApiService]
})
export class CustomersupportComponent implements OnInit {
  inquiry=[];
  feedback=[];
  inquirydetails;
  feedbackdetails;
  uname:any;
  customerForm: FormGroup;
  customerfeedbackForm: FormGroup;
  constructor(private toast:ToastrService,private fb: FormBuilder,private apiService:ApiService, private router:Router,private data:DataService,private Cookie:CookieService) { 
    this.inquirydetails={id: -1, name:'', phone:'', email:'', message:''};//1
    this.getinquiry();
    this.feedbackdetails={id: -1, fname:'', femail:'', fsubject:'', fmessage:''};
    this.getfeedback();
  }

  ngOnInit() {
    this.uname=this.Cookie.get('uname')
    this.customerForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      phonenumber: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),

    });

    this.customerfeedbackForm = new FormGroup({
      fname: new FormControl(null, Validators.required),
      femail: new FormControl(null, Validators.required),
      fsubject: new FormControl(null,Validators.required),
      fmessage: new FormControl(null, Validators.required),

    });

  }
  get name() { return this.customerForm.get('name'); }

  get email() { return this.customerForm.get('email'); }
  get phonenumber() { return this.customerForm.get('phonenumber'); }

  get message() { return this.customerForm.get('message'); }
  get fname() { return this.customerfeedbackForm.get('fname'); }

  get femail() { return this.customerfeedbackForm.get('femail'); }

  get fsubject() { return this.customerfeedbackForm.get('fsubject');}
  get fmessage() { return this.customerfeedbackForm.get('fmessage'); }
  getinquiry(){
    this.apiService.getinquiry().subscribe(data => (this.inquiry = data));
  }
  createinquiry(){
    this.apiService.addinquiry(this.inquirydetails,this.uname).subscribe(
      data => {
        this.getinquiry();
        this.toast.success("Your inquiry has been raised as a ticket, You'll be contacted by one of the representatives soon! Thank you.","Success",{
          easing: 'ease-in',
          timeOut: 7000,
          progressAnimation:'decreasing',
          progressBar: true,
          tapToDismiss:true,
        });
      },
      error => {
        this.toast.error("You must be logged in to raise a inquiry, Please Log In. Thank you!","Login required",{
          easing: 'ease-in',
          timeOut: 5000,
          progressAnimation:'decreasing',
          progressBar: true,
          tapToDismiss:true,
        });
      }
      );
  }

  getfeedback(){
    this.apiService.getfeedback().subscribe(
      data => {
         this.feedback = data;
         
        },
        error =>
        {
          console.log("OOps, Error");
        }
        );
  }
  createfeedback(){
    this.apiService.addfeedback(this.feedbackdetails,this.uname).subscribe(
      data => {
        this.getfeedback();
        this.toast.success("Thank you for your feedback. We'll be working our best to get the best to you.","Thank you!",{
          easing: 'ease-in',
          timeOut: 7000,
          progressAnimation:'decreasing',
          progressBar: true,
          tapToDismiss:true,
        });
    },
    
    error=> {
      this.toast.error("You must be logged in to provide feedback, Apologies!. Have a good day.","Login required",{
        easing: 'ease-in',
        timeOut: 6000,
        progressAnimation:'decreasing',
        progressBar: true,
        tapToDismiss:true,
      });
    });
  }
}
