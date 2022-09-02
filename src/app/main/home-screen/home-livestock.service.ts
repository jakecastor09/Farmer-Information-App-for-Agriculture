/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeLivestockService {
  livestockColors = {
    pig: { backgroundTextColor: '#DEA794', backgroundColor: '#F6EFEC' },
    chicken: { backgroundTextColor: '#C76D71', backgroundColor: '#FFFFFF' },
    duck: { backgroundTextColor: '#E38550', backgroundColor: '#F8E2D5' },
  };

  livestockData;
  constructor() {}

  addLivestockData(data) {
    this.livestockData = data;
  }

  getLivestockData() {
    return this.livestockData;
  }
  getLivestockDataByName(livestockName) {
    return {
      ...this.livestockData.find((data) => data.name === livestockName),
    };
  }

  getLivestockColors() {
    return this.livestockColors;
  }
  getLivestockColor(name) {
    return this.livestockColors[name];
  }
  getOneLivestockData(livestockId) {
    return {
      ...this.livestockData.find(
        (data) => 'livestock' + data.id === livestockId
      ),
    };
  }
}
