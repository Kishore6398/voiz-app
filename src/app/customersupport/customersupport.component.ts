import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-customersupport',
  templateUrl: './customersupport.component.html',
  styleUrls: ['./customersupport.component.scss']
})
export class CustomersupportComponent implements OnInit {
  customerForm: FormGroup;
  customerfeedbackForm: FormGroup;

  constructor(private fb: FormBuilder) { }

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
      fmessage: new FormControl(null, Validators.required),

    });

  }
  get name() { return this.customerForm.get('name'); }

  get email() { return this.customerForm.get('email'); }
  get phonenumber() { return this.customerForm.get('phonenumber'); }

  get message() { return this.customerForm.get('message'); }
  get fname() { return this.customerfeedbackForm.get('fname'); }

  get femail() { return this.customerfeedbackForm.get('femail'); }


  get fmessage() { return this.customerfeedbackForm.get('fmessage'); }
}
