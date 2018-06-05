import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './shared/components/map/map.component';
import { PieChartComponent } from './shared/components/pie-chart/pie-chart.component';
import { LabelPieChartComponent } from './shared/components/label-pie-chart/label-pie-chart.component';

const routes: Routes = [
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'pie-chart',
    component: PieChartComponent
  },
  {
    path: 'label-pie-chart',
    component: LabelPieChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
