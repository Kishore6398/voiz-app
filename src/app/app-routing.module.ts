import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { RechargeComponent } from './recharge/recharge.component';
import { HomeComponent } from './home/home.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { BroadbandComponent } from './broadband/broadband.component';
import { PaybillComponent } from './paybill/paybill.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { PrepaidrechargeComponent } from './prepaidrecharge/prepaidrecharge.component';
import { FaqComponent } from './faq/faq.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {path: 'signup', component : SignupComponent},
  {path: 'login', component : LoginComponent},
  {path: 'shop', component : ShopComponent},
  {path: 'customersupport', component : CustomersupportComponent},
  {path: 'recharge', component : RechargeComponent},
  {path: 'home', component : HomeComponent},
  {path: 'prepaid', component : PrepaidComponent},
  {path: 'postpaid', component : PostpaidComponent},
  {path: 'broadband', component : BroadbandComponent},
  {path: 'paybill', component : PaybillComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'signup', component : SignupComponent},
  {path: 'payment', component : PaymentComponent},
  {path: 'prepaidrecharge', component : PrepaidrechargeComponent},
  {path: 'faq', component : FaqComponent},
  {path: 'feedback', component : FeedbackComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
