(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");







var routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
    }
];
var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
        })
    ], CartPageModule);
    return CartPageModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.page.html":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title color=\"tertiary\" class=\"lbl-head-title\">cart</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"page-cart\">\n\n  <ion-card class=\"card-cart\">\n    <ion-row class=\"row-cart\">\n      <ion-col size=\"5\" class=\"col-cart\">\n        <img src=\"../../assets/img/shopping6.jpg\" class=\"img-cart\" />\n      </ion-col>\n      <ion-col size=\"7\" class=\"col-cart\">\n        <ion-label class=\"lbl-title\">Samsung Galaxy Note 9 8 GB color MirrorBlack</ion-label>\n        <ion-label class=\"lbl-desc\">4GB 64GB</ion-label>\n        <ion-label class=\"lbl-price\">$ 950</ion-label>\n        <div class=\"div-btn-cart\">\n          <ion-button fill=\"clear\" class=\"btn-remove\">\n            <ion-icon name=\"remove-circle-outline\" size=\"large\" color=\"tertiary\"></ion-icon>\n          </ion-button>\n          <ion-label class=\"lbl-qty\">1</ion-label>\n          <ion-button fill=\"clear\" class=\"btn-add\">\n            <ion-icon name=\"add-circle-outline\" size=\"large\" color=\"tertiary\"></ion-icon>\n          </ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer class=\"page-cart-footer\">\n  <ion-row class=\"row-footer\">\n    <ion-col class=\"col-footer\">\n      <ion-label class=\"lbl-total\">Total : $ 950</ion-label>\n    </ion-col>\n    <ion-col class=\"col-footer\">\n      <ion-button expand=\"full\" color=\"tertiary\" class=\"btn-pay\" routerLink=\"/delivery\">Pay</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>"

/***/ }),

/***/ "./src/app/cart/cart.page.scss":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-cart {\n  --background: #f1f1f1; }\n  .page-cart .card-cart {\n    background: #fff;\n    margin: 5px;\n    border-radius: 0px;\n    box-shadow: 0px 0px 0px 0px; }\n  .page-cart .card-cart .row-cart .col-cart .img-cart {\n      height: 105px;\n      -o-object-fit: cover;\n         object-fit: cover; }\n  .page-cart .card-cart .row-cart .col-cart .lbl-title {\n      display: block;\n      font-size: 14px;\n      font-weight: bold;\n      color: #000;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n  .page-cart .card-cart .row-cart .col-cart .lbl-desc {\n      display: block;\n      font-size: 12px;\n      color: grey;\n      padding: 2px 0px; }\n  .page-cart .card-cart .row-cart .col-cart .lbl-price {\n      display: block;\n      font-size: 13px;\n      color: #000;\n      padding: 2px 0px; }\n  .page-cart .card-cart .row-cart .col-cart .div-btn-cart {\n      margin-top: 10px; }\n  .page-cart .card-cart .row-cart .col-cart .div-btn-cart .btn-remove {\n        margin: 0px;\n        --padding-start: 0px;\n        --padding-end: 10px;\n        height: 1.8em;\n        vertical-align: middle; }\n  .page-cart .card-cart .row-cart .col-cart .div-btn-cart .lbl-qty {\n        color: #000;\n        background: #f1f1f1;\n        padding: 4px 10px 4px 10px; }\n  .page-cart .card-cart .row-cart .col-cart .div-btn-cart .btn-add {\n        margin: 0px;\n        --padding-start: 10px;\n        --padding-end: 0px;\n        height: 1.8em;\n        vertical-align: middle; }\n  .page-cart-footer .row-footer .col-footer {\n  padding: 0px; }\n  .page-cart-footer .row-footer .col-footer .lbl-total {\n    display: block;\n    padding: 10px;\n    text-align: center; }\n  .page-cart-footer .row-footer .col-footer .btn-pay {\n    margin: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9OUmVDb20vc3JjL2FwcC9jYXJ0L2NhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTtFQURqQjtJQUlRLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDJCQUEyQixFQUFBO0VBUG5DO01BWW9CLGFBQWE7TUFDYixvQkFBaUI7U0FBakIsaUJBQWlCLEVBQUE7RUFickM7TUFnQm9CLGNBQWM7TUFDZCxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLHVCQUF1QixFQUFBO0VBdEIzQztNQXlCb0IsY0FBYztNQUNkLGVBQWU7TUFDZixXQUFXO01BQ1gsZ0JBQWdCLEVBQUE7RUE1QnBDO01BK0JvQixjQUFjO01BQ2QsZUFBZTtNQUNmLFdBQVc7TUFDWCxnQkFBZ0IsRUFBQTtFQWxDcEM7TUFxQ29CLGdCQUFnQixFQUFBO0VBckNwQztRQXdDd0IsV0FBVztRQUNYLG9CQUFnQjtRQUNoQixtQkFBYztRQUNkLGFBQWE7UUFDYixzQkFBc0IsRUFBQTtFQTVDOUM7UUErQ3dCLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsMEJBQTBCLEVBQUE7RUFqRGxEO1FBb0R3QixXQUFXO1FBQ1gscUJBQWdCO1FBQ2hCLGtCQUFjO1FBQ2QsYUFBYTtRQUNiLHNCQUFzQixFQUFBO0VBTzlDO0VBR1ksWUFBWSxFQUFBO0VBSHhCO0lBTWdCLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCLEVBQUE7RUFSbEM7SUFXZ0IsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNhcnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XHJcblxyXG4gICAgLmNhcmQtY2FydHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHg7XHJcblxyXG4gICAgICAgIC5yb3ctY2FydHtcclxuICAgICAgICAgICAgLmNvbC1jYXJ0e1xyXG4gICAgICAgICAgICAgICAgLmltZy1jYXJ0e1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGJsLXRpdGxle1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGJsLWRlc2N7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweCAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGJsLXByaWNle1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRpdi1idG4tY2FydHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYnRuLXJlbW92ZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuOGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubGJsLXF0eXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMHB4IDRweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYnRuLWFkZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuOGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ucGFnZS1jYXJ0LWZvb3RlcntcclxuICAgIC5yb3ctZm9vdGVye1xyXG4gICAgICAgIC5jb2wtZm9vdGVye1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgICAgICAgICAubGJsLXRvdGFse1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4tcGF5e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cart/cart.page.ts":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");




var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, statusBar) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
    }
    CartPage.prototype.ngOnInit = function () {
    };
    CartPage.prototype.ionViewWillEnter = function () {
        this.statusBar.overlaysWebView(false);
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    CartPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.page.html */ "./src/app/cart/cart.page.html"),
            styles: [__webpack_require__(/*! ./cart.page.scss */ "./src/app/cart/cart.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
    ], CartPage);
    return CartPage;
}());



/***/ })

}]);
//# sourceMappingURL=cart-cart-module.js.map