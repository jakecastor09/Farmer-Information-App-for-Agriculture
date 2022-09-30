import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyFavoritesPageRoutingModule } from './my-favorites-routing.module';

import { MyFavoritesPage } from './my-favorites.page';
import { UiSharedModule } from 'src/app/UI/ui-shared/ui-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyFavoritesPageRoutingModule,
    UiSharedModule,
  ],
  declarations: [MyFavoritesPage],
})
export class MyFavoritesPageModule {}
