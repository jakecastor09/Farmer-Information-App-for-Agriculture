import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MethodListPage } from './method-list.page';

const routes: Routes = [
  {
    path: '',
    component: MethodListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MethodListPageRoutingModule {}
