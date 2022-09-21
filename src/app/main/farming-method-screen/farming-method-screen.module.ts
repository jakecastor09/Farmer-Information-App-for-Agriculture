import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmingMethodScreenPageRoutingModule } from './farming-method-screen-routing.module';

import { FarmingMethodScreenPage } from './farming-method-screen.page';
import { UiSharedModule } from 'src/app/UI/ui-shared/ui-shared.module';
import { CardItemComponent } from './card-item/card-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmingMethodScreenPageRoutingModule,
    UiSharedModule,
  ],
  declarations: [FarmingMethodScreenPage, CardItemComponent],
})
export class FarmingMethodScreenPageModule {}
