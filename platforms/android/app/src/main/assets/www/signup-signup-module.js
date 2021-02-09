(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");







var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.page.html":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"page-signup\">\n\n    <ion-item lines=\"none\" class=\"item-logo\">\n      <ion-icon name=\"basket\" color=\"tertiary\" class=\"icon-logo\"></ion-icon>\n      <ion-label color=\"tertiary\" class=\"lbl-head\">NR ECom</ion-label>\n    </ion-item>\n    \n    <ion-item lines=\"none\" class=\"item-input\">\n      <ion-label position=\"stacked\" class=\"input-lbl\">Full name</ion-label>\n      <ion-input type=\"text\" class=\"input-box\"></ion-input>\n    </ion-item>\n    \n    <ion-item lines=\"none\" class=\"item-input\">\n      <ion-label position=\"stacked\" class=\"input-lbl\">Email address</ion-label>\n      <ion-input type=\"email\" class=\"input-box\"></ion-input>\n    </ion-item>\n    \n    <ion-item lines=\"none\" class=\"item-input\">\n      <ion-label position=\"stacked\" class=\"input-lbl\">Password</ion-label>\n      <ion-input type=\"password\" class=\"input-box\"></ion-input>\n    </ion-item>\n    \n    <ion-item lines=\"none\" class=\"item-input\">\n      <ion-label position=\"stacked\" class=\"input-lbl\">Confirm Password</ion-label>\n      <ion-input type=\"password\" class=\"input-box\"></ion-input>\n    </ion-item>\n    \n    <div class=\"btns-bottom\">\n    \n      <ion-label class=\"lbl-signup\">Already have an account? <ion-text color=\"tertiary\" routerLink=\"/signin\"> Sign in.\n        </ion-text>\n      </ion-label>\n    \n      <ion-button expand=\"full\" shape=\"round\" color=\"tertiary\" class=\"btn-signin\">SIGN UP</ion-button>\n    \n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-signup .item-logo {\n  padding: 16% 0% 16% 0%;\n  width: 270px;\n  margin: 0 auto; }\n  .page-signup .item-logo .icon-logo {\n    height: 90px;\n    width: 90px; }\n  .page-signup .item-logo .lbl-head {\n    font-size: 32px;\n    font-weight: bold; }\n  .page-signup .item-input {\n  --padding-end: 8px; }\n  .page-signup .item-input .input-lbl {\n    font-weight: bold; }\n  .page-signup .item-input .input-box {\n    background: #f1f1f1;\n    --padding-start: 8px;\n    border-radius: 8px; }\n  .page-signup .item-input .input-box .icon-eye {\n      position: absolute;\n      right: 10px;\n      color: grey; }\n  .page-signup .btns-bottom {\n  margin: 25% 0% 10% 0%; }\n  .page-signup .btns-bottom .lbl-signup {\n    display: block;\n    text-align: center;\n    font-size: 13px;\n    font-weight: bold; }\n  .page-signup .btns-bottom .btn-signin {\n    width: 75%;\n    margin: auto;\n    font-weight: bold;\n    margin-top: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9OUmVDb20vc3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osY0FBYyxFQUFBO0VBTHRCO0lBUVksWUFBWTtJQUNaLFdBQVcsRUFBQTtFQVR2QjtJQVlZLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtFQWI3QjtFQWtCUSxrQkFBYyxFQUFBO0VBbEJ0QjtJQXFCWSxpQkFBaUIsRUFBQTtFQXJCN0I7SUF3QlksbUJBQW1CO0lBQ25CLG9CQUFnQjtJQUNoQixrQkFBa0IsRUFBQTtFQTFCOUI7TUE2QmdCLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsV0FBVyxFQUFBO0VBL0IzQjtFQXFDUSxxQkFBcUIsRUFBQTtFQXJDN0I7SUF3Q1ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7RUEzQzdCO0lBOENZLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1zaWdudXB7XHJcblxyXG4gICAgLml0ZW0tbG9nb3tcclxuICAgICAgICBwYWRkaW5nOiAxNiUgMCUgMTYlIDAlO1xyXG4gICAgICAgIHdpZHRoOiAyNzBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBcclxuICAgICAgICAuaWNvbi1sb2dve1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGJsLWhlYWR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLWlucHV0e1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcclxuICAgICAgICBcclxuICAgICAgICAuaW5wdXQtbGJse1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlucHV0LWJveHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHJcbiAgICAgICAgICAgIC5pY29uLWV5ZXtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bnMtYm90dG9te1xyXG4gICAgICAgIG1hcmdpbjogMjUlIDAlIDEwJSAwJTtcclxuXHJcbiAgICAgICAgLmxibC1zaWdudXB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tc2lnbmlue1xyXG4gICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");



var SignupPage = /** @class */ (function () {
    function SignupPage(statusBar) {
        this.statusBar = statusBar;
    }
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage.prototype.ionViewWillEnter = function () {
        this.statusBar.overlaysWebView(true);
        //this.statusBar.hide();
    };
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.page.html */ "./src/app/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map