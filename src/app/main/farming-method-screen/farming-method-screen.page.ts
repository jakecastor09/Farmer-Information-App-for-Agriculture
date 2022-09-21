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

  ngOnInit() {}

  ionViewDidEnter() {
    this.allFarmingMethod = this.farmingMethodService.getAllUserFarmingMethod();
  }

  onClickFarmingMethodHandler(userId: string) {
    console.log('clicked!!');
    this.router.navigateByUrl(
      '/main/tabs/farming-method/method-details/' + userId
    );
  }
}
