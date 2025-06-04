import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'answers',
  standalone: true,
})
export class AnswersPipe implements PipeTransform {
  transform(value: string | string[]): string {
    if (Array.isArray(value)) {
      return value.join(', ');
    } else {
      return value;
    }
  }
}
