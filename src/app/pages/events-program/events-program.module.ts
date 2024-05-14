import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsProgramPageRoutingModule } from './events-program-routing.module';

import { EventsProgramPage } from './events-program.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsProgramPageRoutingModule,
    SharedModule
  ],
  declarations: [EventsProgramPage]
})
export class EventsProgramPageModule {}
