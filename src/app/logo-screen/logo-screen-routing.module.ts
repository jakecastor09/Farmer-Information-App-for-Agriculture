import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoScreenPage } from './logo-screen.page';

const routes: Routes = [
  {
    path: '',
    component: LogoScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogoScreenPageRoutingModule {}
