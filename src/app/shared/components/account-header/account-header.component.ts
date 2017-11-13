import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account-header',
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.scss']
})
export class AccountHeaderComponent implements OnInit {
  @Input('header') header: string;
  @Input('icon') icon: string = '';
  @Input('docno') docno: string = '';
  @Output() date = new EventEmitter();
  docdate: Date;
  constructor() { }

  ngOnInit() {
    this.docdate = new Date();
    this.date.emit(this.docdate);
  }

  selectDocDate(docdate) {
    this.docdate = new Date(docdate);
    this.date.emit(this.docdate);
  }
}
