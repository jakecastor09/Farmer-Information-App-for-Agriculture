import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: MainPage,

    children: [
      {
        path: 'home',

        children: [
          {
            path: '',
            loadChildren: () =>
              import('./home-screen/home-screen.module').then(
                (m) => m.HomeScreenPageModule
              ),
          },
          {
            path: 'crops',

            loadChildren: () =>
              import('./home-screen/crops-screen/crops-screen.module').then(
                (m) => m.CropsScreenPageModule
              ),
          },
          {
            path: ':cropsId',
            loadChildren: () =>
              import('./home-screen/crop-details/crop-details.module').then(
                (m) => m.CropDetailsPageModule
              ),
          },
        ],
      },

      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./profile-screen/profile-screen.module').then(
                (m) => m.ProfileScreenPageModule
              ),
          },
        ],
      },
      {
        path: 'community',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./community-screen/community-screen.module').then(
                (m) => m.CommunityScreenPageModule
              ),
          },
          {
            path: 'add',
            loadChildren: () =>
              import('./community-screen/community-screen.module').then(
                (m) => m.CommunityScreenPageModule
              ),
          },
          {
            path: ':editId',
            loadChildren: () =>
              import('./community-screen/edit/edit.module').then(
                (m) => m.EditPageModule
              ),
          },
        ],
      },
      {
        path: 'farming-method',
        children: [
          {
            path: '',
            loadChildren: () =>
              import(
                './farming-method-screen/farming-method-screen.module'
              ).then((m) => m.FarmingMethodScreenPageModule),
          },
          {
            path: 'add',
            loadChildren: () =>
              import('./farming-method-screen/add/add-routing.module').then(
                (m) => m.AddPageRoutingModule
              ),
          },
          {
            path: 'edit',
            loadChildren: () =>
              import('./farming-method-screen/edit/edit-routing.module').then(
                (m) => m.EditPageRoutingModule
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
