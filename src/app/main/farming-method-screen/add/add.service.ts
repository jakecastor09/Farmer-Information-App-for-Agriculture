import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddService {
  postData = [];
  constructor() {}

  getData() {
    return this.postData;
  }

  addData(data) {
    this.postData.push(data);
  }
}
