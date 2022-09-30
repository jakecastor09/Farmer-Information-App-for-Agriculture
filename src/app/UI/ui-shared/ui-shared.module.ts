import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from '../button/button.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { PageHeaderComponent } from '../page-header/page-header.component';

@NgModule({
  declarations: [ButtonComponent, InputFieldComponent, PageHeaderComponent],
  imports: [CommonModule, IonicModule],
  exports: [ButtonComponent, InputFieldComponent, PageHeaderComponent],
})
export class UiSharedModule {}
