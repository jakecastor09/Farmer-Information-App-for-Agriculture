import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectLivestocksPageRoutingModule } from './select-livestocks-routing.module';

import { SelectLivestocksPage } from './select-livestocks.page';
import { UiSharedModule } from 'src/app/UI/ui-shared/ui-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectLivestocksPageRoutingModule,
    UiSharedModule,
  ],
  declarations: [SelectLivestocksPage],
})
export class SelectLivestocksPageModule {}
