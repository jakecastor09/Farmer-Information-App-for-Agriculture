import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FarmingMethodService } from '../farming-method.service';
import { AddService } from './add.service';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  publishData;

  constructor(
    private modalCtrl: ModalController,
    private addService: AddService,
    private router: Router,
    private zone: NgZone,
    private farmingMethodService: FarmingMethodService
  ) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
    });

    modal.present();
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.publishData = this.addService.getAllMethod();
  }
  ionViewWillEnter() {
    this.publishData = this.addService.getAllMethod();
  }

  onEditClickHandler(id: number) {
    this.router.navigateByUrl('/main/tabs/farming-method/edit/' + id);
  }
  onDeleteClickHandler(id: number) {
    this.addService.removeMethod(id);
    this.zone.run(() => {
      this.publishData = this.addService.getAllMethod();
    });
  }
  onPublishClickHandler() {
    this.farmingMethodService.addFarmingMethod(this.publishData);
  }
  onRemoveClickHandler() {
    this.addService.resetFarmingMethod();
    this.zone.run(() => {
      this.publishData = this.addService.getAllMethod();
    });
  }
}
