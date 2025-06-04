import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  quizzes = [
    {
      id: 1,
      name: 'Allgemeinwissen',
      description:
        'Teste dein Wissen aus verschiedenen Bereichen wie Geografie, Geschichte und Wissenschaft.',
    },
    {
      id: 2,
      name: 'Informatik',
      description: 'Beantworte Fragen rund um Informatik, Programmierung, Netzwerke und mehr.',
    },
    {
      id: 3,
      name: 'Fortgeschrittene Informatik',
      description: 'Herausfordernde Fragen zu Informatik, Programmierung und Netzwerken.',
    },
  ];

  private _router: Router = inject(Router);

  starteQuiz(id: number) {
    this._router.navigate(['/quiz', id]);
  }
}
