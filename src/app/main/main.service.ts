import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MainService {
  private isDarkMode = false;
  private allCrops;
  private allLivestock;

  constructor(private http: HttpClient) {}

  setIsDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  getIsDarkMode() {
    return this.isDarkMode;
  }

  requestCropsData(data) {
    this.allCrops = data;
  }
  requestLivestockData(data) {
    this.allLivestock = data;
  }
  getAllCropsData() {
    return this.allCrops;
  }
  getAllLivestockData() {
    return this.allLivestock;
  }
}
