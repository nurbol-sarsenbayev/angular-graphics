import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { MapRegionComponent } from './components/map/map-region/map-region.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { PieChartService } from './services/pie-chart.service';
import { LabelPieChartComponent } from './components/label-pie-chart/label-pie-chart.component';
import { NumberFormatPipe } from './pipes/number-format.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MapComponent,
    MapRegionComponent,
    PieChartComponent,
    LabelPieChartComponent,
    NumberFormatPipe
  ],
  exports: [
    MapComponent,
    PieChartComponent,
    LabelPieChartComponent,
    NumberFormatPipe
  ],
  providers: [PieChartService]
})
export class SharedModule { }
