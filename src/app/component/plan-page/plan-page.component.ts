import { formatDate } from '@angular/common';
import { Component, ElementRef, OnInit, SecurityContext, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { DisplayService } from 'src/app/services/display.service';
import { PlanService } from 'src/app/services/plan.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-plan-page',
  templateUrl: './plan-page.component.html',
  styleUrls: ['./plan-page.component.scss'],
})
export class PlanPageComponent  implements OnInit {

  plans:any[] =[];
  user: any;
  PlanPage: any;
  selectedPlan: any = [];
  sanitizedDescription: SafeHtml;
  description:any[]=[];
  isSelected=true;

  constructor(private modalControler: ModalController, private displayService: DisplayService ,
    private planService:PlanService , private userService: UserService,private sanitizer: DomSanitizer)  {
      this.selectedPlan = this.plans[0];
  }

  async ngOnInit() {
    this.user = await this.userService.getUser();
    await this.getAllPlan();
    
   
   
  }
  sanitizeDescription(description: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(description);
  }

 
 async getAllPlan(){
   this.plans  = await this.planService.getAllPlan();
}


   
  async selectPlan(plan): Promise<void> {
  
    const planStartDate =  new Date();      
    const planEndDate= new Date(planStartDate.getTime()+(1000 * 60 * 60 * 24 * plan.validity ));
    // console.log(category);
   try{
      this.selectedPlan = {
        planId: plan.planId,
        startDate: formatDate(planStartDate, 'yyyy-MM-dd', 'en-US', '+0530'),
        endDate: formatDate(planEndDate, 'yyyy-MM-dd', 'en-US', '+0530'),
        amount: plan.price,
        validity:plan.validity,
        userId: this.user.userId,
        description: plan.description
      };
      
      // await this.getAllPlan();
      console.log(this.selectedPlan);
      
    } 
    catch (error) {
      console.error(error);
    }
  }

  
 
  async saveData(){
  
    const res = await this.planService.addUserPlan(this.selectedPlan);
    console.log(res);
    if(res.success){
      this.modalControler.dismiss();
    }else{
      this.displayService.toast(res.message);
    }
 
  }

//   async saveData() {
//     try {
       
//         const selectedPlans = this.plans.filter(plan => plan.isSelected);

//         if (selectedPlans.length === 0) {
//             // Handle the case where no plan is selected
//             this.displayService.toast("Please select at least one plan.");
//             return; 
//         }

//         // Save only the selected plans
//         for (const plan of selectedPlans) {
//           if (plan !== this.selectedPlan) {
//               const res = await this.planService.addUserPlan(plan);
//               console.log(res);
//               if (!res.success) {
//                   this.displayService.toast(res.message);
//                   return; 
//               }
//           }
//       }

//         this.modalControler.dismiss();
//     } catch (error) {
//         console.error('Error saving data:', error);
//         // Handle error appropriately, maybe display a toast or log the error
//     }
// }

// async saveData() {
//   try {
//     const selectedPlans = this.plans.filter(plan => plan.isSelected);

//     if (selectedPlans.length === 1) {
//       this.displayService.toast("Please select at least one plan.");
//       return; 
//     }

//     for (const plan of selectedPlans) {
//       if (plan == this.selectedPlan) {
//         const res = await this.planService.addUserPlan(plan);
//         console.log(res);
//         if (!res.success) {
//           this.displayService.toast(res.message);
//           return; 
//         }
//       }
//     }

//     this.modalControler.dismiss();
//   } catch (error) {
//     console.error('Error saving data:', error);
//     this.displayService.toast("Something went wrong while saving the data.");
//   }
// }
 


  closeModal(){
    this.modalControler.dismiss();
  }

}
