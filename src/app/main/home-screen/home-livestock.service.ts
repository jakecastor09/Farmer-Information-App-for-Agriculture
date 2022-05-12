/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeLivestockService {
  livestockColors = [
    { backgroundTextColor: '#DEA794', backgroundColor: '#F6EFEC' },
    { backgroundTextColor: '#C76D71', backgroundColor: '#FFFFFF' },
    { backgroundTextColor: '#E38550', backgroundColor: '#F8E2D5' },
  ];
  _livestockData;
  constructor() {
    fetch('../../../assets/model/livestockData.json')
      .then((res) => res.json())
      .then((data) => this.getFetchData(data));
  }

  getFetchData(data) {
    this._livestockData = data;
  }

  getLivestockData() {
    return this._livestockData;
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
