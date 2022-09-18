import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private addService: AddService,
    private router: Router,
    private zone: NgZone
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

  onEditClickHandler(id: number) {
    this.router.navigateByUrl('/main/tabs/farming-method/edit/' + id);
  }
  onDeleteClickHandler(id: number) {
    this.addService.removeMethod(id);
    this.zone.run(() => {
      this.publishData = this.addService.getData();
    });
  }
}
