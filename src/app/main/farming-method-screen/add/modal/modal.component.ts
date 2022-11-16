/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private addService: AddService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.isHaveTitleandHectares = this.addService.getIsHaveNameAndHectares();
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    if (
      this.agriDetails.name &&
      this.agriDetails.hectares &&
      this.farmingMethod.title &&
      this.farmingMethod.message
    ) {
      this.addService.addMethod(this.farmingMethod);

      if (!this.isHaveTitleandHectares) {
        this.addService.setNameAndHectares(
          this.agriDetails.name,
          this.agriDetails.hectares
        );
      }

      return this.modalCtrl.dismiss(this._name, 'confirm');
    }
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
