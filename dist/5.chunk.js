webpackJsonp([5],{

/***/ "../../../../../src/app/layout/gl-report/gl-report-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gl_report_component__ = __webpack_require__("../../../../../src/app/layout/gl-report/gl-report.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlReportRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__gl_report_component__["a" /* GlReportComponent */] }
];
var GlReportRoutingModule = (function () {
    function GlReportRoutingModule() {
    }
    return GlReportRoutingModule;
}());
GlReportRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], GlReportRoutingModule);

//# sourceMappingURL=gl-report-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/gl-report/gl-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\" style=\"margin-bottom: 15px;\">\r\n        <div class=\"col-12 center\">\r\n            <div class=\"radio\">\r\n                <label>\r\n                    <input type=\"radio\" [(ngModel)]=\"glType\" value=\"month\"> รายเดือน\r\n                </label>\r\n                <label>\r\n                    <input type=\"radio\" [(ngModel)]=\"glType\" value=\"year\"> รายปี\r\n                </label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" style=\"margin-bottom: 15px;\">\r\n        <div class=\"col-4 center\"></div>\r\n        <div class=\"col-4 center\">\r\n            <div *ngIf=\"glType === 'month'\">\r\n                <input class=\"form-control\" type=\"month\" [(ngModel)]=\"month\">\r\n            </div>\r\n            <div *ngIf=\"glType === 'year'\">\r\n                <input class=\"form-control\" type=\"number\" [(ngModel)]=\"year\" min=\"1997\" max=\"3000\">\r\n            </div>\r\n        </div>\r\n        <div class=\"col-4 center\"></div>\r\n    </div>\r\n    <div class=\"row\" style=\"margin-bottom: 15px;\">\r\n        <div class=\"col-12 center\">\r\n            <div>\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"genGlReport()\">ทำงบ</button>\r\n                <button type=\"button\" class=\"btn btn-default\">ปิดงบ</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <ngb-tabset *ngIf=\"glReport.type\">\r\n        <!-- ..dailyTab.. -->\r\n        <ngb-tab title=\"สุมดบัญชีรายวัน\">\r\n            <ng-template ngbTabContent>\r\n                <div *ngIf=\"glReport.daily.transaction.length > 0\">\r\n                    <div class=\"time-now\">\r\n                        <br>\r\n                        <p>{{glReport.daily.date | date:'dd/MM/yyyy'}}</p>\r\n                        <p>{{glReport.daily.date | date:'HH:mm:ss'}}</p>\r\n                    </div>\r\n                    <div class=\"center\">\r\n                        <br>\r\n                        <p>{{glReport.daily.company}}</p>\r\n                        <p>{{glReport.daily.title}}</p>\r\n                        <p>ตั้งแต่วันที่ {{glReport.firstDayText}} จนถึงวันที่ {{glReport.lastDayText}}\r\n                        </p>\r\n                        <br>\r\n                    </div>\r\n                    <div class=\"scroll_ \">\r\n                        <table class=\"table table-bordered\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class=\"center\">วันที่</th>\r\n                                    <th class=\"center\">เลขเอกสาร</th>\r\n                                    <th class=\"center\">รายการ</th>\r\n                                    <th class=\"center\">รหัสบัญชี</th>\r\n                                    <th class=\"center\">เช็ค/ใบสำคัญ</th>\r\n                                    <th class=\"center\">ลงวันที่</th>\r\n                                    <th class=\"center\">เดบิต</th>\r\n                                    <th class=\"center\">เครดิด</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n\r\n                                <tr *ngFor=\"let transaction of glReport.daily.transaction\">\r\n                                    <td class=\"padding-top\">{{transaction.docdate | date:'dd/MM/yy'}}</td>\r\n                                    <td class=\"padding-top\">{{transaction.docno}}</td>\r\n                                    <td>\r\n                                        <div *ngFor=\"let list of transaction.list\">\r\n                                            <div *ngIf=\"list.debit>0\">\r\n                                                <p class=\"debit\"> {{list.accountname}}</p>\r\n                                            </div>\r\n                                            <div *ngIf=\"list.credit>0\">\r\n                                                <p class=\"credit\"> {{list.accountname}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div *ngIf=\"transaction.remark !== '' \">\r\n                                            <p class=\"reason\"> ({{transaction.remark}})</p>\r\n                                        </div>\r\n\r\n                                    </td>\r\n                                    <td class=\"left\">\r\n                                        <div *ngFor=\"let list of transaction.list\">\r\n\r\n\r\n                                            <p>{{list.accountno}}</p>\r\n\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div *ngFor=\"let  document of transaction.list\">\r\n                                            {{document.document}}\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div *ngFor=\"let  timestamp of transaction.list\">\r\n                                            {{timestamp.timestamp}}\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"right\">\r\n                                        <div *ngFor=\"let list of transaction.list\">\r\n                                            <div *ngIf=\"list.debit>0\">\r\n                                                <p>{{list.debit | number:'.2'}}</p>\r\n                                            </div>\r\n                                            <div *ngIf=\"list.credit>0\">\r\n                                                <p>\r\n                                                    <br>\r\n                                                </p>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </td>\r\n                                    <td class=\"right\">\r\n                                        <div *ngFor=\"let list of transaction.list\">\r\n                                            <div *ngIf=\"list.debit>0\">\r\n                                                <p>\r\n                                                    <br>\r\n                                                </p>\r\n                                            </div>\r\n                                            <div *ngIf=\"list.credit>0\">\r\n                                                <p>{{list.credit | number:'.2'}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <br>\r\n                        <div class=\"col-md-12 center\">\r\n                            *** จบรายงาน ***\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 center\" *ngIf=\"glReport.daily.transaction.length === 0\">\r\n                        <br>\r\n                        <p>*** ไม่พบข้อมูล สมุดรายวันทั่วไป***</p>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </ngb-tab>\r\n        <!-- End ..dailyTab.. -->\r\n        <!-- ..acceachTab.. -->\r\n        <ngb-tab title=\"บัญชีแยกประเภท\">\r\n            <ng-template ngbTabContent>\r\n                <div *ngIf=\"glReport.acceach.length > 0\">\r\n                    <div *ngFor=\"let acceach of glReport.acceach\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3\">\r\n                                <br>\r\n                                <div class=\"time-now\">\r\n                                    <p>{{acceach.date | date:'dd/MM/yyyy'}}</p>\r\n                                    <p>{{acceach.date | date:'HH:mm:ss'}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6 center\">\r\n                                <br>\r\n                                <p>{{acceach.company}}</p>\r\n                                <p>{{acceach.title}}</p>\r\n                                <p>ตั้งแต่วันที่ {{glReport.firstDayText}} จนถึงวันที่ {{glReport.lastDayText}}\r\n                                </p>\r\n                            </div>\r\n                            <div class=\"col-md-3 right accoutno\">\r\n                                รหัสบัญชี {{acceach.accountno}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"scroll_ \">\r\n                            <table class=\"table table-bordered\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"center\">วันที่</th>\r\n                                        <th class=\"center\">เลขเอกสาร</th>\r\n                                        <th class=\"center\">ชื่อบัญชีอ้างอิง</th>\r\n                                        <th class=\"center\">รหัสบัญชี</th>\r\n                                        <th class=\"center\">เช็ค/ใบสำคัญ</th>\r\n                                        <th class=\"center\">ลงวันที่</th>\r\n                                        <th class=\"center\">เดบิต</th>\r\n                                        <th class=\"center\">เครดิด</th>\r\n                                        <th class=\"center\">คำอธิบาย</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngIf=\"acceach.bringforward.debit > 0 || acceach.bringforward.credit > 0\">\r\n                                        <td class=\"padding-top\">{{acceach.bringforward.docdate | date:'dd/MM/yy'}}</td>\r\n                                        <td class=\"padding-top\">\r\n                                            {{acceach.bringforward.docno}}\r\n                                        </td>\r\n                                        <td>\r\n\r\n                                            <p>{{acceach.bringforward.accountname}}</p>\r\n\r\n                                        </td>\r\n                                        <td>{{acceach.bringforward.accountno}}</td>\r\n                                        <td>{{acceach.bringforward.document}}</td>\r\n                                        <td>{{acceach.bringforward.timestamp}}</td>\r\n                                        <td class=\"right\">\r\n                                            <div *ngIf=\"acceach.bringforward.debit>0\">\r\n                                                <p>{{acceach.bringforward.debit | number:'.2'}}</p>\r\n                                            </div>\r\n                                            <div *ngIf=\"acceach.bringforward.credit>0\">\r\n                                                <br>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div *ngIf=\"acceach.bringforward.debit>0\">\r\n                                                <br>\r\n                                            </div>\r\n                                            <div *ngIf=\"acceach.bringforward.credit>0\">\r\n                                                <p>{{acceach.bringforward.credit | number:'.2'}}</p>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>{{acceach.bringforward.description}}</td>\r\n                                    </tr>\r\n\r\n                                    <!--  Data acceach -->\r\n                                    <tr *ngFor=\"let transaction of acceach.transaction\">\r\n                                        <td class=\"padding-top\">{{transaction.docdate | date:'dd/MM/yy'}}</td>\r\n                                        <td class=\"padding-docno\">\r\n\r\n                                            <div *ngFor=\"let list of transaction.list\">\r\n                                                <p>{{list.docno}}</p>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div *ngFor=\"let list of transaction.list\">\r\n                                                <p>{{list.accountname}}</p>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div *ngFor=\"let list of transaction.list\">\r\n                                                <p>{{list.accountno}}</p>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div *ngFor=\"let list of transaction.list\">\r\n                                                <p>{{list.document}}</p>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div *ngFor=\"let list of transaction.list\">\r\n                                                <p>{{list.timestamp}}</p>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td class=\"right\">\r\n                                            <div *ngFor=\"let list of transaction.list\">\r\n                                                <div *ngIf=\"list.debit>0\">\r\n                                                    <p>{{list.debit | number:'.2'}}</p>\r\n                                                </div>\r\n                                                <div *ngIf=\"list.credit>0\">\r\n                                                    <br>\r\n                                                </div>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div *ngFor=\"let list of transaction.list\">\r\n                                                <div *ngIf=\"list.debit>0\">\r\n                                                    <br>\r\n                                                </div>\r\n                                                <div *ngIf=\"list.credit>0\">\r\n                                                    <p>{{list.credit | number:'.2'}}</p>\r\n                                                </div>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div *ngFor=\"let list of transaction.list\">\r\n                                                <p>{{list.description}}</p>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <!-- End Data acceach -->\r\n\r\n                                    <tr>\r\n                                        <td class=\"padding-top\">{{acceach.carryforward.docdate | date:'dd/MM/yy'}}</td>\r\n                                        <td class=\"padding-top\">\r\n                                            {{acceach.carryforward.docno}}\r\n                                        </td>\r\n                                        <td>\r\n                                            <div>\r\n                                                <p>{{acceach.carryforward.accountname}}</p>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>{{acceach.carryforward.accountno}}</td>\r\n                                        <td>{{acceach.carryforward.document}}</td>\r\n                                        <td>{{acceach.carryforward.timestamp}}</td>\r\n                                        <td class=\"right\">\r\n                                            <div *ngIf=\"acceach.carryforward.debit>0\">\r\n                                                <p>{{acceach.carryforward.debit | number:'.2'}}</p>\r\n                                            </div>\r\n                                            <div *ngIf=\"acceach.carryforward.credit>0\">\r\n                                                <br>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div *ngIf=\"acceach.carryforward.debit>0\">\r\n                                                <br>\r\n                                            </div>\r\n                                            <div *ngIf=\"acceach.carryforward.credit>0\">\r\n                                                <p>{{acceach.carryforward.credit | number:'.2'}}</p>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>{{acceach.carryforward.description}}</td>\r\n                                    </tr>\r\n\r\n                                    <!-- SUM -->\r\n                                    <tr>\r\n                                        <td class=\"border-no\"></td>\r\n                                        <td class=\"border-no\"></td>\r\n                                        <td class=\"border-no\"></td>\r\n                                        <td class=\"border-no\"></td>\r\n                                        <td class=\"border-no\"></td>\r\n                                        <td class=\"border-no\"></td>\r\n                                        <td class=\"border-sum\">\r\n                                            {{acceach.current.debit | number: '.2'}}\r\n                                        </td>\r\n                                        <td class=\"border-sum\"> {{acceach.current.credit | number: '.2'}}</td>\r\n                                        <td class=\"border-no\">\r\n                                        </td>\r\n                                    </tr>\r\n                                    <!-- END SUM -->\r\n\r\n                                </tbody>\r\n                            </table>\r\n                            <hr>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 center\" *ngIf=\"glReport.acceach.length === 0\">\r\n                        <br>\r\n                        <p>*** ไม่พบข้อมูล บัญชีแยกประเภท***</p>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </ngb-tab>\r\n        <!-- End ..acceachTab.. -->\r\n        <!-- ..gainTab.. -->\r\n        <ngb-tab title=\"งบกำไรขาดทุน\">\r\n            <ng-template ngbTabContent>\r\n                <div *ngIf=\"glReport.gain.transaction && glReport.gain.transaction.length > 0\">\r\n                    <div class=\"time-now\">\r\n                        <br>\r\n                        <p>{{glReport.gain.date | date:'dd/MM/yyyy'}}</p>\r\n                        <p>{{glReport.gain.date | date:'HH:mm:ss'}}</p>\r\n                    </div>\r\n                    <div class=\"center\">\r\n                        <br>\r\n                        <p>{{glReport.gain.company}}</p>\r\n                        <p>{{glReport.gain.title}}</p>\r\n                        <p>ตั้งแต่วันที่ {{glReport.firstDayText}} จนถึงวันที่ {{glReport.lastDayText}}\r\n                        </p>\r\n                        <hr>\r\n                        <br>\r\n                    </div>\r\n\r\n                    <table class=\"table\" style=\"border-collapse: unset; min-width: 400px;\">\r\n                        <tbody *ngFor=\"let transaction of glReport.gain.transaction\">\r\n\r\n                            <tr class=\"border-no\">\r\n                                <td class=\"border-no\" style=\"width: 80%\">{{transaction.accounttype}}</td>\r\n                                <td class=\"border-no right\"></td>\r\n                                <td class=\"border-no right\">\r\n\r\n                                    <div *ngIf=\"transaction.list.length===0\">\r\n                                        <p [hidden]=\"0 > transaction.summary\">{{transaction.summary | number:'.2'}}</p>\r\n                                        <p [hidden]=\"transaction.summary >= 0\">({{(transaction.summary | number:'.2').split('-')[1]}})</p>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr class=\"border-no\">\r\n                                <td class=\"border-no \" id=\"acceach-left\">\r\n                                    <div *ngFor=\"let list of transaction.list\">\r\n                                        <p>{{list.accountname}}</p>\r\n                                    </div>\r\n                                </td>\r\n                                <td class=\"border-no right\">\r\n                                    <div *ngFor=\"let list of transaction.list;let i = index\" [attr.data-index]=\"i\">\r\n                                        <p [hidden]=\"0 > list.amount\">{{list.amount | number:'.2'}}</p>\r\n                                        <p [hidden]=\"list.amount >= 0\">({{(list.amount | number:'.2').split('-')[1]}})</p>\r\n                                        <div *ngIf=\"transaction.list.length===i+1\">\r\n                                            <p>--------------------</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                                <td class=\"border-no right\">\r\n                                    <div *ngFor=\"let list of transaction.list;let i = index\" [attr.data-index]=\"i\">\r\n                                        <div *ngIf=\"transaction.list.length!==i+1\">\r\n                                            <br>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"transaction.list.length===i+1\">\r\n                                            <p [hidden]=\"0 > transaction.summary\">{{transaction.summary | number:'.2'}}</p>\r\n                                            <p [hidden]=\"transaction.summary >= 0\">({{(transaction.summary | number:'.2').split('-')[1]}})</p>\r\n                                            <p>--------------------</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr class=\"border-no\" *ngIf=\"transaction.sumtrans\">\r\n                                <td class=\"border-no\"></td>\r\n                                <td class=\"border-no right\"></td>\r\n                                <td class=\"border-no right\" [hidden]=\"0 > transaction.sumtrans.amount\">{{transaction.sumtrans.amount | number:'.2'}}</td>\r\n                                <td class=\"border-no right\" [hidden]=\"transaction.sumtrans.amount >= 0\">({{(transaction.sumtrans.amount | number:'.2').split('-')[1]}})</td>\r\n                            </tr>\r\n\r\n                        </tbody>\r\n                    </table>\r\n\r\n                    <div class=\"row \">\r\n                        <div class=\"col-md-12 center\">\r\n                            *** จบรายงาน ***\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 center\" *ngIf=\"glReport.gain.transaction && glReport.gain.transaction.length === 0\">\r\n                        <br>\r\n                        <p>*** ไม่พบข้อมูล งบกำไรขาดทุน***</p>\r\n                    </div>\r\n                </div>\r\n\r\n            </ng-template>\r\n        </ngb-tab>\r\n        <!-- End ..gainTab.. -->\r\n        <!-- ..balanceTab.. -->\r\n        <ngb-tab title=\"งบดุล\">\r\n            <ng-template ngbTabContent>\r\n                <div *ngIf=\"glReport.balance\">\r\n                    <div class=\"time-now\">\r\n                        <br>\r\n                        <p>{{glReport.balance.date | date:'dd/MM/yyyy'}}</p>\r\n                        <p>{{glReport.balance.date | date:'HH:mm:ss'}}</p>\r\n                    </div>\r\n                    <div class=\"center\">\r\n                        <br>\r\n                        <p>{{glReport.balance.company}}</p>\r\n                        <p>{{glReport.balance.title}}</p>\r\n                        <p>ณ.วันที่ {{glReport.lastDayText}}\r\n                        </p>\r\n                        <hr>\r\n                        <br>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 text-center\">\r\n                            <b>{{glReport.balance.asset.name}}</b>\r\n                        </div>\r\n                    </div>\r\n                    <table class=\"table\" style=\"border-collapse: unset ; min-width: 400px;\">\r\n                        <tbody *ngFor=\"let tran_asset of glReport.balance.asset.transaction\">\r\n                            <tr class=\"border-no\">\r\n                                <td class=\"border-no\" style=\"width: 80%\">{{tran_asset.accounttype}}</td>\r\n                                <td class=\"border-no right\"></td>\r\n                                <td class=\"border-no right\">\r\n                                    <div *ngIf=\"tran_asset.list.length===0\">\r\n                                        <p>{{tran_asset.summary | number:'.2'}}</p>\r\n                                        <p>===========</p>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr class=\"border-no\">\r\n                                <td class=\"border-no \" id=\"acceach-left\">\r\n                                    <div *ngFor=\"let list of tran_asset.list\">\r\n                                        <p>{{list.accountname}}</p>\r\n                                    </div>\r\n                                </td>\r\n                                <td class=\"border-no right\">\r\n                                    <div *ngFor=\"let list of tran_asset.list;let i = index\" [attr.data-index]=\"i\">\r\n                                        <p>{{list.amount | number:'.2'}}</p>\r\n                                        <div *ngIf=\"tran_asset.list.length===i+1\">\r\n                                            <p>--------------------</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                                <td class=\"border-no right\">\r\n                                    <div *ngFor=\"let list of tran_asset.list;let i = index\" [attr.data-index]=\"i\">\r\n\r\n                                        <div *ngIf=\"tran_asset.list.length!==i+1\">\r\n                                            <br>\r\n                                        </div>\r\n                                        <div *ngIf=\"tran_asset.list.length===i+1\">\r\n                                            <p>{{tran_asset.summary | number:'.2'}}</p>\r\n                                            <p>--------------------</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 text-center\">\r\n                            <b>{{glReport.balance.debt.name}}</b>\r\n                        </div>\r\n                    </div>\r\n                    <table class=\"table\" style=\"border-collapse: unset ; min-width: 400px;\">\r\n                        <tbody *ngFor=\"let tran_debt of glReport.balance.debt.transaction\">\r\n                            <tr class=\"border-no\">\r\n                                <td class=\"border-no\" style=\"width: 80%\">{{tran_debt.accounttype}}</td>\r\n                                <td class=\"border-no right\"></td>\r\n                                <td class=\"border-no right\">\r\n                                    <div *ngIf=\"tran_debt.list.length===0\">\r\n                                        <p>{{tran_debt.summary | number:'.2'}}</p>\r\n                                        <p>===========</p>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n\r\n                            <tr class=\"border-no\">\r\n                                <td class=\"border-no \" id=\"acceach-left\">\r\n                                    <div *ngFor=\"let list of tran_debt.list\">\r\n                                        <p>{{list.accountname}}</p>\r\n                                    </div>\r\n                                    <div *ngIf=\"tran_debt.list.length!==0\">\r\n                                        <br>\r\n                                        <p>{{tran_debt.sumtrans.accountno}}</p>\r\n                                    </div>\r\n                                </td>\r\n                                <td class=\"border-no right\">\r\n                                    <div *ngFor=\"let list of tran_debt.list;let i = index\" [attr.data-index]=\"i\">\r\n                                        <p>{{list.amount | number:'.2'}}</p>\r\n                                        <div *ngIf=\"tran_debt.list.length===i+1\">\r\n                                            <p>--------------------</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                                <td class=\"border-no right\">\r\n                                    <div *ngFor=\"let list of tran_debt.list;let i = index\" [attr.data-index]=\"i\">\r\n\r\n                                        <div *ngIf=\"tran_debt.list.length!==i+1\">\r\n                                            <br>\r\n                                        </div>\r\n                                        <div *ngIf=\"tran_debt.list.length===i+1\">\r\n                                            <p>{{tran_debt.summary | number:'.2'}}</p>\r\n\r\n\r\n                                            <p>--------------------</p>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"tran_debt.list.length!==0\">\r\n\r\n                                        <p>{{tran_debt.sumtrans.amount | number:'.2'}}</p>\r\n                                        <p>--------------------</p>\r\n                                    </div>\r\n\r\n                                    <!-- <div *ngIf=\"tran_debt.summary > 0;else other\">\r\n                                            ssssss{{tran_debt.summary}}ssssssss\r\n                                        </div>\r\n                                        <div #other>\r\n                                            aaaaaa{{tran_debt.summary}}aaaaaaaa\r\n                                        </div> -->\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <div class=\"row \">\r\n                        <div class=\"col-md-12 center\">\r\n                            *** จบรายงาน ***\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 center\" *ngIf=\"!glReport.balance\">\r\n                        <br>\r\n                        <p>*** ไม่พบข้อมูล งบดุุล***</p>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n                <!-- /////////////////////////////////////////////// -->\r\n\r\n\r\n            </ng-template>\r\n        </ngb-tab>\r\n        <!-- End ..balanceTab.. -->\r\n    </ngb-tabset>\r\n\r\n\r\n    <!-- Test table -->\r\n    <!-- <table class=\"table table-bordered\" style=\"margin-bottom: 0px;\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"center\" style=\"width: 75px\">วันที่</th>\r\n                <th class=\"center\" style=\"width: 100px\">เลขเอกสาร</th>\r\n                <th class=\"center\" style=\"width: 200px\">ชื่อบัญชีอ้างอิง</th>\r\n                <th class=\"center\" style=\"width: 75px\">รหัสบัญชี</th>\r\n                <th class=\"center\" style=\"width: 115px\">เช็ค/ใบสำคัญ</th>\r\n                <th class=\"center\" style=\"width: 60px\">ลงวันที่</th>\r\n                <th class=\"center\" style=\"width: 80px\">เดบิต</th>\r\n                <th class=\"center\" style=\"width: 80px\">เครดิด</th>\r\n                <th class=\"center\" style=\"width: 200px\">คำอธิบาย</th>\r\n              </tr>\r\n            </thead>\r\n          </table>\r\n\r\n          <table class=\"table table-bordered border-no\" style=\"margin-top: -4px;margin-left: -2px; \">\r\n            <td class=\"border-no\">\r\n              <tr *ngFor=\"let transaction of acceach.transaction\">\r\n                <td>\r\n\r\n                  <tr>\r\n                    <td class=\"border-no\" style=\"width: 75px\">{{transaction.docdate | date:'dd/MM/yy'}}</td>\r\n                  </tr>\r\n                </td>\r\n                <td>\r\n                  <tr class=\"border-no\" *ngFor=\"let list of transaction.list\">\r\n                    <td class=\"aa\" style=\"width: 100px\"> {{list.docno}}</td>\r\n                    <td class=\"aa\" style=\"width: 230px\"> {{list.accountname}}</td>\r\n                    <td class=\"aa\" style=\"width: 75px\"> {{list.accountno}}</td>\r\n                    <td class=\"aa\" style=\"width: 123px\"> {{list.debit}}</td>\r\n                    <td class=\"aa\" style=\"width: 66px\"> {{list.credit}}</td>\r\n                    <td class=\"aa\" style=\"width: 86px\">555555</td>\r\n                    <td class=\"aa\" style=\"width: 87px\">111111</td>\r\n                    <td class=\"aa\" style=\"width: 211px ;border-width: 0px 0px 0px 0px;\"> {{list.description}}{{list.description}}{{list.description}}{{list.description}}{{list.description}}</td>\r\n                  </tr>\r\n                </td>\r\n              </tr>\r\n          </table>\r\n\r\n          <table>\r\n              <tr>\r\n                  <td class=\"border-no\"></td>\r\n                  <td class=\"border-no\"></td>\r\n                  <td class=\"border-no\"></td>\r\n                  <td class=\"border-no\"></td>\r\n                  <td class=\"border-no\"></td>\r\n                  <td class=\"border-no\"></td>\r\n                  <td class=\"border-sum\">\r\n                    {{acceach.summarydebit}}\r\n                  </td>\r\n                  <td class=\"border-sum\"> {{acceach.summarycredit}}</td>\r\n                  <td class=\"border-no\">\r\n                  </td>\r\n                </tr>\r\n          </table> -->\r\n    <!-- END Test table -->\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/gl-report/gl-report.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center {\n  text-align: center; }\n\n.right {\n  text-align: right; }\n\n.left {\n  text-align: left; }\n\n[type=\"date\"] {\n  background: #fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png) 97% 50% no-repeat; }\n\n[type=\"date\"]::-webkit-inner-spin-button {\n  display: none; }\n\n[type=\"date\"]::-webkit-calendar-picker-indicator {\n  opacity: 0; }\n\np {\n  margin-bottom: 0; }\n\n.credit {\n  padding-left: 30px; }\n\n.time-now {\n  position: absolute;\n  font-size: 14px; }\n\n.padding-top {\n  padding-top: 24px; }\n\n.padding-docno {\n  padding-top: 13px; }\n\n.border-no {\n  border-width: 0px 0px 0px 0px;\n  border-color: #ffffff; }\n\n.border-sum {\n  border-width: 1px 1px 1px 2px; }\n\n.table th,\n.table td {\n  padding: 2px; }\n\n.aa {\n  border-width: 0px 1px 0px 0px;\n  border-color: #eceeef; }\n\n.table {\n  font-size: 14px; }\n\n.table-bordered {\n  border: 1px solid #ffffff; }\n\n.scroll_ {\n  /* width: 1000px; */\n  height: auto;\n  overflow: auto; }\n\n.table {\n  width: 100%;\n  /* max-width: 1000px; */\n  margin-bottom: 1rem;\n  min-width: 1000px; }\n\n.accoutno {\n  margin-top: 10%; }\n\n#acceach-left {\n  padding-left: 55px; }\n\ninput[type=\"radio\"] {\n  width: 20px;\n  height: 20px;\n  position: relative;\n  top: 4px; }\n\nhr {\n  border-top: 1px solid #9E9E9E; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/gl-report/gl-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_models_gl_report_model__ = __webpack_require__("../../../../../src/assets/models/gl-report.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gl_report_service__ = __webpack_require__("../../../../../src/app/layout/gl-report/gl-report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GlReportComponent = (function () {
    function GlReportComponent(glReportService, translate) {
        this.glReportService = glReportService;
        this.translate = translate;
        this.glReport = new __WEBPACK_IMPORTED_MODULE_0__assets_models_gl_report_model__["a" /* GlReportModel */];
        this.glType = 'month';
        this.year = new Date().getFullYear();
    }
    GlReportComponent.prototype.ngOnInit = function () {
    };
    GlReportComponent.prototype.genGlReport = function () {
        this.getGlReport();
    };
    GlReportComponent.prototype.getGlReport = function () {
        var _this = this;
        var glDate;
        if (this.glType === 'month') {
            if (!this.month) {
                this.currentLang = this.translate.currentLang;
                if (this.currentLang === 'th') {
                    alert('กรุณาระบุเดือน');
                }
                else {
                    alert('Please fill month');
                }
                return false;
            }
            glDate = this.month;
        }
        else {
            glDate = new Date(this.year, 1, 1);
        }
        this.glReportService.getGlReport(this.glType, glDate).then(function (gl) {
            _this.glReport = gl;
            console.log(_this.glReport);
            //   let date1 = new Date(this.glReport.balance.date).toDateString;
            //  // let formatted = new DatePipe().transform(date1, 'yyyy-MM-dd');
            //    //date1 = filter( this.glReport.balance.date ).format( 'DD MMMM YYYY' );
            //    console.log("เดือน"+date1);
        }, function (error) {
            alert(JSON.stringify(error));
        });
    };
    return GlReportComponent;
}());
GlReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-gl-report',
        template: __webpack_require__("../../../../../src/app/layout/gl-report/gl-report.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/gl-report/gl-report.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gl_report_service__["a" /* GlReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gl_report_service__["a" /* GlReportService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _b || Object])
], GlReportComponent);

