import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendanceHolidayPageRoutingModule } from './attendance-holiday-routing.module';

import { AttendanceHolidayPage } from './attendance-holiday.page';
import { ComponentModule } from 'src/app/component/component.module';
import { NgCalendarModule } from 'ionic2-calendar';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendanceHolidayPageRoutingModule,
    ComponentModule,
    NgCalendarModule
  ],
  declarations: [AttendanceHolidayPage],
})
export class AttendanceHolidayPageModule {}
