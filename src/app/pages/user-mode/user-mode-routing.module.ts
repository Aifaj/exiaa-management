import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserModePage } from './user-mode.page';

const routes: Routes = [
  {
    path: '',
    component: UserModePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserModePageRoutingModule {}
