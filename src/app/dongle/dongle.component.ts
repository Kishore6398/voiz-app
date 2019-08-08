import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dongle',
  templateUrl: './dongle.component.html',
  styleUrls: ['./dongle.component.scss']
})
export class DongleComponent implements OnInit {
  dongle2Form: FormGroup;
  constructor(private fb: FormBuilder) {
   }

 ngOnInit() {
     this.dongle2Form = new FormGroup({
       numberInput: new FormControl(null,Validators.required),
     });
     
     
}

get numberInput() { return this.dongle2Form.get('numberInput'); }


}