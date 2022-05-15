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
  data;
  color;
  language = 'english';
  toggle;
  navData = {
    title: '',
    content: {
      english: '',
      filipino: '',
    },
    img: '',
    icon: '',
  };
  constructor(
    private cropsService: HomeCropsService,
    private livestockService: HomeLivestockService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (paramMap.get('cropAndLiveStockDetailsId').includes('crop')) {
        this.data = this.cropsService.getCropData(
          paramMap.get('cropAndLiveStockDetailsId')
        );
      }
      if (paramMap.get('cropAndLiveStockDetailsId').includes('livestock')) {
        this.data = this.livestockService.getOneLivestockData(
          paramMap.get('cropAndLiveStockDetailsId')
        );
      }
    });

    this.color = this.cropsService.getCropsColor(this.data.name);
    this.defaultData();
  }
  languageChange() {}
  onClickNavIcon() {
    this.toggle = !this.toggle;
    if (!this.toggle) {
      this.defaultData();
    }
  }
  defaultData() {
    this.navData.title = 'Description';
    this.navData.content.english = this.data.description.english;
    this.navData.content.filipino = this.data.description.filipino;
    this.navData.img = this.data.images.descriptionImg;
    this.navData.icon = this.data.icon;
  }
  onClickFertilizer() {
    this.navData.title = 'Fertilizers Needed';
    this.navData.content.english = this.data.fertilizersNeeded.english;
    this.navData.content.filipino = this.data.fertilizersNeeded.filipino;
  }
  onClickLifeSpan() {
    this.navData.title = 'Life Span';
    this.navData.content.english = this.data.lifeSpan.english;
    this.navData.content.filipino = this.data.lifeSpan.filipino;
  }
  onClickLevelOfDifficulty() {
    this.navData.title = 'Level of Difficulty of Planting';
    this.navData.content.english =
      this.data.levelOfDifficultyOfPlanting.english;
    this.navData.content.filipino =
      this.data.levelOfDifficultyOfPlanting.filipino;
  }
  onClickBestTimeToPlant() {
    this.navData.title = 'Best Time to Plant';
    this.navData.content.english = this.data.bestTimeToPlant.english;
    this.navData.content.filipino = this.data.bestTimeToPlant.filipino;
    this.navData.img = this.data.images.bestTimeToPlantImg;
  }
  onClickTips() {
    this.navData.title = 'Tips to have a good harvest';
    this.navData.content.english = this.data.tips.english;
    this.navData.content.filipino = this.data.tips.filipino;
    this.navData.img = this.data.images.tipsImg;
  }
}
