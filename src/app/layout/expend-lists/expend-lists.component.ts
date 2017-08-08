import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';

import { ExpendListsService } from "./expend-lists.service";

@Component({
  selector: 'app-expend-lists',
  templateUrl: './expend-lists.component.html',
  styleUrls: ['./expend-lists.component.scss'],
  animations: [routerTransition()]

})
export class ExpendListsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private expendListsService: ExpendListsService) { }

  ngOnInit() {
    console.log(this.expendListsService.getExpend());
  }

  goToDetail(item) {
    this.router.navigate(['/expend-create'], { queryParams: { item: item } });
  }

}
