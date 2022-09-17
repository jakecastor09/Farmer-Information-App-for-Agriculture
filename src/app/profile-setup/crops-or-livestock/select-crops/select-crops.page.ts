import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HomeCropsService } from 'src/app/main/home-screen/home-crops.service';
import { ProfileSetupService } from '../../profile-setup.service';

@Component({
  selector: 'app-select-crops',
  templateUrl: './select-crops.page.html',
  styleUrls: ['./select-crops.page.scss'],
})
export class SelectCropsPage implements OnInit {
  crops;
  selectedCrops = {};
  constructor(
    private route: Router,
    private http: HttpClient,
    private homeCropSvc: HomeCropsService,
    private profileSetupService: ProfileSetupService
  ) {}

  ngOnInit() {}
  ionViewDidEnter() {
    this.http
      .get('https://agri-app-96063-default-rtdb.firebaseio.com/crops.json')
      .subscribe((response) => {
        this.crops = response;
      });
  }
  buttonClickHandler() {
    if (this.profileSetupService.isLivestockSelected) {
      this.route.navigateByUrl(
        '/profile-setup/crops-or-livestock/select-livestocks'
      );
    } else {
      this.route.navigateByUrl('/main/tabs/home');
    }

    const userCropsSelected = this.crops.filter((item) => {
      if (this.selectedCrops[item.name]) {
        return item;
      }
    });
    this.homeCropSvc.addCropsData(userCropsSelected);
  }
  selectCropHandlerClick(name: string) {
    this.selectedCrops[name] = !this.selectedCrops[name];
  }
}
