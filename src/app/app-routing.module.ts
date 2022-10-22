import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { DashboardPageComponent } from './components/pages/dashboard-page/dashboard-page.component';
import { Step1Component } from './components/step1/step1.component';

const routes: Routes = [
  {
    // Initial questions path
    path: '',
    component: Step1Component,
    pathMatch: 'full',
  },
  {
    // TODO: insert categories screen here
    path: 'categories',
    component: AppComponent,
  },
  {
    // TODO: insert challenges overview screen here
    path: 'categories/:category',
    component: ChallengesComponent,
  },
  {
    // TODO: insert challenge questions screen here
    path: 'categories/:category/challenges/questions/:id',
    component: AppComponent,
  },
  {
    // TODO: insert challenges detail screen here
    path: 'categories/:category/challenges/:id',
    component: AppComponent,
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
