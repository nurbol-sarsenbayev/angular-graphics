import { Component, OnInit, Input } from '@angular/core';
import { PieChartService } from '../../services/pie-chart.service';
import { LabelPieItem } from './label-pie-chart.models';

@Component({
  selector: 'app-label-pie-chart',
  templateUrl: './label-pie-chart.component.html',
  styleUrls: ['./label-pie-chart.component.scss'],
  providers: [PieChartService]
})
export class LabelPieChartComponent implements OnInit {

  @Input() value: number = null;
  @Input() name = 'АПР';

  @Input() items: LabelPieItem[] = [
    {
      percent: 13,
      label: 'Техника безопасности',
      color: '#FF7300',
      value: 17
    },
    {
      percent: 30,
      label: 'Строительный мусор',
      color: '#FF0000',
      value: 13
    },
    {
      percent: 57,
      label: 'Складирование материалов',
      color: '#910000',
      value: 2
    }
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
}
