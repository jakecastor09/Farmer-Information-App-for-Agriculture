import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ButtonComponent, InputFieldComponent],
  imports: [CommonModule, IonicModule],
  exports: [ButtonComponent, InputFieldComponent],
})
export class UiSharedModule {}
