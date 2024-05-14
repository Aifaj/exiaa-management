import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { CountrySelectComponent } from 'src/app/shared/country-select/country-select.component';
import { CountryPipe } from 'src/app/pipes/country.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage, CountrySelectComponent, CountryPipe]
})
export class LoginPageModule {}
