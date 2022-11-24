import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ReisterationComponent } from './reisteration/reisteration.component';
import { NavbarComponent } from './navbar/navbar.component';
const myRoute:Routes=[
  {
    path:"/",
    component:DashboardComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"registration",
    component:ReisterationComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ReisterationComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
