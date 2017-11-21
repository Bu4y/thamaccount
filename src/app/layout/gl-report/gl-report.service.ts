import { GlReportModel } from './../../../assets/models/gl-report.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Constants } from "../../app.constants";

@Injectable()
export class GlReportService {

  constructor(private http: Http) {

  }

  getGlReport(glTyp, glDate) {
    return this.http.get('./assets/JSON/gl-report.json').toPromise()    
    // return this.http.get(Constants.URL + 'api/glreport/' + glTyp + '/' + glDate).toPromise()
      .then(response => response.json() as GlReportModel)
      .catch(this.handleError);
  }

  // Error function
  private handleError(error: any): Promise<any> {
    // console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
