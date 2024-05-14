import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { DisplayService } from 'src/app/services/display.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-student-institute',
  templateUrl: './add-student-institute.component.html',
  styleUrls: ['./add-student-institute.component.scss'],
})
export class AddStudentInstituteComponent  implements OnInit {

  @Input() isEditMode: any;
  @Input() card: any;
  userForm: FormGroup;
  formData: FormData = new FormData();
  user: any;
  userId:any;
  userTypes: any;
  acadmicYears:any[]=[];
  allInstitute:any[]=[];
 
  constructor(private modalController: ModalController, private alertCtrl: AlertController,
    private userService: UserService,  private displayService: DisplayService,
    private fb: FormBuilder) {
       this.createForm();
     }

  ngOnInit() {
    this.user = this.userService.getUser();
     this.getAllAcademic();
     this.getAllInstitute();
  }

  async loadUser(){
    let userId = this.userService.getUser().userId;
    this.userId=userId;
    console.log(userId);
  }
  createForm(){
    this.userForm = this.fb.group({
      instituteId: ['',[Validators.required]],
      academicYearId: ['', [Validators.required]],
    });
  }

  get errorControl() {
    return this.userForm.controls;
  }

  async closeModal(){
    this.modalController.dismiss();

  }

  async getuserType() {
    try {
      this.userTypes = await this.userService.getAllUserType();
      console.log(this.userTypes);
      console.log(this.userTypes.note);
    } catch (error) {
      console.error('Error fetching clients:', error);
     
    }
  }

  async getAllAcademic() {
    try {
      this.acadmicYears = await this.userService.getAllAcadmicYear();
      console.log(this.acadmicYears);
      console.log('hggg');
    } catch (error) {
      console.error('Error fetching clients:', error);
     
    }
  }

  async getAllInstitute() {
    try {
      this.allInstitute = await this.userService.getAllUserInstitute();
      console.log(this.allInstitute);
      console.log('hggg');
    } catch (error) {
      console.error('Error fetching clients:', error);
     
    }
  }


  async saveData(){
    if(this.userForm.valid){
    console.log(this.userForm.value);
     this.formData.append('userId', this.user.userId);
     this.formData.append('instituteId', this.userForm.get('instituteId').value);
    this.formData.append('academicYearId', this.userForm.get('academicYearId').value);
    const res = await this.userService.addUserInstitute(this.formData);
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
  
 
}

