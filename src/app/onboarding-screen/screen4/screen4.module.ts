import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Screen4PageRoutingModule } from './screen4-routing.module';

import { Screen4Page } from './screen4.page';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Screen4PageRoutingModule,
    SharedModuleModule,
  ],
  declarations: [Screen4Page],
})
export class Screen4PageModule {}
