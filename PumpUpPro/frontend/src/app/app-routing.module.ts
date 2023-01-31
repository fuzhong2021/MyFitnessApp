import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UebungenPage } from './uebungen/uebungen.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'uebungen',
    loadChildren: () => import('./uebungen/uebungen.module').then( m => m.UebungenPageModule),
    component: UebungenPage
  },  {
    path: 'tracking',
    loadChildren: () => import('./tracking/tracking.module').then( m => m.TrackingPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
