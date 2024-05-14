import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddStudentComponent } from 'src/app/component/add-student/add-student.component';
import { AuthService } from 'src/app/services/auth.service';
import { FunctionsService } from 'src/app/services/functions.service';

import { UserService } from 'src/app/services/user.service';
import { UserModePage } from '../user-mode/user-mode.page';
import { AddStudentInstituteComponent } from 'src/app/component/add-student-institute/add-student-institute.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: any;
  menu:any = [
    {
      "menu_id":"1",
      "image" : "ic_quiz",
      "title" : "play Quiz",
    },
    {
      "menu_id":"2",
      "image" : "ic_assignment",
      "title" : "Assignment",
    },
    {
      "menu_id":"3",
      "image" : "ic_holiday",
      "title" : "School Holiday",
    },
    {
      "menu_id":"4",
      "image" : "ic_calendra",
      "title" : "Time Table",
    },
    {
      "menu_id":"5",
      "image" : "ic_results",
      "title" : "Result",
    },
    {
      "menu_id":"6",
      "image" : "ic_date_sheet",
      "title" : "Data Sheet",
    },
    {
      "menu_id":"7",
      "image" : "ic_doubts",
      "title" : "Ask Doubts",
    },
    {
      "menu_id":"8",
      "image" : "ic_gallery",
      "title" : "School Gallery",
    },
    {
      "menu_id":"9",
      "image" : "ic_leave",
      "title" : "Leave Application",
    },
    {
      "menu_id":"10",
      "image" : "ic_password",
      "title" : "Change Password",
    },
    {
      "menu_id":"11",
      "image" : "ic_event",
      "title" : "Events",
    },
    {
      "menu_id":"12",
      "image" : "ic_logout",
      "title" : "Logout",
    },
  ]
  name: any;
  constructor(private userService: UserService, private modalController:ModalController,
    private authService:AuthService, private fun:FunctionsService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    console.log(this.user);
    console.log(this.user.displayName);

   this.openAddStudent();
    //this.openAddStudentInstitute();


  }

  async ionViewDidEnter(){
    this.user = await this.userService.readUser(this.userService.getUser().uid);
    console.log(this.user);
    console.log('uid => '+this.user.uid)
  }
  
  async openAddStudent(){
    const modal = await this.modalController.create({
      component: AddStudentComponent,
    });
    await modal.present();
    modal.onDidDismiss().then(async (data) => {
     // if(data.data.success){
       // this.user = await this.userService.getUserById(this.userService.getUser().userId);
        this.user = this.userService.getUser().userId;
        this.name = this.user.name;
        // await this.checkPlan();
        // await this.loadCards();
     // }
      
    })
  }

  async openAddStudentInstitute(){
    const modal = await this.modalController.create({
      component: AddStudentInstituteComponent,
    });
    await modal.present();
    modal.onDidDismiss().then(async (data) => {
     this.user = this.userService.getUser().userId;
        this.name = this.user.name;
    })
  }

  async performLogout() {
    await this.authService.SignOut();
    this.userService.user = null;
    this.fun.navigate('login');
  }

  async addCard(isEditMode: boolean) {
    //this.fun.navigate('add-edit-card');
  
      const modal = await this.modalController.create({
        component: UserModePage,
        componentProps: {
          isEditMode: isEditMode,
          card: null
          // Pass any data you want to the modal here
        },
      });
      // modal.onDidDismiss().then((data) => {
      //     this.loadCards();
      // });
      await modal.present();
  }
}
