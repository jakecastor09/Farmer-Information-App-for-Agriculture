/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { FarmingMethodService } from '../farming-method.service';

@Injectable({
  providedIn: 'root',
})
export class AddService {
  // export class FarmingMethod {
  //   constructor(
  //     public userId: string,
  //     public name: string,
  //     public hectares: number,
  //     public method: Array<object>,
  //     public date: Date
  //   ) {}
  // }

  // example data
  // method: [
  //   {
  //     title: '2 kilo of kamatis',
  //     message: 'lorem ipsum',
  //     img: 'asdfd',
  //   },
  //   {
  //     title: '2 kilo of kamatis',
  //     message: 'lorem ipsum',
  //   },
  // ];
  _cropsOrLivestockName: string;
  _hectares: number;
  method = [];
  constructor(private farmingMethodService: FarmingMethodService) {}

  getData() {
    return [...this.method];
  }

  setNameOfCropsOrLivestock(name: string) {
    this._cropsOrLivestockName = name;
  }
  setHectares(hectares: number) {
    this._hectares = hectares;
  }

  addMethod(data) {
    this.method.push(data);
  }

  getIsHaveNameAndHectares(): boolean {
    return this._cropsOrLivestockName && this._hectares ? true : false;
  }
}
