import { Injectable } from '@angular/core';
import { AuthPageService } from 'src/app/auth-page/auth-page.service';
import { FarmingMethod } from './farming-method.model';

@Injectable({
  providedIn: 'root',
})
export class FarmingMethodService {
  allUserFarmingMethod: Array<FarmingMethod>;
  constructor(private authService: AuthPageService) {}

  getAllUserFarmingMethod() {
    return [...this.allUserFarmingMethod];
  }

  getUserFarmingMethod() {
    // this.allUserFarmingMethod.filter(
    //   (item) => item.userId === this.authService.userId
    // );
  }

  editUserFarmingMethod(userMethodId) {}

  addFarmingMethod(
    name: string,
    hectares: number,
    method: Array<object>,
    date: Date
  ) {
    const newFarmingMethod = new FarmingMethod(
      this.authService.userId,
      name,
      hectares,
      method,
      date
    );
    this.allUserFarmingMethod.push(newFarmingMethod);
  }
}
