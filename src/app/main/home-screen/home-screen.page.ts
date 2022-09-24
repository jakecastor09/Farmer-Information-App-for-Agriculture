import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MainService } from '../main.service';
import { HomeCropsService } from './home-crops.service';
import { HomeLivestockService } from './home-livestock.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.page.html',
  styleUrls: ['./home-screen.page.scss'],
})
export class HomeScreenPage implements OnInit {
  sliderConfig = {
    spaceBetween: 2,
    centeredSlides: false,
    slidesPerView: 2,
  };

  isDarkMode;

  homeDataCrops;
  homeDataLivestock;
  cropsColors;
  livestockColors;

  constructor(
    private homeCropSvc: HomeCropsService,
    private router: Router,
    private homeLivestockSvc: HomeLivestockService,
    private mainService: MainService
  ) {}

  ngOnInit() {
    this.cropsColors = this.homeCropSvc.getCropsColors();
    this.homeDataCrops = this.homeCropSvc.getCropsData();
    this.livestockColors = this.homeLivestockSvc.getLivestockColors();
    this.homeDataLivestock = this.homeLivestockSvc.getLivestockData();
  }

  onClickCropDetails(id) {
    this.router.navigate(['/', 'main', 'tabs', 'home', 'crop' + id]);
  }
  onClickLivestockDetails(id) {
    this.router.navigate(['/', 'main', 'tabs', 'home', 'livestock' + id]);
  }
  darkModeClickHandler() {
    this.mainService.setIsDarkMode();
    this.isDarkMode = this.mainService.getIsDarkMode();
    console.log(this.isDarkMode);
  }
}
