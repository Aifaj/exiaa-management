import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-croper',
  templateUrl: './image-croper.component.html',
  styleUrls: ['./image-croper.component.scss'],
})
export class ImageCroperComponent  implements OnInit {

  @Input() image: string;
  @Input() photoType: string;
  cropRatio: number;
  myImage: any;
  croppedImageBase64 : any;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    console.log(this.image);
    if(this.photoType=='photo'){
      this.cropRatio = 1;
    }else if(this.photoType=='coverImage'){
      this.cropRatio = 16/9;
    }else if(this.photoType=='scannedImage'){
      this.cropRatio = 3.5/2;
    }else{
      this.cropRatio = 1;
    }
    this.myImage = this.image;
  }

  closeModal(){
    this.modalController.dismiss();
  }

  imageCropped(event:any | ImageCroppedEvent){
    this.croppedImageBase64 = event.blob;
    console.log(this.croppedImageBase64);
  }

  imageLoaded(image: LoadedImage) {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }

  selectCroppedImage(){
    this.modalController.dismiss(this.croppedImageBase64);
  }

}

