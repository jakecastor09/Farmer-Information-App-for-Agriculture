import { Component, OnInit } from '@angular/core';
import { HomeCropsService } from '../../home-screen/home-crops.service';
import { HomeLivestockService } from '../../home-screen/home-livestock.service';
import { MainService } from '../../main.service';
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
    private homeLivestockService: HomeLivestockService,
    private mainService: MainService
  ) {}

  ngOnInit() {
    //get selected crops
    this.userCurrentSelectedCrops = this.homeCropsService.getCropsData();
    //get selected crops
    this.userCurrentSelectedLivestock =
      this.homeLivestockService.getLivestockData();
    console.log(this.userCurrentSelectedCrops);

    //get all livestock
    this.mainService
      .getAllCropsData()
      ?.map((item) => this.availableAgri.push(item));
    //get all livestock
    this.mainService
      .getAllLivestockData()
      ?.map((item) => this.availableAgri.push(item));
  }
}
