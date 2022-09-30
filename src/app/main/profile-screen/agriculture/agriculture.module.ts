import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgriculturePageRoutingModule } from './agriculture-routing.module';

import { AgriculturePage } from './agriculture.page';
import { UiSharedModule } from 'src/app/UI/ui-shared/ui-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgriculturePageRoutingModule,
    UiSharedModule,
  ],
  declarations: [AgriculturePage],
})
export class AgriculturePageModule {}
