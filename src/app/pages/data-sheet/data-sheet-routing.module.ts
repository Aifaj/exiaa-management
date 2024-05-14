import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataSheetPage } from './data-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: DataSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataSheetPageRoutingModule {}
