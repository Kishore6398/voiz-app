import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { HomeComponent } from './home/home.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { PaybillComponent } from './paybill/paybill.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { PrepaidrechargeComponent } from './prepaidrecharge/prepaidrecharge.component';
import { DongleComponent } from './dongle/dongle.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'customersupport', component: CustomersupportComponent },
  { path: 'home', component: HomeComponent },
  { path: 'prepaid', component: PrepaidComponent },
  { path: 'postpaid', component: PostpaidComponent },
  { path: 'paybill', component: PaybillComponent },
  { path: 'dashboard', loadChildren : './dashboard/dashboard.module#DashboardModule' },
  { path: 'signup', component: SignupComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'prepaidrecharge', component: PrepaidrechargeComponent },
  { path: 'dongle', component: DongleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
