import { 
	Directive,
	Input,
	OnInit,
	TemplateRef,
	ViewContainerRef } from '@angular/core';

import { UserService } from '../core';
@Directive({
  selector: '[appShowAuth]'
})
export class ShowAuthDirective implements OnInit {

  constructor(
  	private templateRef: TemplateRef<any>,
  	private userService: UserService,
  	private viewContainer: ViewConteinerRef
  	) { }
  condition: boolean;

  ngOnInit() {
  	this.userService.isAuthenticated.subscribe(
  		(isAuthenticated) => {
  			if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
  				this.viewContainer.createEmbeddedView(this.templateRef);
  			} else {
  				this.viewContainer.clear();
  			}
  		}
  	);
  }

  @Input() set appShowAuth(condition: boolean) {
  	this.condition = condition;
  }
}
