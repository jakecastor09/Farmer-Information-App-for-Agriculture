import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MethodListPageRoutingModule } from './method-list-routing.module';

import { MethodListPage } from './method-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MethodListPageRoutingModule
  ],
  declarations: [MethodListPage]
})
export class MethodListPageModule {}
