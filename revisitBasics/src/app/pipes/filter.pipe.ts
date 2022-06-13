import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false     //changing default nature, not a good practise!
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {

      if (item.status === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
