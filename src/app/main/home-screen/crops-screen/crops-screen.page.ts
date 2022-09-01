import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-crops-screen',
  templateUrl: './crops-screen.page.html',
  styleUrls: ['./crops-screen.page.scss'],
})
export class CropsScreenPage implements OnInit {
  selectedLivestocks = [];
  firstName: string;
  selectedCrops = [];
  isSelectedWaterMelon;
  isSelectedBanana;
  isSelectedMelon;
  isSelectedRice;
  isSelectedEggPlant;
  isSelectedBeans;
  isSelectedPig;
  isSelectedChicken;
  isSelectedDuck;

  constructor(public apiService: ApiService, public router: Router) {}
  ngOnInit() {
    this.getFarmer();
  }

  onClickWaterMelon() {
    this.isSelectedWaterMelon = !this.isSelectedWaterMelon;
  }
  onClickBanana() {
    this.isSelectedBanana = !this.isSelectedBanana;
  }
  onClickMelon() {
    this.isSelectedMelon = !this.isSelectedMelon;
  }
  onClickRice() {
    this.isSelectedRice = !this.isSelectedRice;
  }
  onClickEggPlant() {
    this.isSelectedEggPlant = !this.isSelectedEggPlant;
  }
  onClickBeans() {
    this.isSelectedBeans = !this.isSelectedBeans;
  }
  onClickPig() {
    this.isSelectedPig = !this.isSelectedPig;
  }
  onClickChicken() {
    this.isSelectedChicken = !this.isSelectedChicken;
  }
  onClickDuck() {
    this.isSelectedDuck = !this.isSelectedDuck;
  }

  onClickBtn() {
    this.router.navigateByUrl('/main/tabs/home');

    const allCrops = [
      { name: 'banana', crop: this.isSelectedBanana },
      { name: 'beans', crop: this.isSelectedBeans },
      { name: 'eggplant', crop: this.isSelectedEggPlant },
      { name: 'melon', crop: this.isSelectedMelon },
      { name: 'watermelon', crop: this.isSelectedWaterMelon },
      { name: 'palay', crop: this.isSelectedRice },
    ];

    const allLivestocks = [
      { name: 'chicken', livestocks: this.isSelectedChicken },
      { name: 'pig', livestocks: this.isSelectedPig },
      { name: 'duck', livestocks: this.isSelectedDuck },
    ];

    allCrops.forEach((item) => {
      if (item.crop) {
        this.selectedCrops.push(item.name);
      }
    });

    allLivestocks.forEach((item) => {
      if (item.livestocks) {
        this.selectedLivestocks.push(item.name);
      }
    });

    this.selectedCrops.forEach((cropName) => {
      this.apiService.addCrops({ cropName }).subscribe(
        (res: any) => {
          console.log('Success ===', res);
        },
        (error: any) => {
          console.log('ERROR ===', error);
        }
      );
    });

    this.selectedLivestocks.forEach((livestocksName) => {
      this.apiService.addLivestocks({ livestocksName }).subscribe(
        (res: any) => {
          console.log('Success ===', res);
        },
        (error: any) => {
          console.log('ERROR ===', error);
        }
      );
    });
  }

  getFarmer() {
    this.apiService.getFirstName().subscribe(
      (res: any) => {
        console.log('SUCCESS ===', res);
        const responseFirstName = res[res.length - 1].firstName;
        this.firstName =
          responseFirstName.charAt(0).toUpperCase() +
          responseFirstName.slice(1);
      },

      (error: any) => {
        console.log('ERROR ===', error);
      }
    );
  }
}
