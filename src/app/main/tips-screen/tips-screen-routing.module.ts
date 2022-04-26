import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipsScreenPage } from './tips-screen.page';

const routes: Routes = [
  {
    path: '',
    component: TipsScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipsScreenPageRoutingModule {}
