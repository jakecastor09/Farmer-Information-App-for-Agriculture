import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileScreenPage } from './profile-screen.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileScreenPage
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'agriculture',
    loadChildren: () => import('./agriculture/agriculture.module').then( m => m.AgriculturePageModule)
  },
  {
    path: 'my-methods',
    loadChildren: () => import('./my-methods/my-methods.module').then( m => m.MyMethodsPageModule)
  },
  {
    path: 'my-favorites',
    loadChildren: () => import('./my-favorites/my-favorites.module').then( m => m.MyFavoritesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileScreenPageRoutingModule {}
