import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  mobile: any;
    constructor(private data:DataService) {  }
  
    ngOnInit() {
     
    }
    ngOnDestroy()
    {
    this.data.mobile = this.mobile;
    }
  }
