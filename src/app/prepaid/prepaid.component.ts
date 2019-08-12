import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-prepaid',
  templateUrl: './prepaid.component.html',
  styleUrls: ['./prepaid.component.scss']
})
export class PrepaidComponent implements OnInit {
  prepaidForm: FormGroup;
  constructor(private fb: FormBuilder) {
   }

 ngOnInit() {
     this.prepaidForm = new FormGroup({
       nameInput: new FormControl(null,Validators.required),
       emailInput: new FormControl(null, Validators.required),  
       mobileInput: new FormControl(null,Validators.required),
       addressInput: new FormControl(null,Validators.required),
       cityInput: new FormControl(null,Validators.required),
       pincodeInput: new FormControl(null,Validators.required),     
     });
     
}
get nameInput() { return this.prepaidForm.get('nameInput'); }
get emailInput() { return this.prepaidForm.get('emailInput'); }
get mobileInput() { return this.prepaidForm.get('mobileInput'); }
get addressInput() { return this.prepaidForm.get('addressInput'); }
get cityInput() { return this.prepaidForm.get('cityInput'); }
get pincodeInput() { return this.prepaidForm.get('pincodeInput'); }


}
