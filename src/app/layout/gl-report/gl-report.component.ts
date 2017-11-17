import { GlReportModel } from './../../../assets/models/gl-report.model';
import { GlReportService } from './gl-report.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gl-report',
  templateUrl: './gl-report.component.html',
  styleUrls: ['./gl-report.component.scss']
})
export class GlReportComponent implements OnInit {
  glReport: GlReportModel = new GlReportModel;
  constructor(
    private glReportService: GlReportService
  ) { }

  ngOnInit() {
    this.getGlReport();
  }

  getGlReport() {
    this.glReportService.getGlReport().then((gl) => {
      this.glReport = gl;
      console.log(this.glReport);
    }, (error) => {
      alert(JSON.stringify(error));
    })

  }

}
