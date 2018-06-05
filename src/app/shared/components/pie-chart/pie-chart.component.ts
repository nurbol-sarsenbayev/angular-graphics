import { Component, OnInit, Input } from '@angular/core';
import { PieItem, PieOuterItem } from './pie-chart.models';
import { PieChartService } from '../../services/pie-chart.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  providers: [PieChartService]
})
export class PieChartComponent implements OnInit {

  @Input() value = '32';
  @Input() items: PieItem[] = [
    {
      color: '#217AD8',
      percent: 30
    },
    {
      color: '#7285A5',
      percent: 70
    },
  ];

  @Input() outerItems: PieOuterItem[] = [
    {
      color: '#078C09',
      percent: 65,
      opacity: 0.5,
      circle: {
        fill: '#312724',
        stroke: '#078C09'
      }
    },
    {
      color: '#078C09',
      percent: 25,
      opacity: 1,
      circle: {
        fill: '#078C09',
        stroke: '#000'
      }
    },
  ];

  constructor(private pieService: PieChartService) { }

  ngOnInit() {
  }

  dashArray(radius, percent) {
    return this.pieService.dashArray(radius, percent);
  }

  offset(index) {
    return this.pieService.offset(index, this.items);
  }

  getAngle(percent) {
    return this.pieService.getAngle(percent);
  }
}
