import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApCreateRoutingModule } from "./ap-create-routing.module";
import { ApCreateComponent } from "./ap-create.component";

import { ComponentModule } from "../../shared/components/components.module";

@NgModule({
  imports: [
    CommonModule,
    ApCreateRoutingModule,
    ComponentModule
  ],
  declarations: [ApCreateComponent]
})
export class ApCreateModule { }
