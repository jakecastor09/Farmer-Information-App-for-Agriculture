import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeScreenPage } from './home-screen.page';

const routes: Routes = [
  {
    path: '',
    component: HomeScreenPage,
  },

  {
    path: 'crops',
    loadChildren: () =>
      import('./crops-screen/crops-screen.module').then(
        (m) => m.CropsScreenPageModule
      ),
  },
  {
    path: 'crop-details',
    loadChildren: () =>
      import('./crop-details/crop-details.module').then(
        (m) => m.CropDetailsPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeScreenPageRoutingModule {}
