import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeesduePageRoutingModule } from './feesdue-routing.module';

import { FeesduePage } from './feesdue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeesduePageRoutingModule
  ],
  declarations: [FeesduePage]
})
export class FeesduePageModule {}
