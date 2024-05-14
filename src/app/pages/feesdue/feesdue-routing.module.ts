import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeesduePage } from './feesdue.page';

const routes: Routes = [
  {
    path: '',
    component: FeesduePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeesduePageRoutingModule {}
