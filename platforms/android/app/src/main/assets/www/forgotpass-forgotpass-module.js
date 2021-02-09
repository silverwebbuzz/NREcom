(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpass-forgotpass-module"],{

/***/ "./src/app/forgotpass/forgotpass.module.ts":
/*!*************************************************!*\
  !*** ./src/app/forgotpass/forgotpass.module.ts ***!
  \*************************************************/
/*! exports provided: ForgotpassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPageModule", function() { return ForgotpassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgotpass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpass.page */ "./src/app/forgotpass/forgotpass.page.ts");







var routes = [
    {
        path: '',
        component: _forgotpass_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpassPage"]
    }
];
var ForgotpassPageModule = /** @class */ (function () {
    function ForgotpassPageModule() {
    }
    ForgotpassPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgotpass_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpassPage"]]
        })
    ], ForgotpassPageModule);
    return ForgotpassPageModule;
}());



/***/ }),

/***/ "./src/app/forgotpass/forgotpass.page.html":
/*!*************************************************!*\
  !*** ./src/app/forgotpass/forgotpass.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"page-forgot\">\n\n  <ion-item lines=\"none\" class=\"item-logo\">\n    <ion-icon name=\"basket\" color=\"tertiary\" class=\"icon-logo\"></ion-icon>\n    <ion-label color=\"tertiary\" class=\"lbl-head\">NR ECom</ion-label>\n  </ion-item>\n\n  <ion-label class=\"heading\">\n    Enter your register email address. We'll send you an email to reset your password.\n  </ion-label>\n\n  <ion-item lines=\"none\">\n    <ion-label position=\"stacked\" class=\"input-lbl\">Email address</ion-label>\n    <ion-input type=\"text\" class=\"input-box\"></ion-input>\n  </ion-item>\n\n  <div class=\"btns-bottom\">\n  <ion-label color=\"tertiary\" class=\"lbl-signup\" routerLink=\"/signin\">Back to SIGN IN</ion-label>\n\n  <ion-button expand=\"full\" shape=\"round\" color=\"tertiary\" class=\"btn-forgot\">SUBMIT</ion-button>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/forgotpass/forgotpass.page.scss":
/*!*************************************************!*\
  !*** ./src/app/forgotpass/forgotpass.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-forgot .item-logo {\n  padding: 16% 0% 16% 0%;\n  width: 270px;\n  margin: 0 auto; }\n  .page-forgot .item-logo .icon-logo {\n    height: 90px;\n    width: 90px; }\n  .page-forgot .item-logo .lbl-head {\n    font-size: 32px;\n    font-weight: bold; }\n  .page-forgot .heading {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 25px 16px;\n  display: block; }\n  .page-forgot .item-input {\n  --padding-end: 8px; }\n  .page-forgot .item-input .input-lbl {\n    font-weight: bold; }\n  .page-forgot .item-input .input-box {\n    background: #f1f1f1;\n    --padding-start: 8px;\n    border-radius: 8px; }\n  .page-forgot .btns-bottom {\n  margin: 25% 0% 15% 0%; }\n  .page-forgot .btns-bottom .lbl-signup {\n    display: block;\n    text-align: center;\n    font-size: 13px;\n    font-weight: bold;\n    outline: none; }\n  .page-forgot .btns-bottom .btn-forgot {\n    width: 75%;\n    margin: auto;\n    font-weight: bold;\n    margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9OUmVDb20vc3JjL2FwcC9mb3Jnb3RwYXNzL2ZvcmdvdHBhc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixjQUFjLEVBQUE7RUFKdEI7SUFPWSxZQUFZO0lBQ1osV0FBVyxFQUFBO0VBUnZCO0lBV1ksZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBWjdCO0VBaUJRLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTtFQXBCdEI7RUF3QlEsa0JBQWMsRUFBQTtFQXhCdEI7SUEyQlksaUJBQWlCLEVBQUE7RUEzQjdCO0lBOEJZLG1CQUFtQjtJQUNuQixvQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7RUFoQzlCO0VBb0NRLHFCQUFxQixFQUFBO0VBcEM3QjtJQXVDWSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYSxFQUFBO0VBM0N6QjtJQThDWSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdHBhc3MvZm9yZ290cGFzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1mb3Jnb3R7XHJcbiAgICAuaXRlbS1sb2dve1xyXG4gICAgICAgIHBhZGRpbmc6IDE2JSAwJSAxNiUgMCU7XHJcbiAgICAgICAgd2lkdGg6IDI3MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5pY29uLWxvZ297XHJcbiAgICAgICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sYmwtaGVhZHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRpbmd7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAxNnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLWlucHV0e1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcclxuXHJcbiAgICAgICAgLmlucHV0LWxibHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbnB1dC1ib3h7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0bnMtYm90dG9te1xyXG4gICAgICAgIG1hcmdpbjogMjUlIDAlIDE1JSAwJTtcclxuXHJcbiAgICAgICAgLmxibC1zaWdudXB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tZm9yZ290e1xyXG4gICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/forgotpass/forgotpass.page.ts":
/*!***********************************************!*\
  !*** ./src/app/forgotpass/forgotpass.page.ts ***!
  \***********************************************/
/*! exports provided: ForgotpassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPage", function() { return ForgotpassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");



var ForgotpassPage = /** @class */ (function () {
    function ForgotpassPage(statusBar) {
        this.statusBar = statusBar;
    }
    ForgotpassPage.prototype.ngOnInit = function () {
    };
    ForgotpassPage.prototype.ionViewWillEnter = function () {
        this.statusBar.overlaysWebView(true);
        //console.log('test');
        //this.statusBar.hide();
    };
    ForgotpassPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgotpass',
            template: __webpack_require__(/*! ./forgotpass.page.html */ "./src/app/forgotpass/forgotpass.page.html"),
            styles: [__webpack_require__(/*! ./forgotpass.page.scss */ "./src/app/forgotpass/forgotpass.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
    ], ForgotpassPage);
    return ForgotpassPage;
}());



/***/ })

}]);
//# sourceMappingURL=forgotpass-forgotpass-module.js.map