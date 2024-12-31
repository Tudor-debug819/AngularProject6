import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(value: string[] | number[], direction: 'asc' | 'desc' = 'asc') {
    const sorted = [...value];
    sorted.sort();

  }

}
