import { NgModule } from '@angular/core';
import { BorderedButtonComponent } from './bordered-button.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    BorderedButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BorderedButtonComponent
  ]
})
export class BorderedButtonModule { }
