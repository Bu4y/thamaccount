import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'account', loadChildren: './account/account.module#AccountModule' },
            { path: 'expend-create', loadChildren: './expend-create/expend-create.module#ExpendCreateModule' },
            { path: 'expend-lists', loadChildren: './expend-lists/expend-lists.module#ExpendListsModule' },
            { path: 'contact-create', loadChildren: './contact-create/contact-create.module#ContactCreateModule' },            
            { path: 'contact-lists', loadChildren: './contact-lists/contact-lists.module#ContactListsModule' }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
