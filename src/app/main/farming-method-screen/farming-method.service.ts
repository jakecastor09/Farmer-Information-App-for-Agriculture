/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { AuthPageService } from 'src/app/auth-page/auth-page.service';
import { AddService } from './add/add.service';
import { FarmingMethod } from './farming-method.model';

@Injectable({
  providedIn: 'root',
})
export class FarmingMethodService {
  private _allUserFarmingMethod = new BehaviorSubject<FarmingMethod[]>([]);

  constructor(
    private authService: AuthPageService,
    private router: Router,
    private addService: AddService,
    private http: HttpClient
  ) {}

  get allUserFarmingMethod() {
    return this._allUserFarmingMethod.asObservable();
  }

  getAllUserFarmingMethod() {
    return this.http
      .get(
        'https://agri-app-96063-default-rtdb.firebaseio.com/farming-methods.json'
      )
      .pipe(
        map((reponseData) => {
          const farmingMethods = [];
          for (const key in reponseData) {
            if (reponseData.hasOwnProperty(key)) {
              farmingMethods.push(
                new FarmingMethod(
                  reponseData[key].userId,
                  reponseData[key].farmingMethodId,
                  reponseData[key].name,
                  reponseData[key].hectares,
                  reponseData[key].methods,
                  new Date(reponseData[key].date)
                )
              );
            }
          }

          return farmingMethods;
        }),
        tap((farmingMethods) => {
          this._allUserFarmingMethod.next(farmingMethods);
        })
      );
  }

  getOneFarmingMethod(farmingMethodId) {
    return this._allUserFarmingMethod.pipe(
      take(1),
      map((items) =>
        items.find((item) => item.farmingMethodId === farmingMethodId)
      )
    );
  }
  editUserFarmingMethod(userMethodId) {}

  addFarmingMethod(publishData) {
    //Reset Add Farming method
    this.addService.resetFarmingMethod();

    const { name, hectares, methods } = publishData;
    const date = new Date();
    const userId = this.authService.userLoginLocalId;
    const farmingMethodId =
      Math.floor(Math.random() * 100) +
      Date.now() +
      Math.floor(Math.random() * 100) +
      '';
    const newFarmingMethod = new FarmingMethod(
      userId,
      farmingMethodId,
      name,
      hectares,
      methods,
      date
    );

    return this.http
      .post(
        'https://agri-app-96063-default-rtdb.firebaseio.com/farming-methods.json',
        { ...newFarmingMethod }
      )
      .pipe(
        switchMap((responseData) => this._allUserFarmingMethod),
        take(1),
        tap((allUserFarmingMethod) => {
          this._allUserFarmingMethod.next(
            allUserFarmingMethod.concat(newFarmingMethod)
          );
        })
      );

    // console.log(data);
    // this.allUserFarmingMethod.push(newFarmingMethod);

    // this.router.navigateByUrl('/main/tabs/farming-method');
  }
}
