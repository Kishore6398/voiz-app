import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  uname:any;
  firstname:any;
  uemail:any;

  constructor(private data:DataService) { }

  ngOnInit() {
    this.uname=this.data.uname;
    this.firstname=this.data.firstname;
    this.uemail=this.data.uemail;

	  
  }

   
}
