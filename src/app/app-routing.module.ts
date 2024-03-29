import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'logo',
    pathMatch: 'full',
  },
  {
    path: 'logo',
    loadChildren: () =>
      import('./logo-screen/logo-screen.module').then(
        (m) => m.LogoScreenPageModule
      ),
  },
  {
    path: 'onboarding',
    loadChildren: () =>
      import('./onboarding-screen/onboarding-screen.module').then(
        (m) => m.OnboardingScreenPageModule
      ),
  },

  {
    path: 'main',
    loadChildren: () =>
      import('./main/main.module').then((m) => m.MainPageModule),
  },
  {
    path: 'auth-page',
    loadChildren: () =>
      import('./auth-page/auth-page.module').then((m) => m.AuthPagePageModule),
  },
  {
    path: 'profile-setup',
    loadChildren: () =>
      import('./profile-setup/profile-setup.module').then(
        (m) => m.ProfileSetupPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
