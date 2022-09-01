import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-select-crops',
  templateUrl: './select-crops.page.html',
  styleUrls: ['./select-crops.page.scss'],
})
export class SelectCropsPage implements OnInit {
  crops;
  selectedCrops = {};

  constructor(private route: Router, private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('https://agri-app-96063-default-rtdb.firebaseio.com/crops.json')
      .subscribe((response) => {
        this.crops = response;
      });
  }
  buttonClickHandler() {
    this.route.navigateByUrl(
      '/profile-setup/crops-or-livestock/select-livestocks'
    );

    console.log(this.selectedCrops);
  }
  selectCropHandlerClick(name: string) {
    this.selectedCrops[name] = !this.selectedCrops[name];
  }
}
