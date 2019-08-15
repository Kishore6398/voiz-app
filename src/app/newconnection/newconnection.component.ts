import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-newconnection',
  templateUrl: './newconnection.component.html',
  styleUrls: ['./newconnection.component.scss'],
  providers: [ApiService]


})
export class NewconnectionComponent implements OnInit,OnDestroy {
  prepaidForm: FormGroup;
  postpaidForm: FormGroup;
  upgradeForm: FormGroup;
  portableForm: FormGroup;
  uname:any;
 number:any;
  form1 = [];
  form1details;
  form2 = [];
  form2details;
  form4 = [];
  form4details;
  form5 = [];
  form5details;
  value:any;
  constructor(private fb: FormBuilder,private apiService: ApiService, private data: DataService ) { 
  this.form1details = { id: -1, name: '', email: '', mobile: '', address: '',city:'',pincode:'' };//1
  this.getform1();
  this.form2details = { id: -1, name: '', email: '', mobile: '', address: '',city:'',pincode:'' };//1
  this.getform2();
  this.form4details = { id: -1, name: '', email: '', mobile: '', address: '',city: '',pincode: '' ,newmob: ''};//1
  this.getform4();
  this.form5details = { id: -1, name: '', email: '', mobile: '', address: '',city: '',pincode: '' ,newmob: ''};//1
  this.getform5();
  }
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
    this.upgradeForm = new FormGroup({
      anameInput: new FormControl(null, Validators.required),
      aemailInput: new FormControl(null, Validators.required),
      amobileInput: new FormControl(null, Validators.required),
      aaddressInput: new FormControl(null, Validators.required),
      acityInput: new FormControl(null, Validators.required),
      apincodeInput: new FormControl(null, Validators.required),
      anewmobInput: new FormControl(null, Validators.required),
    });
    this.portableForm = new FormGroup({
      bnameInput: new FormControl(null, Validators.required),
      bemailInput: new FormControl(null, Validators.required),
      bmobileInput: new FormControl(null, Validators.required),
      baddressInput: new FormControl(null, Validators.required),
      bcityInput: new FormControl(null, Validators.required),
      bpincodeInput: new FormControl(null, Validators.required),
      bnewmobInput: new FormControl(null, Validators.required),
    });
    this.uname=this.data.uname;
  }
  ngOnDestroy() {
    this.data.number = this.number;
    this.data.value=this.value;
  }
  randomvalue(min,max)
  {
    this.value=Math.floor(Math.random()*(max-min+1)+min);
    

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

  get anameInput() { return this.upgradeForm.get('anameInput'); }
  get aemailInput() { return this.upgradeForm.get('aemailInput'); }
  get amobileInput() { return this.upgradeForm.get('amobileInput'); }
  get aaddressInput() { return this.upgradeForm.get('aaddressInput'); }
  get acityInput() { return this.upgradeForm.get('acityInput'); }
  get apincodeInput() { return this.upgradeForm.get('apincodeInput'); }
  get anewmobInput() { return this.upgradeForm.get('anewmobInput'); }

  get bnameInput() { return this.portableForm.get('bnameInput'); }
  get bemailInput() { return this.portableForm.get('bemailInput'); }
  get bmobileInput() { return this.portableForm.get('bmobileInput'); }
  get baddressInput() { return this.portableForm.get('baddressInput'); }
  get bcityInput() { return this.portableForm.get('bcityInput'); }
  get bpincodeInput() { return this.portableForm.get('bpincodeInput'); }
  get bnewmobInput() { return this.portableForm.get('bnewmobInput'); }

  


  getform1() {
    this.apiService.getform1().subscribe(data => (this.form1 = data));
  }
  createform1() {


    this.apiService.addform1(this.form1details,this.value,this.uname).subscribe(data => this.getform1());

  }
  getform2() {
    this.apiService.getform2().subscribe(data => (this.form2 = data));
  }
  createform2() {

    

    this.apiService.addform2(this.form2details,this.value,this.uname).subscribe(data => this.getform2());
  }
  getform4() {
    this.apiService.getform4().subscribe(data => (this.form4 = data));
  }
  createform4() {
    this.apiService.addform4(this.form4details,this.uname).subscribe(data => this.getform4());
  }
  getform5() {
    this.apiService.getform5().subscribe(data => (this.form5 = data));
  }
  createform5() {
    this.apiService.addform5(this.form5details,this.uname).subscribe(data => this.getform5());

  }
}
