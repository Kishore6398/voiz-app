import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-submit1',
  templateUrl: './submit1.component.html',
  styleUrls: ['./submit1.component.scss'],
  providers: [ApiService]

})
export class Submit1Component implements OnInit {
  
  constructor(private apiService: ApiService,) { 
  }
  
  ngOnInit() {
  }
}
