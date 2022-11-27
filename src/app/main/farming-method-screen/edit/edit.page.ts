import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddService } from '../add/add.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import firebase from 'firebase/compat/app';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { LoadingController } from '@ionic/angular';
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
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  title: string;
  message: string;
  selectedImage: string;
  id: number;

  imageId;
  imageFileChoose;
  constructor(
    private addService: AddService,
    private route: ActivatedRoute,
    private router: Router,
    private loadingCtrl: LoadingController,
    private storage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = +paramMap.get('editId');
      const { title, message, img } = this.addService.getOneMethod(this.id)[0];
      this.title = title;
      this.message = message;
      this.selectedImage = img;
    });
  }

  cancel() {
    this.router.navigateByUrl('/main/tabs/farming-method/add');
  }
  confirm() {
    this.addService.updateMethod(
      this.id,
      this.title,
      this.message,
      this.imageFileChoose
    );
    this.router.navigateByUrl('/main/tabs/farming-method/add');
  }

  addImageClickHandler() {
    Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      source: CameraSource.Prompt,
      correctOrientation: true,

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
