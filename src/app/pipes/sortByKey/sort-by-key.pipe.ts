import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByKey',
  standalone: true 
})
export class SortByKeyPipe implements PipeTransform {
  transform(value: any[], key: string, order: 'asc' | 'desc' = 'asc'): any[] {
    if (!value || !Array.isArray(value) || !key) {
      return value; 
    }

    return value.sort((a, b) => {
      if (a[key] < b[key]) {
        return order === 'asc' ? -1 : 1;
      } else if (a[key] > b[key]) {
        return order === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}
