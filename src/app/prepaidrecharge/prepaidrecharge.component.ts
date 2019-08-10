import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-prepaidrecharge',
  templateUrl: './prepaidrecharge.component.html',
  styleUrls: ['./prepaidrecharge.component.scss'],
  providers: [ApiService]
})
export class PrepaidrechargeComponent implements OnInit {
  plans=[];
  prepaidrechargeForm: FormGroup;
  constructor(private fb: FormBuilder,private apiService:ApiService) {
    this.getPlans();
   }

 ngOnInit() {
     this.prepaidrechargeForm = new FormGroup({
       mobileInput: new FormControl(null,Validators.required),
       amountInput: new FormControl(null, Validators.required),       
     });
     
}
get amountInput() { return this.prepaidrechargeForm.get('amountInput'); }

get mobileInput() { return this.prepaidrechargeForm.get('mobileInput'); }

getPlans(){
  this.apiService.getPlans().subscribe(data => (this.plans = data));
}
}

