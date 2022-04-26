import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnboardingScreenPage } from './onboarding-screen.page';

const routes: Routes = [
  {
    path: 'onboarding',
    component: OnboardingScreenPage,
  },

  {
    path: 'screen1',
    loadChildren: () =>
      import('./screen1/screen1.module').then((m) => m.Screen1PageModule),
  },
  {
    path: 'screen2',
    loadChildren: () =>
      import('./screen2/screen2.module').then((m) => m.Screen2PageModule),
  },
  {
    path: 'screen3',
    loadChildren: () =>
      import('./screen3/screen3.module').then((m) => m.Screen3PageModule),
  },
  {
    path: 'screen4',
    loadChildren: () =>
      import('./screen4/screen4.module').then((m) => m.Screen4PageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingScreenPageRoutingModule {}
