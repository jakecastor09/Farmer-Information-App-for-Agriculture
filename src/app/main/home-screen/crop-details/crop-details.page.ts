import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeCropsService } from '../home-crops.service';
import { HomeLivestockService } from '../home-livestock.service';

@Component({
  selector: 'app-crop-details',
  templateUrl: './crop-details.page.html',
  styleUrls: ['./crop-details.page.scss'],
})
export class CropDetailsPage implements OnInit {
  detailsData;
  constructor(
    private cropsService: HomeCropsService,
    private livestockService: HomeLivestockService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (paramMap.get('cropAndLiveStockDetailsId').includes('crop')) {
        this.detailsData = this.cropsService.getCropData(
          paramMap.get('cropAndLiveStockDetailsId')
        );
      }
      if (paramMap.get('cropAndLiveStockDetailsId').includes('livestock')) {
        this.detailsData = this.livestockService.getOneLivestockData(
          paramMap.get('cropAndLiveStockDetailsId')
        );
      }
    });
  }
}
