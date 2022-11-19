import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { FarmingMethodService } from '../farming-method.service';
import { AddService } from './add.service';
import { ModalComponent } from './modal/modal.component';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import firebase from 'firebase/compat/app';

const base64toBlob = (base64Data, contentType) => {
  contentType = contentType || '';
  const sliceSize = 1024;
  const byteCharacters = atob(base64Data);
  const bytesLength = byteCharacters.length;
  const slicesCount = Math.ceil(bytesLength / sliceSize);
  const byteArrays = new Array(slicesCount);

  for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    const begin = sliceIndex * sliceSize;
    const end = Math.min(begin + sliceSize, bytesLength);

    const bytes = new Array(end - begin);
    for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  return new Blob(byteArrays, { type: contentType });
};
@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  publishData;
  imageId;

  constructor(
    private modalCtrl: ModalController,
    private addService: AddService,
    private router: Router,
    private zone: NgZone,
    private farmingMethodService: FarmingMethodService,
    private storage: AngularFireStorage,
    private loadingCtrl: LoadingController
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
  async onPublishClickHandler() {
    const loading = await this.loadingCtrl.create({
      message: 'Pusblishing post. Please wait a second.',
    });

    loading.present();
    console.log(this.publishData);

    const promise = new Promise((resolve, reject) => {
      this.publishData.methods.forEach(async (method, index) => {
        if (method.img) {
          const imageFile = base64toBlob(
            method.img.replace('data:image/jpeg;base64,', ''),
            'image/jpeg'
          );
          this.uploadImage(imageFile);

          resolve('done');
        }
      });
    });

    promise.then((value) => {
      this.publishData.methods.forEach(async (method, index) => {
        if (method.img) {
          const storage = firebase.storage();
          storage
            .ref(`farmingMethod/${this.imageId}`)
            .getDownloadURL()
            .then((url) => {
              method.img = url;
              if (this.publishData.methods.length - 1 === index) {
                this.farmingMethodService
                  .addFarmingMethod(this.publishData)
                  .subscribe(() => {
                    loading.dismiss();
                    this.router.navigateByUrl('/main/tabs/farming-method');
                  });
              }
            });
        }
      });
      console.log(value);
    });

    // else if (this.publishData.methods.length - 1 === index) {
    //   this.farmingMethodService
    //     .addFarmingMethod(this.publishData)
    //     .subscribe(() => {
    //       loading.dismiss();
    //       this.router.navigateByUrl('/main/tabs/farming-method');
    //     });
    // }
  }
  onRemoveClickHandler() {
    this.addService.resetFarmingMethod();
    this.zone.run(() => {
      this.publishData = this.addService.getAllMethod();
    });
  }

  async uploadImage(itemBlob) {
    const fileBlob = itemBlob;
    const code = Math.random().toString(16).slice(2);
    const id = code;
    this.imageId = id;
    this.storage.upload(`farmingMethod/${id}`, fileBlob);
  }
}
