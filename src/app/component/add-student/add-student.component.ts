import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { DisplayService } from 'src/app/services/display.service';
import { UserService } from 'src/app/services/user.service';
import { CountrySelectComponent } from 'src/app/shared/country-select/country-select.component';
import { AddStudentInstituteComponent } from '../add-student-institute/add-student-institute.component';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent  implements OnInit {

  @Input() isEditMode: any;
  @Input() card: any;
  userForm: FormGroup;
  formData: FormData = new FormData();
  user: any;
  userId:any;
  userTypes: any[]=[];

  constructor(private modalController: ModalController, private alertCtrl: AlertController,
    private userService: UserService,  private displayService: DisplayService,
    private fb: FormBuilder) {
       this.createForm();
     }

  ngOnInit() {
    this.user = this.userService.getUser();
    if(this.user){
      this.userForm.patchValue({
        userId: this.user.userId,
        userTypeId: this.user.userTypeId,
        displayName: this.user.displayName,
        gender: this.user.gender, 
        dateOfBirth:this.user.dateOfBirth,
      });
    }

     this.getuserType();
    // console.log(this.userType.note);

  }

  async loadUser(){
    let userId = this.userService.getUser().userId;
    this.userId=userId;
    console.log(userId);
    //this.user = await this.userService.getUserById(userId);
  }
  createForm(){
    this.userForm = this.fb.group({
      displayName: ['',[Validators.required]],
      gender: ['', [Validators.required]],
      userTypeId: ['', [Validators.required]],
      dateOfBirth: [''],
    });
  }

  get errorControl() {
    return this.userForm.controls;
  }

  async closeModal(){
    // const alert = await this.alertCtrl.create({
    //   header: 'Save Changes',
    //   message: 'You have change Some data, Do you want to Save?',
    //   buttons: [
    //     {
    //       text: 'No',
    //       role: 'cancel',
    //       cssClass: 'secondary',
    //       handler: (blah) => {
    //         this.modalController.dismiss();
    //         console.log('Confirm Cancel: blah');
    //       }
    //     }, {
    //       text: 'Yes, Proceed',
    //       handler: async () => {
    //         await this.saveData();
    //       }
    //     }
    //   ]
    // })

    // await alert.present();

    this.modalController.dismiss();

  }

  async getuserType() {
    try {
      this.userTypes = await this.userService.getAllUserType();
      console.log(this.userTypes);
    } catch (error) {
      console.error('Error fetching clients:', error);
     
    }
    
  }


  async saveData(){
    if(this.userForm.valid){
    console.log(this.userForm.value);
     this.formData.append('userId', this.user.userId);
     this.formData.append('userTypeId', this.userForm.get('userTypeId').value);
     this.formData.append('displayName', this.userForm.get('displayName').value);
    this.formData.append('gender', this.userForm.get('gender').value);
    this.formData.append('dateOfBirth', this.userForm.get('dateOfBirth').value);
    const res = await this.userService.addUser(this.formData);
    console.log(res);
    if(res.status){
      this.modalController.dismiss();
    }else{
      this.displayService.toast(res.message);
    }

  }else{
    this.userForm.markAllAsTouched();
    this.displayService.toast('Please fill all required fields');
  }
  }

  async openAddStudentInstitute(){
    if(this.userForm.valid){
    const modal = await this.modalController.create({
      component: AddStudentInstituteComponent,
    });
    await modal.present();
    modal.onDidDismiss().then(async (data) => {
     this.user = this.userService.getUser().userId;
        //this.name = this.user.name;
    })
  }
  }
  
 
}
