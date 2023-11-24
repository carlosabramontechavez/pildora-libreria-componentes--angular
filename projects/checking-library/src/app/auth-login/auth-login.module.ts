import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthLoginRoutingModule } from './auth-login-routing.module';
import { AuthLoginComponent } from './auth-login.component'; 
import { ButtonModule, InputModule, ExpoDirectivesModule } from 'projects/ngx-expo-components/src/public-api';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthLoginComponent
  ],
  imports: [
    CommonModule,
    AuthLoginRoutingModule,
    ButtonModule,
    InputModule,
    ReactiveFormsModule,
    ExpoDirectivesModule
  ]
})
export class AuthLoginModule { }
