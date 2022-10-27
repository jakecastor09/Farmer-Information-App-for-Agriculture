import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PresenceService } from 'src/app/auth-page/presence.service';
import { FarmingMethod } from '../../farming-method-screen/farming-method.model';
import { FarmingMethodService } from '../../farming-method-screen/farming-method.service';
import { MainService } from '../../main.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  user: User;
  userSelectedCrops;
  userSelectedLivestock;
  userFarmingMethod = [];
  userPresence = { status: '', timestamp: '' };

  constructor(
    private mainService: MainService,
    private route: ActivatedRoute,
    private farmingMethodSrvc: FarmingMethodService,
    private presenceSrvc: PresenceService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((paramMap) => {
      const userId = paramMap.userId;
      this.user = this.mainService.getCurrentUser(userId);
      this.mainService
        .getOneUserSelectedCropsAndLivestock(userId)
        .subscribe((data) => {
          // this.userSelectedCrops = data.crops;/
          const allCropsData = this.mainService.getAllCropsData();
          console.log(allCropsData);
          this.userSelectedCrops = allCropsData.filter((item) => {
            if (data.crops.includes(item.name)) {
              return item;
            }
          });
          console.log(this.userSelectedCrops);

          const allLivestockData = this.mainService.getAllLivestockData();
          this.userSelectedLivestock = allLivestockData.filter((item) => {
            if (data.livestock.includes(item.name)) {
              return item;
            }
          });
          //assign user selected livestock to the variable userSelectedlivestock
          // this.userSelectedLivestock = data.livestock;
        });

      this.farmingMethodSrvc.getAllUserFarmingMethod().subscribe((data) =>
        data.filter((item) => {
          if (item.userId === this.user.userId) {
            this.userFarmingMethod.push(item);
          }
        })
      );

      this.presenceSrvc.getAllPresence().subscribe((data) => {
        this.userPresence = data[this.user.userId];
      });
    });
  }
}
