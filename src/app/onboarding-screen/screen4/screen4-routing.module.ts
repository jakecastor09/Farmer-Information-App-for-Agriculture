import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Screen4Page } from './screen4.page';

const routes: Routes = [
  {
    path: '',
    component: Screen4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Screen4PageRoutingModule {}
