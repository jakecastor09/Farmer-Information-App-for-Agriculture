import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinishedSetupPage } from './finished-setup.page';

const routes: Routes = [
  {
    path: '',
    component: FinishedSetupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinishedSetupPageRoutingModule {}
