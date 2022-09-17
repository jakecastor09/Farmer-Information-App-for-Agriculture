import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthPageService } from '../auth-page.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  constructor(
    private authPageServie: AuthPageService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    const loadingCtrl = this.loadingCtrl
      .create({
        message: 'Loading....',
      })
      .then((loading) => {
        loading.present();

        if (!form.valid) {
          return;
        }
        const { firstName, lastName, email, password } = form.value;

        //Send a request to firebase
        this.authPageServie.signup(email, password).subscribe(
          (response) => {
            loading.dismiss();
            this.showAlert(
              'Succesfully created an account!',
              'Create Account Successful',
              false
            );
          },
          (error) => {
            loading.dismiss();
            const { message } = error.error.error;
            if (message === 'EMAIL_EXISTS') {
              this.showAlert(
                'Email is already exists!',
                'Failed To Sign up',
                true
              );
            }
          }
        );
      });
  }
  private showAlert(message: string, header: string, isError: boolean) {
    if (!isError) {
      this.alertCtrl
        .create({
          header,
          message,
          buttons: [
            {
              text: 'Go to Login',
              handler: () => {
                this.router.navigateByUrl('/auth-page/log-in');
              },
            },
          ],
        })
        .then((alertEl) => alertEl.present());
    } else {
      //if error message
      this.alertCtrl
        .create({
          header,
          message,
          buttons: ['Try Again!'],
        })
        .then((alertEl) => alertEl.present());
    }
  }
}
