(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"],{

/***/ "./src/app/landing/landing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.module.ts ***!
  \*******************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing.page */ "./src/app/landing/landing.page.ts");







var routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"]
    }
];
var LandingPageModule = /** @class */ (function () {
    function LandingPageModule() {
    }
    LandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"]]
        })
    ], LandingPageModule);
    return LandingPageModule;
}());



/***/ }),

/***/ "./src/app/landing/landing.page.html":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"page-landing\">\n\n  <ion-item lines=\"none\" class=\"item-logo\">\n    <ion-icon name=\"basket\" color=\"tertiary\" class=\"icon-logo\"></ion-icon>\n    <ion-label color=\"tertiary\" class=\"lbl-head\">NR ECom</ion-label>\n  </ion-item>\n\n  <ion-label color=\"tertiary\" class=\"lbl-line\"></ion-label>\n  <ion-label color=\"tertiary\" class=\"lbl-desc\">Get Best Product in NR ECom</ion-label>\n\n  <div class=\"div-fixed\">\n    <ion-button fill=\"outline\" shape=\"round\" expand=\"full\" color=\"tertiary\" class=\"btn-signup\" routerLink=\"/signup\">SIGN\n      UP</ion-button>\n    <ion-button fill=\"outline\" shape=\"round\" expand=\"full\" color=\"tertiary\" class=\"btn-signin\" routerLink=\"/signin\">SIGN\n      IN</ion-button>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/landing/landing.page.scss":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-landing .item-logo {\n  padding: 16% 0% 10% 0%;\n  width: 270px;\n  margin: 0 auto; }\n  .page-landing .item-logo .icon-logo {\n    height: 90px;\n    width: 90px; }\n  .page-landing .item-logo .lbl-head {\n    font-size: 32px;\n    font-weight: bold; }\n  .page-landing .lbl-line {\n  display: block;\n  border-bottom: 1px solid;\n  margin: 30% 35% 0% 35%; }\n  .page-landing .lbl-desc {\n  display: block;\n  font-size: 19px;\n  text-align: center; }\n  .page-landing .div-fixed {\n  width: 100%;\n  position: absolute;\n  bottom: 10%; }\n  .page-landing .div-fixed .btn-signup {\n    width: 75%;\n    margin: auto; }\n  .page-landing .div-fixed .btn-signin {\n    width: 75%;\n    margin: auto;\n    margin-top: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9OUmVDb20vc3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSVEsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixjQUFjLEVBQUE7RUFOdEI7SUFTWSxZQUFZO0lBQ1osV0FBVyxFQUFBO0VBVnZCO0lBYVksZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBZDdCO0VBa0JRLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsc0JBQXNCLEVBQUE7RUFwQjlCO0VBdUJRLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7RUF6QjFCO0VBNEJRLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0VBOUJuQjtJQWlDWSxVQUFVO0lBQ1YsWUFBWSxFQUFBO0VBbEN4QjtJQXFDWSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWxhbmRpbmd7XHJcbiAgICAvLy0tYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgIFxyXG4gICAgLml0ZW0tbG9nb3tcclxuICAgICAgICBwYWRkaW5nOiAxNiUgMCUgMTAlIDAlO1xyXG4gICAgICAgIHdpZHRoOiAyNzBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBcclxuICAgICAgICAuaWNvbi1sb2dve1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGJsLWhlYWR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxibC1saW5le1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgICAgICBtYXJnaW46IDMwJSAzNSUgMCUgMzUlO1xyXG4gICAgfVxyXG4gICAgLmxibC1kZXNje1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZGl2LWZpeGVke1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDEwJTtcclxuICAgIFxyXG4gICAgICAgIC5idG4tc2lnbnVwe1xyXG4gICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tc2lnbmlue1xyXG4gICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/landing/landing.page.ts":
/*!*****************************************!*\
  !*** ./src/app/landing/landing.page.ts ***!
  \*****************************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");




var LandingPage = /** @class */ (function () {
    function LandingPage(route, statusBar) {
        this.route = route;
        this.statusBar = statusBar;
    }
    LandingPage.prototype.ngOnInit = function () {
    };
    LandingPage.prototype.ionViewWillEnter = function () {
        //this.statusBar.styleDefault();
        this.statusBar.overlaysWebView(true);
        //console.log('test');
        //this.statusBar.hide();
    };
    LandingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.page.html */ "./src/app/landing/landing.page.html"),
            styles: [__webpack_require__(/*! ./landing.page.scss */ "./src/app/landing/landing.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
    ], LandingPage);
    return LandingPage;
}());



/***/ })

}]);
//# sourceMappingURL=landing-landing-module.js.map