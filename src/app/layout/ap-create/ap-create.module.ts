import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ApRoutingModule } from "./ap-create-routing.module";
import { ApCreateComponent } from "./ap-create.component";

@NgModule({
  imports: [
    CommonModule,
    ApRoutingModule,
    FormsModule
  ],
  declarations: [ApCreateComponent]
})
export class ApCreateModule { }
