import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-paybill',
  templateUrl: './paybill.component.html',
  styleUrls: ['./paybill.component.scss']
})
export class PaybillComponent implements OnInit {
  paybillForm: FormGroup;
  constructor(private fb: FormBuilder) {
   }

 ngOnInit() {
     this.paybillForm = new FormGroup({
       mobileInput: new FormControl(null,Validators.required),
       amountInput: new FormControl(null, Validators.required),       
     });
     
}
get amountInput() { return this.paybillForm.get('amountInput'); }

get mobileInput() { return this.paybillForm.get('mobileInput'); }


}
