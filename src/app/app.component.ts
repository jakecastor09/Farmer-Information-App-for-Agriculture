import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LogoScreenPage } from './logo-screen/logo-screen.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private modalController: ModalController) {
    this.logo();
  }
  async logo() {
    const modal = await this.modalController.create({
      component: LogoScreenPage,
    });
    return await modal.present();
  }
}
