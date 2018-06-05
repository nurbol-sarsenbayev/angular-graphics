import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  _regions = [
    {
      id: 1,
      title: 'Астана',
      value: 0,
      color: ''
    },
    {
      id: 2,
      title: 'Алматы',
      value: 0,
      color: ''
    },
    {
      id: 3,
      title: 'Акмолинская',
      value: 0,
      color: ''
    },
    {
      id: 4,
      title: 'Актюбинская',
      value: 0,
      color: ''
    },
    {
      id: 5,
      title: 'Алматинская',
      value: 0,
      color: ''
    },
    {
      id: 6,
      title: 'Атырауская',
      value: 0,
      color: ''
    },
    {
      id: 7,
      title: 'ЗКО',
      value: 0,
      color: ''
    },
    {
      id: 8,
      title: 'Жамбылская',
      value: 0,
      color: ''
    },
    {
      id: 9,
      title: 'Карагандинская',
      value: 0,
      color: ''
    },
    {
      id: 10,
      title: 'Костанайская',
      value: 0,
      color: ''
    },
    {
      id: 11,
      title: 'Кызылординская',
      value: 0,
      color: ''
    },
    {
      id: 12,
      title: 'Мангыстауская',
      value: 0,
      color: ''
    },
    {
      id: 13,
      title: 'ЮКО',
      value: 0,
      color: ''
    },
    {
      id: 14,
      title: 'Павлодарская',
      value: 0,
      color: ''
    },
    {
      id: 15,
      title: 'СКО',
      value: 0,
      color: ''
    },
    {
      id: 16,
      title: 'ВКО',
      value: 0,
      color: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
