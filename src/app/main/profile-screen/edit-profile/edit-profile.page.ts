import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
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
    private http: HttpClient
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
          handler: () => {
            const currentUser = this.allUsers.find(
              (user) => user.userId === this.user.userId
            );
            console.log(currentUser);
            console.log(form.value);

            this.http
              .put(
                `https://agri-app-96063-default-rtdb.firebaseio.com/users/${currentUser.id}.json`,
                { ...form.value, userId: this.user.userId }
              )
              .subscribe((response) =>
                console.log('CURRENT USER: ' + currentUser)
              );
          },
        },
      ],
    });
    alert.present();
  }
}
