import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageHeaderModule } from './../../shared';
import { GlReportComponent } from './gl-report.component';
import { GlReportRoutingModule } from './gl-report-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GlReportRoutingModule,
    PageHeaderModule,
    FormsModule
  ],
  declarations: [GlReportComponent]
})
export class GlReportModule { }
