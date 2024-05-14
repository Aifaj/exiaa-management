import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Camera, CameraResultType,ImageOptions } from '@capacitor/camera';
import { ModalController } from '@ionic/angular';
import { ImageCroperComponent } from 'src/app/shared/image-croper/image-croper.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  public selectedThemeColor: any;
  formData: FormData = new FormData();
  profileForm: FormGroup;
  photoUrl: string = '../assets/icon/ic_attendance (1).png';
  // @ViewChild("coverImage", {read: ElementRef}) coverImage: ElementRef;
  @ViewChild("photo", {read: ElementRef}) photo: ElementRef;

  user: any;
  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  async changeImage(photoType: string){
    
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl
    });
    var imageUrl = image.dataUrl;
    await this.cropModal(imageUrl, photoType);
}

async cropModal(image: any, photoType: string){
  const cropModal = await this.modalController.create({
    component: ImageCroperComponent,
    componentProps: {
      image: image,
      photoType: photoType
    }
  });
  cropModal.onDidDismiss()
    .then((data: any) => {
      const image = data['data'];
      if(data.data){
        console.log(data);
        if(photoType=='photo'){
          this.photoUrl = URL.createObjectURL(data.data);
          this.formData.append('photoUrl', new Blob([data.data], { type: data.type}));
        }
      }

  });
  await cropModal.present();
}

}
