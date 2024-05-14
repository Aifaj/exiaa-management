import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.scss'],
})
export class CountrySelectComponent  implements OnInit {

  countries : any[] = [];
  countrySearch: string  = '';
  countryCode: any = '+91';
  flag: any = 'IN';

  constructor(private modalController: ModalController, private adminService: AdminService) { }

  async ngOnInit() {
    await this.loadCountries();
  }

  async loadCountries(){
    this.countries = await this.adminService.getAllCountry();
    console.log(this.countries);
  }

  selectCountry(country: any){
    this.countryCode = country.phonecode;
    this.flag = country.iso;
    const body = {
      countryCode: "+"+country.phonecode,
      flag: this.flag
    }
    this.modalController.dismiss(body);
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
