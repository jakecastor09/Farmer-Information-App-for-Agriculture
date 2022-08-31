import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crops-or-livestock',
  templateUrl: './crops-or-livestock.page.html',
  styleUrls: ['./crops-or-livestock.page.scss'],
})
export class CropsOrLivestockPage implements OnInit {
  isCropsSelected = false;
  isLivestockSelected = false;

  constructor(private route: Router) {}

  ngOnInit() {}

  cropsHandlerClick() {
    this.isCropsSelected = !this.isCropsSelected;
  }
  livestockHandlerClick() {
    this.isLivestockSelected = !this.isLivestockSelected;
  }
  buttonClickHandler() {
    this.route.navigateByUrl('/profile-setup/crops-or-livestock/select-crops');
  }
}
