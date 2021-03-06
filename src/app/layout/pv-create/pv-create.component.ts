import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AccountFormModel } from "../account.model";
import { AccountCreateService } from "../account-create/account-create.service";
import { AccountModel } from "../account.model";

import { JvCreateService } from "../jv-create/jv-create.service";
@Component({
  selector: 'app-pv-create',
  templateUrl: './pv-create.component.html',
  styleUrls: ['./pv-create.component.scss']
})
export class PvCreateComponent implements OnInit {
  accountForm: AccountFormModel = new AccountFormModel();
  account: AccountModel = new AccountModel();
  currentLang: string;
  type: string = 'PV';
  searchText: string = '';
  isSave: Boolean = false;
  constructor(
    private accountCreateService: AccountCreateService,
    private jvCreateService: JvCreateService,
    private translate: TranslateService
  ) { }

  ngOnInit() {

  }

  getMode() {
    return this.accountForm._id ? 'update' : 'create';
  }

  searching(e) {
    if (e.keyCode == 13) {
      if (this.accountForm.debits || this.accountForm.credits || this.accountForm.remark) {
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
      } else {
        this.searchAccount(this.searchText);
      }
    }
  }

  searchAccount(searchText) {
    this.jvCreateService.searchAccount('PV' + searchText).then((data) => {
      if (data._id) {
        data.docdate = new Date(data.docdate);
        this.accountForm = data;
      } else {
        this.currentLang = this.translate.currentLang;
        if (this.currentLang === 'th') {
          alert('ไม่พบ เลขที่เอกสาร "PV' + searchText + '"');
          this.accountForm = new AccountFormModel();
          this.accountForm.docdate = new Date();
        } else {
          alert('"PV' + searchText + '" Not found.');
        }
      }
    }, (error) => {
      // alert();
      console.log(error);
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
    this.isSave = true;
    this.jvCreateService.postJv(this.accountForm).then((data) => {
      if (this.currentLang === 'th') {
        alert('สำเร็จ เลขที่เอกสาร "' + data.docno + '"');
      } else {
        alert('Complate Docno "' + data.docno + '"');
      }
      this.isSave = false;
      data.docdate = new Date(data.docdate);
      this.accountForm = data;
      // window.location.reload();
    }, (error) => {
      this.isSave = false;
      if (error._body.message) {
        alert(JSON.parse(error._body).message);
      } else {
        alert(error);
      }
    });
  }

  update() {
    this.isSave = true;
    this.jvCreateService.putJv(this.accountForm).then((data) => {
      if (this.currentLang === 'th') {
        alert('อัพเดทสำเร็จ เลขที่เอกสาร "' + data.docno + '"');
      } else {
        alert('Update complate Docno "' + data.docno + '"');
      }
      this.isSave = false;
      data.docdate = new Date(data.docdate);
      this.accountForm = data;
      // window.location.reload();
    }, (error) => {
      this.isSave = false;
      if (error._body.message) {
        alert(JSON.parse(error._body).message);
      } else {
        alert(error);
      }
    });
  }

  addNew() {
    this.accountForm = new AccountFormModel();
    this.accountForm.docdate = new Date();
    this.searchText = '';
  }
}
