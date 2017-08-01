import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArRoutingModule } from "./ar-routing.module";
import { ArComponent } from "./ar.component";

@NgModule({
  imports: [
    CommonModule,
    ArRoutingModule
  ],
  declarations: [ArComponent]
})
export class ArModule { }
