import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthPageService } from '../auth-page.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private authService: AuthPageService
  ) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const { email, password } = form.value;
    //Send a request to firebase
    this.authService.login(email, password).subscribe(
      (response) => {
        this.router.navigate(['/profile-setup/add-image']);
      },
      (error) => {
        const { message } = error.error.error;
        const errorMessage = message.replaceAll('_', ' ');
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
