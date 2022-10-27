import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthPageService } from 'src/app/auth-page/auth-page.service';
import { MainService } from 'src/app/main/main.service';
import { User } from 'src/app/main/user.model';

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
  havePickImage = false;

  constructor(
    private mainService: MainService,
    private authService: AuthPageService,
    private route: Router
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
    //add image in database
  }

  skipHandlerClick() {
    this.route.navigateByUrl('/profile-setup/crops-or-livestock');
  }

  onImagePicked(imageData: string) {
    this.havePickImage = true;
    try {
      const imageFile = base64toBlob(
        imageData.replace('data:image/jpeg;base64,', ''),
        'image/jpeg'
      );
    } catch (error) {
      //prompt the user that the image provided can't use
      console.log(error);
      return;
    }
  }
}
