import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayOnlinePageRoutingModule } from './pay-online-routing.module';

import { PayOnlinePage } from './pay-online.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayOnlinePageRoutingModule
  ],
  declarations: [PayOnlinePage]
})
export class PayOnlinePageModule {}
