import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Screen1PageRoutingModule } from './screen1-routing.module';

import { Screen1Page } from './screen1.page';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Screen1PageRoutingModule,
    SharedModuleModule,
  ],
  declarations: [Screen1Page],
})
export class Screen1PageModule {}
