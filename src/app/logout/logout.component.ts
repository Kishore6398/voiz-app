import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
  providers: [
    CookieService
  ]
})
export class LogoutComponent implements OnInit {

  constructor(private Cookie: CookieService) { }

  ngOnInit() {
    this.Cookie.delete('usr_token');
    this.Cookie.delete('csrftoken');
    this.Cookie.delete('session');
  }

}
