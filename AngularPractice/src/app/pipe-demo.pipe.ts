import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeDemo'
})
export class PipeDemoPipe implements PipeTransform {

  transform(firstName:string,lastName:string): any {
    return firstName +  " " + lastName;
  }

}
