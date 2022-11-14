/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../../main.service';
import { User } from '../../user.model';
import { FarmingMethod } from '../farming-method.model';
import { FarmingMethodService } from '../farming-method.service';
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';
import { MyFavoritesService } from '../../profile-screen/my-favorites/my-favorites.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  farmingMethod: FarmingMethod;
  user: User;
  data = {};
  nameOfFarmer = {};
  isSaved = false;

  constructor(
    private route: ActivatedRoute,
    private farmingMethodService: FarmingMethodService,
    private mainService: MainService,
    private location: Location,
    private toastController: ToastController,
    private myFavoritesSrvc: MyFavoritesService
  ) {}

  ngOnInit() {
    this.user = this.mainService.getUser();
    this.route.params.subscribe((paramMap) => {
      const farmingMethodId = paramMap.detailsId;
      this.farmingMethodService
        .getOneFarmingMethod(farmingMethodId)
        .subscribe((data) => {
          this.farmingMethod = data;
          console.log(this.farmingMethod.methods);
        });
    });

    this.nameOfFarmer = this.farmingMethodService.getFarmernName();
  }
  backBtnHandler() {
    // '/main/tabs/farming-method'
    this.location.back();
  }
  async saveClickHandler() {
    this.isSaved = !this.isSaved;
    if (this.isSaved) {
      const toast = await this.toastController.create({
        message: 'Saved!',
        duration: 800,
        position: 'top',
        color: 'light',
      });

      await toast.present();

      this.myFavoritesSrvc
        .addFavorite(this.farmingMethod.farmingMethodId, this.user.userId)
        .subscribe();
    }
    if (!this.isSaved) {
      const toast = await this.toastController.create({
        message: 'Unsaved!',
        duration: 800,
        position: 'top',
        color: 'danger',
      });

      await toast.present();
    }
  }
}
