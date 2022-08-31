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
  constructor(private route: Router, private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('https://agri-app-96063-default-rtdb.firebaseio.com/crops.json')
      .subscribe((response) => {
        this.crops = response;
        console.log(this.crops);
      });
  }
  buttonClickHandler() {
    this.route.navigateByUrl(
      '/profile-setup/crops-or-livestock/select-livestocks'
    );
  }
}
