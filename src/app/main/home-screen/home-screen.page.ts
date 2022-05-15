import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
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
  livestockColors;
  userSelectedCropsData = [];
  userSelectedLivestocksData = [];

  constructor(
    private cropsService: HomeCropsService,
    private livestockService: HomeLivestockService,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.homeDataCrops = this.userSelectedCropsData;
    this.homeDataLivestock = this.userSelectedLivestocksData;
    this.cropsColors = this.cropsService.getCropsColors();
    this.livestockColors = this.livestockService.getLivestockColors();
    this.getSelectedCrops();
    this.getSelectedLivestocks();
  }
  onClickCropDetails(id) {
    this.router.navigate(['/', 'main', 'tabs', 'home', 'crop' + id]);
  }
  onClickLivestockDetails(id) {
    this.router.navigate(['/', 'main', 'tabs', 'home', 'livestock' + id]);
  }

  getSelectedCrops() {
    this.apiService.getCrops().subscribe((res: any) => {
      res.forEach((data) => {
        const receivedCropData = this.cropsService.getCropByName(data.cropName);
        this.userSelectedCropsData.push(receivedCropData);
      });
    });
  }

  getSelectedLivestocks() {
    this.apiService.getLivestocks().subscribe((res: any) => {
      res.forEach((data) => {
        const receivedLivestocksData =
          this.livestockService.getLivestockDataByName(data.livestocksName);
        this.userSelectedLivestocksData.push(receivedLivestocksData);
      });
    });
  }
}
