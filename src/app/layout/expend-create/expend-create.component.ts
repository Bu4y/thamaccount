import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpendCreateService } from "./expend-create.service";

@Component({
  selector: 'app-expend-create',
  templateUrl: './expend-create.component.html',
  styleUrls: ['./expend-create.component.scss'],
  animations: [routerTransition()]

})
export class ExpendCreateComponent implements OnInit {
  sub: any;
  constructor(private route: ActivatedRoute, private router: Router, private expendCreateService: ExpendCreateService) { }

  ngOnInit() {
    console.log(this.expendCreateService.postExpend());
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        console.log(params['item']);
      });
    this.sub.unsubscribe();
  }

}
