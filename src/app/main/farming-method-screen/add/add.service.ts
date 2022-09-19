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
    return this.method;
  }
  getOneMethod(id) {
    return this.method.filter((item) => item.id === id);
  }

  setNameOfCropsOrLivestock(name: string) {
    this._cropsOrLivestockName = name;
  }
  setHectares(hectares: number) {
    this._hectares = hectares;
  }

  addMethod(data) {
    this.method.push({ ...data, id: this.method.length + 1 });
  }

  getIsHaveNameAndHectares(): boolean {
    return this._cropsOrLivestockName && this._hectares ? true : false;
  }

  removeMethod(id) {
    const newMethod = [...this.method.filter((item) => item.id !== id)];

    this.method = newMethod.map((item, index) => {
      const newId = index + 1;
      return { ...item, id: newId };
    });
  }
  updateMethod(id, title, message) {
    this.method = this.method.map((item) => {
      if (item.id === id) {
        return { ...item, title, message };
      }
      return item;
    });
  }
}
