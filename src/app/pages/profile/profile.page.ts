import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Camera, CameraResultType } from '@capacitor/camera';
import { ModalController } from '@ionic/angular';
import { DisplayService } from 'src/app/services/display.service';
import { UserService } from 'src/app/services/user.service';
import { ImageCroperComponent } from 'src/app/shared/image-croper/image-croper.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public selectedThemeColor: any;
  formData: FormData = new FormData();
  profileForm: FormGroup;
  photoUrl: string = '../assets/images/user.png';
  // @ViewChild("coverImage", {read: ElementRef}) coverImage: ElementRef;
  @ViewChild("photo", {read: ElementRef}) photo: ElementRef;

  user: any;

  constructor(private fb: FormBuilder, private modalController: ModalController, private userService: UserService, 
    private modalControler: ModalController, private displayService: DisplayService) {
    this.createForm();
  }

  async ngOnInit() {
    await this.loadUser();

    this.profileForm.patchValue({
      userId: this.user.userId,
      username: this.user.username,
      admissionClass: this.user.admissionClass,
      acadmicYear: this.user.acadmicYear,
      rollNo: this.user.rollNo,
      adharNo: this.user.adharNo,
      oldAdmissionNo: this.user.oldAdmissionNo,
      dateOfAdmission: this.user.dateOfAdmission,
      dateOfBirth: this.user.dateOfBirth,
      parentMailId: this.user.parentMailId,
      motherName: this.user.motherName,
      fatherName: this.user.fatherName,
      parmanentAdd: this.user.parmanentAdd,
      localAdd: this.user.localAdd,
      themeColor: this.user.themeColor,
      photoUrl: this.user.photoUrl,
    });
    
  }

  async ionVievDidEnter(){
    this.user = await this.userService.readUser(this.userService.getUser().uid);
  }

  async loadUser(){
    let userId = this.userService.getUser().userId;
    console.log(userId);
   // this.user = await this.userService.getUserById(userId);
    this.photoUrl = this.user.photoUrl;
  }

  createForm() {
    this.profileForm = this.fb.group({
      userId : [''],
      username: [''],
      dateOfAdmission: [''],
      acadmicYear:[''],
      dateOfBirth: [''],
      parentMailId: [''],
      admissionClass: [''],
      rollNo: [''],
      adharNo: [''],
      oldAdmissionNo: [''],
      motherName:[''],
      fatherName:[''],
      parmanentAdd:[''],
      localAdd:[''],
      themeColor: [''],
      photoUrl: [null],
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
      this.modalControler.dismiss();
    }else{
      this.displayService.toast(res.message);
    }
  }

  async saveData(){
    console.log(this.profileForm.value);
     this.formData.append('userId', this.user.userId);
     this.formData.append('displayName', this.profileForm.get('displayName').value);
    this.formData.append('email', this.profileForm.get('email').value);
    this.formData.append('mobileNo', this.profileForm.get('mobileNo').value);
    this.formData.append('username', this.profileForm.get('username').value);
    this.formData.append('location', this.profileForm.get('location').value);
    const res = await this.userService.addUser(this.formData);
    console.log(res);
    if(res.status){
      this.modalController.dismiss();
    }else{
      this.displayService.toast(res.message);
    }
  }

}
