import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [ApiService]
})
export class SignupComponent implements OnInit {
  login = [];
  logindetails;
  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.logindetails = { id: -1, username: '', phone: '', email: '', password: '' };//1
    this.getlogin();
  }
  registerForm: FormGroup;
  ngOnInit() {
    this.registerForm = new FormGroup({
      nameInput: new FormControl(null, Validators.required),
      emailInput: new FormControl(null, [Validators.required, Validators.email]),
      mobileInput: new FormControl(null, Validators.required),
      passwordInput: new FormControl(null, Validators.required),
      repasswordInput: new FormControl(null, Validators.required),
    });
    console.log(this.registerForm);
  }
  get nameInput() { return this.registerForm.get('nameInput'); }
  get emailInput() { return this.registerForm.get('emailInput'); }
  get mobileInput() { return this.registerForm.get('mobileInput'); }
  get passwordInput() { return this.registerForm.get('passwordInput'); }
  get repasswordInput() { return this.registerForm.get('repasswordInput') }
  getlogin() {
    this.apiService.getlogin().subscribe(data => (this.login = data));
  }
  createaccount() {
    this.apiService.addaccount(this.logindetails).subscribe(data => this.getlogin());
  }
}
