import { Component, OnInit } from '@angular/core';
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
  allFavorites = [];
  allFarmingMethods = [];
  user: User;
  userSavedFavorites = [];
  userFarmingMethodSaved = [];
  constructor(
    private mainService: MainService,
    private favoriteService: MyFavoritesService,
    private farmingMethodService: FarmingMethodService
  ) {}

  ngOnInit() {
    this.user = this.mainService.getUser();
    this.farmingMethodService
      .getAllUserFarmingMethod()
      .subscribe((data) => (this.allFarmingMethods = data));

    this.favoriteService.fetchFavorites().subscribe((data) => {
      this.allFavorites = data;
      this.userSavedFavorites = data.filter(
        (favorite) => favorite.userId === this.user.userId
      );

      console.log(this.userSavedFavorites);

      this.userFarmingMethodSaved = this.allFarmingMethods.filter(
        (farmingMethod) =>
          this.userSavedFavorites.filter(
            (save) => save.farmingMethodId === farmingMethod.farmingMethodId
          )
      );

      console.log(this.userFarmingMethodSaved);
    });
  }
}
