import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunityScreenPageRoutingModule } from './community-screen-routing.module';

import { CommunityScreenPage } from './community-screen.page';
import { UiSharedModule } from 'src/app/UI/ui-shared/ui-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunityScreenPageRoutingModule,
    UiSharedModule,
  ],
  declarations: [CommunityScreenPage],
})
export class CommunityScreenPageModule {}
