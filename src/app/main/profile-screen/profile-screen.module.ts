import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileScreenPageRoutingModule } from './profile-screen-routing.module';

import { ProfileScreenPage } from './profile-screen.page';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileScreenPageRoutingModule,
  ],
  declarations: [ProfileScreenPage],
})
export class ProfileScreenPageModule {}
