import { Component, OnInit } from '@angular/core';
import { FarmingMethodService } from './farming-method.service';

@Component({
  selector: 'app-farming-method-screen',
  templateUrl: './farming-method-screen.page.html',
  styleUrls: ['./farming-method-screen.page.scss'],
})
export class FarmingMethodScreenPage implements OnInit {
  allFarmingMethod = [];
  constructor(private farmingMethodService: FarmingMethodService) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.allFarmingMethod = this.farmingMethodService.getAllUserFarmingMethod();
  }
}
