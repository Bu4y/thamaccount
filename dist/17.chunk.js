webpackJsonp([17],{

/***/ "../../../../../src/app/layout/contact-create/contact-create-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_create_component__ = __webpack_require__("../../../../../src/app/layout/contact-create/contact-create.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__contact_create_component__["a" /* ContactCreateComponent */] }
];
var ContactListsRoutingModule = (function () {
    function ContactListsRoutingModule() {
    }
    return ContactListsRoutingModule;
}());
ContactListsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], ContactListsRoutingModule);

//# sourceMappingURL=contact-create-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/contact-create/contact-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <h2 class=\"page-header\">\n        Contact Create\n    </h2>\n    <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n            <i class=\"fa fa-list-ul\"></i> <a [routerLink]=\"['/contact-lists']\">Contact</a>\n        </li>\n        <li class=\"breadcrumb-item active\"><i class=\"fa fa-edit\"></i> Create</li>\n    </ol>\n    <div class=\"row\">\n        <div class=\"col-md-3 col-sm-1\">\n        </div>\n        <div class=\"col-md-6 col-sm-10\">\n            <form role=\"form\">\n                <fieldset class=\"form-group\">\n                    <label>Name</label>\n                    <input class=\"form-control\" type=\"text\">\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Goverment ID</label>\n                    <input class=\"form-control\" type=\"text\">\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Tel</label>\n                    <input class=\"form-control\" type=\"tel\">\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>E-mail</label>\n                    <input class=\"form-control\" type=\"email\">\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Address</label>\n                    <input class=\"form-control\" type=\"text\">\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Postcode</label>\n                    <input class=\"form-control\" type=\"text\">\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>District</label>\n                    <input class=\"form-control\" type=\"text\">\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Subdistrict</label>\n                    <input class=\"form-control\" type=\"text\">\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Province</label>\n                    <input class=\"form-control\" type=\"text\">\n                </fieldset>\n                <div class=\"col-12 text-center\">\n                    <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n                </div>\n            </form>\n        </div>\n        <div class=\"col-md-3 col-sm-1\">\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/contact-create/contact-create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/contact-create/contact-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactCreateComponent = (function () {
    function ContactCreateComponent() {
    }
    ContactCreateComponent.prototype.ngOnInit = function () {
    };
    return ContactCreateComponent;
}());
ContactCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact-create',
        template: __webpack_require__("../../../../../src/app/layout/contact-create/contact-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/contact-create/contact-create.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [])
], ContactCreateComponent);

//# sourceMappingURL=contact-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/contact-create/contact-create.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_create_routing_module__ = __webpack_require__("../../../../../src/app/layout/contact-create/contact-create-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_create_component__ = __webpack_require__("../../../../../src/app/layout/contact-create/contact-create.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactCreateModule", function() { return ContactCreateModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactCreateModule = (function () {
    function ContactCreateModule() {
    }
    return ContactCreateModule;
}());
ContactCreateModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__contact_create_routing_module__["a" /* ContactListsRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__contact_create_component__["a" /* ContactCreateComponent */]]
    })
], ContactCreateModule);

//# sourceMappingURL=contact-create.module.js.map

/***/ })

});
//# sourceMappingURL=17.chunk.js.map