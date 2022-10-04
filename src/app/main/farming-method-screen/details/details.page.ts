/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../../main.service';
import { User } from '../../user.model';
import { FarmingMethod } from '../farming-method.model';
import { FarmingMethodService } from '../farming-method.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  farmingMethod: FarmingMethod;
  user: User;
  data = {};
  constructor(
    private route: ActivatedRoute,
    private farmingMethodService: FarmingMethodService,
    private mainService: MainService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((paramMap) => {
      const farmingMethodId = paramMap.detailsId;
      this.farmingMethodService
        .getOneFarmingMethod(farmingMethodId)
        .subscribe((data) => {
          this.farmingMethod = data;
          console.log(this.farmingMethod.methods);
        });
    });
  }
}
