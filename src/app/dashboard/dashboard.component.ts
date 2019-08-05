import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  public chartType: string = 'doughnut';

  public CallDataset: Array<any> = [
    { data: [300, 120], label: 'My First dataset' }
  ];

  public CallLabel: Array<any> = ['Used','Remaining',];

public CallColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

   public CallOptions: any = {
    responsive: true
  };

  public CallClicked(e: any): void { }
  public CallHovered(e: any): void { }


   public DataDataset: Array<any> = [
    { data: [380, 10], label: 'Data Dataset' }
  ];

 public DataOptions: any = {
    responsive: true
  };
  public DataLabel: Array<any> = ['Used','Remaining',];

  public DataColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public DataClicked(e: any): void { }
  public DataHovered(e: any): void { }
  ngOnInit() {
  }

}
