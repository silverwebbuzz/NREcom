(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-payment-module"],{

/***/ "./src/app/payment/payment.module.ts":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.module.ts ***!
  \*******************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment.page */ "./src/app/payment/payment.page.ts");







var routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]
    }
];
var PaymentPageModule = /** @class */ (function () {
    function PaymentPageModule() {
    }
    PaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
        })
    ], PaymentPageModule);
    return PaymentPageModule;
}());



/***/ }),

/***/ "./src/app/payment/payment.page.html":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons>\n        <ion-button color=\"tertiary\" (click)=\"back()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title color=\"tertiary\" class=\"lbl-head-title\">Payment</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content no-padding>\n\n  <ion-label class=\"lbl-head\">Choose your payment method</ion-label>\n\n  <ion-radio-group>\n  <ion-item lines=\"none\" class=\"items\">\n    <ion-label>Credit / Debit Card</ion-label>\n    <ion-radio slot=\"start\" mode=\"md\" class=\"btn-radio\"></ion-radio>\n    <img src=\"../../assets/img/card.png\" class=\"img-pay-method\"/>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"items\">\n    <ion-label>Cash On Delivery</ion-label>\n    <ion-radio slot=\"start\" mode=\"md\" class=\"btn-radio\"></ion-radio>\n    <img src=\"../../assets/img/cod.jpg\" class=\"img-pay-method\"/>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"items\">\n    <ion-label>Paypal</ion-label>\n    <ion-radio slot=\"start\" mode=\"md\" class=\"btn-radio\"></ion-radio>\n    <img src=\"../../assets/img/paypal.png\" class=\"img-pay-method\"/>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"items\">\n    <ion-label>Google Wallet</ion-label>\n    <ion-radio slot=\"start\" mode=\"md\" class=\"btn-radio\"></ion-radio>\n    <img src=\"../../assets/img/wallet.jpg\" class=\"img-pay-method\"/>\n  </ion-item>\n  </ion-radio-group>\n\n  <ion-button shape=\"round\" expand=\"full\" color=\"tertiary\" class=\"btn\" (click)=\"Success()\">Pay</ion-button>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/payment/payment.page.scss":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".items {\n  border-bottom: 1px solid #f1f1f1;\n  margin: 0px 10px; }\n  .items .btn-radio {\n    --color-checked: var(--ion-color-tertiary); }\n  .img-pay-method {\n  height: 30px;\n  width: 30px; }\n  .lbl-head {\n  font-size: 22px;\n  font-weight: bold;\n  display: block;\n  padding: 10px;\n  margin: 20px 16px; }\n  .btn {\n  margin: 28% 12% 0px 12%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9OUmVDb20vc3JjL2FwcC9wYXltZW50L3BheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQWdDO0VBQ2hDLGdCQUFnQixFQUFBO0VBRnBCO0lBS1EsMENBQWdCLEVBQUE7RUFHeEI7RUFDSSxZQUFZO0VBQ1osV0FBVyxFQUFBO0VBRWY7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7RUFFckI7RUFDSSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvcGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbXN7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcclxuICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcblxyXG4gICAgLmJ0bi1yYWRpb3tcclxuICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbiAgICB9XHJcbn1cclxuLmltZy1wYXktbWV0aG9ke1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbn1cclxuLmxibC1oZWFke1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggMTZweDtcclxufVxyXG4uYnRue1xyXG4gICAgbWFyZ2luOiAyOCUgMTIlIDBweCAxMiU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/payment/payment.page.ts":
/*!*****************************************!*\
  !*** ./src/app/payment/payment.page.ts ***!
  \*****************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _component_payment_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/payment/payment.component */ "./src/app/component/payment/payment.component.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");





var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, modalCtrl, statusBar) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.statusBar = statusBar;
    }
    PaymentPage.prototype.ngOnInit = function () {
    };
    PaymentPage.prototype.ionViewWillEnter = function () {
        this.statusBar.overlaysWebView(false);
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    PaymentPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    PaymentPage.prototype.Success = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _component_payment_payment_component__WEBPACK_IMPORTED_MODULE_3__["PaymentComponent"],
                            showBackdrop: true,
                            backdropDismiss: false,
                            mode: "ios",
                            cssClass: 'modal-success'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.page.html */ "./src/app/payment/payment.page.html"),
            styles: [__webpack_require__(/*! ./payment.page.scss */ "./src/app/payment/payment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])
    ], PaymentPage);
    return PaymentPage;
}());



/***/ })

}]);
//# sourceMappingURL=payment-payment-module.js.map