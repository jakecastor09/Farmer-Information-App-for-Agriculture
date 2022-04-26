import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Screen1PageRoutingModule } from './screen1-routing.module';

import { Screen1Page } from './screen1.page';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ContentComponent } from '../content/content.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, Screen1PageRoutingModule],
  declarations: [Screen1Page, NavBarComponent, ContentComponent],
})
export class Screen1PageModule {}
