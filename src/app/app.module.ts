import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from "./app-routing.module";
import {PagesModule} from "./pages/pages.module";
import {SharedModule} from "./shared/shared.module";
import {AuthModule} from "./auth/auth.module";

import {AppComponent} from './app.component';
import {MainComponent} from './pages/main.component';
import {NoPageFoundComponent} from "./no-page-found/no-page-found.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NoPageFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
