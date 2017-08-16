import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'account', loadChildren: './account/account.module#AccountModule' },
            { path: 'account-create', loadChildren: './account-create/account-create.module#AccountCreateModule' },
            { path: 'expend-create', loadChildren: './expend-create/expend-create.module#ExpendCreateModule' },
            { path: 'expend-lists', loadChildren: './expend-lists/expend-lists.module#ExpendListsModule' },
            { path: 'contact-create', loadChildren: './contact-create/contact-create.module#ContactCreateModule' },
            { path: 'contact-lists', loadChildren: './contact-lists/contact-lists.module#ContactListsModule' },
            { path: 'ap-create', loadChildren: './ap-create/ap-create.module#ApCreateModule' },
            { path: 'ar-create', loadChildren: './ar-create/ar-create.module#ArCreateModule' },
            { path: 'pv-create', loadChildren: './pv-create/pv-create.module#PvCreateModule' },
            { path: 'rv-create', loadChildren: './rv-create/rv-create.module#RvCreateModule' },            
            { path: 'jv-create', loadChildren: './jv-create/jv-create.module#JvCreateModule' }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
