import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartComponent} from "./chart/chart.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProgressComponent} from "./progress/progress.component";
import {FormsModule} from "@angular/forms";
import {ComponentsModule} from "../components/components.module";
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
  declarations: [
    ChartComponent,
    DashboardComponent,
    ProgressComponent,
    AccountSettingsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
  ],
  exports: [
    ChartComponent,
    DashboardComponent,
    ProgressComponent
  ]
})
export class PagesModule {
}
