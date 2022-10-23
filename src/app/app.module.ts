import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './components/pages/dashboard-page/dashboard-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuestionPageComponent } from './components/pages/question-page/question-page.component';
import { HouseholdQuestionsComponent } from './components/pages/question-page/questions/household-questions/household-questions.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    NavbarComponent,
    QuestionPageComponent,
    HouseholdQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
