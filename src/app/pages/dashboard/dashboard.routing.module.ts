import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UserResolver } from 'src/app/service/resolver/user.resolver';
import { HomeComponent } from '../home/home.component';
import { DataBoardComponent } from '../data-board/data-board.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        resolve: {
            user: UserResolver
        },
        children: [
            {
                path: 'data',
                component: DataBoardComponent
            },
            {
                path: '',
                component: HomeComponent
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
    ],
    providers: [
        UserResolver
    ]
})
export class DashboardRoutingModule{}