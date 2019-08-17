import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-paybill',
  templateUrl: './paybill.component.html',
  styleUrls: ['./paybill.component.scss']
})
export class PaybillComponent implements OnInit,OnDestroy {
amount:number;
mobile:any;
pid:any;
  paybillForm: FormGroup;
  constructor(private fb: FormBuilder,private data:DataService) {
   }

 ngOnInit() {
     this.paybillForm = new FormGroup({
       mobileInput: new FormControl(null,Validators.required),
       amountInput: new FormControl(null, Validators.required),       
     });
     console.log("paybillcomp");
     
}
ngOnDestroy(){
  this.data.amount = this.amount;
  this.data.mobile=this.mobile;
  this.data.pid="postpaid";
  console.log(this.mobile);
     console.log(this.amount);
     console.log(this.pid);
}

get amountInput() { return this.paybillForm.get('amountInput'); }

get mobileInput() { return this.paybillForm.get('mobileInput'); }


}
