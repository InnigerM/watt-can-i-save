import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { DashboardPageComponent } from './components/pages/dashboard-page/dashboard-page.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { Step1Component } from './components/step1/step1.component';
import { CategoryOverviewComponent } from './components/category-overview/category-overview.component';
import { ChallengesDetailComponent } from './components/challenges/challenges-detail/challenges-detail.component';
import { LightSwitchComponent } from './components/light-switch/light-switch.component';

const routes: Routes = [
  {
    // Initial questions path
    path: '',
    component: Step1Component,
    pathMatch: 'full',
  },
  {
    path: 'rooms',
    component: StepTwoComponent,
  },
  {
    path: 'light-switch',
    component: LightSwitchComponent,
  },
  {
    path: 'categories',
    component: CategoryOverviewComponent,
  },
  {
    path: 'categories/:category',
    component: ChallengesComponent,
  },
  {
    // TODO: insert challenge questions screen here
    path: 'categories/:category/challenges/questions/:id',
    component: AppComponent,
  },
  {
    path: 'categories/:category/challenges/:id',
    component: ChallengesDetailComponent,
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
