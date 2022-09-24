import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyMethodsPage } from './my-methods.page';

const routes: Routes = [
  {
    path: '',
    component: MyMethodsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyMethodsPageRoutingModule {}
