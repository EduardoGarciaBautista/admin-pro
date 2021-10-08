import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProgressComponent} from "./progress/progress.component";
import {ChartComponent} from "./chart/chart.component";
import {AccountSettingsComponent} from "./account-settings/account-settings.component";

const routes: Routes = [
  {
    path: 'dashboard', component: MainComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'chart', component: ChartComponent},
      {path: 'account-settings', component: AccountSettingsComponent},
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class PagesRoutingModule {
}
