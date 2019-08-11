import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonService } from './common.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { ShopComponent } from './shop/shop.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { PaybillComponent } from './paybill/paybill.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { PaymentComponent } from './payment/payment.component';
import { PrepaidrechargeComponent } from './prepaidrecharge/prepaidrecharge.component';
import { PlansComponent } from './plans/plans.component';
import { DongleComponent } from './dongle/dongle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    PrepaidComponent,
    PostpaidComponent,
    ShopComponent,
    CustomersupportComponent,
    PaybillComponent,
    NavbarComponent,
    PaymentComponent,
    PrepaidrechargeComponent,
    PlansComponent,
    DongleComponent,

  ],
  imports: [
    BrowserModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    SlimLoadingBarModule,

  ],
  providers: [
    CommonService,
    LoginService,ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
