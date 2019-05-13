import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    AlertComponent
  ]
})
export class AlertModule { }
