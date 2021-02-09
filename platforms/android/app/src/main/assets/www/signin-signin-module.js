(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signin-signin-module"],{

/***/ "./src/app/signin/signin.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.module.ts ***!
  \*****************************************/
/*! exports provided: SigninPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageModule", function() { return SigninPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin.page */ "./src/app/signin/signin.page.ts");







var routes = [
    {
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]
    }
];
var SigninPageModule = /** @class */ (function () {
    function SigninPageModule() {
    }
    SigninPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]]
        })
    ], SigninPageModule);
    return SigninPageModule;
}());



/***/ }),

/***/ "./src/app/signin/signin.page.html":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"page-signin\">\n\n  <ion-item lines=\"none\" class=\"item-logo\">\n    <ion-icon name=\"basket\" color=\"tertiary\" class=\"icon-logo\"></ion-icon>\n    <ion-label color=\"tertiary\" class=\"lbl-head\">NR ECom</ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"item-input\">\n    <ion-label position=\"stacked\" class=\"input-lbl\">Email or username</ion-label>\n    <ion-input type=\"text\" class=\"input-box\"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"item-input\">\n    <ion-label position=\"stacked\" class=\"input-lbl\">Password</ion-label>\n    <ion-input type=\"password\" class=\"input-box\">\n      <ion-icon name=\"eye-off\" color=\"tertiary\" class=\"icon-eye\"></ion-icon>\n    </ion-input>\n  </ion-item>\n\n  <ion-label class=\"lbl-forgot\">I forgot my <ion-text color=\"tertiary\" routerLink=\"/forgotpass\"> Password. </ion-text>\n  </ion-label>\n\n  <div class=\"btns-bottom\">\n\n    <ion-label class=\"lbl-signup\">Don't have an account? <ion-text color=\"tertiary\" routerLink=\"/signup\"> Sign up.\n      </ion-text>\n    </ion-label>\n\n    <ion-button expand=\"full\" shape=\"round\" color=\"tertiary\" class=\"btn-signin\" routerLink=\"/tabs/home\">SIGN IN\n    </ion-button>\n\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/signin/signin.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-signin .item-logo {\n  padding: 16% 0% 16% 0%;\n  width: 270px;\n  margin: 0 auto; }\n  .page-signin .item-logo .icon-logo {\n    height: 90px;\n    width: 90px; }\n  .page-signin .item-logo .lbl-head {\n    font-size: 32px;\n    font-weight: bold; }\n  .page-signin .item-input {\n  --padding-end: 8px; }\n  .page-signin .item-input .input-lbl {\n    font-weight: bold; }\n  .page-signin .item-input .input-box {\n    background: #f1f1f1;\n    --padding-start: 8px;\n    border-radius: 8px; }\n  .page-signin .item-input .input-box .icon-eye {\n      position: absolute;\n      right: 10px;\n      color: grey; }\n  .page-signin .lbl-forgot {\n  display: block;\n  text-align: center;\n  font-size: 13px;\n  margin-top: 20px;\n  font-weight: bold; }\n  .page-signin .btns-bottom {\n  margin: 30% 0% 10% 0%; }\n  .page-signin .btns-bottom .lbl-signup {\n    display: block;\n    text-align: center;\n    font-size: 13px;\n    font-weight: bold; }\n  .page-signin .btns-bottom .btn-signin {\n    width: 75%;\n    margin: auto;\n    font-weight: bold;\n    margin-top: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9OUmVDb20vc3JjL2FwcC9zaWduaW4vc2lnbmluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osY0FBYyxFQUFBO0VBTHRCO0lBUVksWUFBWTtJQUNaLFdBQVcsRUFBQTtFQVR2QjtJQVlZLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtFQWI3QjtFQWtCUSxrQkFBYyxFQUFBO0VBbEJ0QjtJQXFCWSxpQkFBaUIsRUFBQTtFQXJCN0I7SUF3QlksbUJBQW1CO0lBQ25CLG9CQUFnQjtJQUNoQixrQkFBa0IsRUFBQTtFQTFCOUI7TUE2QmdCLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsV0FBVyxFQUFBO0VBL0IzQjtFQW9DUSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7RUF4Q3pCO0VBNENRLHFCQUFxQixFQUFBO0VBNUM3QjtJQStDWSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtFQWxEN0I7SUFxRFksVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaWduaW4vc2lnbmluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXNpZ25pbntcclxuXHJcbiAgICAuaXRlbS1sb2dve1xyXG4gICAgICAgIHBhZGRpbmc6IDE2JSAwJSAxNiUgMCU7XHJcbiAgICAgICAgd2lkdGg6IDI3MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5pY29uLWxvZ297XHJcbiAgICAgICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sYmwtaGVhZHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pdGVtLWlucHV0e1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcclxuXHJcbiAgICAgICAgLmlucHV0LWxibHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbnB1dC1ib3h7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcblxyXG4gICAgICAgICAgICAuaWNvbi1leWV7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxibC1mb3Jnb3R7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG5zLWJvdHRvbXtcclxuICAgICAgICBtYXJnaW46IDMwJSAwJSAxMCUgMCU7XHJcblxyXG4gICAgICAgIC5sYmwtc2lnbnVwe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLXNpZ25pbntcclxuICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/signin/signin.page.ts":
/*!***************************************!*\
  !*** ./src/app/signin/signin.page.ts ***!
  \***************************************/
/*! exports provided: SigninPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPage", function() { return SigninPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");



var SigninPage = /** @class */ (function () {
    function SigninPage(statusBar) {
        this.statusBar = statusBar;
    }
    SigninPage.prototype.ngOnInit = function () {
    };
    SigninPage.prototype.ionViewWillEnter = function () {
        this.statusBar.overlaysWebView(true);
        //console.log('test');
        //this.statusBar.hide();
    };
    SigninPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.page.html */ "./src/app/signin/signin.page.html"),
            styles: [__webpack_require__(/*! ./signin.page.scss */ "./src/app/signin/signin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
    ], SigninPage);
    return SigninPage;
}());



/***/ })

}]);
//# sourceMappingURL=signin-signin-module.js.map