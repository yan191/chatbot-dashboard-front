import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './core/auth/login.guard';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: './pages/acesso/acesso.module#AcessoModule',
    canActivate: [LoginGuard]
  },
  {
    path: '**',
    loadChildren: './pages/acesso/acesso.module#AcessoModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
