import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RvComponent } from "./rv.component";
import { RvRoutingModule } from "./rv-routing.module";

@NgModule({
  imports: [
    CommonModule,
    RvRoutingModule
  ],
  declarations: [RvComponent]
})
export class RvModule { }
