import { Component, OnInit } from '@angular/core';
import { HomeCropsService } from '../../home-screen/home-crops.service';
import { HomeLivestockService } from '../../home-screen/home-livestock.service';
@Component({
  selector: 'app-agriculture',
  templateUrl: './agriculture.page.html',
  styleUrls: ['./agriculture.page.scss'],
})
export class AgriculturePage implements OnInit {
  userCurrentSelectedCrops = [];
  userCurrentSelectedLivestock = [];
  availableAgri = [];
  constructor(
    private homeCropsService: HomeCropsService,
    private homeLivestockService: HomeLivestockService
  ) {}

  ngOnInit() {
    this.userCurrentSelectedCrops = this.homeCropsService.getCropsData();
    this.userCurrentSelectedLivestock =
      this.homeLivestockService.getLivestockData();

    console.log(this.userCurrentSelectedCrops);
    console.log(this.userCurrentSelectedLivestock);
  }
}
