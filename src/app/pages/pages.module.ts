import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartComponent} from "./chart/chart.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProgressComponent} from "./progress/progress.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ComponentsModule} from "../components/components.module";
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    ChartComponent,
    DashboardComponent,
    ProgressComponent,
    AccountSettingsComponent,
    PromisesComponent,
    RxjsComponent,
    ProfileComponent,
  ],
    imports: [
        CommonModule,
        FormsModule,
        ComponentsModule,
        ReactiveFormsModule,
    ],
  exports: [
    ChartComponent,
    DashboardComponent,
    ProgressComponent
  ]
})
export class PagesModule {
}
