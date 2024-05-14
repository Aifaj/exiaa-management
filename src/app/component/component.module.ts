import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceComponent } from './attendance/attendance.component';
import { HolidayComponent } from './holiday/holiday.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddStudentComponent } from './add-student/add-student.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AddStudentInstituteComponent } from './add-student-institute/add-student-institute.component';
import { NameModalComponent } from './name-modal/name-modal.component';
import { PlanPageComponent } from './plan-page/plan-page.component';
import { ModalTitleBarComponent } from './modal-title-bar/modal-title-bar.component';

@NgModule({
  declarations: [HolidayComponent,AttendanceComponent,
    AddStudentComponent, NameModalComponent, PlanPageComponent,
    ModalTitleBarComponent,AddStudentInstituteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    IonicModule,
    HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    AttendanceComponent,
    HolidayComponent,
    AddStudentComponent,
    AddStudentInstituteComponent,
    NameModalComponent,
    PlanPageComponent,
    ModalTitleBarComponent
  ]
})
export class ComponentModule { }
