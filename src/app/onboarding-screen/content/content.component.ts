import { Component, Input, OnInit } from '@angular/core';
import { Onboarding } from '../onboarding.model';
import { OnboardingService } from '../onboarding.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  @Input() data: Onboarding[] = [];
  page;
  constructor(private onBoardingService: OnboardingService) {}

  ngOnInit() {
    this.page = this.onBoardingService.getPage();
  }
}
