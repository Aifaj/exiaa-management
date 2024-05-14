import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchoolGalleryPageRoutingModule } from './school-gallery-routing.module';

import { SchoolGalleryPage } from './school-gallery.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchoolGalleryPageRoutingModule,
    SharedModule
  ],
  declarations: [SchoolGalleryPage]
})
export class SchoolGalleryPageModule {}
