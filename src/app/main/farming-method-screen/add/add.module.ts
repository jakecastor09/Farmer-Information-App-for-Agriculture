import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPageRoutingModule } from './add-routing.module';

import { AddPage } from './add.page';
import { ModalComponent } from './modal/modal.component';
import { FarmingMethodShared } from '../farming-method-shared/farming-method-shared.module';
import { UiSharedModule } from '../../../UI/ui-shared/ui-shared.module';

@NgModule({
  declarations: [AddPage, ModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPageRoutingModule,
    FarmingMethodShared,
    UiSharedModule,
  ],
})
export class AddPageModule {}
