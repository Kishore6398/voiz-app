import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      // pass: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }
  get input() {
    return this.loginForm.get('max');
  }
}
