import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  name: string;
  key: string = 'parent';

  data: Array<any> = [{
    name: "สินทรัพย์",
    accountno: 1000000,
    status: "active",
    parent: [{
      name: "สินทรัพย์1",
      accountno: 1100000,
      parent: [],
      status: "active"
    }],
  }, {
    name: "หนี้สิน",
    accountno: 2000000,
    parent: [{
      name: "หนี้สิน1",
      accountno: 2100000,
      status: "active",
      parent: [{
        name: "หนี้สิน2",
        accountno: 2110000,
        parent: [{
          name: "หนี้สิน3",
          accountno: 2111000,
          parent: [],
          status: "active"
        }],
        status: "active"
      }],
    }],
    status: "active"
  }];

  accounts: Array<any> = [{
    name: "สินทรัพย์",
    accountno: 1000000,
    parent: null,
    status: "active",
  },
  {
    name: "test",
    accountno: 1100000,
    parent: 1000000,
    status: "active"
  },
  {
    name: "หนี้สิน",
    accountno: 2000000,
    parent: null,
    status: "active"
  },
  {
    name: "test2",
    accountno: 2100000,
    parent: 2000000,
    status: "active"
  },
  {
    name: "test3",
    accountno: 2110000,
    parent: 2100000,
    status: "active"
  }]
  showMenu = '';
  accountno: number;
  constructor() { }

  ngOnInit() {
  }

  addExpandClass(item) {
    item.expand = item.expand ? false : true;
  }

}
