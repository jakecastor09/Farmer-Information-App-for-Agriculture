import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { timer } from 'rxjs';

import { AuthPageService } from '../auth-page.service';
import { AuthResponseData } from '../auth-page.service';
import { HttpClient } from '@angular/common/http';
import { MainService } from 'src/app/main/main.service';
import { HomeCropsService } from 'src/app/main/home-screen/home-crops.service';
import { HomeLivestockService } from 'src/app/main/home-screen/home-livestock.service';
import { UserSelectedCropsAndLivestock } from 'src/app/main/userSelectedCropsAndLivestock.model';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  loaded: boolean;
  userLoginLocalId = null;
  userSelectedCropsAndLivestock: UserSelectedCropsAndLivestock;
  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private authService: AuthPageService,
    private loadingCtrl: LoadingController,
    private http: HttpClient,
    private mainService: MainService,
    private homeCropsService: HomeCropsService,
    private homeLivestockService: HomeLivestockService
  ) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const { email, password } = form.value;
    //Send a request to firebase
    this.authService.login(email, password).subscribe(
      async (response: AuthResponseData) => {
        console.log('Log in ' + response.localId);

        await this.authService.setUserId(response.localId);

        //loop then pass user current data
        const currentUser = this.mainService.getCurrentUser(response.localId);

        await this.mainService.setCurrentUser(currentUser);

        const allCrops = this.mainService.getAllCropsData();
        const allLivestock = this.mainService.getAllLivestockData();
        console.log(response.localId);

        //get Single userCropsandlivestock

        await this.mainService
          .getOneUserSelectedCropsAndLivestock(response.localId)
          .subscribe((data) => {
            const userSelectedCrops = data.crops;
            //assign user selected livestock to the variable userSelectedlivestock
            const userSelectedLivestock = data.livestock;

            //get the selected crops

            const selectedCropsData = allCrops.filter((item) =>
              userSelectedCrops.includes(item.name)
            );

            const selectedLivestockData = allLivestock.filter((item) =>
              userSelectedLivestock.includes(item.name)
            );

            //Add the selected crops and livestock
            this.homeCropsService.addCropsData(selectedCropsData);
            this.homeLivestockService.addLivestockData(selectedLivestockData);
          });

        //assign user selected crops to the variable userSelectedCrops

        // const allCropsAndLivestockSelected =
        //   this.mainService.getCropsAndLivestockSelected();

        // const userCropsAndLivestockSelected = allCropsAndLivestockSelected.find(
        //   (item) => item.userId === this.mainService.getUser().userId
        // );
        // console.log('@@' + userCropsAndLivestockSelected);
        // const userCropsNameSelected = userCropsAndLivestockSelected.crops;
        // const userLivestockNameSelected =
        //   userCropsAndLivestockSelected.livestock;

        // const cropsData = allCrops.filter(
        //   (item) => userCropsNameSelected[item.name]
        // );

        // const livestockData = allLivestock.filter(
        //   (item) => userLivestockNameSelected[item.name]
        // );

        // console.log('Crops Data ' + cropsData);

        //show loading message
        const loading = await this.loadingCtrl.create({
          message: 'Login Successfully',
          duration: 1000,
        });
        await loading.present();
        //wait the loading before directing to add image page
        setTimeout(() => {
          this.router.navigate(['/main/tabs/home']);
        }, 1000);
      },
      (error) => {
        const { message } = error.error.error;
        const errorMessage = message.replaceAll('_', ' ');
        // error message
        if (message === 'EMAIL_NOT_FOUND') {
          this.showAlert(
            errorMessage,
            'Email address not found Please create an account before logging in.'
          );
        }
        if (message === 'INVALID_PASSWORD') {
          this.showAlert(
            errorMessage,
            'Your password is incorrect. Please try again.'
          );
        }
        if (message === 'USER_DISABLED') {
          this.showAlert(
            errorMessage,
            'Your account has been disabled by the admin.'
          );
        }
      }
    );
  }

  private showAlert(header, message) {
    this.alertCtrl
      .create({
        header,
        message,
        buttons: ['Okay'],
      })
      .then((alertEl) => alertEl.present());
  }
}
