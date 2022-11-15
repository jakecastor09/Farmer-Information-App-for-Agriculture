import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MethodListPageRoutingModule } from './method-list-routing.module';

import { MethodListPage } from './method-list.page';
import { UiSharedModule } from 'src/app/UI/ui-shared/ui-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MethodListPageRoutingModule,
    UiSharedModule,
  ],
  declarations: [MethodListPage],
})
export class MethodListPageModule {}
