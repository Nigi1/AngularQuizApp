import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Answers, QuizForm, QuizQuestion, Result } from '../quiz.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent implements OnInit {
  quizForm!: FormGroup<QuizForm>;
  quizQuestion: QuizQuestion[] = [];
  private _quizService = inject(QuizService);
  private _router: Router = inject(Router);
  private _route: ActivatedRoute = inject(ActivatedRoute);
  private _quizId: number = 0;

  constructor() {
    this._route.params.pipe(take(1)).subscribe((params) => {
      this._quizId = params['id'];
    });
  }

  get answers(): FormArray {
    return this.quizForm.get('answers') as FormArray;
  }

  ngOnInit(): void {
    this.quizQuestion = this._quizService.getQuiz(this._quizId);
    this.quizForm = new FormGroup<QuizForm>({
      answers: new FormArray<FormControl<string | string[]>>(
        this.quizQuestion.map((q) =>
          q.multiAnswer
            ? new FormControl<string[]>([], {
                nonNullable: true,
                validators: [Validators.required],
              })
            : new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
        ),
      ),
    });
  }

  onCheckboxChange(event: Event, questionIndex: number) {
    const target = event.target as HTMLInputElement;
    const answerArray = this.answers;

    const selectedOptions: string[] = answerArray.at(questionIndex).value ?? [];

    if (target.checked) {
      selectedOptions.push(target.value);
    } else {
      const index = selectedOptions.indexOf(target.value);
      if (index >= 0) {
        selectedOptions.splice(index, 1);
      }
    }

    answerArray.at(questionIndex).setValue(selectedOptions);
  }

  onSubmit() {
    const answers: Answers = this.quizForm.value.answers!;
    const result: Result = this._quizService.evaluate(this._quizId, answers);
    this._router.navigate(['result'], {
      state: { result, quizId: this._quizId },
    });
  }

  navigateToStart(): void {
    this._router.navigate(['']);
  }
}
