import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './components/pages/dashboard-page/dashboard-page.component';
import { CategoryOverviewComponent } from './components/category-overview/category-overview.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    NavbarComponent,
    CategoryOverviewComponent,
    CategoryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
