import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberComponent } from './input-number/input-number.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    InputNumberComponent
  ],
  exports: [
    InputNumberComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
