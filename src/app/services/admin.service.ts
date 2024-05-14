import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { DisplayService } from './display.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public static readonly NodeGetAllCountry = 'address/getAllCountry';

  constructor(public restService: RestService, private displayService: DisplayService) { }

  public async getAllCountry() {
    try {
      const response: any = await this.restService.get(AdminService.NodeGetAllCountry);
      return response.data;
    } catch (e) {
      this.displayService.toast(JSON.stringify(e));
      return null;
    }
  }
}
