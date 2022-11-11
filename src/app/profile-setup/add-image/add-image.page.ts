import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthPageService } from 'src/app/auth-page/auth-page.service';
import { MainService } from 'src/app/main/main.service';
import { User } from 'src/app/main/user.model';
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
  selector: 'app-add-image',
  templateUrl: './add-image.page.html',
  styleUrls: ['./add-image.page.scss'],
})
export class AddImagePage implements OnInit {
  user: User;
  userLoginLocalId: string;
  imageFileChoose;
  hasPickedImage = false;
  imageId;
  imagePath;
  avatarPath: string;
  isAvatarSelected = false;

  constructor(
    private mainService: MainService,
    private authService: AuthPageService,
    private route: Router,
    private loadingCtrl: LoadingController,
    private storage: AngularFireStorage,
    private authSrvc: AuthPageService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    //getting user login local id
    this.userLoginLocalId = this.authService.userLoginLocalId;
    //get the user who logining
    this.user = this.mainService.getCurrentUser(this.userLoginLocalId);
    console.log('Add Image ' + this.user);
    //set the current user to the user who login
    this.mainService.setCurrentUser(this.user);
  }
  doneClickHandler() {
    if (!this.isAvatarSelected) {
      //add image in database
      this.uploadImage(this.imageFileChoose);

      setTimeout(() => {
        const storage = firebase.storage();
        storage
          .ref(`Avatar/${this.imageId}`)
          .getDownloadURL()
          .then((url) => {
            this.mainService.updateUser(this.authService.userLoginLocalId, url);
          });
        this.route.navigateByUrl('/profile-setup/crops-or-livestock');
      }, 1500);
    } else {
      setTimeout(() => {
        const storage = firebase.storage();
        storage
          .ref(`user-avatar/${this.avatarPath}`)
          .getDownloadURL()
          .then((url) => {
            this.mainService.updateUser(this.authService.userLoginLocalId, url);
          });
        this.route.navigateByUrl('/profile-setup/crops-or-livestock');
      }, 1500);
    }
  }

  onImagePicked(imageData: string) {
    try {
      const imageFile = base64toBlob(
        imageData.replace('data:image/jpeg;base64,', ''),
        'image/jpeg'
      );
      this.imageFileChoose = imageFile;
      this.isAvatarSelected = false;
      this.hasPickedImage = true;
    } catch (error) {
      //prompt the user that the image provided can't use
      console.log(error);
      return;
    }
  }

  onAvatarPicked(imageData: string) {
    if (imageData === 'avatar-0') {
      this.hasPickedImage = false;
      this.isAvatarSelected = false;

      return;
    }
    this.isAvatarSelected = true;
    this.hasPickedImage = true;
    this.avatarPath = imageData;
  }

  async uploadImage(itemBlob) {
    const loading = await this.loadingCtrl.create({
      message: 'Create your avatar.',
      backdropDismiss: false,
      animated: true,
    });
    await loading.present();

    const fileBlob = itemBlob;
    const code =
      Math.random() * 1000 + Math.random() * 1000 + Math.random() * 100;
    const id = this.user.userId + code;
    this.imageId = id;
    const uploadTask = this.storage.upload(`Avatar/${id}`, fileBlob);

    uploadTask.then((res) => loading.dismiss());
  }
}
