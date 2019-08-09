import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardResolver } from './dashboard-resolver.service';
import { DashboardRouterModule } from './dashboard-router.module';
@NgModule({
  declarations: [
  	DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRouterModule
  ],
  providers: [
  DashboardResolver
  ]
})
export class DashboardModule { }
