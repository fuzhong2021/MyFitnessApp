import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UebungenPageRoutingModule } from './uebungen-routing.module';

import { UebungenPage } from './uebungen.page';
import { WorkoutsComponent } from '../workouts/workouts.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UebungenPageRoutingModule,
    HttpClientModule
  ],
  declarations: [UebungenPage, WorkoutsComponent]
})
export class UebungenPageModule {}
