import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenat'
})
export class OrdenatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
