import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AccountFormModel, AccountListModel, AccountModel } from "../account.model";
import { AccountCreateService } from "../account-create/account-create.service";

import { JvCreateService } from "../jv-create/jv-create.service";
@Component({
  selector: 'app-ap-create',
  templateUrl: './ap-create.component.html',
  styleUrls: ['./ap-create.component.scss']
})
export class ApCreateComponent implements OnInit {
  accountForm: AccountFormModel = new AccountFormModel();
  accounts: AccountListModel = new AccountListModel();
  account: AccountModel = new AccountModel();
  currentLang: string;
  type: string = 'AP';
  searchText: string = ''
  constructor(private accountCreateService: AccountCreateService, private jvCreateService: JvCreateService, private translate: TranslateService) {

  }

  ngOnInit() {
    this.getAccount();
  }

  getMode() {
    return this.accountForm._id ? 'update' : 'create';
  }

  searching(e) {
    if (e.keyCode == 13) {
      this.currentLang = this.translate.currentLang;
      if (this.currentLang === 'th') {
        let res = confirm('คุณต้องการยกเลิกการทำรายการนี้?');
        if (res) {
          // alert('ค้นหา');
          this.searchAccount(this.searchText);
        }
      } else {
        let res = confirm('Would you like to cancel this transaction?');
        if (res) {
          // alert('Search');
          this.searchAccount(this.searchText);
        }
      }
    }
  }

  searchAccount(searchText) {
    this.jvCreateService.searchAccount('AP' + searchText).then((data) => {
      if (data._id) {
        data.docdate = new Date(data.docdate);
        this.accountForm = data;
      } else {
        this.currentLang = this.translate.currentLang;
        if (this.currentLang === 'th') {
          alert('ไม่พบ เลขที่เอกสาร "AP' + searchText + '"');
        } else {
          alert('"AP' + searchText + '" Not found.');
        }
      }
    }, (error) => {
      // alert();
      console.log(error);
    });
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
    this.accountForm.debits = debit.accounts;
    this.accountForm.totaldebit = debit.totalaccount;
  }

  onCredits(credit) {
    this.accountForm.credits = credit.accounts;
    this.accountForm.totalcredit = credit.totalaccount;
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
    this.accountForm.gltype = this.type;
    if (this.accountForm._id) {
      this.update();
    } else {
      this.create();
    }
  }

  create() {
    this.jvCreateService.postJv(this.accountForm).then((data) => {
      if (this.currentLang === 'th') {
        alert('สำเร็จ เลขที่เอกสาร "' + data.docno + '"');
      } else {
        alert('Complate Docno "' + data.docno + '"');
      }
      this.accountForm = data;
      // window.location.reload();
    }, (error) => {
      if (error._body.message) {
        alert(JSON.parse(error._body).message);
      } else {

      }
    });
  }

  update() {
    this.jvCreateService.putJv(this.accountForm).then((data) => {
      if (this.currentLang === 'th') {
        alert('อัพเดทสำเร็จ เลขที่เอกสาร "' + data.docno + '"');
      } else {
        alert('Update complate Docno "' + data.docno + '"');
      }
      this.accountForm = data;
      // window.location.reload();
    }, (error) => {
      if (error._body.message) {
        alert(JSON.parse(error._body).message);
      } else {

      }
    });
  }
}
