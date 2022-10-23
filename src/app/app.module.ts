import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { Step1Component } from './components/step1/step1.component';
import { DashboardPageComponent } from './components/pages/dashboard-page/dashboard-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LightSwitchComponent } from './components/light-switch/light-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    StepTwoComponent,
    Step1Component,
    DashboardPageComponent,
    NavbarComponent,
    LightSwitchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
