import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { DisplayService } from 'src/app/services/display.service';
import { SetupService } from 'src/app/services/setup.service';
import { StudentService } from 'src/app/services/student.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.page.html',
  styleUrls: ['./add-student.page.scss'],
})
export class AddStudentPage implements OnInit {

  formData: FormData = new FormData();
  profileForm: FormGroup;
 
  user: any;

  students: any[] = [];
  categories: any[] = [];
  religions: any[] = [];
  classes: any[] = [];
  sections: any[] =[];
  academicYears: any[]=[];

  constructor(private fb: FormBuilder, private modalController: ModalController, private userService: UserService, 
    private modalControler: ModalController, private displayService: DisplayService,
    private studentService:StudentService,private setupService:SetupService) {
    this.createForm();
  }

  async ngOnInit() {
   await this.getReligion();
   await this.getClasses();
   await this.getAcademicYear();
   await this.getCategory();
   await this.getSections();
    await this.loadUser();
   

    // this.profileForm.patchValue({
    //  // userId: this.user.userId,
    //   username: this.user.username,
    //   admissionClass: this.user.admissionClass,
    //   acadmicYear: this.user.acadmicYear,
    //   rollNo: this.user.rollNo,
    //   adharNo: this.user.adharNo,
    //   oldAdmissionNo: this.user.oldAdmissionNo,
    //   dateOfAdmission: this.user.dateOfAdmission,
    //   dateOfBirth: this.user.dateOfBirth,
    //   parentMailId: this.user.parentMailId,
    //   motherName: this.user.motherName,
    //   fatherName: this.user.fatherName,
    //   parmanentAdd: this.user.parmanentAdd,
    //   localAdd: this.user.localAdd,
    //   themeColor: this.user.themeColor,
    //   photoUrl: this.user.photoUrl,
    // });
    
  }

  async ionVievDidEnter(){
    this.user = await this.userService.readUser(this.userService.getUser().uid);
  }

  async loadUser(){
    let userId = this.userService.getUser().userId;
    console.log(userId);
   // this.user = await this.userService.getUserById(userId);
  }

  createForm() {
    this.profileForm = this.fb.group({
      studentId : [''],
      firstName: ['',[ Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      middleName: ['',],
      lastName: ['',[ Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      motherName: [''],
      generalRegisterNo: ['',Validators.required],
      parentId : [''],
      academicYearId : ['',Validators.required],
      registeredDate: ['', Validators.required],
      gender: [''],
      birthDate: [''],
      birthPlace: [''],
      nationality: ['', Validators.required],
      classId: [''],
      sectionId: [''],
      aadharNo: [''],
      religionId: [''],
      categoryId: [''],
    })
  }
 

  async saveData(){
    
    //   const categoryData = {
    //     locationId:this.locationForm.value.locationId,
    //     rackNo: this.locationForm.value.rackNo,
    //     binNo: this.locationForm.value.binNo,
    //     clientId:this.client.clientId
    // }
   
    console.log(this.profileForm.value);
    const res = await this.studentService.addStudent(this.profileForm.value);
    if(res.status){
      this.modalController.dismiss(res);
    }else{
      this.displayService.toast(res.message);  
    }
  }
 

  async saveDataa(){
    console.log(this.profileForm.value);
    const res = await this.studentService.addStudent(this.profileForm.value);
    console.log(res);
    if(res.status){
      this.modalController.dismiss();
    }else{
      this.displayService.toast(res.message);
    }
  }

  async getReligion() {
     this.religions = await this.studentService.getAllReligion();
    console.log(this.religions);
  }
  async getCategory() {
    this.categories = await this.studentService.getAllCategory();
    console.log(this.categories);
  } 

  async getClasses() {
    this.classes = await this.setupService.getAllClass();
    console.log(this.classes);
  }

  async getSections() {
    this.sections = await this.setupService.getAllSection();
    console.log(this.sections);
  }

  async getAcademicYear(){
    this.academicYears = await this.setupService.getAllAcademic();
    console.log(this.academicYears);
  }

}

