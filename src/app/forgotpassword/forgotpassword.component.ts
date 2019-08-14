import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private fb: FormBuilder) { 
   
  }
  registerForm: FormGroup;
 
  ngOnInit() {
    this.registerForm = new FormGroup({
      emailInput: new FormControl(null, [Validators.required, Validators.email]),
      mobileInput: new FormControl(null, Validators.required)
    });
  }
  get emailInput() { return this.registerForm.get('emailInput'); }
  get mobileInput() { return this.registerForm.get('mobileInput'); }

  alertmsg()
  {
    alert("Link has been sent to your mail id");
  }
}
