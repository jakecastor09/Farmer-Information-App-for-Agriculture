import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AuthPageService } from 'src/app/auth-page/auth-page.service';
import { MainService } from '../../main.service';
import { User } from '../../user.model';
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
  title = '';
  message = '';
  image = '';
  selectedImage;
  user: User;
  imageId;
  imageFileChoose;

  constructor(
    private router: Router,
    private mainService: MainService,
    private authSrvc: AuthPageService,
    private storage: AngularFireStorage,
    private route: Router
  ) {}

  ngOnInit() {
    this.mainService.fetchUsers().subscribe((users) => {
      const currentUser = users.filter(
        (user) => user.userId === this.authSrvc.userLoginLocalId
      );
      this.user = currentUser[0];
    });
  }

  onClickBtn() {
    this.uploadImage(this.imageFileChoose);

    setTimeout(() => {
      const storage = firebase.storage();
      storage
        .ref(`Avatar/${this.imageId}`)
        .getDownloadURL()
        .then((url) => {
          this.mainService.updateUser(this.authSrvc.userLoginLocalId, url);
        });
      this.route.navigateByUrl('/main/tabs/community');
    }, 1500);
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

  async uploadImage(itemBlob) {
    const fileBlob = itemBlob;
    const code =
      Math.random() * 1000 + Math.random() * 1000 + Math.random() * 100;
    const id = this.user.userId + code;
    this.imageId = id;
    this.storage.upload(`Avatar/${id}`, fileBlob);
  }
}
