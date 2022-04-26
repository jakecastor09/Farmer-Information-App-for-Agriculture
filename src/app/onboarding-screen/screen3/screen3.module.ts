import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Screen3PageRoutingModule } from './screen3-routing.module';

import { Screen3Page } from './screen3.page';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ContentComponent } from '../content/content.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, Screen3PageRoutingModule],
  declarations: [Screen3Page, NavBarComponent, ContentComponent],
})
export class Screen3PageModule {}
