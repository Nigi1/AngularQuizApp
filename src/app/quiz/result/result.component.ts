import { Component, computed, inject, Signal, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { AnswersPipe } from '../answers.pipe';
import { Result } from '../quiz.model';

@Component({
  selector: 'app-result',
  imports: [AnswersPipe],
  standalone: true,
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss',
})
export class ResultComponent {
  result: WritableSignal<Result> = signal({ total: 0, correct: 0 });
  hideResult: boolean = true;
  private _router: Router = inject(Router);
  private _quizId: number = 0;

  constructor() {
    const nav = this._router.getCurrentNavigation();
    if (nav?.extras.state) {
      this.result.set(nav?.extras.state['result'] as Result);
      this._quizId = nav?.extras.state['quizId'];
    } else {
      this.navigateToStart();
    }
  }

  readonly resultMessage: Signal<string> = computed(() => {
    const percentage: number = this.result().correct / this.result().total;

    if (percentage === 1) {
      return 'Perfektion erreicht – Gratulation!';
    } else if (percentage >= 0.75) {
      return 'Stark! Fast perfekt!';
    } else if (percentage >= 0.5) {
      return 'Solide Leistung – du bist auf dem richtigen Weg!';
    } else if (percentage >= 0.25) {
      return 'Guter Ansatz! Da steckt Potenzial drin.';
    } else {
      return 'Noch kein Volltreffer – aber du hast den ersten Schritt gemacht!';
    }
  });

  navigateToStart(): void {
    this._router.navigate(['']);
  }

  retryQuiz(): void {
    this._router.navigate(['quiz', this._quizId]);
  }

  getAnswers(answers: string | string[]): string {
    if (Array.isArray(answers)) {
      return answers.join(', ');
    } else {
      return answers;
    }
  }
}
