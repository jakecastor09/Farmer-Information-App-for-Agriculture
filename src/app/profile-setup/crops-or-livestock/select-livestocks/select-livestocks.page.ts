import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeLivestockService } from 'src/app/main/home-screen/home-livestock.service';
import { MainService } from 'src/app/main/main.service';

@Component({
  selector: 'app-select-livestocks',
  templateUrl: './select-livestocks.page.html',
  styleUrls: ['./select-livestocks.page.scss'],
})
export class SelectLivestocksPage implements OnInit {
  livestocks;
  selectedLivestock = {};
  constructor(
    private http: HttpClient,
    private router: Router,
    private homeLivestockSvc: HomeLivestockService,
    private mainService: MainService,
    private location: Location
  ) {}

  ngOnInit() {
    this.livestocks = this.mainService.getAllLivestockData();
  }
  buttonClickHandler() {
    this.router.navigateByUrl(
      '/profile-setup/crops-or-livestock/finished-setup'
    );
    const userLivestockSelected = this.livestocks.filter((item) => {
      if (this.selectedLivestock[item.name]) {
        return item;
      }
    });
    this.homeLivestockSvc.addLivestockData(userLivestockSelected);
  }
  selectLivestockHandlerClick(name: string) {
    this.selectedLivestock[name] = !this.selectedLivestock[name];
  }
  backBtnHandler() {
    this.location.back();
  }
}
