import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UebungenPage } from './uebungen.page';

const routes: Routes = [
  {
    path: '',
    component: UebungenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UebungenPageRoutingModule {}
