import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  providers:[ApiService],
})
export class ShopComponent implements OnInit {
plans = [];
dongleplans=[];
  constructor(private apiService:ApiService) {
    this.getplans();
    this.getdongleplans();
   }

  ngOnInit() {
  }
  getplans(){
    this.apiService.getPlans().subscribe(data => (this.plans = data));
  }
  getdongleplans(){
    this.apiService.getDongle().subscribe(data=>(this.dongleplans = data));
  }
}
