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
import { ChallengesComponent } from './components/challenges/challenges.component';
import { ChallengesDetailComponent } from './components/challenges/challenges-detail/challenges-detail.component';
import { BottombarComponent } from './components/bottombar/bottombar.component';
import { QuestionPageComponent } from './components/pages/question-page/question-page.component';
import { HouseholdQuestionsComponent } from './components/pages/question-page/questions/household-questions/household-questions.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChallengesComponent,
    DashboardPageComponent,
    Step1Component,
    StepTwoComponent,
    DashboardPageComponent,
    NavbarComponent,
    CategoryOverviewComponent,
    CategoryCardComponent,
    ChallengesDetailComponent,
    BottombarComponent,
    NavbarComponent,
    QuestionPageComponent,
    HouseholdQuestionsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
