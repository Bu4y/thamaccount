import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JvComponent } from "./jv.component";

const routes: Routes = [
    { path: '', component: JvComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JvRoutingModule { }
