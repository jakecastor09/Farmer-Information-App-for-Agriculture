import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipsScreenPageRoutingModule } from './tips-screen-routing.module';

import { TipsScreenPage } from './tips-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipsScreenPageRoutingModule
  ],
  declarations: [TipsScreenPage]
})
export class TipsScreenPageModule {}
