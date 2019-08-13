import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class JwtService {
  constructor(private Cookie:CookieService) { }
  getToken(): String {
    return this.Cookie.get('usr_token')
  }

  saveToken(token: String) {
    window.localStorage['usr_token'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('usr_token');
  }

}
