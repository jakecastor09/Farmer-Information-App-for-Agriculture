import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyMethodsPageRoutingModule } from './my-methods-routing.module';

import { MyMethodsPage } from './my-methods.page';

import { UiSharedModule } from 'src/app/UI/ui-shared/ui-shared.module';

import { CardMethodComponent } from './card-method/card-method.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyMethodsPageRoutingModule,
    UiSharedModule,
  ],
  declarations: [MyMethodsPage, CardMethodComponent],
})
export class MyMethodsPageModule {}
