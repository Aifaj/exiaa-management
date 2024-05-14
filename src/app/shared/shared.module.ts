import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { CountryPipe } from '../pipes/country.pipe';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { IconViewComponent } from './icon-view/icon-view.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { CountBoxComponent } from './count-box/count-box.component';
import { ImageCroperComponent } from './image-croper/image-croper.component';

@NgModule({
  declarations: [
    LoaderComponent,
    TitleBarComponent,
    IconViewComponent,
    StudentInfoComponent,
    CountBoxComponent,
    ImageCroperComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    LoaderComponent,
    TitleBarComponent,
    IconViewComponent,
    StudentInfoComponent,
    CountBoxComponent,
    ImageCroperComponent
  ]
})
export class SharedModule { }
