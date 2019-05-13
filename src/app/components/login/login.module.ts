import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { LoginComponent } from './login.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
