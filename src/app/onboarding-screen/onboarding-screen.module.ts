import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnboardingScreenPageRoutingModule } from './onboarding-screen-routing.module';

import { OnboardingScreenPage } from './onboarding-screen.page';

import { SharedModuleModule } from './shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardingScreenPageRoutingModule,
  ],
  declarations: [OnboardingScreenPage],
})
export class OnboardingScreenPageModule {}
