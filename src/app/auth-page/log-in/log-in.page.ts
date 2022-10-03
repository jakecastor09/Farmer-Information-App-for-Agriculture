import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { timer } from 'rxjs';

import { AuthPageService } from '../auth-page.service';
import { AuthResponseData } from '../auth-page.service';
import { HttpClient } from '@angular/common/http';
import { MainService } from 'src/app/main/main.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  loaded: boolean;
  userIdName = null;
  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private authService: AuthPageService,
    private loadingCtrl: LoadingController,
    private http: HttpClient,
    private mainService: MainService
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
        console.log(response);
        this.authService.setUserId(response.localId);
        //request all crops data and livestock data
        await this.http
          .get('https://agri-app-96063-default-rtdb.firebaseio.com/crops.json')
          .subscribe((resCropsData) => {
            this.mainService.requestCropsData(resCropsData);
          });
        await this.http
          .get(
            'https://agri-app-96063-default-rtdb.firebaseio.com/livestock.json'
          )
          .subscribe((resLivestockData) => {
            this.mainService.requestLivestockData(resLivestockData);
          });

        //set All users

        this.mainService
          .fetchUsers()
          .subscribe((users) => this.mainService.setAllUsers(users));

        // await this.http
        //   .get(
        //     `https://agri-app-96063-default-rtdb.firebaseio.com/users/-NDQmuESMzuSr8P78iTX.json`
        //   )
        //   .subscribe((data) => {
        //     console.log(JSON.stringify(data));
        //   });

        //show loading message
        const loading = await this.loadingCtrl.create({
          message: 'Login Successfully',
          duration: 1000,
        });
        await loading.present();
        //wait the loading before directing to add image page
        setTimeout(() => {
          this.router.navigate(['/profile-setup/add-image']);
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
