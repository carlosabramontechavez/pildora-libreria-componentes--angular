import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormDirective } from './reactive-form.directive';

@NgModule({
  declarations: [
    ReactiveFormDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ReactiveFormDirective
  ]
})
export class ExpoDirectivesModule { }
