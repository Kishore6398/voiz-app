import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { NoAuthGuard } from './no-auth-guard.service';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

const routes: Routes = [
  {
    path: 'login/',
    component: LoginComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'register/',
    component: SignupComponent,
    canActivate: [NoAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
