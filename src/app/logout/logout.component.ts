import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private Cookie: CookieService) { }

  ngOnInit() {
    this.onLogout();
  }

    onLogout() {
      this.Cookie.delete('usr_token');
      this.Cookie.delete('csrftoken');
      this.Cookie.delete('session');
      // this.Cookie.deleteAll('/','http://localhost:4200');
    }
}
