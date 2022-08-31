import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectLivestocksPage } from './select-livestocks.page';

const routes: Routes = [
  {
    path: '',
    component: SelectLivestocksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectLivestocksPageRoutingModule {}
