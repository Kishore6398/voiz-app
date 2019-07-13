import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RechargeComponent } from './recharge/recharge.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { BroadbandComponent } from './broadband/broadband.component';
import { ShopComponent } from './shop/shop.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { PaybillComponent } from './paybill/paybill.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    RechargeComponent,
    PrepaidComponent,
    PostpaidComponent,
    BroadbandComponent,
    ShopComponent,
    CustomersupportComponent,
    PaybillComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