var _a, _b;
//# sourceMappingURL=gl-report.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/gl-report/gl-report.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gl_report_component__ = __webpack_require__("../../../../../src/app/layout/gl-report/gl-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gl_report_routing_module__ = __webpack_require__("../../../../../src/app/layout/gl-report/gl-report-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlReportModule", function() { return GlReportModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var GlReportModule = (function () {
    function GlReportModule() {
    }
    return GlReportModule;
}());
GlReportModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__gl_report_routing_module__["a" /* GlReportRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__gl_report_component__["a" /* GlReportComponent */]]
    })
], GlReportModule);

//# sourceMappingURL=gl-report.module.js.map

/***/ }),

/***/ "../../../../../src/assets/models/gl-report.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlReportModel; });
/* unused harmony export GlDailyReportModel */
/* unused harmony export GlDailyTransactionModel */
/* unused harmony export GlDailyTransactionListModel */
/* unused harmony export GlAcceachModel */
/* unused harmony export GlAcceachBringModel */
/* unused harmony export GlAcceachCarryModel */
/* unused harmony export GlAcceachTransactionModel */
/* unused harmony export GlAcceachTransactionListModel */
/* unused harmony export GlGainReportModel */
/* unused harmony export GlGainTransactionModel */
/* unused harmony export GlListTransactionModel */
/* unused harmony export GlBalanceReportModel */
/* unused harmony export GlBalanceAssetReportModel */
/* unused harmony export GlBalanceAssetTransactionReportModel */
/* unused harmony export GlBalanceAssetListTransactionReportModel */
/* unused harmony export GlBalanceDebtReportModel */
/* unused harmony export GlBalanceDebtTransactionReportModel */
/* unused harmony export GlBalanceDebtListTransactionReportModel */
/* unused harmony export GlBalanceDebtSumtransTransactionReportModel */
var GlReportModel = (function () {
    function GlReportModel() {
        this.daily = new GlDailyReportModel();
        this.acceach = [];
        this.gain = new GlGainReportModel();
        this.balance = new GlBalanceReportModel();
    }
    return GlReportModel;
}());

