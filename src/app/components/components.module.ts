import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputNumberComponent} from './input-number/input-number.component';
import {FormsModule} from "@angular/forms";
import {DonutComponent} from './donut/donut.component';
import {ChartsModule} from 'ng2-charts';


@NgModule({
  declarations: [
    InputNumberComponent,
    DonutComponent
  ],
  exports: [
    InputNumberComponent,
    DonutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule {
}
