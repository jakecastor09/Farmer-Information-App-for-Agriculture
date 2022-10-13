import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HomeCropsService } from '../../home-screen/home-crops.service';
import { HomeLivestockService } from '../../home-screen/home-livestock.service';
import { MainService } from '../../main.service';
import { User } from '../../user.model';
@Component({
  selector: 'app-agriculture',
  templateUrl: './agriculture.page.html',
  styleUrls: ['./agriculture.page.scss'],
})
export class AgriculturePage implements OnInit {
  userCurrentSelectedCrops = [];
  userCurrentSelectedLivestock = [];
  allAgri = [];

  user: User;

  isSelectedAgri = {};

  constructor(
    private homeCropsService: HomeCropsService,
    private homeLivestockService: HomeLivestockService,
    private mainService: MainService,
    private navController: NavController
  ) {}

  ngOnInit() {
    //get all crops
    this.mainService.getAllCropsData()?.map((item) => this.allAgri.push(item));
    //get all livestock
    this.mainService
      .getAllLivestockData()
      ?.map((item) => this.allAgri.push(item));

    //get selected crops
    this.userCurrentSelectedCrops = this.homeCropsService.getCropsData();
    //get selected crops
    this.userCurrentSelectedLivestock =
      this.homeLivestockService.getLivestockData();
    console.log(this.userCurrentSelectedCrops);

    //knowing the selected item and not selected
    this.allAgri?.forEach((item) => (this.isSelectedAgri[item.name] = false));

    this.userCurrentSelectedCrops?.forEach(
      (item) => (this.isSelectedAgri[item.name] = true)
    );

    this.userCurrentSelectedLivestock?.forEach(
      (item) => (this.isSelectedAgri[item.name] = true)
    );
    console.log(this.isSelectedAgri);
  }

  removeCropsClickHandler(cropsName: string) {
    this.userCurrentSelectedCrops = this.userCurrentSelectedCrops.filter(
      (item) => item.name !== cropsName
    );
    this.isSelectedAgri[cropsName] = false;
  }
  removeLivestockClickHandler(livestockName: string) {
    this.userCurrentSelectedLivestock =
      this.userCurrentSelectedLivestock.filter(
        (item) => item.name !== livestockName
      );
    this.isSelectedAgri[livestockName] = false;
  }
  addClickHandler(agri) {
    switch (agri.type) {
      case 'crops':
        this.userCurrentSelectedCrops = [
          ...this.userCurrentSelectedCrops,
          agri,
        ];
        this.isSelectedAgri[agri.name] = true;
        break;
      case 'livestocks':
        this.userCurrentSelectedLivestock = [
          ...this.userCurrentSelectedLivestock,
          agri,
        ];
        this.isSelectedAgri[agri.name] = true;

        break;
    }
  }
  update() {
    this.homeCropsService.addCropsData(this.userCurrentSelectedCrops);
    this.homeLivestockService.addLivestockData(
      this.userCurrentSelectedLivestock
    );

    const userCropsSelected = this.userCurrentSelectedCrops.map(
      (crop) => crop.name
    );
    const userLivestockSelected = this.userCurrentSelectedLivestock.map(
      (livestock) => livestock.name
    );

    // const allCropsAndLivestockSelected =
    //   this.mainService.getCropsAndLivestockSelected();

    // const userCropsAndLivestockSelected = allCropsAndLivestockSelected.find(
    //   (item) => item.userId === this.mainService.getUser().userId
    // );

    // const newCropsLivestock = {
    //   crops: userCropsSelected,
    //   livestock: userLivestockSelected,
    //   userId: this.mainService.getUser().userId,
    // };

    // console.log(newCropsLivestock);
    // console.log(userCropsAndLivestockSelected);

    // //Update userCropsAndLivestocks
    // this.mainService.updateCropsLivestock(
    //   userCropsAndLivestockSelected.cropsLivestockId,
    //   newCropsLivestock
    // );

    this.navController.navigateBack('/main/tabs/profile');
  }
  cancel() {
    this.navController.navigateBack('/main/tabs/profile');
  }
}
