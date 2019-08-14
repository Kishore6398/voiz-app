import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private cookieService:CookieService) { }

  ngOnInit() {
    this.onLogout();
    }
    onLogout(){
    this.cookieService.delete('usr_token');
    }

}
