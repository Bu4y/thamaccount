import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {
  @Input('accounts') data: Array<Object>
  @Input('accountHeader') accountHeader: string;
  @Output() accountItems = new EventEmitter();
  account: AccountItemModel = new AccountItemModel();
  accounts: Array<any> = [];
  accountTotal: number;
  currentLang: string;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  selected($event) {
    // console.log($event);
    this.account.account = $event;
  }

  addItem() {
    this.currentLang = this.translate.currentLang;

    if (!this.account.account._id) {
      if (this.currentLang === 'th') {
        alert('กรุณาเลือกรหัสบัญชี');
      } else {
        alert('Please fill account.');
      }
      return false;
    }

    if (!this.account.amount) {
      if (this.currentLang === 'th') {
        alert('กรุณาระบุจำนวนเงิน');
      } else {
        alert('Please fill amount.');
      }
      return false;
    }

    this.accounts.push(this.account);
    this.account = new AccountItemModel();
    this.account.account = this.accounts[this.accounts.length - 1].account;
    this.calculate();
  }

  removeItem(index) {
    this.accounts.splice(index, 1);
    this.calculate();
  }

  onChangeAmount() {
    this.calculate();
  }

  calculate() {
    this.accountTotal = 0;
    let length = this.accounts.length;
    for (let i = 0; i < length; i++) {
      this.accountTotal += this.accounts[i].amount;
    }
    console.log('tets');
    this.accountItems.emit({
      accounts: this.accounts,
      totalaccount: this.accountTotal
    });
  }

}
export class AccountItemModel {
  account: AccountModel = new AccountModel();
  description: string;
  amount: number;
}

export class AccountModel {
  _id: string;
  name: string;
  accountno: string;
  parent: string;
  status: string;
}
