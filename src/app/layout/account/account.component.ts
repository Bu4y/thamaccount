import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  name: string;
  key: string = 'children';
  accounts: Array<any>;
  data: Array<any> = [{
    name: "สินทรัพย์",
    accountno: 1000000,
    parent: null,
    status: "active",
  },
  {
    name: "สินทรัพย์ 1.1",
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
    name: "หนี้สิน 2.1",
    accountno: 2100000,
    parent: 2000000,
    status: "active"
  },
  {
    name: "หนี้สิน 2.1.1",
    accountno: 2110000,
    parent: 2100000,
    status: "active"
  },
  {
    name: "หนี้สิน 2.2",
    accountno: 2200000,
    parent: 2000000,
    status: "active"
  },
  {
    name: "หนี้สิน 2.2.1",
    accountno: 2210000,
    parent: 2200000,
    status: "active"
  },
  {
    name: "หนี้สิน 2.2.2",
    accountno: 2220000,
    parent: 2200000,
    status: "active"
  },
  {
    name: "หนี้สิน 2.2.2.1",
    accountno: 2221000,
    parent: 2220000,
    status: "active"
  }]

  constructor() { }

  ngOnInit() {
    this.accounts = this.listToTree(this.data);
  }

  addExpandClass(item) {
    item.expand = item.expand ? false : true;
  }

  listToTree(data) {
    var ID_KEY = 'accountno';
    var PARENT_KEY = 'parent';
    var CHILDREN_KEY = 'children';

    var tree = [],
      childrenOf = {};
    var item, id, parentId;

    for (var i = 0, length = data.length; i < length; i++) {
      item = data[i];
      id = item[ID_KEY];
      parentId = item[PARENT_KEY] || 0;
      // every item may have children
      childrenOf[id] = childrenOf[id] || [];
      // init its children
      item[CHILDREN_KEY] = childrenOf[id];
      if (parentId != 0) {
        // init its parent's children object
        childrenOf[parentId] = childrenOf[parentId] || [];
        // push it into its parent's children object
        childrenOf[parentId].push(item);
      } else {
        tree.push(item);
      }
    };

    return tree;
  }

}
