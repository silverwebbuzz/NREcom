(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delivery-delivery-module"],{

/***/ "./src/app/delivery/delivery.module.ts":
/*!*********************************************!*\
  !*** ./src/app/delivery/delivery.module.ts ***!
  \*********************************************/
/*! exports provided: DeliveryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryPageModule", function() { return DeliveryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _delivery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delivery.page */ "./src/app/delivery/delivery.page.ts");







var routes = [
    {
        path: '',
        component: _delivery_page__WEBPACK_IMPORTED_MODULE_6__["DeliveryPage"]
    }
];
var DeliveryPageModule = /** @class */ (function () {
    function DeliveryPageModule() {
    }
    DeliveryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_delivery_page__WEBPACK_IMPORTED_MODULE_6__["DeliveryPage"]]
        })
    ], DeliveryPageModule);
    return DeliveryPageModule;
}());



/***/ }),

/***/ "./src/app/delivery/delivery.page.html":
/*!*********************************************!*\
  !*** ./src/app/delivery/delivery.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-button color=\"tertiary\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"tertiary\" class=\"lbl-head-title\">Delivery</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"page-delivery\">\n\n  <ion-label class=\"lbl-head\">Where are your ordered items shipped ?</ion-label>\n\n  <ion-item lines=\"none\" class=\"item-input\">\n    <ion-label position=\"stacked\" class=\"input-lbl\">Pin Code</ion-label>\n    <ion-input type=\"number\" class=\"input-box\"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"item-input\">\n    <ion-label position=\"stacked\" class=\"input-lbl\">Locality</ion-label>\n    <ion-input type=\"text\" class=\"input-box\"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"item-input\">\n    <ion-label position=\"stacked\" class=\"input-lbl\">City</ion-label>\n    <ion-input type=\"text\" class=\"input-box\"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"item-input\">\n    <ion-label position=\"stacked\" class=\"input-lbl\">State</ion-label>\n    <ion-input type=\"text\" class=\"input-box\"></ion-input>\n  </ion-item>\n\n  <ion-button expand=\"full\" shape=\"round\" color=\"tertiary\" class=\"btn-payment\" routerLink=\"/payment\">Go to payment</ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/delivery/delivery.page.scss":
/*!*********************************************!*\
  !*** ./src/app/delivery/delivery.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-delivery .lbl-head {\n  display: block;\n  font-size: 21px;\n  font-weight: bold;\n  color: #000;\n  padding: 16px 16px 32px 16px; }\n\n.page-delivery .item-input {\n  --padding-end: 8px; }\n\n.page-delivery .item-input .input-lbl {\n    font-weight: bold; }\n\n.page-delivery .item-input .input-box {\n    background: #f1f1f1;\n    --padding-start: 8px;\n    border-radius: 8px; }\n\n.page-delivery .item-input .input-box .icon-eye {\n      position: absolute;\n      right: 10px;\n      color: grey; }\n\n.page-delivery .btn-payment {\n  width: 75%;\n  margin: auto;\n  font-weight: bold;\n  margin-top: 22%;\n  margin-bottom: 15%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9OUmVDb20vc3JjL2FwcC9kZWxpdmVyeS9kZWxpdmVyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsNEJBQTRCLEVBQUE7O0FBUHBDO0VBV1Esa0JBQWMsRUFBQTs7QUFYdEI7SUFjWSxpQkFBaUIsRUFBQTs7QUFkN0I7SUFpQlksbUJBQW1CO0lBQ25CLG9CQUFnQjtJQUNoQixrQkFBa0IsRUFBQTs7QUFuQjlCO01Bc0JnQixrQkFBa0I7TUFDbEIsV0FBVztNQUNYLFdBQVcsRUFBQTs7QUF4QjNCO0VBNkJRLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlbGl2ZXJ5L2RlbGl2ZXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWRlbGl2ZXJ5e1xyXG5cclxuICAgIC5sYmwtaGVhZHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgcGFkZGluZzogMTZweCAxNnB4IDMycHggMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbS1pbnB1dHtcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmlucHV0LWxibHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbnB1dC1ib3h7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcblxyXG4gICAgICAgICAgICAuaWNvbi1leWV7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0bi1wYXltZW50e1xyXG4gICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIyJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNSU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delivery/delivery.page.ts":
/*!*******************************************!*\
  !*** ./src/app/delivery/delivery.page.ts ***!
  \*******************************************/
/*! exports provided: DeliveryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryPage", function() { return DeliveryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");




var DeliveryPage = /** @class */ (function () {
    function DeliveryPage(navCtrl, statusBar) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
    }
    DeliveryPage.prototype.ngOnInit = function () {
    };
    DeliveryPage.prototype.ionViewWillEnter = function () {
        this.statusBar.overlaysWebView(false);
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    DeliveryPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    DeliveryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delivery',
            template: __webpack_require__(/*! ./delivery.page.html */ "./src/app/delivery/delivery.page.html"),
            styles: [__webpack_require__(/*! ./delivery.page.scss */ "./src/app/delivery/delivery.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
    ], DeliveryPage);
    return DeliveryPage;
}());



/***/ })

}]);
//# sourceMappingURL=delivery-delivery-module.js.map