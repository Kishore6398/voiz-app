import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-submit1',
  templateUrl: './submit1.component.html',
  styleUrls: ['./submit1.component.scss'],
  providers: [ApiService]

})
export class Submit1Component implements OnInit {
  number:any;
  value:any;
  constructor(private apiService: ApiService,private data: DataService) { 
  }
  
  ngOnInit() {
    this.number=this.data.number;
    this.value=this.data.value;
  }
}
