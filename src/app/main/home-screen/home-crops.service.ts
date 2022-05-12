/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { Component, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeCropsService {
  cropsColors = {
    watermelon: {
      backgroundTextColor: '#3C800F',
      backgroundColor: '#E5F4DB',
    },
    banana: {
      backgroundTextColor: '#FDD320',
      backgroundColor: '#FDEFBD',
    },
    melon: {
      backgroundTextColor: '#FE8A14',
      backgroundColor: '#FFF',
    },
    palay: {
      backgroundTextColor: '#E6BB45',
      backgroundColor: '#F6E7C0',
    },
    beans: {
      backgroundTextColor: '#3C800F',
      backgroundColor: '#E5F4DB',
    },
    eggplant: {
      backgroundTextColor: '#43203b',
      backgroundColor: '#D2CCD2',
    },
  };

  public _cropsData;

  constructor() {}

  getCropsColors() {
    return this.cropsColors;
  }
  // getCropData(cropId) {
  //   return { ...this._cropsData.find((data) => 'crop' + data.id === cropId) };
  // }
}
