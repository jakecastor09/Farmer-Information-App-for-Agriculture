import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { MainService } from '../../main.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  user: User;
  allUsers: Array<User>;
  constructor(
    private alertCtrl: AlertController,
    private mainService: MainService,
    private http: HttpClient,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.mainService.fetchUsers().subscribe((data) => (this.allUsers = data));
    this.user = this.mainService.getUser();
  }

  ionViewWillEnter() {
    this.user = this.mainService.getUser();
  }

  async onSubmit(form: NgForm) {
    const alert = await this.alertCtrl.create({
      header: 'Update',
      message: 'Do you want to update your personal data?',
      buttons: [
        {
          text: 'No',
          handler: () => {},
        },
        {
          text: 'Yes',
          handler: async () => {
            const currentUser = this.allUsers.find(
              (user) => user.userId === this.user.userId
            );

            //show loading message
            const loading = await this.loadingCtrl.create({
              message: 'Updating...',
              duration: 1000,
            });
            await loading.present();

            this.http
              .put(
                `https://agri-app-96063-default-rtdb.firebaseio.com/users/${currentUser.id}.json`,
                { ...form.value, userId: this.user.userId }
              )
              .subscribe((response) => {
                this.mainService.setCurrentUser({
                  ...form.value,
                  userId: this.user.userId,
                });
                this.user = { ...form.value, userId: this.user.userId };
                this.loadingCtrl.dismiss();
              });
          },
        },
      ],
    });
    alert.present();
  }
}
