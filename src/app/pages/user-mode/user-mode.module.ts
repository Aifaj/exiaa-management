import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserModePageRoutingModule } from './user-mode-routing.module';

import { UserModePage } from './user-mode.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserModePageRoutingModule,
    SharedModule
  ],
  declarations: [UserModePage]
})
export class UserModePageModule {}
