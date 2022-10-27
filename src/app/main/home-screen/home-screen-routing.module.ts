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
    path: ':cropAndLivestocksDetailsId',
    loadChildren: () =>
      import('./crop-details/crop-details.module').then(
        (m) => m.CropDetailsPageModule
      ),
  },
  {
    path: 'user-details',
    loadChildren: () => import('./user-details/user-details.module').then( m => m.UserDetailsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeScreenPageRoutingModule {}
