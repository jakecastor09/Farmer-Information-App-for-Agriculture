import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinishedSetupPageRoutingModule } from './finished-setup-routing.module';

import { FinishedSetupPage } from './finished-setup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinishedSetupPageRoutingModule
  ],
  declarations: [FinishedSetupPage]
})
export class FinishedSetupPageModule {}
