import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu.component';
import { OptionComponent } from './option/option.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SideMenuComponent, OptionComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports:[SideMenuComponent]
})
export class SideMenuModule { }
