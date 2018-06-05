import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { MapRegionComponent } from './components/map/map-region/map-region.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { PieChartService } from './services/pie-chart.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MapComponent,
    MapRegionComponent,
    PieChartComponent
  ],
  exports: [
    MapComponent,
    PieChartComponent
  ],
  providers: [PieChartService]
})
export class SharedModule { }
