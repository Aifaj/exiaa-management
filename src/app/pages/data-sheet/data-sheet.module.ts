import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataSheetPageRoutingModule } from './data-sheet-routing.module';

import { DataSheetPage } from './data-sheet.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataSheetPageRoutingModule,
    SharedModule
  ],
  declarations: [DataSheetPage]
})
export class DataSheetPageModule {}
