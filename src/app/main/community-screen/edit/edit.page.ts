import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthPageService } from 'src/app/auth-page/auth-page.service';
import { MainService } from '../../main.service';
import { User } from '../../user.model';
import { CommunityService } from '../community.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import firebase from 'firebase/compat/app';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { NgForm } from '@angular/forms';
import { timeStamp } from 'console';
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
  user: User;
  allPosts;
  selectedPost;
  imageId: string;
  allImageId = [];
  selectedImage: string;
  allImageSelected = [];
  imageFileChoose;
  allImageFileChoose = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mainService: MainService,
    private authSrvc: AuthPageService,
    private communitySrvc: CommunityService,
    private storage: AngularFireStorage,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.route.params.subscribe((paramMap) => {
      const postId = paramMap.editId;
      this.communitySrvc.fethPosts().subscribe((data) => {
        this.allPosts = data;

        this.selectedPost = this.allPosts.filter(
          (post) => post.postId === postId
        )[0];

        this.selectedPost.image.map((img) => this.allImageSelected.push(img));

        // this.allImageSelected = [...this.selectedPost.image];
        // console.log(this.allImageSelected);
      });
    });
    this.mainService.fetchUsers().subscribe((users) => {
      const currentUser = users.filter(
        (user) => user.userId === this.authSrvc.userLoginLocalId
      );
      this.user = currentUser[0];
    });
  }
  ionViewWillEnter() {}

  async onSubmit(form: NgForm) {
    const loading = await this.loadingCtrl.create({
      message: 'Updating post...',
    });
    loading.present();
    if (this.allImageFileChoose.length >= 1) {
      this.allImageFileChoose.map((item) => {
        if (item.slice(0, 5) !== 'https') {
          this.uploadImage(item);
        }
      });
    }
    const allImageSelectedUrl = [];
    if (this.allImageId.length >= 1 || this.allImageSelected?.length >= 1) {
      setTimeout(() => {
        if (this.allImageId.length >= 1) {
          this.allImageId.map((id, key) => {
            const storage = firebase.storage();
            storage
              .ref(`community-post/${id}`)
              .getDownloadURL()
              .then((url) => {
                allImageSelectedUrl.push(url);
              })
              .then(() => {
                console.log('hellow ');
                if (key === this.allImageId.length - 1) {
                  const alreadySelectedImage = this.allImageSelected.filter(
                    (image) => image.slice(0, 5) === 'https'
                  );
                  const allSelectedImages = [
                    ...alreadySelectedImage,
                    ...allImageSelectedUrl,
                  ];
                  // const imagesSaveToDatabase =
                  console.log('update post');
                  this.communitySrvc.updatePost(
                    this.selectedPost.key,
                    allSelectedImages,
                    form.value['write-post']
                  );
                } else {
                  console.log('update Post');
                  this.communitySrvc.updatePost(
                    this.selectedPost.key,
                    allImageSelectedUrl,
                    form.value['write-post']
                  );
                }
              });
          });
        } else {
          this.communitySrvc.updatePost(
            this.selectedPost.key,
            this.allImageSelected,
            form.value['write-post']
          );
        }
      }, 2000);
    } else {
      this.communitySrvc.updatePost(
        this.selectedPost.key,
        allImageSelectedUrl,
        form.value['write-post']
      );
    }

    setTimeout(() => {
      this.loadingCtrl.dismiss();
      this.router.navigateByUrl('/main/tabs/community');
    }, 3000);
  }

  getPosts() {}

  getPost(id) {}

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
    const code = Math.random().toString(16).slice(2);
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
