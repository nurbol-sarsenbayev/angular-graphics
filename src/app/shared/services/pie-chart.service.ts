import { Injectable } from '@angular/core';

@Injectable()
export class PieChartService {

  constructor() { }

  dashArray(radius: number, percent: number) {
    const length = 2 * Math.PI * radius;
    const x = length * Math.min(100, percent) / 100;
    const y = length - x;
    return x + ' ' + y;
  }

  offset(index: number, items: any[]) {
    let previousPercents = 0;
    for (let i = 0; i < index; i++) {
      previousPercents += items[i].percent;
    }
    return 'rotate(' + this.getAngle(previousPercents) + ')';
  }

  getAngle(percent: number) {
    return percent * 360 / 100;
  }

  rotate(angle: number) {
    return 'rotate(' + angle + ')';
  }

}
