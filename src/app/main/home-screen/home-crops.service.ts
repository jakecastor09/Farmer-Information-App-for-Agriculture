/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeCropsService {
  cropsColors = {
    watermelon: {
      backgroundTextColor: '#3C800F',
      backgroundColor: '#C3E7AC',
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
      backgroundTextColor: '#86C03F',
      backgroundColor: '#DDEFC6',
    },
    eggplant: {
      backgroundTextColor: '#43203b',
      backgroundColor: '#D2CCD2',
    },
    default: {
      backgroundTextColor: '#86C03F',
      backgroundColor: '#FFFFFF',
    },
  };

  cropsData;

  constructor() {}

  addCropsData(data) {
    this.cropsData = data;
  }

  getCropsData() {
    return this.cropsData;
  }

  getCropByName(cropName) {
    return { ...this.cropsData.find((data) => data.name === cropName) };
  }

  getCropsColors() {
    return this.cropsColors;
  }
  getCropsColor(cropName) {
    return this.cropsColors[cropName];
  }
  getCropData(cropId) {
    return { ...this.cropsData.find((data) => 'crop' + data.id === cropId) };
  }
}
