import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
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
  customerForm: FormGroup;
  customerfeedbackForm: FormGroup;
  constructor(private fb: FormBuilder,private apiService:ApiService, private router:Router) { 
    this.inquirydetails={id: -1, name:'', phone:'', email:'', message:''};//1
    this.getinquiry();
    this.feedbackdetails={id: -1, fname:'', femail:'', fsubject:'', fmessage:''};
    this.getfeedback();
  }

  ngOnInit() {
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
    this.apiService.addinquiry(this.inquirydetails).subscribe(data => {this.getinquiry();this.router.navigate(['/']);});
  }

  getfeedback(){
    this.apiService.getfeedback().subscribe(data => (this.feedback = data));
    
  }
  createfeedback(){
    this.apiService.addfeedback(this.feedbackdetails).subscribe(data => {this.getfeedback();
      this.router.navigate(['/']);
    });
  }
}
