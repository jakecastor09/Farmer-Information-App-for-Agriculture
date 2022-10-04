import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmingMethodService } from './farming-method.service';

@Component({
  selector: 'app-farming-method-screen',
  templateUrl: './farming-method-screen.page.html',
  styleUrls: ['./farming-method-screen.page.scss'],
})
export class FarmingMethodScreenPage implements OnInit {
  allFarmingMethod = [];
  constructor(
    private farmingMethodService: FarmingMethodService,
    private router: Router
  ) {}

  ngOnInit() {
    this.farmingMethodService.allUserFarmingMethod.subscribe(
      (allUserFarmingMethod) => {
        this.allFarmingMethod = allUserFarmingMethod;
      }
    );
  }

  ionViewDidEnter() {
    this.farmingMethodService.getAllUserFarmingMethod().subscribe((data) => {
      this.allFarmingMethod = data;
      console.log(this.allFarmingMethod);
    });
  }

  onClickFarmingMethodHandler(farmingMethodId: string) {
    console.log('clicked!!');
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
