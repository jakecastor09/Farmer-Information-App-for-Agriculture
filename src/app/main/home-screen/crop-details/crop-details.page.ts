import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FarmingMethodService } from '../../farming-method-screen/farming-method.service';
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
  navIcon = {
    item1: '',
    item2: '',
    item3: '',
    item4: '',
    item5: '',
  };
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
    private route: ActivatedRoute,
    private farmingMethodService: FarmingMethodService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (paramMap.get('cropAndLivestocksDetailsId').includes('crop')) {
        this.data = this.cropsService.getCropData(
          paramMap.get('cropAndLivestocksDetailsId')
        );
        console.log(this.data);
      }
      if (paramMap.get('cropAndLivestocksDetailsId').includes('livestock')) {
        this.data = this.livestockService.getOneLivestockData(
          paramMap.get('cropAndLivestocksDetailsId')
        );
      }
    });

    if (this.data.type === 'crops') {
      this.color = this.cropsService.getCropsColor(this.data.name);
      this.navIcon.item1 = 'assets/img/details/crops/icons/best.png';
      this.navIcon.item2 = 'assets/img/details/crops/icons/fertilizer.png';
      this.navIcon.item3 = 'assets/img/details/crops/icons/lifeSpan.png';
      this.navIcon.item4 = 'assets/img/details/crops/icons/level.png';
      this.navIcon.item5 = 'assets/img/details/crops/icons/tips.png';
    }

    if (this.data.type === 'livestocks') {
      this.color = this.livestockService.getLivestockColor(this.data.name);
      this.navIcon.item1 =
        'assets/img/details/livestocks/icons/waysToRaise.png';
      this.navIcon.item2 = 'assets/img/details/livestocks/icons/food.png';
      this.navIcon.item3 = 'assets/img/details/livestocks/icons/lifeSpan.png';
      this.navIcon.item4 = 'assets/img/details/livestocks/icons/level.png';
      this.navIcon.item5 = 'assets/img/details/livestocks/icons/tips.png';
    }
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
    this.navData.title = this.data.item1.title;
    this.navData.content.english = this.data.item1.english;
    this.navData.content.filipino = this.data.item1.filipino;
    this.navData.img = this.data.images.descriptionImg;
    this.navData.icon = this.data.icon;
  }
  onClickItem1() {
    this.navData.title = this.data.item2.title;
    this.navData.content.english = this.data.item2.english;
    this.navData.content.filipino = this.data.item2.filipino;
  }
  onClickItem2() {
    this.navData.title = this.data.item3.title;
    this.navData.content.english = this.data.item3.english;
    this.navData.content.filipino = this.data.item3.filipino;
  }
  onClickItem3() {
    this.navData.title = this.data.item4.title;
    this.navData.content.english = this.data.item4.english;
    this.navData.content.filipino = this.data.item4.filipino;
  }
  onClickItem4() {
    this.navData.title = this.data.item5.title;
    this.navData.content.english = this.data.item5.english;
    this.navData.content.filipino = this.data.item5.filipino;
  }

  onClickItem5() {
    this.navData.title = this.data.item6.title;
    this.navData.content.english = this.data.item6.english;
    this.navData.content.filipino = this.data.item6.filipino;
  }
}
