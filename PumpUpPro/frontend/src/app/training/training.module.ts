import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingPageRoutingModule } from './training-routing.module';

import { TrainingPage } from './training.page';
import { WorkoutsComponent } from '../workouts/workouts.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingPageRoutingModule,
    HttpClientModule
  ],
  declarations: [TrainingPage, WorkoutsComponent]
})
export class TrainingPageModule {}
