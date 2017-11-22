import { GlReportModel } from './../../../assets/models/gl-report.model';
import { GlReportService } from './gl-report.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-gl-report',
  templateUrl: './gl-report.component.html',
  styleUrls: ['./gl-report.component.scss']
})
export class GlReportComponent implements OnInit {
  glReport: GlReportModel = new GlReportModel;
  glType: string = 'month';
  month: Date;
  year: number = new Date().getFullYear();
  currentLang: string;

  constructor(
    private glReportService: GlReportService,
    private translate: TranslateService
  ) {

  }

  ngOnInit() {
  }

  genGlReport() {
    this.getGlReport();
  }

  getGlReport() {

    let glDate;
    if (this.glType === 'month') {
      if (!this.month) {
        this.currentLang = this.translate.currentLang;
        if (this.currentLang === 'th') {
          alert('กรุณาระบุเดือน');
        } else {
          alert('Please fill month');
        }
        return false;
      }
      glDate = this.month;
    } else {
      glDate = new Date(this.year, 1, 1);
    }

    this.glReportService.getGlReport(this.glType, glDate).then((gl) => {
      this.glReport = gl;

      console.log(this.glReport);

    //   let date1 = new Date(this.glReport.balance.date).toDateString;
    //  // let formatted = new DatePipe().transform(date1, 'yyyy-MM-dd');
    //    //date1 = filter( this.glReport.balance.date ).format( 'DD MMMM YYYY' );

    //    console.log("เดือน"+date1);
    }, (error) => {
      alert(JSON.stringify(error));
    })

  }

}
