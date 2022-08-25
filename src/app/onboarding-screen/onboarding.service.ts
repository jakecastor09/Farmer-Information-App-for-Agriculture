/* eslint-disable max-len */
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
        `They are all around us. They contribute to making our world a better and morelovely place to live. They take care of us and feed us. They're plants, after all! A glimpse of green beauty is enough to make you feel good, naturally.`,
        'assets/img/onboarding-img/planting.png'
      ),
      new Onboarding(
        '2',
        'Harvesting',
        `Harvesting is the process of gathering a ripe crop from the fields. Reaping is the cutting of grain or pulse for harvest, typically using a scythe, sickle, or reaper.
        `,
        'assets/img/onboarding-img/harvesting.png'
      ),
      new Onboarding(
        '3',
        'Farming',
        'Farming is the practice of cultivating plants and livestock. Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities.',
        'assets/img/onboarding-img/farming.png'
      ),
      new Onboarding(
        '4',
        'Growing',
        'Plants need five things in order to grow: sunlight, proper temperature, moisture, air, and nutrients. These five things are provided by the natural or artificial environments where the plants live. If any of these elements are missing they can limit plant growth.',
        'assets/img/onboarding-img/growing.png'
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
