import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dongle',
  templateUrl: './dongle.component.html',
  styleUrls: ['./dongle.component.scss'],
  providers: [ApiService]

})
export class DongleComponent implements OnInit {
  dongle1Form: FormGroup;
  dongle2Form: FormGroup;
  form3 = [];
  form3details;
  constructor(private fb: FormBuilder,private apiService: ApiService ) {
    this.form3details = { id: -1, name: '', email: '', mobile: '', address: '',city:'',pincode:'' };//1
    this.getform3();
   }

 ngOnInit() {
  this.dongle1Form = new FormGroup({
    nameInput: new FormControl(null, Validators.required),
    emailInput: new FormControl(null, Validators.required),
    mobileInput: new FormControl(null, Validators.required),
    addressInput: new FormControl(null, Validators.required),
    cityInput: new FormControl(null, Validators.required),
    pincodeInput: new FormControl(null, Validators.required),
  });
     this.dongle2Form = new FormGroup({
       numberInput: new FormControl(null,Validators.required),
     });
     console.log(this.dongle1Form);
     
}
get nameInput() { return this.dongle1Form.get('nameInput'); }
  get emailInput() { return this.dongle1Form.get('emailInput'); }
  get mobileInput() { return this.dongle1Form.get('mobileInput'); }
  get addressInput() { return this.dongle1Form.get('addressInput'); }
  get cityInput() { return this.dongle1Form.get('cityInput'); }
  get pincodeInput() { return this.dongle1Form.get('pincodeInput'); }
get numberInput() { return this.dongle2Form.get('numberInput'); }

getform3() {
  this.apiService.getform3().subscribe(data => (this.form3 = data));
}
createform3() {
  this.apiService.addform3(this.form3details).subscribe(data => this.getform3());
}
}