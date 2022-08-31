import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CropsOrLivestockPage } from './crops-or-livestock.page';

const routes: Routes = [
  {
    path: '',
    component: CropsOrLivestockPage
  },
  {
    path: 'select-crops',
    loadChildren: () => import('./select-crops/select-crops.module').then( m => m.SelectCropsPageModule)
  },
  {
    path: 'select-livestocks',
    loadChildren: () => import('./select-livestocks/select-livestocks.module').then( m => m.SelectLivestocksPageModule)
  },
  {
    path: 'finished-setup',
    loadChildren: () => import('./finished-setup/finished-setup.module').then( m => m.FinishedSetupPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CropsOrLivestockPageRoutingModule {}
