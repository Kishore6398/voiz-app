import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-prepaidrecharge',
  templateUrl: './prepaidrecharge.component.html',
  styleUrls: ['./prepaidrecharge.component.scss']
})
export class PrepaidrechargeComponent implements OnInit {
  prepaidrechargeForm: FormGroup;
  constructor(private fb: FormBuilder) {
   }

 ngOnInit() {
     this.prepaidrechargeForm = new FormGroup({
       mobileInput: new FormControl(null,Validators.required),
       amountInput: new FormControl(null, Validators.required),       
     });
     
}
get amountInput() { return this.prepaidrechargeForm.get('amountInput'); }

get mobileInput() { return this.prepaidrechargeForm.get('mobileInput'); }


}

