import { Routes } from '@angular/router';
import { HomeComponent } from './quiz/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'quiz/:id',
    loadComponent: () => import('./quiz/quiz/quiz.component').then((m) => m.QuizComponent),
  },
  {
    path: 'result',
    loadComponent: () => import('./quiz/result/result.component').then((m) => m.ResultComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./quiz/home/home.component').then((m) => m.HomeComponent),
  },
];
