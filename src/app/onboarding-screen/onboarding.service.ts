/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Onboarding } from './onboarding.model';

@Injectable({
  providedIn: 'root',
})
export class OnboardingService {
  private _onboardingData: Onboarding[] = [];
  private page = 1;

  constructor() {
    this._onboardingData = [
      new Onboarding(
        '1',
        'Planting',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        'assets/img/onboarding-img/planting.png'
      ),
      new Onboarding(
        '2',
        'Harvesting',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        'assets/img/onboarding-img/planting.png'
      ),
      new Onboarding(
        '3',
        'Farming',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        'assets/img/onboarding-img/planting.png'
      ),
      new Onboarding(
        '4',
        'Sample',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        'assets/img/onboarding-img/planting.png'
      ),
    ];
  }

  getOnBoardingData() {
    return [...this._onboardingData];
  }
  getPage() {
    return this.page;
  }
  setPage(num) {
    return (this.page = num);
  }
}
