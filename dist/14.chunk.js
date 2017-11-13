webpackJsonp([14],{

/***/ "../../../../../src/app/layout/jv-create/jv-create-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jv_create_component__ = __webpack_require__("../../../../../src/app/layout/jv-create/jv-create.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JvCreateRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__jv_create_component__["a" /* JvCreateComponent */] }
];
var JvCreateRoutingModule = (function () {
    function JvCreateRoutingModule() {
    }
    return JvCreateRoutingModule;
}());
JvCreateRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], JvCreateRoutingModule);

//# sourceMappingURL=jv-create-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/jv-create/jv-create.component.html":
/***/ (function(module, exports) {

module.exports = "<app-account-header [header]=\"'jv'\" (date)=\"docdate($event)\"></app-account-header>\r\n<app-account-form [accountHeader]=\"'debit'\" [accounts]=\"accounts\" (accountItems)=\"onDebits($event)\"></app-account-form>\r\n<hr>\r\n<app-account-form [accountHeader]=\"'credit'\" [accounts]=\"accounts\" (accountItems)=\"onCredits($event)\"></app-account-form>\r\n<hr>\r\n<div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n        <fieldset class=\"form-group\">\r\n            <label>{{'remark' | translate}}</label>\r\n            <textarea class=\"form-control\" rows=\"6\" cols=\"50\" [(ngModel)]=\"accountForm.remark\" [ngModelOptions]=\"{standalone: true}\"\r\n                placeholder=\"{{'remark-inbox' | translate}}\"></textarea>\r\n        </fieldset>\r\n    </div>\r\n    <div class=\"col-md-3\"></div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n        <button type=\"button\" class=\"btn btn-success full\" (click)=\"onSave()\">{{'save' | translate}}</button>\r\n    </div>\r\n    <div class=\"col-md-3\"></div>\r\n    <!-- <div class=\"col-md-4\">\r\n        <button type=\"button\" class=\"btn btn-danger full\" (click)=\"onCancel()\">{{'cancel' | translate}}</button>\r\n    </div> -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/jv-create/jv-create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full {\n  width: 100% !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/jv-create/jv-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_model__ = __webpack_require__("../../../../../src/app/layout/account.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_create_account_create_service__ = __webpack_require__("../../../../../src/app/layout/account-create/account-create.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jv_create_service__ = __webpack_require__("../../../../../src/app/layout/jv-create/jv-create.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JvCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JvCreateComponent = (function () {
    function JvCreateComponent(accountCreateService, jvCreateService, translate) {
        this.accountCreateService = accountCreateService;
        this.jvCreateService = jvCreateService;
        this.translate = translate;
        this.accountForm = new __WEBPACK_IMPORTED_MODULE_2__account_model__["a" /* AccountFormModel */]();
        this.accounts = new __WEBPACK_IMPORTED_MODULE_2__account_model__["b" /* AccountListModel */]();
        this.account = new __WEBPACK_IMPORTED_MODULE_2__account_model__["c" /* AccountModel */]();
    }
    JvCreateComponent.prototype.ngOnInit = function () {
        this.getAccount();
    };
    JvCreateComponent.prototype.getAccount = function () {
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
    JvCreateComponent.prototype.docdate = function (date) {
        this.accountForm.docdate = date;
    };
    JvCreateComponent.prototype.onDebits = function (debit) {
        this.accountForm.debits = debit.accounts;
        this.accountForm.totaldebit = debit.totalaccount;
    };
    JvCreateComponent.prototype.onCredits = function (credit) {
        this.accountForm.credits = credit.accounts;
        this.accountForm.totalcredit = credit.totalaccount;
    };
    JvCreateComponent.prototype.onSave = function () {
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
        this.accountForm.gltype = 'JV';
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
    return JvCreateComponent;
}());
JvCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-jv-create',
        template: __webpack_require__("../../../../../src/app/layout/jv-create/jv-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/jv-create/jv-create.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__account_create_account_create_service__["a" /* AccountCreateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__account_create_account_create_service__["a" /* AccountCreateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__jv_create_service__["a" /* JvCreateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__jv_create_service__["a" /* JvCreateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _c || Object])
], JvCreateComponent);

var _a, _b, _c;
//# sourceMappingURL=jv-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/jv-create/jv-create.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jv_create_routing_module__ = __webpack_require__("../../../../../src/app/layout/jv-create/jv-create-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jv_create_component__ = __webpack_require__("../../../../../src/app/layout/jv-create/jv-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_components_components_module__ = __webpack_require__("../../../../../src/app/shared/components/components.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JvCreateModule", function() { return JvCreateModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var JvCreateModule = (function () {
    function JvCreateModule() {
    }
    return JvCreateModule;
}());
JvCreateModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__jv_create_routing_module__["a" /* JvCreateRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_components_components_module__["a" /* ComponentModule */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__jv_create_component__["a" /* JvCreateComponent */]]
    })
], JvCreateModule);

//# sourceMappingURL=jv-create.module.js.map

/***/ })

});
//# sourceMappingURL=14.chunk.js.map