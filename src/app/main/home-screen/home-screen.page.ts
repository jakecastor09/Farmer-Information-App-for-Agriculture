import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeCropsService } from './home-crops.service';
import { HomeLivestockService } from './home-livestock.service';

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

  homeDataCrops;
  homeDataLivestock;
  cropsColors;
  livestockColors = [];

  constructor(
    private cropsService: HomeCropsService,
    private livestockService: HomeLivestockService,
    private router: Router
  ) {}

  ngOnInit() {
    fetch('../../../assets/model/cropsData.json')
      .then((res) => res.json())
      .then((data) => (this.homeDataCrops = data));

    this.homeDataLivestock = this.livestockService.getLivestockData();
    this.cropsColors = this.cropsService.getCropsColors();
    this.livestockColors = this.livestockService.getLivestockColors();
    console.log(this.homeDataCrops);
  }
  onClickCropDetails(id) {
    this.router.navigate(['/', 'main', 'tabs', 'home', 'crop' + id]);
  }
  onClickLivestockDetails(id) {
    this.router.navigate(['/', 'main', 'tabs', 'home', 'livestock' + id]);
  }
}
