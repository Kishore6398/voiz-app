import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-newconnection',
  templateUrl: './newconnection.component.html',
  styleUrls: ['./newconnection.component.scss'],


})
export class NewconnectionComponent implements OnInit {
  prepaidForm: FormGroup;
  postpaidForm: FormGroup;

  constructor(private fb: FormBuilder, ) { }

  ngOnInit() {
    this.prepaidForm = new FormGroup({
      nameInput: new FormControl(null, Validators.required),
      emailInput: new FormControl(null, Validators.required),
      mobileInput: new FormControl(null, Validators.required),
      addressInput: new FormControl(null, Validators.required),
      cityInput: new FormControl(null, Validators.required),
      pincodeInput: new FormControl(null, Validators.required),
    });
    this.postpaidForm = new FormGroup({
      fnameInput: new FormControl(null, Validators.required),
      femailInput: new FormControl(null, Validators.required),
      fmobileInput: new FormControl(null, Validators.required),
      faddressInput: new FormControl(null, Validators.required),
      fcityInput: new FormControl(null, Validators.required),
      fpincodeInput: new FormControl(null, Validators.required),
    });
  }
  get nameInput() { return this.prepaidForm.get('nameInput'); }
  get emailInput() { return this.prepaidForm.get('emailInput'); }
  get mobileInput() { return this.prepaidForm.get('mobileInput'); }
  get addressInput() { return this.prepaidForm.get('addressInput'); }
  get cityInput() { return this.prepaidForm.get('cityInput'); }
  get pincodeInput() { return this.prepaidForm.get('pincodeInput'); }

  get fnameInput() { return this.postpaidForm.get('fnameInput'); }
  get femailInput() { return this.postpaidForm.get('femailInput'); }
  get fmobileInput() { return this.postpaidForm.get('fmobileInput'); }
  get faddressInput() { return this.postpaidForm.get('faddressInput'); }
  get fcityInput() { return this.postpaidForm.get('fcityInput'); }
  get fpincodeInput() { return this.postpaidForm.get('fpincodeInput'); }
}
