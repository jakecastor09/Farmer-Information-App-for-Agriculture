import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeScreenPageRoutingModule } from './home-screen-routing.module';

import { HomeScreenPage } from './home-screen.page';
import { CardsComponent } from './cards/cards.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeScreenPageRoutingModule,
  ],
  declarations: [HomeScreenPage, CardsComponent, UserListComponent],
})
export class HomeScreenPageModule {}
