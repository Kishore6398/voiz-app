import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class JwtService {
  constructor(private Cookie:CookieService) { }
  getToken(): String {
    return this.Cookie.get('usr_token')
  }

  saveToken(token: String) {
    token = this.Cookie.get('usr_token')
  }

  destroyToken() {
    this.Cookie.delete('usr_token');
    this.Cookie.delete('csrftoken');
    this.Cookie.delete('session');
  }

}
