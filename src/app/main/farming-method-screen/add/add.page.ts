import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddService } from './add.service';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  message =
    'This modal example uses the modalController to present and dismiss modals.';
  publishData;

  constructor(
    private modalCtrl: ModalController,
    private addService: AddService
  ) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
  }

  ngOnInit() {}
  ionViewDidEnter() {
    this.publishData = this.addService.getData();
    console.log(this.publishData);
  }
}
