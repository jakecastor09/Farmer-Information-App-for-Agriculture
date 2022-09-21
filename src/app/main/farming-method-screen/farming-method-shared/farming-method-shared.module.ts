import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TitleComponent } from './title/title.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [TitleComponent, MessageComponent],
  imports: [CommonModule, IonicModule],
  exports: [TitleComponent, MessageComponent],
})
export class FarmingMethodShared {}
