import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AccountListModel } from "./account.model";
import { AccountService } from "./account.service";
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  key: string = 'children';
  accounts: Array<any>;
  data: AccountListModel = new AccountListModel();

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
    this.getAccount();
  }

  getAccount() {
    this.accountService.getAccount().then((data) => {
      this.data.accounts = data;
      this.data.accounts.sort((a, b) => { return (a.accountno > b.accountno) ? 1 : ((b.accountno > a.accountno) ? -1 : 0); });
      this.accounts = this.listToTree(this.data.accounts);
    }, (error) => {
      console.error(error);
    });
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

  treeReturn(event) {
    // console.log('CLICK : ', event);
  }

  onEdit(event) {
    // console.log('EDIT : ', event);
    this.router.navigate(['/account-create'], { queryParams: { item: JSON.stringify(event) } });
  }

}
