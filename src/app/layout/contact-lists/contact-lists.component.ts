import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';

import { Constants } from "../../app.constants";

@Component({
  selector: 'app-contact-lists',
  templateUrl: './contact-lists.component.html',
  styleUrls: ['./contact-lists.component.scss'],
  animations: [routerTransition()]

})
export class ContactListsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log(Constants.URL);
  }

  goToDetail(item) {
    this.router.navigate(['/contact-create'], { queryParams: { item: item } });
  }

}
