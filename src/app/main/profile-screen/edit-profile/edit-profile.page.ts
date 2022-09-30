import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  constructor(private alertCtrl: AlertController) {}

  ngOnInit() {}
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
            console.log(form);
          },
        },
      ],
    });
    alert.present();
  }
}
