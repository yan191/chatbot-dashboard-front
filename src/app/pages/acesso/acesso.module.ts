import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcessoComponent } from './acesso.component';
import { LoginModule } from 'src/app/components/login/login.module';
import { AcessoRoutingModule } from './acesso.routing.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterModule } from 'src/app/components/register/register.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InitialOptionsModule } from 'src/app/components/initial-options/initial-options.module';

@NgModule({
  declarations: [AcessoComponent],
  imports: [
    CommonModule,
    RouterModule,
    AcessoRoutingModule,
    FlexLayoutModule,
    LoginModule,
    RegisterModule,
    InitialOptionsModule
  ]
})
export class AcessoModule { }
