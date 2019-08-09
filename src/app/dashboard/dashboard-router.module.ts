import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardResolver } from './dashboard-resolver.service';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  {
    path: ':username',
    component: DashboardComponent,
    resolve: {
      profile: DashboardResolver
     },
    children: [
      {
        path: '',
        component: DashboardComponent
      }
      // {
      //   path: 'profile',
      //   component: ProfileFavoritesComponent
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouterModule {}
