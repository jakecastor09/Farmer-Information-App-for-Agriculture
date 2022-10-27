import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyMethodsPage } from './my-methods.page';

const routes: Routes = [
  {
    path: '',
    component: MyMethodsPage
  },
  {
    path: 'method-list',
    loadChildren: () => import('./method-list/method-list.module').then( m => m.MethodListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyMethodsPageRoutingModule {}
