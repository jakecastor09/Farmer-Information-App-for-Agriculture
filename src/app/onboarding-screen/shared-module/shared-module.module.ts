import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ContentComponent } from '../content/content.component';

@NgModule({
  declarations: [NavBarComponent, ContentComponent],
  imports: [CommonModule, IonicModule],
  exports: [NavBarComponent, ContentComponent],
})
export class SharedModuleModule {}
