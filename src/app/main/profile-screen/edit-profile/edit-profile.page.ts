import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
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

import {
  AlertController,
  LoadingController,
  NavController,
} from '@ionic/angular';
import { AuthPageService } from 'src/app/auth-page/auth-page.service';
import { MainService } from '../../main.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  user: User;
  allUsers: Array<User>;
  selectedImage;
  imageId;
  imageFileChoose;
  constructor(
    private alertCtrl: AlertController,
    private mainService: MainService,
    private http: HttpClient,
    private loadingCtrl: LoadingController,
    private navController: NavController,
    private authSrvc: AuthPageService,
    private storage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.mainService.fetchUsers().subscribe((users) => {
      const currentUser = users.filter(
        (user) => user.userId === this.authSrvc.userLoginLocalId
      );
      this.user = currentUser[0];
    });
  }

  ionViewWillEnter() {
    this.mainService.fetchUsers().subscribe((users) => {
      const currentUser = users.filter(
        (user) => user.userId === this.authSrvc.userLoginLocalId
      );
      this.user = currentUser[0];
    });
  }

  async onSubmit(form: NgForm) {
    const alert = await this.alertCtrl.create({
      header: 'Update',
      message: 'Do you want to update your personal data?',
      buttons: [
        {
          text: 'No',
          handler: () => {},
        },
        {
          text: 'Yes',
          handler: async () => {
            if (this.imageFileChoose) {
              //add image in database

              const promise = new Promise(async (resolve, reject) => {
                await this.uploadImage(this.imageFileChoose);
                resolve('done');
              });

              promise.then((value) => {
                const storage = firebase.storage();
                storage
                  .ref(`Avatar/${this.imageId}`)
                  .getDownloadURL()
                  .then((url) => {
                    this.mainService.updateUser(
                      this.authSrvc.userLoginLocalId,
                      url
                    );
                  });
              });
            }

            //show loading message
            const loading = await this.loadingCtrl.create({
              message: 'Updating...',
              duration: 1000,
            });
            await loading.present();

            this.http
              .put(
                `https://agri-app-96063-default-rtdb.firebaseio.com/users/${this.user.id}.json`,
                {
                  ...form.value,
                  userId: this.user.userId,
                  imgUrl: this.user.imgUrl,
                }
              )
              .subscribe((response) => {
                this.mainService.setCurrentUser({
                  ...form.value,
                  userId: this.user.userId,
                  imgUrl: this.user.imgUrl,
                });
                this.user = {
                  ...form.value,
                  userId: this.user.userId,
                  imgUrl: this.user.imgUrl,
                };
                this.loadingCtrl.dismiss();
              });
          },
        },
      ],
    });
    alert.present();
  }
  backBtnHandler() {
    this.navController.navigateBack('/main/tabs/profile');
  }
  onClickEditPic() {
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
          this.imageFileChoose = imageFile;
          this.selectedImage = image.dataUrl;
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

  async uploadImage(itemBlob) {
    const fileBlob = itemBlob;
    const code =
      Math.random() * 1000 + Math.random() * 1000 + Math.random() * 100;
    const id = this.user.userId + code;
    this.imageId = id;
    this.storage.upload(`Avatar/${id}`, fileBlob);
  }
}
