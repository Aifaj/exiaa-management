import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { DisplayService } from './display.service';

@Injectable({
  providedIn: 'root'
})
export class SetupService {

  public static readonly NodeAllClass = 'setup/getAllClassActive';
  public static readonly NodeAllSection = 'setup/getAllSectionActive';
  public static readonly NodeAllAcademic = 'setup/getAllAcademicYear';



  constructor(private restService:RestService,private displayService:DisplayService) { }

  async getAllClass() {
    try {
      const res: any = await this.restService.get(SetupService.NodeAllClass);
      return res;
    } catch (e) {
      this.displayService.toast(e);
    }
  }

  async getAllSection() {
    try {
      const res: any = await this.restService.get(SetupService.NodeAllSection);
      return res;
    } catch (e) {
      this.displayService.toast(e);
    }
  }

  async getAllAcademic() {
    try {
      const res: any = await this.restService.get(SetupService.NodeAllAcademic);
      return res;
    } catch (e) {
      this.displayService.toast(e);
    }
  }

}
