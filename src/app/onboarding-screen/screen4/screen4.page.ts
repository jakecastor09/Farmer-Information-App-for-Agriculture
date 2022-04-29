import { Component, Input, OnInit } from '@angular/core';
import { Onboarding } from '../onboarding.model';
import { OnboardingService } from '../onboarding.service';

@Component({
  selector: 'app-screen4',
  templateUrl: './screen4.page.html',
  styleUrls: ['./screen4.page.scss'],
})
export class Screen4Page implements OnInit {
  @Input() data: Onboarding[] = [];
  constructor(private onboardingData: OnboardingService) {}

  ngOnInit() {
    this.data = this.onboardingData.getOnBoardingData();
  }
}
