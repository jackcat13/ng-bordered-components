import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BorderedDivComponent } from './bordered-div.component';



@NgModule({
  declarations: [
    BorderedDivComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BorderedDivComponent
  ]
})
export class BorderedDivModule { }
