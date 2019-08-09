import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../core';
import { map, take } from 'rxjs/operators';

@Injectable()
export class NoAuthGaurdService {

  constructor(
  	private router: Router,
  	private userService: UserService
  	) { }

  canActivate(
  	route: ActivatedRouterSnapshot,
  	state: RouterStateSnapshot
  	): Observable<boolean> {
  	return this.userService.isAuhenticated.pipe(take(1),map(isAuth => !isAuth));
  }
}
