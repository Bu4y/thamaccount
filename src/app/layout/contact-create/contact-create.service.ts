import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ContactModel } from "./contact-create.model";
import { Constants } from "../../app.constants";
@Injectable()
export class ContactCreateService {

  constructor(private http: Http) { }

  postContact(contact) {
    return this.http.post(Constants.URL + 'api/contacts', contact).toPromise()
      .then(response => response.json() as ContactModel)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
