import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyMethodsPageRoutingModule } from './my-methods-routing.module';

import { MyMethodsPage } from './my-methods.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyMethodsPageRoutingModule
  ],
  declarations: [MyMethodsPage]
})
export class MyMethodsPageModule {}
