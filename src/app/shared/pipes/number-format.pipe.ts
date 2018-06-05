import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: any, splitter = ' ', digitsNumber = 0, defaultValue = '-'): any {
    if (value == null || value === undefined) {
      return defaultValue;
    }
    if (isNaN(value)) {
      return value;
    }
    value = Number.parseFloat(value);
    let str = value.toFixed(digitsNumber);
    str = str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1${splitter}`);
    str = str.replace('.', ',');
    return str;
  }
}
