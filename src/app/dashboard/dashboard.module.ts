import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardResolver } from './dashboard-resolver.service';
import { DashboardRouterModule } from './dashboard-router.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
  	DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRouterModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
  DashboardResolver
  ]
})
export class DashboardModule { }
