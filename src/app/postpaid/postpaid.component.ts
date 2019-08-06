import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-postpaid',
  templateUrl: './postpaid.component.html',
  styleUrls: ['./postpaid.component.scss']
})
export class PostpaidComponent implements OnInit {
  postpaidForm: FormGroup;
  constructor(private fb: FormBuilder) {
   }

 ngOnInit() {
     this.postpaidForm = new FormGroup({
       nameInput: new FormControl(null,Validators.required),
       emailInput: new FormControl(null, Validators.required),  
       mobileInput: new FormControl(null,Validators.required),
       addressInput: new FormControl(null,Validators.required),
       cityInput: new FormControl(null,Validators.required),
       pincodeInput: new FormControl(null,Validators.required),     
     });
     
}
get nameInput() { return this.postpaidForm.get('nameInput'); }
get emailInput() { return this.postpaidForm.get('emailInput'); }
get mobileInput() { return this.postpaidForm.get('mobileInput'); }
get addressInput() { return this.postpaidForm.get('addressInput'); }
get cityInput() { return this.postpaidForm.get('cityInput'); }
get pincodeInput() { return this.postpaidForm.get('pincodeInput'); }


}
