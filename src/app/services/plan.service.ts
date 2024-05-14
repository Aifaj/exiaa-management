import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  static readonly nodePlan: string = 'plan/';
  static readonly NodeAllPlanPlage: string ='getAllPlan';
  static readonly NodeAddUserPlan: string ='addUserPlan';
  static readonly NodeGetCurrenPlan: string ='getCurrentPlan';

  constructor(private restService: RestService) { }

 
  public async getAllPlan(): Promise<any> {
    try {
      const data = await this.restService.get(PlanService.NodeAllPlanPlage);
      return Promise.resolve(data.results);
    } catch (e) {
      return Promise.reject(e);
    }

  }

  public async getCurrentPlan(user: any): Promise<any> {
    let body = {
      userId: user.userId
    }
    try {
      const data = await this.restService.post(PlanService.NodeGetCurrenPlan, body);
      return Promise.resolve(data.results);
    } catch (e) {
      return Promise.reject(e);
    }

  }
 
  public async addUserPlan(selectedPlan: any): Promise<any> {
    try {
      const plan = await this.restService.post(PlanService.NodeAddUserPlan, selectedPlan);
      return Promise.resolve(plan);
    } catch (e) {
      return Promise.reject(e);
    }

  }

}

