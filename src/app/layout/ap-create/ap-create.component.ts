import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { itemModel } from "./ap-create.model";

@Component({
  selector: 'app-ap-create',
  templateUrl: './ap-create.component.html',
  styleUrls: ['./ap-create.component.scss'],
  animations: [routerTransition()]

})
export class ApCreateComponent implements OnInit {

  items: Array<any> = [{
    name: 'ข้าวกล้อง',
    unitprice: 100,
    vat: 7
  }, {
    name: 'ข้าวกล้อง2',
    unitprice: 100,
    vat: 6
  }];
  selectedItem: itemModel = new itemModel();
  selectedItems: Array<any> = [];
  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.selectedItem.qty ? this.selectedItem.qty : this.selectedItem.qty = 1;
    let amount = this.selectedItem.unitprice * this.selectedItem.qty;
    this.selectedItem.netamount = ((amount * this.selectedItem.vat) / 100) + amount;
  }

  addItem() {
    this.selectedItems.push(this.selectedItem);
    this.selectedItem = new itemModel();
    console.log(this.selectedItems);
  }

}
