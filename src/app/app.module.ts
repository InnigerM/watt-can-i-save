import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { Step1Component } from './components/step1/step1.component';
import { DashboardPageComponent } from './components/pages/dashboard-page/dashboard-page.component';
import { CategoryOverviewComponent } from './components/category-overview/category-overview.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    StepTwoComponent,
    Step1Component,
    DashboardPageComponent,
    NavbarComponent,
    CategoryOverviewComponent,
    CategoryCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
