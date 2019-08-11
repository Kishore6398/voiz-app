import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pack3',
  templateUrl: './pack3.component.html',
  styleUrls: ['./pack3.component.scss'],
  providers: [ApiService]
})
export class Pack3Component implements OnInit {
  dongle=[];
  constructor(private apiService:ApiService) { 
    
    this.getDongle();//2
    
  }
  ngOnInit() {
  } 

  getDongle = () => {
   this.apiService.getDongle().subscribe(data => (this.dongle = data));
  }
}

