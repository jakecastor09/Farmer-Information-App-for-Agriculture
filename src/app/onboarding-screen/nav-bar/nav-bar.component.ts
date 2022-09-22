import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from '../onboarding.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  page;
  constructor(
    private router: Router,
    private onBoardingService: OnboardingService
  ) {}

  ngOnInit() {
    this.page = this.onBoardingService.getPage();
  }
  nextBtn() {
    this.onBoardingService.setPage(
      this.onBoardingService.setPage(this.onBoardingService.getPage() + 1)
    );
    this.navigator(this.onBoardingService.getPage());
  }
  backBtn() {
    this.onBoardingService.setPage(
      this.onBoardingService.setPage(this.onBoardingService.getPage() - 1)
    );

    if (this.onBoardingService.getPage() === 0) {
      this.onBoardingService.setPage(1);
    }
    this.navigator(this.onBoardingService.getPage());
  }
  navigator(num) {
    switch (num) {
      case 1:
        this.router.navigateByUrl('/onboarding/screen1');
        break;
      case 2:
        this.router.navigateByUrl('/onboarding/screen2');
        break;
      case 3:
        this.router.navigateByUrl('/onboarding/screen3');
        break;
      case 4:
        this.router.navigateByUrl('/onboarding/screen4');
        break;
      case 5:
        this.router.navigateByUrl('/auth-page/sign-up');
        break;
    }
  }
}
