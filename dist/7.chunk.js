webpackJsonp([7],{

/***/ "../../../../../src/app/layout/ap-create/ap-create-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ap_create_component__ = __webpack_require__("../../../../../src/app/layout/ap-create/ap-create.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__ap_create_component__["a" /* ApCreateComponent */] }
];
var ApRoutingModule = (function () {
    function ApRoutingModule() {
    }
    return ApRoutingModule;
}());
ApRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], ApRoutingModule);

//# sourceMappingURL=ap-create-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/ap-create/ap-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n            <i class=\"fa fa-file-text\"></i> <a [routerLink]=\"['/ap']\">AP</a>\n        </li>\n        <li class=\"breadcrumb-item active\"><i class=\"fa fa-edit\"></i> Create</li>\n    </ol>\n    <form role=\"form\" [@routerTransition]>\n        <div class=\"bg-header\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <h2>Account Payable</h2>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                </div>\n                <div class=\"col-md-4\">\n                </div>\n                <div class=\"col-md-4\">\n                    <fieldset class=\"form-group\">\n                        <label>Doc No.</label>\n                        <input class=\"form-control\" type=\"text\" [disabled]=\"true\" [(ngModel)]=\"ap.docno\" [ngModelOptions]=\"{standalone: true}\">\n                    </fieldset>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <fieldset class=\"form-group\">\n                        <label>Contact</label>\n                        <!-- <select name=\"client\" id=\"client\" class=\"form-control\" ng-options=\"item as item.name for item in vm.client track by item._id \"\n                            ng-model=\"vm.quotation.client\" ng-change=\"vm.selectCustomer()\" style=\"height: 30px;\" required></select> -->\n                        <select class=\"form-control\">\n                            <option value=\"1\">Sarayut Kungsaranuwat</option>\n                            <option value=\"2\">Cyber Advance</option>\n                          </select>\n                    </fieldset>\n                </div>\n                <div class=\"col-md-4\">\n                </div>\n                <div class=\"col-md-4\">\n                    <fieldset class=\"form-group\">\n                        <label>Doc Date</label>\n                        <input class=\"form-control\" type=\"date-local\" [ngModel]=\"ap.docdate |date:'dd/MM/yyyy'\" (ngModelChange)=\"ap.docdate = $event\"\n                            [ngModelOptions]=\"{standalone: true}\">\n                    </fieldset>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <div class=\"card-block table-responsive\">\n                        <table class=\"table table-hover table-striped\">\n                            <thead class=\"thead-inverse\">\n                                <tr>\n                                    <th>#</th>\n                                    <th>Name</th>\n                                    <th class=\"text-center\" style=\"width:100px\">Qty</th>\n                                    <th class=\"text-right\">Unit price</th>\n                                    <th class=\"text-right\">Vat</th>\n                                    <th class=\"text-right\">Amount</th>\n                                    <th class=\"text-center\">Action</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let item of selectedItems; let i = index\">\n                                    <td scope=\"row\">{{i + 1}}</td>\n                                    <td>{{item.name}}</td>\n                                    <td class=\"text-center\">{{item.qty}}</td>\n                                    <td class=\"text-right\">{{item.unitprice}}</td>\n                                    <td class=\"text-right\">{{item.vat}}</td>\n                                    <td class=\"text-right\">{{item.netamount}}</td>\n                                    <td class=\"text-center\">\n                                        <div class=\"btn-group\" role=\"group\">\n                                            <button type=\"button\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button>\n                                        </div>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\"></th>\n                                    <td>\n                                        <select [(ngModel)]=\"selectedItem\" (ngModelChange)=\"onChange()\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">       \n                                            <option *ngFor=\"let item of items\"\n                                                    [ngValue]=\"item\">\n                                                    {{item.name}}\n                                            </option>\n                                        </select>\n                                        <!--[attr.selected]=\"customer.customerType.customerType==ct.customerType ? true : null\"  -->\n                                    </td>\n                                    <td class=\"text-center\">\n                                        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"selectedItem.qty\" (ngModelChange)=\"onChange()\" [ngModelOptions]=\"{standalone: true}\"\n                                            style=\"text-align:center;\">\n                                    </td>\n                                    <td class=\"text-right\">{{selectedItem.unitprice}}</td>\n                                    <td class=\"text-right\">{{selectedItem.vat}}</td>\n                                    <td class=\"text-right\">{{selectedItem.netamount}}</td>\n                                    <td class=\"text-center\">\n                                        <div class=\"btn-group\" role=\"group\">\n                                            <button type=\"button\" class=\"btn btn-success\" (click)=\"addItem()\"><i class=\"fa fa-check\"></i></button>\n                                        </div>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                </div>\n                <div class=\"col-md-4\">\n                </div>\n                <div class=\"col-md-4 text-left\">\n                    <fieldset class=\"form-group\">\n                        <label>Amount</label>\n                        <input class=\"form-control\" type=\"text\">\n                    </fieldset>\n                    <fieldset class=\"form-group\">\n                        <label>Total Amount</label>\n                        <input class=\"form-control\" type=\"text\">\n                    </fieldset>\n                    <fieldset class=\"form-group\">\n                        <label>Discount</label>\n                        <input class=\"form-control\" type=\"text\">\n                    </fieldset>\n                    <fieldset class=\"form-group\">\n                        <label>Net Amount</label>\n                        <input class=\"form-control\" type=\"text\">\n                    </fieldset>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/ap-create/ap-create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg-header {\n  background-color: #f9f9f9;\n  padding: 8px; }\n\ntd {\n  vertical-align: middle !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/ap-create/ap-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ap_create_model__ = __webpack_require__("../../../../../src/app/layout/ap-create/ap-create.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApCreateComponent = (function () {
    function ApCreateComponent() {
        this.ap = new __WEBPACK_IMPORTED_MODULE_2__ap_create_model__["a" /* APModel */]();
        this.items = [{
                name: 'ข้าวกล้อง',
                unitprice: 100,
                vat: 7
            }, {
                name: 'ข้าวกล้อง2',
                unitprice: 100,
                vat: 6
            }];
        this.selectedItem = new __WEBPACK_IMPORTED_MODULE_2__ap_create_model__["b" /* itemModel */]();
        this.selectedItems = [];
    }
    ApCreateComponent.prototype.ngOnInit = function () {
        this.ap.docno = '' + (+new Date());
        this.ap.docdate = new Date();
    };
    ApCreateComponent.prototype.onChange = function () {
        this.selectedItem.qty ? this.selectedItem.qty : this.selectedItem.qty = 1;
        var amount = this.selectedItem.unitprice * this.selectedItem.qty;
        this.selectedItem.netamount = ((amount * this.selectedItem.vat) / 100) + amount;
    };
    ApCreateComponent.prototype.addItem = function () {
        this.selectedItems.push(this.selectedItem);
        this.selectedItem = new __WEBPACK_IMPORTED_MODULE_2__ap_create_model__["b" /* itemModel */]();
        console.log(this.selectedItems);
    };
    return ApCreateComponent;
}());
ApCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ap-create',
        template: __webpack_require__("../../../../../src/app/layout/ap-create/ap-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/ap-create/ap-create.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [])
], ApCreateComponent);

