import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AuthPageService } from 'src/app/auth-page/auth-page.service';
import { MainService } from '../../main.service';
import { User } from '../../user.model';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import firebase from 'firebase/compat/app';
import { CommunityService } from '../community.service';
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
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  title = '';
  message = '';
  image = '';
  selectedImage;
  user: User;
  imageId;
  imageFileChoose;
  allImageSelected = [];
  allImageId = [];
  allImageFileChoose = [];

  constructor(
    private router: Router,
    private mainService: MainService,
    private authSrvc: AuthPageService,
    private storage: AngularFireStorage,
    private route: Router,
    private communitySrvc: CommunityService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.mainService.fetchUsers().subscribe((users) => {
      const currentUser = users.filter(
        (user) => user.userId === this.authSrvc.userLoginLocalId
      );
      this.user = currentUser[0];
      console.log(this.user);
    });
  }
  ionViewWillEnter() {
    this.mainService.fetchUsers().subscribe((users) => {
      const currentUser = users.filter(
        (user) => user.userId === this.authSrvc.userLoginLocalId
      );
      this.user = currentUser[0];
      console.log(this.user);
    });
  }

  async onClickBtn() {
    const userFullName =
      this.user.firstName.charAt(0).toUpperCase() +
      this.user.firstName.slice(1) +
      ' ' +
      this.user.lastName.charAt(0).toUpperCase() +
      this.user.lastName.slice(1);
    const userImg = this.user.imgUrl;
    const allImageSelectedUrl = [];

    if (this.allImageFileChoose.length >= 1) {
      this.allImageFileChoose.map((item) => this.uploadImage(item));

      setTimeout(() => {
        this.allImageId.map((id, key) => {
          const storage = firebase.storage();
          storage
            .ref(`community-post/${id}`)
            .getDownloadURL()
            .then((url) => {
              allImageSelectedUrl.push(url);
            })
            .then(() => {
              if (key === this.allImageId.length - 1) {
                this.communitySrvc
                  .addPost(
                    this.message,
                    allImageSelectedUrl,
                    [],
                    this.user.userId,
                    userFullName,
                    new Date(),
                    userImg
                  )
                  .subscribe(async () => {
                    this.router.navigate(['/main/tabs/community']);
                  });
              }
            });
        });
      }, 2000);
    } else {
      this.communitySrvc
        .addPost(
          this.message,
          allImageSelectedUrl,
          [],
          this.user.userId,
          userFullName,
          new Date(),
          userImg
        )
        .subscribe(() => {
          this.router.navigate(['/main/tabs/community']);
        });
    }
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
          this.allImageFileChoose.push(imageFile);
          this.allImageSelected.push(this.selectedImage);
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
    this.allImageId.push(this.imageId);
    this.storage.upload(`community-post/${id}`, fileBlob);
  }

  deleteImgClickHandler(index: number) {
    this.allImageSelected = [
      ...this.allImageSelected.filter((item, i) => index !== i),
    ];
    this.allImageId = [...this.allImageId.filter((id, i) => index !== i)];
  }
}
