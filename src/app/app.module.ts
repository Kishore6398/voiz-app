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
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShopComponent } from './shop/shop.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { PaybillComponent } from './paybill/paybill.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { PaymentComponent } from './payment/payment.component';
import { PrepaidrechargeComponent } from './prepaidrecharge/prepaidrecharge.component';
import { DongleComponent } from './dongle/dongle.component';
import { Pack3Component } from './pack3/pack3.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { LoginService } from './login.service';
import { NewconnectionComponent } from './newconnection/newconnection.component';
import { DisplayComponent } from './display/display.component';
import { Submit1Component } from './submit1/submit1.component';
import { Submit2Component } from './submit2/submit2.component';
import { Submit3Component } from './submit3/submit3.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {CookieService} from 'ngx-cookie-service';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ShopComponent,
    CustomersupportComponent,
    PaybillComponent,
    NavbarComponent,
    PaymentComponent,
    PrepaidrechargeComponent,
    DongleComponent,
    Pack3Component,
    NewconnectionComponent,
    DisplayComponent,
    Submit1Component,
    Submit2Component,
    Submit3Component,
    ForgotpasswordComponent,
    PagenotfoundComponent,
    LogoutComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [
    CommonService,
    LoginService,
    ApiService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
