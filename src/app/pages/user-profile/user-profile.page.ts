import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Camera, CameraResultType,ImageOptions } from '@capacitor/camera';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { DisplayService } from 'src/app/services/display.service';
import { FunctionsService } from 'src/app/services/functions.service';
import { UserService } from 'src/app/services/user.service';
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
  constructor(private modalController:ModalController,private authService:AuthService,
    private userService:UserService, private fun:FunctionsService,
    private displayService:DisplayService,private fb:FormBuilder
  ) { this.createForm(); }

  async ngOnInit() {
    this.user = this.userService.getUser();
    console.log(this.user);
    console.log(this.user.displayName);

    this.profileForm.patchValue({
      userId: this.user.userId,
      displayName: this.user.displayName,
      email: this.user.email,
      location: this.user.location,
      gender: this.user.gender,
      aboutUs: this.user.aboutUs
    });

    console.log(this.user);
    
  }

  async ionVievDidEnter(){
    this.user = this.userService.getUser();
    }

  createForm() {
    this.profileForm = this.fb.group({
      userId : [''],
      displayName: [''],
      email: [''],
      location:[''],
      aboutUs: [''],
      gender: [''],
      dateOfBirth: ['']
    })
  }

  async changeImage(photoType: string){
    
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl
    });
    var imageUrl = image.dataUrl;
    await this.cropModal(imageUrl, photoType);
}

async cropModal(image: any, photoType: string){
    const cropModal = await this.modalController.create({
      component: ImageCroperComponent,
      componentProps: {
        image: image
      }
    });
    cropModal.onDidDismiss()
      .then((data) => {
        const image = data['data'];
        console.log(data);
        if(photoType=='photo'){
          this.photoUrl = URL.createObjectURL(data.data);
          this.formData.append('photoUrl', data.data);
        }
      

    });
    await cropModal.present();
  }

  async saveDataa(){
    console.log(this.selectedThemeColor);
    this.profileForm.patchValue({
      themeColor: this.selectedThemeColor
    });
    console.log(this.profileForm.value);
    this.formData.append('user', JSON.stringify(this.profileForm.value));
    console.log(this.formData);
    const res = await this.userService.addUser(this.formData);
    console.log(res);
    if(res.status){
      this.modalController.dismiss();
    }else{
      this.displayService.toast(res.message);
    }
  }

  async saveData(){
    console.log(this.profileForm.value);
     this.formData.append('userId', this.user.userId);
     this.formData.append('displayName', this.profileForm.get('displayName').value);
    this.formData.append('email', this.profileForm.get('email').value);
    this.formData.append('gender', this.profileForm.get('gender').value);
    this.formData.append('aboutUs', this.profileForm.get('aboutUs').value);
    this.formData.append('location', this.profileForm.get('location').value);
    this.formData.append('dateOfBirth', this.profileForm.get('dateOfBirth').value);
    const res = await this.userService.addUser(this.formData);
    console.log(res);
    if(res.status){
      this.modalController.dismiss();
    }else{
      this.displayService.toast(res.message);
    }
  }

async performLogout() {
  await this.authService.SignOut();
  this.userService.user = null;
  this.fun.navigate('login');
}

}
