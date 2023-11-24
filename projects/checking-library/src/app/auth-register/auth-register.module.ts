import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRegisterRoutingModule } from './auth-register-routing.module';
import { AuthRegisterComponent } from './auth-register.component';
import { ButtonModule, ExpoDirectivesModule, InputModule } from 'projects/ngx-expo-components/src/public-api';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthRegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRegisterRoutingModule,
    InputModule,
    ButtonModule,
    ReactiveFormsModule,
    ExpoDirectivesModule
  ]
})
export class AuthRegisterModule { }
