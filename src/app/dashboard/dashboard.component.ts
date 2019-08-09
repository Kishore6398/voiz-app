import { Component, OnInit } from '@angular/core';
import { RoutingModule, Routes, ActivatedRoute } from '@angular/router';

import { User, UserService, Profile } from '../core';
import { concateMap, tap } from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
  	private route: ActivatedRoute,
  	private userService: UserService
  	) { }

  profile: Profile;
  currentUser: User;
  isUser: boolean;

  ngOnInit() {
  this.route.data.pipe(
  	concatMap((data: {profile: Profile}) =>{
  		this.profile = data.profile;
  		return this.userService.currentUser.pipe(tap(
  			(userData: User) => {
  				this.currentUser=userData;
  				this.isUser = (this.currentUser.username === this.profile.username);
  			}
  			));
  	})
  	).subscribe();
  }


}
