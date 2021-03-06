import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SideMenuModule } from 'src/app/components/side-menu/side-menu.module';
import { SearchBarModule } from 'src/app/components/search-bar/search-bar.module';
import { HomeModule } from '../home/home.module';
import { DataBoardModule } from '../data-board/data-board.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    SideMenuModule,
    SearchBarModule,
    HomeModule,
    DataBoardModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
