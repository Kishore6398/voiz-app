import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
   }

 ngOnInit() {
     this.loginForm = new FormGroup({
       mobileInput: new FormControl(null,Validators.required),
       passwordInput: new FormControl(null, Validators.required),       
     });
     console.log(this.loginForm.get('passwordInput'));
}
get passwordInput() { return this.loginForm.get('passwordInput'); }

get mobileInput() { return this.loginForm.get('mobileInput'); }
}
