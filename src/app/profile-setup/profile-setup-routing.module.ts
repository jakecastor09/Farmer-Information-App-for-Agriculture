import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileSetupPage } from './profile-setup.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileSetupPage,
  },
  {
    path: 'add-image',
    loadChildren: () =>
      import('./add-image/add-image.module').then((m) => m.AddImagePageModule),
  },
  {
    path: 'crops-or-livestock',
    loadChildren: () =>
      import('./crops-or-livestock/crops-or-livestock.module').then(
        (m) => m.CropsOrLivestockPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileSetupPageRoutingModule {}
