import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { ApiService } from '../api.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  providers: [DatePipe]
})
export class PaymentComponent implements OnInit {
  rdate = new Date()
  rdate2 = Date.now()
  rdate3: any;
  payform: FormGroup;
  dpayform: FormGroup;
  ppayform: FormGroup;
  amount: any;
  mobile: any;
  pid: any;
  recharge = [];
  rechargedetails;

  constructor(private fb: FormBuilder, private data: DataService, private apiService: ApiService, private datepipe: DatePipe) {
    this.rechargedetails = { id: -1, mobile: '', amount: '' };//1
    this.getrecharge();
  }

  ngOnInit() {
    this.rdate3 = this.datepipe.transform(this.rdate2, 'dd-MM-yyyy')
    this.payform = new FormGroup({
      name: new FormControl(null, Validators.required),
      cardno: new FormControl(null, Validators.required),
      ccv: new FormControl(null, Validators.required),
      expyear: new FormControl(null, Validators.required),
      camt: new FormControl(null, Validators.required),
    });
    console.log(this.payform.get('name'));
    this.dpayform = new FormGroup({
      dname: new FormControl(null, Validators.required),
      dcardno: new FormControl(null, Validators.required),
      dccv: new FormControl(null, Validators.required),
      dexpyear: new FormControl(null, Validators.required),
      damt: new FormControl(null, Validators.required),
    });
    this.ppayform = new FormGroup({
      pnumber: new FormControl(null, Validators.required),
      amt: new FormControl(null, Validators.required),
    });
    this.amount = this.data.amount;
    this.mobile = this.data.mobile;
    this.pid = this.data.pid;

    //console.log(this.amount);
    //console.log(this.mobile);
    console.log(this.rdate2);
    console.log(this.rdate3);
    console.log(this.pid);
  }
  get name() { return this.payform.get('name'); }
  get cardno() { return this.payform.get('cardno'); }
  get ccv() { return this.payform.get('ccv'); }
  get expyear() { return this.payform.get('expyear'); }
  get camt() { return this.payform.get('camt'); }
  get dname() { return this.dpayform.get('dname'); }
  get dcardno() { return this.dpayform.get('dcardno'); }
  get dccv() { return this.dpayform.get('dccv'); }
  get dexpyear() { return this.dpayform.get('dexpyear'); }
  get damt() { return this.dpayform.get('damt'); }
  get pnumber() { return this.ppayform.get('pnumber'); }
  get amt() { return this.ppayform.get('amt'); }
  getrecharge() {
    this.apiService.getrecharge().subscribe(data => (this.recharge = data));
  }
  createrecharge() {
    console.log("payent")
    console.log(this.amount)
    console.log(this.mobile)
    console.log(this.pid)
    this.apiService.addrecharge(this.mobile, this.amount, this.rdate3, this.pid).subscribe(data => this.getrecharge());
    alert("Payment Successful")
  }
}