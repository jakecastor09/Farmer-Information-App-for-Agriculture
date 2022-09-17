/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileSetupService {
  _isCropsSelected = false;
  _isLivestockSelected = false;
  constructor() {}

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
}
