import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-submit2',
  templateUrl: './submit2.component.html',
  styleUrls: ['./submit2.component.scss']
})
export class Submit2Component implements OnInit {
  value:any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.value=this.data.value;

  }

}
