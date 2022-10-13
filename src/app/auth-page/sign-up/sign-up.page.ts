import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { MainService } from 'src/app/main/main.service';
import { AuthPageService } from '../auth-page.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  constructor(
    private authPageService: AuthPageService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private mainService: MainService,
    private authService: AuthPageService
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
        const { email, password } = form.value;

        //Send a request to firebase
        this.authPageService.signup(email, password).subscribe(
          (response) => {
            this.authService.setUserId(response.localId);
            console.log('Sign up ' + response.localId);

            // this.mainService.fetchCropsLivestock();

            // add user
            const { firstName, middleName, lastName, age, birthday, purok } =
              form.value;
            this.mainService
              .addUser(
                response.localId,
                firstName,
                middleName,
                lastName,
                age,
                birthday,
                email,
                purok
              )
              .subscribe(() => {
                //set all user again
                this.mainService
                  .fetchUsers()
                  .subscribe((users) => this.mainService.setAllUsers(users));
                loading.dismiss();
                this.showAlert(
                  'Succesfully created an account!',
                  'Create Account Successfully',
                  false
                );
              });
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
                this.router.navigateByUrl('/profile-setup/add-image');
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
