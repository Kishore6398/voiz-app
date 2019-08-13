import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pack3',
  templateUrl: './pack3.component.html',
  styleUrls: ['./pack3.component.scss'],
  providers: [ApiService]
})
export class Pack3Component implements OnInit, OnDestroy {
  dongle = [];
  dongledata: any;
  amount: any;
  pid: any;

  constructor(private apiService: ApiService, private data: DataService) {

    this.getDongle();//2

  }
  ngOnInit() {
  }
  ngOnDestroy() {
    this.data.amount = this.amount;
    this.data.pid = this.dongledata;
  }
  getDongle = () => {
    this.apiService.getDongle().subscribe(data => (this.dongle = data));
  }
  amt(amount, data) {
    this.amount = amount;
    this.dongledata = data;
  }
}

