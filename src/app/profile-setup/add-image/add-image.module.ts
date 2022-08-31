import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddImagePageRoutingModule } from './add-image-routing.module';

import { AddImagePage } from './add-image.page';
import { UiSharedModule } from 'src/app/UI/ui-shared/ui-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddImagePageRoutingModule,
    UiSharedModule,
  ],
  declarations: [AddImagePage],
})
export class AddImagePageModule {}
