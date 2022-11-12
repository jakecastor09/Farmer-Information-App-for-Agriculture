/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FarmingMethodService } from '../../farming-method-screen/farming-method.service';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-my-methods',
  templateUrl: './my-methods.page.html',
  styleUrls: ['./my-methods.page.scss'],
})
export class MyMethodsPage implements OnInit {
  userFarmingMethod = {};
  cropsName = [];
  livestockName = [];
  userName;
  userImg;
  _userId;
  constructor(
    private route: ActivatedRoute,
    private farmingMethodService: FarmingMethodService,
    private mainService: MainService,
    private router: Router,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.farmingMethodService.getAllUserFarmingMethod().subscribe();
    this.route.params.subscribe((paramMap) => {
      const userId = paramMap.userId;
      this._userId = userId;

      const userInfo = this.mainService.getCurrentUser(userId);

      this.userImg = userInfo.imgUrl;
      this.userName =
        userInfo.firstName.charAt(0).toUpperCase() +
        userInfo.firstName.slice(1) +
        ' ' +
        userInfo.lastName.charAt(0).toUpperCase() +
        userInfo.lastName.slice(1);

      this.farmingMethodService.allUserFarmingMethod.subscribe(
        (allUserFarmingMethod) => {
          this.userFarmingMethod = {};
          allUserFarmingMethod
            .filter((item) => item.userId === userId)
            .map((item) => {
              if (this.userFarmingMethod[item.name.toLowerCase()]) {
                this.userFarmingMethod[item.name.toLowerCase()].push(item);
              } else {
                this.userFarmingMethod[item.name.toLowerCase()] = [item];
              }
            });
        }
      );
    });

    //get all the crops name and assign to cropsname variable
    this.cropsName = this.mainService
      .getAllCropsData()
      .map((item) => (item.name === 'beans' ? 'greenbeans' : item.name))
      .sort();

    //get all the livestock name and assign to livestockname variable

    this.livestockName = this.mainService
      .getAllLivestockData()
      .map((item) => item.name)
      .sort();

    console.log(this.userFarmingMethod);
    console.log(this.cropsName);
    console.log(this.livestockName);
  }

  setIcon(iconName) {
    return `assets/img/my-method/mm-${iconName}.webp`;
  }
  setColor(type, index) {
    if (type === 'crops') {
      return 'c' + (index % 3);
    }
    if (type === 'livestock') {
      return 'l' + (index % 3);
    }
  }

  navigateMethodList(name) {
    this.router.navigateByUrl(
      `/main/tabs/profile/my-methods/${this._userId}/method-list/${name}`
    );
  }
  backBtnHandler() {
    this.navController.navigateBack('/main/tabs/profile');
  }
}
