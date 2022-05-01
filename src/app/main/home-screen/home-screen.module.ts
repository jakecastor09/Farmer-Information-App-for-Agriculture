import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeScreenPageRoutingModule } from './home-screen-routing.module';

import { HomeScreenPage } from './home-screen.page';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeScreenPageRoutingModule,
  ],
  declarations: [HomeScreenPage, CardsComponent],
})
export class HomeScreenPageModule {}
