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
    this.method = [...this.method.filter((item) => item.id !== id)];
    console.log(this.method);
  }

  updateMethod(id, title, message) {
    const newId = id;
    const newMethod = { title, message, img: '', id: newId };

    this.method[newId - 1] = newMethod;
  }
}
