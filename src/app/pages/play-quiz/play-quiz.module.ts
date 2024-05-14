import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayQuizPageRoutingModule } from './play-quiz-routing.module';

import { PlayQuizPage } from './play-quiz.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayQuizPageRoutingModule,
    SharedModule
  ],
  declarations: [PlayQuizPage]
})
export class PlayQuizPageModule {}
