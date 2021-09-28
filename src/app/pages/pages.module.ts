import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartComponent} from "./chart/chart.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProgressComponent} from "./progress/progress.component";


@NgModule({
  declarations: [
    ChartComponent,
    DashboardComponent,
    ProgressComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChartComponent,
    DashboardComponent,
    ProgressComponent
  ]
})
export class PagesModule {
}
