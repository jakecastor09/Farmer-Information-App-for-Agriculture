import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileSetupService } from '../profile-setup.service';

@Component({
  selector: 'app-crops-or-livestock',
  templateUrl: './crops-or-livestock.page.html',
  styleUrls: ['./crops-or-livestock.page.scss'],
})
export class CropsOrLivestockPage implements OnInit {
  isCropsSelected = false;
  isLivestockSelected = false;

  constructor(
    private route: Router,
    private profileSetupService: ProfileSetupService
  ) {}

  ngOnInit() {}

  cropsHandlerClick() {
    this.isCropsSelected = !this.isCropsSelected;
  }
  livestockHandlerClick() {
    this.isLivestockSelected = !this.isLivestockSelected;
  }
  buttonClickHandler() {
    this.route.navigateByUrl('/profile-setup/crops-or-livestock/select-crops');
    this.profileSetupService.setSelectedCrops(this.isCropsSelected);
    this.profileSetupService.setSelectedLivestock(this.isLivestockSelected);

    if (this.profileSetupService.isCropsSelected) {
      this.route.navigateByUrl(
        '/profile-setup/crops-or-livestock/select-crops'
      );
    } else {
      this.route.navigateByUrl(
        '/profile-setup/crops-or-livestock/select-livestocks'
      );
    }
  }
}
