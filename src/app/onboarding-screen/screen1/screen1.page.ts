import { Component, OnInit } from '@angular/core';
import { Onboarding } from '../onboarding.model';
import { OnboardingService } from '../onboarding.service';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.page.html',
  styleUrls: ['./screen1.page.scss'],
})
export class Screen1Page implements OnInit {
  data: Onboarding[] = [];
  constructor(private onboardingData: OnboardingService) {}

  ngOnInit() {
    this.data = this.onboardingData.getOnBoardingData();
    console.log(this.data);
  }
}
