import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { CommunityScreenPage } from './community-screen.page';

const routes: Routes = [
  {
    path: '',
    component: CommunityScreenPage,
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then((m) => m.AddPageModule),
  },
  {
    path: 'edit',
    loadChildren: () =>
      import('./edit/edit.module').then((m) => m.EditPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class CommunityScreenPageRoutingModule {}
