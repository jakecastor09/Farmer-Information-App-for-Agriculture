import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthPageService } from 'src/app/auth-page/auth-page.service';
import { AddService } from './add/add.service';
import { FarmingMethod } from './farming-method.model';

@Injectable({
  providedIn: 'root',
})
export class FarmingMethodService {
  allUserFarmingMethod = [];

  constructor(
    private authService: AuthPageService,
    private router: Router,
    private addService: AddService
  ) {}

  getAllUserFarmingMethod() {
    return this.allUserFarmingMethod;
  }

  getOneFarmingMethod(farmingMethodId) {
    return this.allUserFarmingMethod.find(
      (item) => item.farmingMethodId === farmingMethodId
    );
  }

  editUserFarmingMethod(userMethodId) {}

  addFarmingMethod(publishData) {
    //Reset Add Farming method
    this.addService.resetFarmingMethod();

    const { name, hectares, methods } = publishData;
    const date = new Date();
    const userId = this.authService.userId;
    const farmingMethodId =
      this.authService.userId + this.allUserFarmingMethod.length;
    console.log(farmingMethodId);
    const newFarmingMethod = new FarmingMethod(
      userId,
      farmingMethodId,
      name,
      hectares,
      methods,
      date
    );
    this.allUserFarmingMethod.push(newFarmingMethod);

    this.router.navigateByUrl('/main/tabs/farming-method');
  }
}
