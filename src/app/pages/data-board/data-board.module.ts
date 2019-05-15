import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBoardComponent } from './data-board.component';
import { CardSimpleNumberComponent } from './card-simple-number/card-simple-number.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DataBoardComponent, CardSimpleNumberComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    DataBoardComponent
  ]
})
export class DataBoardModule { }
