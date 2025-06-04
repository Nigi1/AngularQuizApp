import { FormArray, FormControl } from '@angular/forms';

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: string | string[];
  multiAnswer: boolean;
}

export interface Result {
  total: number;
  correct: number;
  answerSummary?: AnswerSummary[];
}

export interface AnswerSummary {
  question: string;
  correctAnswer: string | string[];
  userAnswer: string | string[];
  correct: boolean;
}

export interface QuizForm {
  answers: FormArray<FormControl<string | string[]>>;
}

export type Answers = Array<string | string[]>;
