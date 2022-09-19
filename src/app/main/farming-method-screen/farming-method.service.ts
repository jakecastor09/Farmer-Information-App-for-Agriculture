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

  getUserFarmingMethod() {
    // this.allUserFarmingMethod.filter(
    //   (item) => item.userId === this.authService.userId
    // );
  }

  editUserFarmingMethod(userMethodId) {}

  addFarmingMethod(publishData) {
    //Reset Add Farming method
    this.addService.resetFarmingMethod();

    const { name, hectares, methods } = publishData;
    const date = new Date();

    const newFarmingMethod = new FarmingMethod(
      this.authService.userId,
      name,
      hectares,
      methods,
      date
    );
    this.allUserFarmingMethod.push(newFarmingMethod);

    this.router.navigateByUrl('/main/tabs/farming-method');
    console.log(this.allUserFarmingMethod);
  }
}
