import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPageRoutingModule } from './add-routing.module';

import { AddPage } from './add.page';
import { ModalComponent } from './modal/modal.component';
import { TitleComponent } from './title/title.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AddPageRoutingModule],
  declarations: [AddPage, ModalComponent, TitleComponent, MessageComponent],
})
export class AddPageModule {}