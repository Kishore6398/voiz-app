import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { SignupComponent } from '../signup/signup.component';
import { NoAuthGaurd } from './no-auth-gaurd.service';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NoAuthGaurd]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [NoAuthGaurd]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
