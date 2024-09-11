import { Component, Input, OnInit } from '@angular/core';
import { HttpMyQuranLocationCollection } from 'src/app/data/repository/myquran/http-myquran.collection';

@Component({
  selector: 'app-feature-first-menu',
  templateUrl: './feature-first-menu.component.html',
  styleUrls: ['./feature-first-menu.component.scss'],
})
export class FeatureFirstMenuComponent implements OnInit {
  @Input() location: HttpMyQuranLocationCollection = {
    id: '',
    lokasi: '',
    status: '',
  };
  constructor() {}

  ngOnInit() {
    console.log(this.location);
  }
}
