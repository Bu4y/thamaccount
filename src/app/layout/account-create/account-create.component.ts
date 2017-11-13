import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AccountCreateService } from "./account-create.service";
import { AccountListModel, AccountModel } from '../account.model';

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
  currentLang: string;
  constructor(private accountCreateService: AccountCreateService, private router: Router, private route: ActivatedRoute, private translate: TranslateService) { }

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
      this.currentLang = this.translate.currentLang;
      if (!this.account.accountno) {
        if (this.currentLang === 'th') {
          alert('กรุณาระบุรหัสบัญชี');
        } else {
          alert('Please fill account no.');
        }
        return false;
      }
      if (!this.account.name) {
        if (this.currentLang === 'th') {
          alert('กรุณาระบุชื่อบัญชี');
        } else {
          alert('Please fill account name.');
        }
        return false;
      }
      this.accountCreateService.postAccount(this.account).then((data) => {
        this.router.navigate(['/account']);
      }, (error) => {
        this.error = JSON.parse(error._body).message;
        console.log(this.error);
      });
    }
  }
}
