/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { UiSharedModule } from 'src/app/UI/ui-shared/ui-shared.module';
import { AddService } from '../add.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import firebase from 'firebase/compat/app';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

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
    img: Blob,
  };

  imageId;
  imageFileChoose;
  selectedImage;

  constructor(
    private modalCtrl: ModalController,
    private addService: AddService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private storage: AngularFireStorage
  ) {}
  ngOnInit(): void {
    this.isHaveTitleandHectares = this.addService.getIsHaveNameAndHectares();
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    if (this.farmingMethod.title && this.farmingMethod.message) {
      this.farmingMethod.img = this.selectedImage;
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

  addImageClickHandler() {
    Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      source: CameraSource.Prompt,
      correctOrientation: true,
      height: 200,
      width: 200,
      resultType: CameraResultType.DataUrl,
    })
      .then((image) => {
        try {
          const imageFile = base64toBlob(
            image.dataUrl.replace('data:image/jpeg;base64,', ''),
            'image/jpeg'
          );
          this.selectedImage = image.dataUrl;
          this.imageFileChoose = imageFile;
        } catch (error) {
          //prompt the user that the image provided can't use
          console.log(error);
          return;
        }
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  }

  deleteImgClickHandler() {
    this.selectedImage = '';
  }
}
