(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sale-sale-module"],{

/***/ "./src/app/sale/sale.module.ts":
/*!*************************************!*\
  !*** ./src/app/sale/sale.module.ts ***!
  \*************************************/
/*! exports provided: SalePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalePageModule", function() { return SalePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sale_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sale.page */ "./src/app/sale/sale.page.ts");







var routes = [
    {
        path: '',
        component: _sale_page__WEBPACK_IMPORTED_MODULE_6__["SalePage"]
    }
];
var SalePageModule = /** @class */ (function () {
    function SalePageModule() {
    }
    SalePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sale_page__WEBPACK_IMPORTED_MODULE_6__["SalePage"]]
        })
    ], SalePageModule);
    return SalePageModule;
}());



/***/ }),

/***/ "./src/app/sale/sale.page.html":
/*!*************************************!*\
  !*** ./src/app/sale/sale.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-button color=\"tertiary\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"tertiary\" class=\"lbl-head-title\">Flash Sale</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"card-sale\">\n    <img src=\"../../assets/img/home.jpg\" class=\"img-sale\" />\n  </ion-card>\n\n  <ion-label class=\"lbl-sale\"><b>End in </b>23 : 59 : 55</ion-label>\n\n  <ion-row class=\"sale-row\">\n    <ion-col class=\"sale-col\">\n      <ion-card class=\"sale-card\">\n        <img src=\"../../assets/img/home.jpg\" class=\"sale-img\" />\n        <div class=\"div-sale-desc\">\n          <ion-label class=\"lbl-sale-title\">Apple Macbook Pro with Touch Bar</ion-label>\n          <ion-label class=\"lbl-sale-old\">$ 2,000</ion-label>\n          <ion-label class=\"lbl-sale-new\" color=\"tertiary\">$ 1,300</ion-label>\n          <ion-label class=\"lbl-sale-rating\">\n            <ion-icon name=\"star\" class=\"icon-rating\"></ion-icon>(56)\n          </ion-label>\n          <ion-label class=\"lbl-sale-location\">\n            <ion-icon name=\"pin\"></ion-icon>Ahmedabad\n          </ion-label>\n          <ion-label class=\"lbl-sale-stock\">9 Available</ion-label>\n        </div>\n      </ion-card>\n    </ion-col>\n    <ion-col class=\"sale-col\">\n      <ion-card class=\"sale-card\">\n        <img src=\"../../assets/img/home.jpg\" class=\"sale-img\" />\n        <div class=\"div-sale-desc\">\n          <ion-label class=\"lbl-sale-title\">Apple Macbook Pro with Touch Bar</ion-label>\n          <ion-label class=\"lbl-sale-old\">$ 2,000</ion-label>\n          <ion-label class=\"lbl-sale-new\" color=\"tertiary\">$ 1,300</ion-label>\n          <ion-label class=\"lbl-sale-rating\">\n            <ion-icon name=\"star\" class=\"icon-rating\"></ion-icon>(56)\n          </ion-label>\n          <ion-label class=\"lbl-sale-location\">\n            <ion-icon name=\"pin\"></ion-icon>Ahmedabad\n          </ion-label>\n          <ion-label class=\"lbl-sale-stock\">9 Available</ion-label>\n        </div>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"sale-row\">\n    <ion-col class=\"sale-col\">\n      <ion-card class=\"sale-card\">\n        <img src=\"../../assets/img/home.jpg\" class=\"sale-img\" />\n        <div class=\"div-sale-desc\">\n          <ion-label class=\"lbl-sale-title\">Apple Macbook Pro with Touch Bar</ion-label>\n          <ion-label class=\"lbl-sale-old\">$ 2,000</ion-label>\n          <ion-label class=\"lbl-sale-new\" color=\"tertiary\">$ 1,300</ion-label>\n          <ion-label class=\"lbl-sale-rating\">\n            <ion-icon name=\"star\" class=\"icon-rating\"></ion-icon>(56)\n          </ion-label>\n          <ion-label class=\"lbl-sale-location\">\n            <ion-icon name=\"pin\"></ion-icon>Ahmedabad\n          </ion-label>\n          <ion-label class=\"lbl-sale-stock\">9 Available</ion-label>\n        </div>\n      </ion-card>\n    </ion-col>\n    <ion-col class=\"sale-col\">\n      <ion-card class=\"sale-card\">\n        <img src=\"../../assets/img/home.jpg\" class=\"sale-img\" />\n        <div class=\"div-sale-desc\">\n          <ion-label class=\"lbl-sale-title\">Apple Macbook Pro with Touch Bar</ion-label>\n          <ion-label class=\"lbl-sale-old\">$ 2,000</ion-label>\n          <ion-label class=\"lbl-sale-new\" color=\"tertiary\">$ 1,300</ion-label>\n          <ion-label class=\"lbl-sale-rating\">\n            <ion-icon name=\"star\" class=\"icon-rating\"></ion-icon>(56)\n          </ion-label>\n          <ion-label class=\"lbl-sale-location\">\n            <ion-icon name=\"pin\"></ion-icon>Ahmedabad\n          </ion-label>\n          <ion-label class=\"lbl-sale-stock\">9 Available</ion-label>\n        </div>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/sale/sale.page.scss":
/*!*************************************!*\
  !*** ./src/app/sale/sale.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-sale {\n  height: 220px;\n  width: 100%;\n  margin: 0px;\n  border-radius: 0px; }\n  .card-sale .img-sale {\n    height: 220px;\n    width: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n  .lbl-sale {\n  display: block;\n  text-align: center;\n  padding: 10px 0px 5px 0px; }\n  .sale-row .sale-col .sale-card {\n  margin: 0px;\n  border-radius: 0px;\n  box-shadow: 0px 0px 4px 0px #ccc;\n  height: 300px;\n  width: 100%; }\n  .sale-row .sale-col .sale-card .sale-img {\n    height: 150px;\n    width: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n  .sale-row .sale-col .sale-card .div-sale-desc {\n    background: #fff;\n    height: 150px;\n    width: 100%;\n    padding: 10px 8px;\n    text-align: left; }\n  .sale-row .sale-col .sale-card .div-sale-desc .lbl-sale-title {\n      display: block;\n      font-size: 11px;\n      font-weight: bold;\n      color: #000; }\n  .sale-row .sale-col .sale-card .div-sale-desc .lbl-sale-old {\n      display: block;\n      font-size: 11px;\n      color: grey;\n      padding: 2px 0px;\n      text-decoration: line-through; }\n  .sale-row .sale-col .sale-card .div-sale-desc .lbl-sale-new {\n      display: block;\n      font-size: 12px;\n      font-weight: bold;\n      padding: 1px 0px; }\n  .sale-row .sale-col .sale-card .div-sale-desc .lbl-sale-rating {\n      display: block;\n      font-size: 11px;\n      color: grey;\n      padding: 1px 0px; }\n  .sale-row .sale-col .sale-card .div-sale-desc .lbl-sale-rating .icon-rating {\n        color: orange; }\n  .sale-row .sale-col .sale-card .div-sale-desc .lbl-sale-location {\n      display: block;\n      font-size: 11px;\n      color: grey;\n      padding: 2px 0px; }\n  .sale-row .sale-col .sale-card .div-sale-desc .lbl-sale-stock {\n      display: block;\n      font-size: 11px;\n      font-weight: bold;\n      color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9OUmVDb20vc3JjL2FwcC9zYWxlL3NhbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7RUFKdEI7SUFPUSxhQUFhO0lBQ2IsV0FBVztJQUNYLG9CQUFpQjtPQUFqQixpQkFBaUIsRUFBQTtFQUl6QjtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7RUFHN0I7RUFHWSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsV0FBVyxFQUFBO0VBUHZCO0lBVWMsYUFBYTtJQUNiLFdBQVc7SUFDWCxvQkFBaUI7T0FBakIsaUJBQWlCLEVBQUE7RUFaL0I7SUFlYyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7RUFuQjlCO01Bc0JnQixjQUFjO01BQ2QsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixXQUFXLEVBQUE7RUF6QjNCO01BNEJnQixjQUFjO01BQ2QsZUFBZTtNQUNmLFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsNkJBQTZCLEVBQUE7RUFoQzdDO01BbUNnQixjQUFjO01BQ2QsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixnQkFBZ0IsRUFBQTtFQXRDaEM7TUF5Q2dCLGNBQWM7TUFDZCxlQUFlO01BQ2YsV0FBVztNQUNYLGdCQUFnQixFQUFBO0VBNUNoQztRQStDa0IsYUFBYSxFQUFBO0VBL0MvQjtNQW1EZ0IsY0FBYztNQUNkLGVBQWU7TUFDZixXQUFXO01BQ1gsZ0JBQWdCLEVBQUE7RUF0RGhDO01BeURnQixjQUFjO01BQ2QsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zYWxlL3NhbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtc2FsZXtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG5cclxuICAgIC5pbWctc2FsZXtcclxuICAgICAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGJsLXNhbGV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4IDVweCAwcHg7XHJcbn1cclxuXHJcbi5zYWxlLXJvd3tcclxuICAgIC5zYWxlLWNvbHtcclxuICAgICAgICAuc2FsZS1jYXJke1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAwcHggI2NjYztcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgICAgICAgICAgIC5zYWxlLWltZ3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kaXYtc2FsZS1kZXNje1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDhweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIFxyXG4gICAgICAgICAgICAgIC5sYmwtc2FsZS10aXRsZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmxibC1zYWxlLW9sZHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5sYmwtc2FsZS1uZXd7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXB4IDBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmxibC1zYWxlLXJhdGluZ3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHggMHB4O1xyXG4gIFxyXG4gICAgICAgICAgICAgICAgLmljb24tcmF0aW5ne1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubGJsLXNhbGUtbG9jYXRpb257XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmxibC1zYWxlLXN0b2Nre1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/sale/sale.page.ts":
/*!***********************************!*\
  !*** ./src/app/sale/sale.page.ts ***!
  \***********************************/
/*! exports provided: SalePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalePage", function() { return SalePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");




var SalePage = /** @class */ (function () {
    function SalePage(navCtrl, statusBar, alertCtrl) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.alertCtrl = alertCtrl;
    }
    SalePage.prototype.ngOnInit = function () {
    };
    SalePage.prototype.ionViewWillEnter = function () {
        this.statusBar.overlaysWebView(false);
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    SalePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    SalePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sale',
            template: __webpack_require__(/*! ./sale.page.html */ "./src/app/sale/sale.page.html"),
            styles: [__webpack_require__(/*! ./sale.page.scss */ "./src/app/sale/sale.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], SalePage);
    return SalePage;
}());



/***/ })

}]);
//# sourceMappingURL=sale-sale-module.js.map