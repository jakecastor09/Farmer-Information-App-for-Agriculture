import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Screen2PageRoutingModule } from './screen2-routing.module';

import { Screen2Page } from './screen2.page';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ContentComponent } from '../content/content.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, Screen2PageRoutingModule],
  declarations: [Screen2Page, NavBarComponent, ContentComponent],
})
export class Screen2PageModule {}
