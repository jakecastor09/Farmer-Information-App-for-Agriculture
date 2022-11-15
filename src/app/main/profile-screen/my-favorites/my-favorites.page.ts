import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmingMethodService } from '../../farming-method-screen/farming-method.service';
import { MainService } from '../../main.service';
import { User } from '../../user.model';
import { MyFavoritesService } from './my-favorites.service';

@Component({
  selector: 'app-my-favorites',
  templateUrl: './my-favorites.page.html',
  styleUrls: ['./my-favorites.page.scss'],
})
export class MyFavoritesPage implements OnInit {
  user: User;
  allFavorites = [];
  allFarmingMethods = [];
  userSavedFavorites = [];
  userFarmingMethodSaved = [];
  constructor(
    private mainService: MainService,
    private favoriteService: MyFavoritesService,
    private farmingMethodService: FarmingMethodService,
    private router: Router
  ) {}

  ngOnInit() {}
  ionViewDidEnter() {
    this.user = this.mainService.getUser();
    this.farmingMethodService.getAllUserFarmingMethod().subscribe((method) => {
      this.allFarmingMethods = method;
      this.favoriteService.fetchFavorites().subscribe((data) => {
        this.allFavorites = data;
        this.userSavedFavorites = data.filter(
          (favorite) => favorite.userId === this.user.userId
        );
        this.userFarmingMethodSaved = [];
        this.allFarmingMethods.map((farmingMethod) =>
          this.userSavedFavorites.map((save) => {
            if (save.farmingMethodId === farmingMethod.farmingMethodId) {
              this.userFarmingMethodSaved.push(farmingMethod);
            }
          })
        );

        //this data i need to display favorites
        console.log(this.userFarmingMethodSaved);
      });
    });
  }

  ionViewWillEnter() {
    this.user = this.mainService.getUser();
    this.farmingMethodService.getAllUserFarmingMethod().subscribe((method) => {
      this.allFarmingMethods = method;
      this.favoriteService.fetchFavorites().subscribe((data) => {
        this.allFavorites = data;
        this.userSavedFavorites = data.filter(
          (favorite) => favorite.userId === this.user.userId
        );
        this.userFarmingMethodSaved = [];
        this.allFarmingMethods.map((farmingMethod) =>
          this.userSavedFavorites.map((save) => {
            if (save.farmingMethodId === farmingMethod.farmingMethodId) {
              this.userFarmingMethodSaved.push(farmingMethod);
            }
          })
        );

        //this data i need to display favorites
        console.log(this.userFarmingMethodSaved);
      });
    });
  }

  onClickFarmingMethodHandler(farmingMethodId: string) {
    this.router.navigateByUrl(
      '/main/tabs/farming-method/method-details/' + farmingMethodId
    );
  }
}
