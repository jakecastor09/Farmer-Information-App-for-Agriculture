/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Livestock } from './home.livestock.model';

@Injectable({
  providedIn: 'root',
})
export class HomeLivestockService {
  livestockColors = [
    { backgroundTextColor: '#DEA794', backgroundColor: '#F6EFEC' },
    { backgroundTextColor: '#C76D71', backgroundColor: '#FFFFFF' },
    { backgroundTextColor: '#E38550', backgroundColor: '#F8E2D5' },
  ];
  _livestockData: Livestock[] = [];
  constructor() {}

  getLivestockData() {
    return [...this._livestockData];
  }

  getLivestockColors() {
    return [...this.livestockColors];
  }
  getOneLivestockData(livestockId) {
    return {
      ...this._livestockData.find(
        (data) => 'livestock' + data.id === livestockId
      ),
    };
  }
}