//  Gl-Daily
var GlDailyReportModel = (function () {
    function GlDailyReportModel() {
        this.transaction = [];
    }
    return GlDailyReportModel;
}());

var GlDailyTransactionModel = (function () {
    function GlDailyTransactionModel() {
        this.list = [];
    }
    return GlDailyTransactionModel;
}());

var GlDailyTransactionListModel = (function () {
    function GlDailyTransactionListModel() {
    }
    return GlDailyTransactionListModel;
}());

// END Gl-Daily
// Gl-acceach
var GlAcceachModel = (function () {
    function GlAcceachModel() {
        this.bringforward = new GlAcceachBringModel();
        this.carryforward = new GlAcceachCarryModel();
        this.transaction = [];
    }
    return GlAcceachModel;
}());

var GlAcceachBringModel = (function () {
    function GlAcceachBringModel() {
    }
    return GlAcceachBringModel;
}());

var GlAcceachCarryModel = (function () {
    function GlAcceachCarryModel() {
    }
    return GlAcceachCarryModel;
}());

var GlAcceachTransactionModel = (function () {
    function GlAcceachTransactionModel() {
        this.list = [];
    }
    return GlAcceachTransactionModel;
}());

var GlAcceachTransactionListModel = (function () {
    function GlAcceachTransactionListModel() {
    }
    return GlAcceachTransactionListModel;
}());

