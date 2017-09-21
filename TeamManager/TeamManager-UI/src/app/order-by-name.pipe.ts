import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByName'
})
export class OrderByNamePipe implements PipeTransform {

  transform(array: any, args?: any): any {
    if (array) {
      array.sort((a: any, b: any) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    return array;
  }

}
