import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';

import { ContactCreateService } from "./contact-create.service";
import { ContactModel } from "./contact-create.model";

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss'],
  animations: [routerTransition()]

})
export class ContactCreateComponent implements OnInit {
  contact: ContactModel = new ContactModel();
  constructor(public router: Router, private contactCreateService: ContactCreateService) {
  }
  ngOnInit() {
  }

  saveContact() {
    let contact = this.contact;
    console.log(contact);
    this.contactCreateService.postContact(contact).then((data) => {
      this.router.navigate(['/contact-list']);
    }, (error) => {
      console.error(error);
    });
  }

}
