/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { Component, Injectable, OnInit } from '@angular/core';
import { Crops } from './home.crops.model';

@Injectable({
  providedIn: 'root',
})
export class HomeCropsService {
  cropsColors = [
    { backgroundTextColor: '#3C800F', backgroundColor: '#E5F4DB' },
    { backgroundTextColor: '#FDD320', backgroundColor: '#FDEFBD' },
    { backgroundTextColor: '#FE8A14', backgroundColor: '#FFF' },
    { backgroundTextColor: '#E6BB45', backgroundColor: '#F6E7C0' },
    { backgroundTextColor: '#3C800F', backgroundColor: '#E5F4DB' },
    { backgroundTextColor: '#43203b', backgroundColor: '#D2CCD2' },
  ];

  private _cropsData: Crops[] = [];

  constructor() {
    this._cropsData = fetch('../../../assets/model/cropsData.ts');
  }

  getCropsData() {
    return [...this._cropsData];
  }
  getCropsColors() {
    return [...this.cropsColors];
  }
  getCropData(cropId) {
    return { ...this._cropsData.find((data) => 'crop' + data.id === cropId) };
  }
}
