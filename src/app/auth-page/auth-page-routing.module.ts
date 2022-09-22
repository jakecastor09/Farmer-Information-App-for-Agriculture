import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPagePage } from './auth-page.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPagePage,
  },

  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./sign-up/sign-up.module').then((m) => m.SignUpPageModule),
  },
  {
    path: 'log-in',
    loadChildren: () =>
      import('./log-in/log-in.module').then((m) => m.LogInPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPagePageRoutingModule {}
