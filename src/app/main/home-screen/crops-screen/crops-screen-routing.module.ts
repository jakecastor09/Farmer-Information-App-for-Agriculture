import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CropsScreenPage } from './crops-screen.page';

const routes: Routes = [
  {
    path: '',
    component: CropsScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CropsScreenPageRoutingModule {}
