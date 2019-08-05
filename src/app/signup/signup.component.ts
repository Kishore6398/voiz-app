import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  registerForm: FormGroup;
  ngOnInit() {
  this.registerForm = new FormGroup({
  	emailInput : new FormControl(null, [Validators.required, Validators.email]),
  	mobileInput: new FormControl(null, Validators.required),
  	passwordInput: new FormControl(null, Validators.required),
  	repasswordInput: new FormControl(null, Validators.required),
  });
  //console.log(this.registerForm);
  }

  get emailInput() { return this.registerForm.get('emailInput'); }
  get mobileInput() { return this.registerForm.get('mobileInput'); }
  get passwordInput() { return this.registerForm.get('passwordInput'); }
  get repasswordInput() { return this.registerForm.get('repasswordInput') }
}
