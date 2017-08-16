import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-account-debit',
  templateUrl: './account-debit.component.html',
  styleUrls: ['./account-debit.component.scss']
})
export class AccountDebitComponent implements OnInit {
  @Input('accounts') data: Array<Object>
  @Input('debitHeader') debitHeader: string;
  @Output() debitItems = new EventEmitter();
  debit: DebitModel = new DebitModel();
  debits: Array<any> = [];
  debitTotal: number;
  currentLang: string;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  selected($event) {
    // console.log($event);
    this.debit.account = $event;
  }

  addItem() {
    this.currentLang = this.translate.currentLang;

    if (!this.debit.account._id) {
      if (this.currentLang === 'th') {
        alert('กรุณาเลือกรหัสบัญชี');
      } else {
        alert('Please fill debit.');
      }
      return false;
    }

    if (!this.debit.amount) {
      if (this.currentLang === 'th') {
        alert('กรุณาระบุจำนวนเงิน');
      } else {
        alert('Please fill amount.');
      }
      return false;
    }

    this.debits.push(this.debit);
    this.debit = new DebitModel();
    this.debit.account = this.debits[this.debits.length - 1].account;
    this.calculate();
  }

  removeItem(index) {
    this.debits.splice(index, 1);
    this.calculate();
  }

  calculate() {
    this.debitTotal = 0;
    let length = this.debits.length;
    for (let i = 0; i < length; i++) {
      this.debitTotal += this.debits[i].amount;
    }
    this.debitItems.emit({
      debits: this.debits,
      totaldebit: this.debitTotal
    });
  }

}

export class DebitModel {
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