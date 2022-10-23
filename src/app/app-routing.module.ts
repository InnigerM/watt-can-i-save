import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {DashboardPageComponent} from "./components/pages/dashboard-page/dashboard-page.component";
import {QuestionPageComponent} from "./components/pages/question-page/question-page.component";

const routes: Routes = [
  {
    // Initial questions path
    path: '',
    component: AppComponent,
  },
  {
    // TODO: insert categories screen here
    path: 'categories',
    component: AppComponent,
  },
  {
    // TODO: insert challenges overview screen here
    path: 'categories/:category',
    component: AppComponent,
  },
  {
    path: 'categories/:category/questions',
    component: QuestionPageComponent,
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
