import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RvComponent } from "./rv.component";

const routes: Routes = [
    { path: '', component: RvComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RvRoutingModule { }
