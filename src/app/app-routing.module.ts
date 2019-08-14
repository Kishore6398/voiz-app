import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { HomeComponent } from './home/home.component';
import { PaybillComponent } from './paybill/paybill.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { PrepaidrechargeComponent } from './prepaidrecharge/prepaidrecharge.component';
import { DongleComponent } from './dongle/dongle.component';
import { Pack3Component } from './pack3/pack3.component';
import { NewconnectionComponent } from './newconnection/newconnection.component';
import { Submit1Component } from './submit1/submit1.component';
import { Submit2Component } from './submit2/submit2.component';
import { Submit3Component } from './submit3/submit3.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LogoutComponent } from './logout/logout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'customersupport', component: CustomersupportComponent },
  { path: 'home', component: HomeComponent },
  { path: 'paybill', component: PaybillComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'prepaidrecharge', component: PrepaidrechargeComponent },
  { path: 'dongle', component: DongleComponent },
  { path: 'pack3', component: Pack3Component },
  { path: 'connect', component: NewconnectionComponent },
  { path: 'submit1', component: Submit1Component },
  { path: 'submit2', component: Submit2Component },
  { path: 'submit3', component: Submit3Component },
  {path: 'forgot', component: ForgotpasswordComponent },
  {path:'logout',component:LogoutComponent},
 { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
