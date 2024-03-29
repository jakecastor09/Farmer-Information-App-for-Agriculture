import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileScreenPageRoutingModule } from './profile-screen-routing.module';

import { ProfileScreenPage } from './profile-screen.page';
import { BrowserModule } from '@angular/platform-browser';
import { UiSharedModule } from 'src/app/UI/ui-shared/ui-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileScreenPageRoutingModule,
    UiSharedModule,
  ],
  declarations: [ProfileScreenPage],
})
export class ProfileScreenPageModule {}
