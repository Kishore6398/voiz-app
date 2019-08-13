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
  constructor(private apiService:ApiService) {
    this.getplans();
   }

  ngOnInit() {
  }
  getplans(){
    this.apiService.getPlans().subscribe(data => (this.plans = data));
  }
}
