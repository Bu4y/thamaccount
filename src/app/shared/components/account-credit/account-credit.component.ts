import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-account-credit',
  templateUrl: './account-credit.component.html',
  styleUrls: ['./account-credit.component.scss']
})
export class AccountCreditComponent implements OnInit {
  @Input('accounts') data: Array<Object>
  @Input('creditHeader') creditHeader: string;
  @Output() creditItems = new EventEmitter();
  credit: CreditModel = new CreditModel();
  credits: Array<any> = [];
  creditTotal: number;
  currentLang: string;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  selected($event) {
    // console.log($event);
    this.credit.account = $event;
  }

  addItem() {
    this.currentLang = this.translate.currentLang;

    if (!this.credit.account._id) {
      if (this.currentLang === 'th') {
        alert('กรุณาเลือกรหัสบัญชี');
      } else {
        alert('Please fill credit.');
      }
      return false;
    }

    if (!this.credit.amount) {
      if (this.currentLang === 'th') {
        alert('กรุณาระบุจำนวนเงิน');
      } else {
        alert('Please fill amount.');
      }
      return false;
    }

    this.credits.push(this.credit);
    this.credit = new CreditModel();
    this.credit.account = this.credits[this.credits.length - 1].account;
    this.calculate();
  }

  removeItem(index) {
    this.credits.splice(index, 1);
    this.calculate();
  }

  calculate() {
    this.creditTotal = 0;
    let length = this.credits.length;
    for (let i = 0; i < length; i++) {
      this.creditTotal += this.credits[i].amount;
    }
    this.creditItems.emit({
      credits: this.credits,
      totalcredit: this.creditTotal
    });
  }

}

export class CreditModel {
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
