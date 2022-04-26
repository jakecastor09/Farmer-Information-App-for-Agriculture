import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CropsScreenPageRoutingModule } from './crops-screen-routing.module';

import { CropsScreenPage } from './crops-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CropsScreenPageRoutingModule
  ],
  declarations: [CropsScreenPage]
})
export class CropsScreenPageModule {}
