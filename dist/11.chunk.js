webpackJsonp([11],{

/***/ "../../../../../src/app/layout/rv-create/rv-create-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rv_create_component__ = __webpack_require__("../../../../../src/app/layout/rv-create/rv-create.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RvCreateRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__rv_create_component__["a" /* RvCreateComponent */] }
];
var RvCreateRoutingModule = (function () {
    function RvCreateRoutingModule() {
    }
    return RvCreateRoutingModule;
}());
RvCreateRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], RvCreateRoutingModule);

//# sourceMappingURL=rv-create-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/rv-create/rv-create.component.html":
/***/ (function(module, exports) {

module.exports = "<app-account-header [header]=\"'rv'\" (date)=\"docdate($event)\"></app-account-header>\n<app-account-form [accountHeader]=\"'rv-debit'\" [accounts]=\"accounts\" (accountItems)=\"onDebits($event)\"></app-account-form>\n<hr>\n<app-account-form [accountHeader]=\"'rv-credit'\" [accounts]=\"accounts\" (accountItems)=\"onCredits($event)\"></app-account-form>\n<hr>\n<div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n        <fieldset class=\"form-group\">\n            <label>{{'remark' | translate}}</label>\n            <textarea class=\"form-control\" rows=\"6\" cols=\"50\" [(ngModel)]=\"accountForm.remark\" [ngModelOptions]=\"{standalone: true}\"\n                placeholder=\"{{'remark-inbox' | translate}}\"></textarea>\n        </fieldset>\n    </div>\n    <div class=\"col-md-3\"></div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n        <button type=\"button\" class=\"btn btn-success full\" (click)=\"onSave()\">{{'save' | translate}}</button>\n    </div>\n    <div class=\"col-md-3\"></div>\n    <!-- <div class=\"col-md-4\">\n        <button type=\"button\" class=\"btn btn-danger full\" (click)=\"onCancel()\">{{'cancel' | translate}}</button>\n    </div> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/rv-create/rv-create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/rv-create/rv-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_model__ = __webpack_require__("../../../../../src/app/layout/account.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_create_account_create_service__ = __webpack_require__("../../../../../src/app/layout/account-create/account-create.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jv_create_jv_create_service__ = __webpack_require__("../../../../../src/app/layout/jv-create/jv-create.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RvCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RvCreateComponent = (function () {
    function RvCreateComponent(accountCreateService, jvCreateService, translate) {
        this.accountCreateService = accountCreateService;
        this.jvCreateService = jvCreateService;
        this.translate = translate;
        this.accountForm = new __WEBPACK_IMPORTED_MODULE_2__account_model__["a" /* AccountFormModel */]();
        this.accounts = new __WEBPACK_IMPORTED_MODULE_2__account_model__["b" /* AccountListModel */]();
        this.account = new __WEBPACK_IMPORTED_MODULE_2__account_model__["c" /* AccountModel */]();
    }
    RvCreateComponent.prototype.ngOnInit = function () {
        this.getAccount();
    };
    RvCreateComponent.prototype.getAccount = function () {
        var _this = this;
        this.accountCreateService.getAccount().then(function (data) {
            _this.accounts.accounts = data;
            _this.accounts.accounts.unshift({
                _id: '',
                name: '--- No Parent ---',
                accountno: '',
                parent: '',
                status: ''
            });
            _this.accounts.accounts.sort(function (a, b) { return (a.accountno > b.accountno) ? 1 : ((b.accountno > a.accountno) ? -1 : 0); });
        }, function (error) {
            console.error(error);
        });
    };
    RvCreateComponent.prototype.docdate = function (date) {
        this.accountForm.docdate = date;
    };
    RvCreateComponent.prototype.onDebits = function (debit) {
        this.accountForm.debits = debit.accounts;
        this.accountForm.totaldebit = debit.totalaccount;
    };
    RvCreateComponent.prototype.onCredits = function (credit) {
        this.accountForm.credits = credit.accounts;
        this.accountForm.totalcredit = credit.totalaccount;
    };
    RvCreateComponent.prototype.onSave = function () {
        var _this = this;
        this.currentLang = this.translate.currentLang;
        if (!this.accountForm.debits || this.accountForm.debits.length < 1) {
            if (this.currentLang === 'th') {
                alert('กรุณาระบุข้อมูลเดบิต');
            }
            else {
                alert('Please fill debit.');
            }
            return false;
        }
        if (!this.accountForm.credits || this.accountForm.credits.length < 1) {
            if (this.currentLang === 'th') {
                alert('กรุณาระบุข้อมูลเครดิต');
            }
            else {
                alert('Please fill credit.');
            }
            return false;
        }
        if (this.accountForm.totaldebit !== this.accountForm.totalcredit) {
            if (this.currentLang === 'th') {
                alert('แจ้งเตือน : ราคาเดบิตและเครดิตไม่เท่ากัน กรุณาระบุให้เท่ากัน');
            }
            else {
                alert('Warning : Debit and credit prices are not equal. Please specify the same.');
            }
            return false;
        }
        this.accountForm.gltype = 'RV';
        this.jvCreateService.postJv(this.accountForm).then(function (data) {
            if (_this.currentLang === 'th') {
                alert('สำเร็จ เลขที่เอกสาร "' + data.docno + '"');
            }
            else {
                alert('Complate Docno "' + data.docno + '"');
            }
            window.location.reload();
        }, function (error) {
            alert(JSON.parse(error._body).message);
        });
    };
    return RvCreateComponent;
}());
RvCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rv-create',
        template: __webpack_require__("../../../../../src/app/layout/rv-create/rv-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/rv-create/rv-create.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__account_create_account_create_service__["a" /* AccountCreateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__account_create_account_create_service__["a" /* AccountCreateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__jv_create_jv_create_service__["a" /* JvCreateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__jv_create_jv_create_service__["a" /* JvCreateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _c || Object])
], RvCreateComponent);

var _a, _b, _c;
//# sourceMappingURL=rv-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/rv-create/rv-create.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rv_create_routing_module__ = __webpack_require__("../../../../../src/app/layout/rv-create/rv-create-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rv_create_component__ = __webpack_require__("../../../../../src/app/layout/rv-create/rv-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_components_components_module__ = __webpack_require__("../../../../../src/app/shared/components/components.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RvCreateModule", function() { return RvCreateModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RvCreateModule = (function () {
    function RvCreateModule() {
    }
    return RvCreateModule;
}());
RvCreateModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__rv_create_routing_module__["a" /* RvCreateRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__shared_components_components_module__["a" /* ComponentModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__rv_create_component__["a" /* RvCreateComponent */]]
    })
], RvCreateModule);

//# sourceMappingURL=rv-create.module.js.map

/***/ })

});
//# sourceMappingURL=11.chunk.js.map