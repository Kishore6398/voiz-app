import { Component  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private router: Router) {
  	
  }
  fn() {
    var s=this.router.url.toString().split("/");
    if(s[1]=="")
    return true;
    else 
    return false;
  }
}
