import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-prepaidrecharge',
  templateUrl: './prepaidrecharge.component.html',
  styleUrls: ['./prepaidrecharge.component.scss'],
  providers: [ApiService]
})
export class PrepaidrechargeComponent implements OnInit,OnDestroy {
  plans=[];
  prepaidrechargeForm: FormGroup;
  amount:any;
  pid:number;
  constructor(private fb: FormBuilder,private apiService:ApiService, private data:DataService) {
    this.getPlans();
   }
   mobile:any;


 ngOnInit() {
     this.prepaidrechargeForm = new FormGroup({
       mobileInput: new FormControl(null,Validators.required),
       amountInput: new FormControl(null, Validators.required),       
     });
     this.mobile = this.data.mobile;
     console.log(this.pid)
     
}
ngOnDestroy()
  {
  this.data.amount = this.amount;
  this.data.mobile=this.mobile;
  this.data.pid=this.pid;
  }

 
get amountInput() { return this.prepaidrechargeForm.get('amountInput'); }

get mobileInput() { return this.prepaidrechargeForm.get('mobileInput'); }

getPlans(){
  this.apiService.getPlans().subscribe(data => (this.plans = data));
}
amt(x,pid){
  //console.log(x);
  this.prepaidrechargeForm.controls['amountInput'].setValue(x); 
  this.pid=pid;
  //console.log(y);
}
}

