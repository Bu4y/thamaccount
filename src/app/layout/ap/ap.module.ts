import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApRoutingModule } from "./ap-routing.module";
import { ApComponent } from "./ap.component";

@NgModule({
  imports: [
    CommonModule,
    ApRoutingModule
  ],
  declarations: [ApComponent]
})
export class ApModule { }
