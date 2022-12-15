import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conta'
})
export class ContaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
