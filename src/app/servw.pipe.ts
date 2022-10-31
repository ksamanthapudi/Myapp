import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'servw'
})
export class ServwPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
