import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ModalController } from '@ionic/angular';
import { NameModalComponent } from '../component/name-modal/name-modal.component';
import { PlanService } from '../services/plan.service';
import { PlanPageComponent } from '../component/plan-page/plan-page.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  user: any;
  displayName: string;
  currentPlan: any;

  constructor(private userService: UserService, private modalController: ModalController, private planService: PlanService) {
    
  }
  async ngOnInit() {
    this.user = this.userService.getUser();
    if(this.user.userTypeId == 0){
      await this.openModalName();
    }else{
      this.user = null;
    }
    console.log(this.user);
  }

  async openModalName(){
    const modal = await this.modalController.create({
      component: NameModalComponent,
    });
    await modal.present();
    modal.onDidDismiss().then(async (data) => {
      //if(data.data.status){
        this.user = await this.userService.getUserById(this.userService.getUser().userId);
        this.displayName = this.user.name;
        await this.checkPlan();
      //}
      
    })
  }

  async checkPlan(){
    this.currentPlan = await this.planService.getCurrentPlan(this.userService.getUser());
    console.log(this.currentPlan);
    if(this.currentPlan.length == 0 && this.user.name != null){
      await this.openPlanModal();
    }
  }

  async openPlanModal(){
    const modal = await this.modalController.create({
      component:  PlanPageComponent,
    });
    await modal.present();
    modal.onDidDismiss().then(async (data) => {
      this.currentPlan = await this.planService.getCurrentPlan(this.userService.getUser());
    })
  }

}
