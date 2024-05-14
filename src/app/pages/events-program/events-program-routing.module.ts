import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsProgramPage } from './events-program.page';

const routes: Routes = [
  {
    path: '',
    component: EventsProgramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsProgramPageRoutingModule {}
