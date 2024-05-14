import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayOnlinePage } from './pay-online.page';

const routes: Routes = [
  {
    path: '',
    component: PayOnlinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayOnlinePageRoutingModule {}
