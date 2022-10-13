import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeCropsService } from 'src/app/main/home-screen/home-crops.service';
import { HomeLivestockService } from 'src/app/main/home-screen/home-livestock.service';
import { MainService } from 'src/app/main/main.service';
import { User } from 'src/app/main/user.model';
import { ProfileSetupService } from '../../profile-setup.service';

@Component({
  selector: 'app-finished-setup',
  templateUrl: './finished-setup.page.html',
  styleUrls: ['./finished-setup.page.scss'],
})
export class FinishedSetupPage implements OnInit {
  user: User;
  crops;
  livestock;
  constructor(
    private router: Router,
    private profileSetupService: ProfileSetupService,
    private mainService: MainService,
    private homeCropsService: HomeCropsService,
    private homeLivestockService: HomeLivestockService
  ) {}

  ngOnInit() {}
  getStartedButtonHandlerClick() {
    //Fetch all Crops livestock
    this.user = this.mainService.getUser();
    this.crops = this.homeCropsService.getCropsData();
    this.livestock = this.homeLivestockService.getLivestockData();

    const userId = this.user.userId;
    const allSelectedCropsName = this.crops.map((crop) => crop.name);
    const allSelectedLivestockName = this.livestock.map((item) => item.name);

    //Adding user selected crops and livestock in database
    this.mainService
      .addUserSelectedCropsAndLivestock(
        userId,
        allSelectedCropsName,
        allSelectedLivestockName
      )
      .subscribe((res) => this.router.navigateByUrl('/main/tabs/home'));
  }
}
