import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { NoAuthGaurd } from './no-auth-gaurd.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
