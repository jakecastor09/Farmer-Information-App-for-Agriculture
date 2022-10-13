import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { User } from '../user.model';
import { FarmingMethodService } from './farming-method.service';

@Component({
  selector: 'app-farming-method-screen',
  templateUrl: './farming-method-screen.page.html',
  styleUrls: ['./farming-method-screen.page.scss'],
})
export class FarmingMethodScreenPage implements OnInit {
  allFarmingMethod = [];
  nameOfFarmer = {};

  constructor(
    private farmingMethodService: FarmingMethodService,
    private router: Router,
    private mainService: MainService
  ) {}

  ngOnInit() {
    this.farmingMethodService.allUserFarmingMethod.subscribe(
      (allUserFarmingMethod) => {
        this.allFarmingMethod = allUserFarmingMethod;
      }
    );
    this.mainService.fetchUsers().subscribe((allUser) => {
      allUser.map(
        (user) =>
          (this.nameOfFarmer[user.userId] = {
            firstName: user.firstName,
            lastName: user.lastName,
          })
      );

      this.farmingMethodService.setFarmerName(this.nameOfFarmer);
    });
  }

  ionViewDidEnter() {
    this.farmingMethodService.getAllUserFarmingMethod().subscribe((data) => {
      this.allFarmingMethod = data;
      console.log(this.allFarmingMethod);
    });
  }

  onClickFarmingMethodHandler(farmingMethodId: string) {
    this.router.navigateByUrl(
      '/main/tabs/farming-method/method-details/' + farmingMethodId
    );
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.farmingMethodService.getAllUserFarmingMethod().subscribe((data) => {
      this.allFarmingMethod = data;
      event.target.complete();
    });
  }
}
