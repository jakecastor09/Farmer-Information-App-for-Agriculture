import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectCropsPage } from './select-crops.page';

const routes: Routes = [
  {
    path: '',
    component: SelectCropsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectCropsPageRoutingModule {}
