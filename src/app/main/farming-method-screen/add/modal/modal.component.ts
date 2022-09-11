import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UiSharedModule } from 'src/app/UI/ui-shared/ui-shared.module';
import { AddService } from '../add.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  name: string;

  farmingMethod = {
    hectares: 0,
    cropsLivestockName: '',
    title: '',
    message: '',
  };

  constructor(
    private modalCtrl: ModalController,
    private addService: AddService
  ) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    this.addService.addData(this.farmingMethod);
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

  btnAdd() {
    this.farmingMethod.hectares++;
  }
  btnMinus() {
    if (this.farmingMethod.hectares === 0) {
      return;
    }
    this.farmingMethod.hectares--;
  }
}
