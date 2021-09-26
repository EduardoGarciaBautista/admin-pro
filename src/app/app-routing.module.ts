import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {ProgressComponent} from "./pages/progress/progress.component";
import {ChartComponent} from "./pages/chart/chart.component";
import {NpPageFoundComponent} from "./pages/np-page-found/np-page-found.component";
import {MainComponent} from "./pages/main.component";

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'chart', component: ChartComponent},
      // Full example localhost:4200 or localhost:4200/
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  // Route for any other route
  {path: '**', component: NpPageFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}
