/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileSetupService {
  _isCropsSelected = false;
  _isLivestockSelected = false;
  constructor(private http: HttpClient) {}

  get isCropsSelected() {
    return this._isCropsSelected;
  }
  get isLivestockSelected() {
    return this._isLivestockSelected;
  }

  setSelectedCrops(isSelected: boolean) {
    this._isCropsSelected = isSelected;
  }
  setSelectedLivestock(isSelected: boolean) {
    this._isLivestockSelected = isSelected;
  }

  updateCropsAndLivestock(data) {
    this.http
      .put(
        'https://agri-app-96063-default-rtdb.firebaseio.com/crops-livestock.json',
        {}
      )
      .subscribe();
  }
}
