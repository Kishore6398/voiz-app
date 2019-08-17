import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import * as jsPDF from 'jspdf';
import {CookieService} from 'ngx-cookie-service';
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
  pid:any;
  uname:any;
  firstname:any;
  @ViewChild('content') content:ElementRef;
  public downloadpdf(){
    let doc= new jsPDF();
    let specialElementHandlers={
      '#editor': function(element,renderer){
        return true;
      }
    };
    let content=this.content.nativeElement;
    doc.fromHTML(content.innerHTML,15,15, {
      'width': 250,
      'elementHandlers':specialElementHandlers
    });

    doc.save('invoice.pdf');
  }


  constructor(private data:DataService,private Cookie:CookieService) { }

  ngOnInit() {
    this.amount=this.data.amount;
    this.mobile=this.data.mobile;
    this.paidby=this.data.paidby;
    this.rdate3=this.data.rdate3;
    this.pid=this.data.pid;
    this.uname=this.Cookie.get('uname');
    this.firstname=this.Cookie.get('firstname');
    console.log(this.uname);
    console.log(this.firstname);
    console.log("invoicee");
    console.log(this.paidby);
    this.value=Math.floor(Math.random()*(1000-1+1)+1);

  }
  //randomvalue(1,1000)
  //{
    

  //}
}