import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { MapRegionComponent } from './map/map-region/map-region.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MapComponent,
    MapRegionComponent
  ],
  exports: [
    MapComponent
  ]
})
export class SharedModule { }
