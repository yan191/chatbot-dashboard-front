import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialOptionsComponent } from './initial-options.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InitialOptionsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    InitialOptionsComponent
  ]
})
export class InitialOptionsModule { }
