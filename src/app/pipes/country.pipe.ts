import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {

  transform(data: any[], search: string): any {
    return data.filter(item => item.name.toLowerCase().indexOf(search) !== -1);
  }

}
