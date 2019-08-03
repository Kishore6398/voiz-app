import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  constructor(private fb: FormBuilder) {
   }

  ngOnInit() {
    this.login = new FormGroup({
      user: new FormControl(null, Validators.required),
      pass: new FormControl(null, Validators.required)
    });
  }

  get onBlur() { return this.login.get('onBlur'); }
}
