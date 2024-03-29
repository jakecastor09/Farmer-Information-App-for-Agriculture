import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthPageService } from 'src/app/auth-page/auth-page.service';
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
  farmingMethodUserInfo = {
    farminMethodId: { firstName: '', lastName: '', imgUrl: '' },
  };
  user: User;
  allUser = [];
  allFavorites = [];
  allFarmingMethods = [];
  userSavedFavorites = [];
  userFarmingMethodSaved = [];
  constructor(
    private mainService: MainService,
    private favoriteService: MyFavoritesService,
    private farmingMethodService: FarmingMethodService,
    private router: Router,
    private authService: AuthPageService
  ) {}

  ngOnInit() {}
  ionViewDidEnter() {
    this.user = this.mainService.getCurrentUser(
      this.authService.userLoginLocalId
    );
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

        this.mainService.getAllUser().map((user) => {
          console.log(user);
          this.userFarmingMethodSaved.map((farmingMethod) => {
            if (user.userId === farmingMethod.userId) {
              this.farmingMethodUserInfo[farmingMethod.farmingMethodId] = {
                firstName: user.firstName,
                lastName: user.lastName,
                imgUrl: user.imgUrl,
              };
            }
          });
        });

        //this data i need to display favorites
        console.log(this.userFarmingMethodSaved);
        console.log(this.farmingMethodUserInfo);
      });
    });
  }

  ionViewWillEnter() {
    this.user = this.mainService.getCurrentUser(
      this.authService.userLoginLocalId
    );

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

        this.mainService.getAllUser().map((user) => {
          console.log(user);
          this.userFarmingMethodSaved.map((farmingMethod) => {
            if (user.userId === farmingMethod.userId) {
              this.farmingMethodUserInfo[farmingMethod.farmingMethodId] = {
                firstName: user.firstName,
                lastName: user.lastName,
                imgUrl: user.imgUrl,
              };
            }
          });
        });

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
