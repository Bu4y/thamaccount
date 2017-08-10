import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ExpendModel } from "./expend-lists.model";
import { Constants } from "../../app.constants";
@Injectable()
export class ExpendListsService {

  constructor(private http: Http) { }

  getExpends() {
    return this.http.get(Constants.URL + 'api/expends').toPromise()
      .then(response => response.json() as ExpendModel)
      .catch(this.handleError);
  }
  deleteExpends(_id) {
    return this.http.delete(Constants.URL + 'api/orther/expends/' + _id).toPromise()
      .then(response => response.json() as ExpendModel)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
