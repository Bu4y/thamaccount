import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AccountModel, AccountListModel } from "./account-create.model";
import { AccountCreateService } from "./account-create.service";

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})
export class AccountCreateComponent implements OnInit {
  parents: AccountListModel = new AccountListModel();
  account: AccountModel = new AccountModel();
  error: string;
  subParams: any;
  status: Array<string> = ['active', 'inactive'];
  constructor(private accountCreateService: AccountCreateService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAccount();
  }

  getAccount() {
    this.accountCreateService.getAccount().then((data) => {
      this.parents.accounts = data;
      this.parents.accounts.unshift({
        _id: '',
        name: '--- No Parent ---',
        accountno: '',
        parent: '',
        status: ''
      });
      this.parents.accounts.sort((a, b) => { return (a.accountno > b.accountno) ? 1 : ((b.accountno > a.accountno) ? -1 : 0); });
      this.getParam();
    }, (error) => {
      console.error(error);
    });
  }

  getParam() {
    this.subParams = this.route
      .queryParams
      .subscribe(params => {
        let item = params['item'];
        if (item && item !== '') {
          this.account = JSON.parse(item);
        }
      });
    this.subParams.unsubscribe();
  }

  saveAccount() {
    if (this.account._id) {
      this.accountCreateService.putAccount(this.account).then((data) => {
        this.router.navigate(['/account']);
      }, (error) => {
        this.error = JSON.parse(error._body).message;
        console.log(this.error);
      });
    } else {
      this.accountCreateService.postAccount(this.account).then((data) => {
        this.router.navigate(['/account']);
      }, (error) => {
        this.error = JSON.parse(error._body).message;
        console.log(this.error);
      });
    }
  }
}
