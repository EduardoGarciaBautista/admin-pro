import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {NoPageFoundComponent} from "./no-page-found/no-page-found.component";
import {PagesRoutingModule} from "./pages/pages-routing.module";
import {AuthRoutingModule} from "./auth/auth-routing.module";

const routes: Routes = [
  // Full example localhost:4200 or localhost:4200/
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  // Route for any other route
  {path: '**', component: NoPageFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}
