import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent implements OnInit {
  @Output() imagePick = new EventEmitter<string>();
  selectedImage: string;

  constructor() {}

  ngOnInit() {}

  imageClickHandler(num) {
    if (num === 0) {
      this.selectedImage = '';
      return;
    }
    this.selectedImage = `assets/avatar/avatar-${num}.webp`;
  }

  onPickImage() {
    Camera.getPhoto({
      quality: 50,
      allowEditing: true,
      source: CameraSource.Prompt,
      correctOrientation: true,
      height: 200,
      width: 200,
      resultType: CameraResultType.DataUrl,
    })
      .then((image) => {
        this.selectedImage = image.dataUrl;
        this.imagePick.emit(image.dataUrl);
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  }
}
