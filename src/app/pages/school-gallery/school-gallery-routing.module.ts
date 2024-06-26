import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolGalleryPage } from './school-gallery.page';

const routes: Routes = [
  {
    path: '',
    component: SchoolGalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolGalleryPageRoutingModule {}
