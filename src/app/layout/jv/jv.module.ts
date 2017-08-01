import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JvComponent } from "./jv.component";
import { JvRoutingModule } from "./jv-routing.module";

@NgModule({
  imports: [
    CommonModule,
    JvRoutingModule
  ],
  declarations: [JvComponent]
})
export class JvModule { }
