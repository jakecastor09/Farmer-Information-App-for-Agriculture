import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  name: string;
  hectaresCount = 0;
  hectares = '';

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

  btnAdd() {
    this.hectaresCount++;

    this.hectares = this.hectaresCount + ' ha';
  }
  btnMinus() {
    if (this.hectaresCount === 0) {
      return;
    }

    this.hectaresCount--;
    this.hectares = this.hectaresCount + ' ha';
  }
}
