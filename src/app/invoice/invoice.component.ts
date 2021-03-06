import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  amount:any;
  mobile:any;
  paidby:any;
  rdate3:any;
  value:any;
  @ViewChild('content') content:ElementRef;
  public downloadpdf(){
    let doc= new jsPDF();
    let specialElementHandlers={
      '#editor': function(element,renderer){
        return true;
      }
    };
    let content=this.content.nativeElement;
    doc.fromHTML(content.innerHTML,75,50, {
      'width': 190,
      'elementHandlers':specialElementHandlers
    });

    doc.save('test.pdf');
  }


  constructor(private data:DataService) { }

  ngOnInit() {
    this.amount=this.data.amount;
    this.mobile=this.data.mobile;
    this.paidby=this.data.paidby;
    this.rdate3=this.data.rdate3;
    console.log("invoicee");
    console.log(this.paidby);
    this.value=Math.floor(Math.random()*(1000-1+1)+1);

  }
  //randomvalue(1,1000)
  //{
    

  //}
}
