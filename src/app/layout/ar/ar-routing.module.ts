import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArComponent } from "./ar.component";

const routes: Routes = [
    { path: '', component: ArComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArRoutingModule { }
