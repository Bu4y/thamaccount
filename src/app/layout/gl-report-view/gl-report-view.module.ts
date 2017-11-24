import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageHeaderModule } from './../../shared';
import { GlReportViewRoutingModule } from './gl-report-view-routing.module';
import { GlReportViewComponent } from './gl-report-view.component';

@NgModule({
  imports: [
    CommonModule,
    GlReportViewRoutingModule,
    PageHeaderModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [GlReportViewComponent]
})
export class GlReportViewModule { }
