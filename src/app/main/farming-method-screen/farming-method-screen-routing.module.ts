import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmingMethodScreenPage } from './farming-method-screen.page';

const routes: Routes = [
  {
    path: '',
    component: FarmingMethodScreenPage
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmingMethodScreenPageRoutingModule {}
