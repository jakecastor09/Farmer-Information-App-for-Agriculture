/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UiSharedModule } from 'src/app/UI/ui-shared/ui-shared.module';
import { AddService } from '../add.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  _name: string;
  isHaveTitleandHectares = false;
  agriDetails = {
    hectares: 0,
    name: '',
  };
  farmingMethod = {
    title: '',
    message: '',
    img: '',
  };

  constructor(
    private modalCtrl: ModalController,
    private addService: AddService
  ) {}
  ngOnInit(): void {
    this.isHaveTitleandHectares = this.addService.getIsHaveNameAndHectares();
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    this.addService.addMethod(this.farmingMethod);

    if (!this.isHaveTitleandHectares) {
      this.addService.setHectares(this.agriDetails.hectares);
      this.addService.setNameOfCropsOrLivestock(this.agriDetails.name);
    }

    return this.modalCtrl.dismiss(this._name, 'confirm');
  }

  btnAdd() {
    this.agriDetails.hectares++;
  }
  btnMinus() {
    if (this.agriDetails.hectares === 0) {
      return;
    }
    this.agriDetails.hectares--;
  }
}
