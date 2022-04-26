import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogoScreenPageRoutingModule } from './logo-screen-routing.module';

import { LogoScreenPage } from './logo-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogoScreenPageRoutingModule
  ],
  declarations: [LogoScreenPage]
})
export class LogoScreenPageModule {}
