import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FarmingMethodService } from '../farming-method.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  farmingMethod;
  constructor(
    private route: ActivatedRoute,
    private farmingMethodService: FarmingMethodService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((paramMap) => {
      const farmingMethodId = paramMap.detailsId;
      this.farmingMethod =
        this.farmingMethodService.getOneFarmingMethod(farmingMethodId);
    });
  }
}
