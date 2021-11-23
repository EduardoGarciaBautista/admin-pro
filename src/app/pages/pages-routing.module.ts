import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {ChartComponent} from './chart/chart.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {PromisesComponent} from './promises/promises.component';
import {RxjsComponent} from './rxjs/rxjs.component';
import {AuthGuard} from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard', component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '', component: DashboardComponent, data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'progress', component: ProgressComponent, data: {
          title: 'Progress'
        }
      },
      {
        path: 'chart', component: ChartComponent, data: {
          title: 'Chart'
        }
      },
      {
        path: 'account-settings', component: AccountSettingsComponent, data: {
          title: 'Account settings'
        }
      },
      {
        path: 'promises', component: PromisesComponent, data: {
          title: 'Promises'
        }
      },
      {
        path: 'rxjs', component: RxjsComponent, data: {
          title: 'Rxjs'
        }
      },
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
