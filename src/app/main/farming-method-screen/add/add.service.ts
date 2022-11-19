/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddService {
  // nameAndHectares = { name: '', hectares: 0 };
  farmingMethod = {
    name: '',
    hectares: 0,
    methods: [],
  };
  constructor() {}

  getAllMethod() {
    return this.farmingMethod;
  }
  getOneMethod(id) {
    return this.farmingMethod.methods.filter((item) => item.id === id);
  }
  // getNameAndHectares() {
  //   return this.nameAndHectares;
  // }

  setNameAndHectares(name, hectares) {
    this.farmingMethod.name = name;
    this.farmingMethod.hectares = hectares;
  }

  addMethod(data) {
    this.farmingMethod.methods.push({
      ...data,
      id: this.farmingMethod.methods.length + 1,
    });
  }

  getIsHaveNameAndHectares(): boolean {
    return this.farmingMethod.name && this.farmingMethod.hectares
      ? true
      : false;
  }

  removeMethod(id) {
    const newMethod = [
      ...this.farmingMethod.methods.filter((item) => item.id !== id),
    ];

    this.farmingMethod.methods = newMethod.map((item, index) => {
      const newId = index + 1;
      return { ...item, id: newId };
    });
  }
  updateMethod(id, title, message, img) {
    this.farmingMethod.methods = this.farmingMethod.methods.map((item) => {
      if (item.id === id) {
        return { ...item, title, message, img };
      }
      return item;
    });
  }

  resetFarmingMethod() {
    this.farmingMethod = {
      name: '',
      hectares: 0,
      methods: [],
    };
  }
}
