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
    this.createForm();
   }

  ngOnInit() {

  }
  createForm() {
    this.loginForm = this.fb.group({
      username: ['', (Validators.required, Validators.pattern('[^ @]*@[^ @]*'))],
      pass: ['', (Validators.required, Validators.pattern('[0-9a-zA-Z]{8,16}'))]
    });
  }
}