// END Gl-acceach
//  Gl-Gain
var GlGainReportModel = (function () {
    function GlGainReportModel() {
        this.transaction = [];
    }
    return GlGainReportModel;
}());

var GlGainTransactionModel = (function () {
    function GlGainTransactionModel() {
        this.list = [];
    }
    return GlGainTransactionModel;
}());

var GlListTransactionModel = (function () {
    function GlListTransactionModel() {
    }
    return GlListTransactionModel;
}());

// END Gl-Gain
//  Gl-Balance
var GlBalanceReportModel = (function () {
    function GlBalanceReportModel() {
        this.asset = new GlBalanceAssetReportModel();
        this.debt = new GlBalanceDebtReportModel();
    }
    return GlBalanceReportModel;
}());

var GlBalanceAssetReportModel = (function () {
    function GlBalanceAssetReportModel() {
        this.transaction = [];
    }
    return GlBalanceAssetReportModel;
}());

var GlBalanceAssetTransactionReportModel = (function () {
    function GlBalanceAssetTransactionReportModel() {
        this.list = [];
    }
    return GlBalanceAssetTransactionReportModel;
}());

var GlBalanceAssetListTransactionReportModel = (function () {
    function GlBalanceAssetListTransactionReportModel() {
    }
    return GlBalanceAssetListTransactionReportModel;
}());

var GlBalanceDebtReportModel = (function () {
    function GlBalanceDebtReportModel() {
        this.transaction = [];
    }
    return GlBalanceDebtReportModel;
}());

var GlBalanceDebtTransactionReportModel = (function () {
    function GlBalanceDebtTransactionReportModel() {
        this.list = [];
        this.sumtrans = new GlBalanceDebtSumtransTransactionReportModel();
    }
    return GlBalanceDebtTransactionReportModel;
}());

var GlBalanceDebtListTransactionReportModel = (function () {
    function GlBalanceDebtListTransactionReportModel() {
    }
    return GlBalanceDebtListTransactionReportModel;
}());

var GlBalanceDebtSumtransTransactionReportModel = (function () {
    function GlBalanceDebtSumtransTransactionReportModel() {
    }
    return GlBalanceDebtSumtransTransactionReportModel;
}());

//# sourceMappingURL=gl-report.model.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map