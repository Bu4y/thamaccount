import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-ap',
  templateUrl: './ap.component.html',
  styleUrls: ['./ap.component.scss'],
  animations: [routerTransition()]

})
export class ApComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
