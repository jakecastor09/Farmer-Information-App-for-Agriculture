import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main/main.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient,
    private mainService: MainService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    //request all crops data and livestock data
    this.http
      .get('https://agri-app-96063-default-rtdb.firebaseio.com/crops.json')
      .subscribe((resCropsData) => {
        this.mainService.requestCropsData(resCropsData);
      });
    this.http
      .get('https://agri-app-96063-default-rtdb.firebaseio.com/livestock.json')
      .subscribe((resLivestockData) => {
        this.mainService.requestLivestockData(resLivestockData);
      });

    this.mainService.fetchWeatherData();
    this.mainService.fetchUserSelectedCropsAndLivestock().subscribe();

    //Set all users
    this.mainService
      .fetchUsers()
      .subscribe((users) => this.mainService.setAllUsers(users));
  }
  registerHandlerClick() {
    this.router.navigate(['/auth-page/sign-up']);
  }
  loginHandlerClick() {
    this.router.navigate(['/auth-page/log-in']);
  }
}
