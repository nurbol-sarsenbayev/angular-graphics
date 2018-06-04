import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'g[app-map-region]',
  templateUrl: './map-region.component.html',
  styleUrls: ['./map-region.component.scss']
})
export class MapRegionComponent implements OnInit {

  @Input() data;
  @Input() text;

  constructor() { }

  ngOnInit() {
    console.log('data', this.data);
  }

}
