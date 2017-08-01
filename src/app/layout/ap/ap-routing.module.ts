import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApComponent } from "./ap.component";

const routes: Routes = [
    { path: '', component: ApComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApRoutingModule { }
