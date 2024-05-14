import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashbordPageRoutingModule } from './dashbord-routing.module';

import { DashbordPage } from './dashbord.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashbordPageRoutingModule,
    SharedModule
  ],
  declarations: [DashbordPage]
})
export class DashbordPageModule {}
