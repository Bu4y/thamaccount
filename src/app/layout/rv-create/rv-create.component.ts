import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AccountFormModel } from "../account.model";
import { AccountCreateService } from "../account-create/account-create.service";
import { AccountListModel, AccountModel } from "../account-create/account-create.model";

import { JvCreateService } from "../jv-create/jv-create.service";
@Component({
  selector: 'app-rv-create',
  templateUrl: './rv-create.component.html',
  styleUrls: ['./rv-create.component.scss']
})
export class RvCreateComponent implements OnInit {
  accountForm: AccountFormModel = new AccountFormModel();
  accounts: AccountListModel = new AccountListModel();
  account: AccountModel = new AccountModel();
  currentLang: string;
  constructor(private accountCreateService: AccountCreateService, private jvCreateService: JvCreateService, private translate: TranslateService) { }

  ngOnInit() {
    this.getAccount();
  }

  getAccount() {
    this.accountCreateService.getAccount().then((data) => {
      this.accounts.accounts = data;
      this.accounts.accounts.unshift({
        _id: '',
        name: '--- No Parent ---',
        accountno: '',
        parent: '',
        status: ''
      });
      this.accounts.accounts.sort((a, b) => { return (a.accountno > b.accountno) ? 1 : ((b.accountno > a.accountno) ? -1 : 0); });
    }, (error) => {
      console.error(error);
    });
  }

  docdate(date) {
    this.accountForm.docdate = date;
  }

  onDebits(debit) {
    this.accountForm.debits = debit.debits;
    this.accountForm.totaldebit = debit.totaldebit;
  }

  onCredits(credit) {
    this.accountForm.credits = credit.credits;
    this.accountForm.totalcredit = credit.totalcredit;
  }

  onSave() {
    this.currentLang = this.translate.currentLang;
    if (!this.accountForm.debits || this.accountForm.debits.length < 1) {
      if (this.currentLang === 'th') {
        alert('กรุณาระบุข้อมูลเดบิต');
      } else {
        alert('Please fill debit.');
      }
      return false;
    }
    if (!this.accountForm.credits || this.accountForm.credits.length < 1) {
      if (this.currentLang === 'th') {
        alert('กรุณาระบุข้อมูลเครดิต');
      } else {
        alert('Please fill credit.');
      }
      return false;
    }
    if (this.accountForm.totaldebit !== this.accountForm.totalcredit) {
      if (this.currentLang === 'th') {
        alert('แจ้งเตือน : ราคาเดบิตและเครดิตไม่เท่ากัน กรุณาระบุให้เท่ากัน');
      } else {
        alert('Warning : Debit and credit prices are not equal. Please specify the same.');
      }
      return false;
    }
    this.accountForm.gltype = 'RV';
    this.jvCreateService.postJv(this.accountForm).then((data) => {
      if (this.currentLang === 'th') {
        alert('สำเร็จ เลขที่เอกสาร "' + data.docno + '"');
      } else {
        alert('Complate Docno "' + data.docno + '"');
      }
      window.location.reload();
    }, (error) => {
      alert(JSON.parse(error._body).message);
    });
  }

}
