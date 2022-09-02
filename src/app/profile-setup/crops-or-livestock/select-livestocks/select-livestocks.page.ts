import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeLivestockService } from 'src/app/main/home-screen/home-livestock.service';

@Component({
  selector: 'app-select-livestocks',
  templateUrl: './select-livestocks.page.html',
  styleUrls: ['./select-livestocks.page.scss'],
})
export class SelectLivestocksPage implements OnInit {
  livestocks;
  selectedLivestock = {};
  constructor(
    private http: HttpClient,
    private router: Router,
    private homeLivestockSvc: HomeLivestockService
  ) {}

  ngOnInit() {
    this.http
      .get('https://agri-app-96063-default-rtdb.firebaseio.com/livestock.json')
      .subscribe((response) => {
        this.livestocks = response;
      });
  }
  buttonClickHandler() {
    this.router.navigateByUrl(
      '/profile-setup/crops-or-livestock/finished-setup'
    );
    const userLivestockSelected = this.livestocks.filter((item) => {
      if (this.selectedLivestock[item.name]) {
        return item;
      }
    });
    this.homeLivestockSvc.addLivestockData(userLivestockSelected);
  }
  selectLivestockHandlerClick(name: string) {
    this.selectedLivestock[name] = !this.selectedLivestock[name];
  }
}
