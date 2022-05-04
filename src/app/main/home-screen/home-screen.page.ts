import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeCropsService } from './home-crops.service';
import { HomeLivestockService } from './home-livestock.service';
import { Crops } from './home.crops.model';
import { Livestock } from './home.livestock.model';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.page.html',
  styleUrls: ['./home-screen.page.scss'],
})
export class HomeScreenPage implements OnInit {
  sliderConfig = {
    spaceBetween: 1,
    centeredSlides: false,
    slidesPerView: 2,
  };

  homeDataCrops: Crops[] = [];
  homeDataLivestock: Livestock[] = [];
  cropsColors = [];
  livestockColors = [];

  constructor(
    private cropsService: HomeCropsService,
    private livestockService: HomeLivestockService,
    private router: Router
  ) {}

  ngOnInit() {
    this.homeDataCrops = this.cropsService.getCropsData();
    this.homeDataLivestock = this.livestockService.getLivestockData();
    this.cropsColors = this.cropsService.getCropsColors();
    this.livestockColors = this.livestockService.getLivestockColors();
  }
  onClickCropDetails(id) {
    this.router.navigate(['/', 'main', 'tabs', 'home', 'crop' + id]);
  }
  onClickLivestockDetails(id) {
    this.router.navigate(['/', 'main', 'tabs', 'home', 'livestock' + id]);
  }
}