//# sourceMappingURL=ap-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/ap-create/ap-create.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return itemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APModel; });
/* unused harmony export ContactModel */
/* unused harmony export AddressModel */
var itemModel = (function () {
    function itemModel() {
    }
    return itemModel;
}());

var APModel = (function () {
    function APModel() {
    }
    return APModel;
}());

var ContactModel = (function () {
    function ContactModel() {
    }
    return ContactModel;
}());

var AddressModel = (function () {
    function AddressModel() {
    }
    return AddressModel;
}());

//# sourceMappingURL=ap-create.model.js.map

/***/ }),

/***/ "../../../../../src/app/layout/ap-create/ap-create.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ap_create_routing_module__ = __webpack_require__("../../../../../src/app/layout/ap-create/ap-create-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ap_create_component__ = __webpack_require__("../../../../../src/app/layout/ap-create/ap-create.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApCreateModule", function() { return ApCreateModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ApCreateModule = (function () {
    function ApCreateModule() {
    }
    return ApCreateModule;
}());
ApCreateModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__ap_create_routing_module__["a" /* ApRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__ap_create_component__["a" /* ApCreateComponent */]]
    })
], ApCreateModule);

//# sourceMappingURL=ap-create.module.js.map

/***/ })

});
//# sourceMappingURL=7.chunk.js.map