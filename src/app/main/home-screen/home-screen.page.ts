/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthPageService } from 'src/app/auth-page/auth-page.service';
import { PresenceService } from 'src/app/auth-page/presence.service';
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

  isLoading = false;

  isDarkMode;
  homeDataCrops;
  homeDataLivestock;
  cropsColors;
  livestockColors;
  allUser;
  allPresence = {};

  _presence;

  constructor(
    private homeCropSvc: HomeCropsService,
    private router: Router,
    private homeLivestockSvc: HomeLivestockService,
    private mainService: MainService,
    private authService: AuthPageService,
    private http: HttpClient,
    private presence: PresenceService,
    private route: NavController
  ) {}

  ngOnInit() {
    this._presence = this.presence.getPresence(
      this.authService.userLoginLocalId
    );

    this.allUser = this.mainService.getAllUser();

    console.log(this.allUser);
    this.presence
      .getAllPresence()
      .subscribe((item) => (this.allPresence = item));
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.mainService.fetchUserSelectedCropsAndLivestock().subscribe(() => {
      this.isLoading = false;
      //set All users
      this.mainService
        .fetchUsers()
        .subscribe((users) => this.mainService.setAllUsers(users));

      this.cropsColors = this.homeCropSvc.getCropsColors();
      this.homeDataCrops = this.homeCropSvc.getCropsData();
      this.livestockColors = this.homeLivestockSvc.getLivestockColors();
      this.homeDataLivestock = this.homeLivestockSvc.getLivestockData();
    });
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
  doRefresh(event) {
    this._presence = this.presence.getPresence(
      this.authService.userLoginLocalId
    );

    this.allUser = this.mainService.getAllUser();

    this.presence
      .getAllPresence()
      .subscribe((item) => (this.allPresence = item));
    setTimeout(() => {
      event.target.complete();
    }, 3000);
  }
  userClickHandler(userId) {
    this.route.navigateForward(`/main/tabs/home/user-details/${userId}`);
  }
}
