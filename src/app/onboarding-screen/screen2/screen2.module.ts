import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Screen2PageRoutingModule } from './screen2-routing.module';

import { Screen2Page } from './screen2.page';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Screen2PageRoutingModule,
    SharedModuleModule,
  ],
  declarations: [Screen2Page],
})
export class Screen2PageModule {}
