import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

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
    // TODO: insert dashboard screen here
    path: 'dashboard',
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
