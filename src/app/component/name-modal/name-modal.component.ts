import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { DisplayService } from 'src/app/services/display.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-name-modal',
  templateUrl: './name-modal.component.html',
  styleUrls: ['./name-modal.component.scss'],
})
export class NameModalComponent  implements OnInit {

  public selectedThemeColor: any;
  formData: FormData = new FormData();
  accountForm: FormGroup;
  photoUrl: string = '../assets/images/user.png';
  // @ViewChild("coverImage", {read: ElementRef}) coverImage: ElementRef;
  @ViewChild("photo", {read: ElementRef}) photo: ElementRef;

  userTypes: any[] = [];
  name = '';
  userType = '';
 // businessSubCategoryName = '';
  userTypeDefaultColor = Array(this.userTypes.length).fill('default');
 // subCategoryDefaultColor = Array(this.businessSubCategories.length).fill('default');


  user: any;

  constructor(private fb: FormBuilder, private modalController: ModalController, private userService: UserService, 
    private modalControler: ModalController, private displayService: DisplayService) {
    this.createForm();
  }

  async ngOnInit() {
    await this.loadUser();
    await this.loadUserTypes();

    this.accountForm.patchValue({
      userId: this.user.userId,
      name: this.user.name,
      aboutUs: this.user.aboutUs,
      location: this.user.location,
      themeColor: this.user.themeColor,
      photoUrl: this.user.photoUrl,
    });
    
  }

  async loadUser(){
    let userId = this.userService.getUser().userId;
    this.user = await this.userService.getUserById(userId);
    this.photoUrl = this.user.photoUrl;
  }

  async loadUserTypes(){
    this.userTypes = await this.userService.getAllUserType();
  }

  createForm() {
    this.accountForm = this.fb.group({
      userId : [''],
      name: [''],
      aboutUs: [''],
      location: [''],
      themeColor: [''],
      photoUrl: [null],
    })
  }

  async selectUserType(userType){
    this.userType = userType.userType;
 //   this.businessSubCategories = await this.businessService.getAllBusinessSubCategory(category);
  }

  async saveData(){
    if(this.name.length == 0){
      this.displayService.toast('Please enter your name');
      return;
    }
    if(this.userType.length == 0){
      this.displayService.toast('Please select user category');
      return;
    }
    
    let body = {
      userId: this.userService.getUser().userId,
      name: this.name,
      email: this.user.email,
      mobileNo: this.user.mobileNo,
      userType: this.userType,
      
    }
    const res = await this.userService.updateInialUser(body);
    console.log(res);
    if(res.success){
      this.modalControler.dismiss(res);
    }else{
      this.displayService.toast(res.message);
    }
  }

  // async selectBuinessSubCategory(suCategory){
  //   this.businessSubCategoryName = suCategory.businessSubCategoryName;
  // }

  // changeSubCategoryColor(i:number) {
  //   this.userTypeDefaultColor = Array(this.businessSubCategories.length).fill('default');
  //   if (this.userTypeDefaultColor[i] === "default") {
  //     this.userTypeDefaultColor[i] = "success"
  //   } else {
  //     this.userTypeDefaultColor[i] = "default"
  //     // event.target.setAttribute('color', 'secondary') this is redundant
  //   }
  // }

  changeUserTypeColor(i:number) {
    this.userTypeDefaultColor = Array(this.userTypes.length).fill('default');
    if (this.userTypeDefaultColor[i] === "default") {
      this.userTypeDefaultColor[i] = "success"
    } else {
      this.userTypeDefaultColor[i] = "default"
      // event.target.setAttribute('color', 'secondary') this is redundant
    }
  }

  closeModal(){
    this.modalControler.dismiss();
  }

}
