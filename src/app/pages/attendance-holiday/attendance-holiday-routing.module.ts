import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendanceHolidayPage } from './attendance-holiday.page';

const routes: Routes = [
  {
    path: '',
    component: AttendanceHolidayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceHolidayPageRoutingModule {}
