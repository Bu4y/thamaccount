import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss'],
  animations: [routerTransition()]

})
export class ContactCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
