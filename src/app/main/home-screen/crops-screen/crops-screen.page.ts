import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crops-screen',
  templateUrl: './crops-screen.page.html',
  styleUrls: ['./crops-screen.page.scss'],
})
export class CropsScreenPage implements OnInit {
  isSelectedWaterMelon = false;
  isSelectedBanana = false;
  isSelectedMelon = false;
  isSelectedRice = false;
  isSelectedEggPlant = false;
  isSelectedBeans = false;
  isSelectedPig = false;
  isSelectedChicken = false;
  isSelectedDuck = false;

  constructor() {}
  ngOnInit() {}

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
}
