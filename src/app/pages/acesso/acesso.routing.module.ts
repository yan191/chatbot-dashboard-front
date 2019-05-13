import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoComponent } from './acesso.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { InitialOptionsComponent } from 'src/app/components/initial-options/initial-options.component';

const routes: Routes = [
    {
        path: '',
        component: AcessoComponent,
        children: [
            {
                path: '',
                component: InitialOptionsComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'cadastro',
                component: RegisterComponent
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AcessoRoutingModule{}