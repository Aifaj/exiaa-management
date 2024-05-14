import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AskDoubtPage } from './ask-doubt.page';

const routes: Routes = [
  {
    path: '',
    component: AskDoubtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AskDoubtPageRoutingModule {}
