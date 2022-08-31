import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CropsOrLivestockPageRoutingModule } from './crops-or-livestock-routing.module';

import { CropsOrLivestockPage } from './crops-or-livestock.page';
import { UiSharedModule } from 'src/app/UI/ui-shared/ui-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CropsOrLivestockPageRoutingModule,
    UiSharedModule,
  ],
  declarations: [CropsOrLivestockPage],
})
export class CropsOrLivestockPageModule {}
