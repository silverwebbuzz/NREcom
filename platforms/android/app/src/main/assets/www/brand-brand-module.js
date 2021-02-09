(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brand-brand-module"],{

/***/ "./src/app/brand/brand.module.ts":
/*!***************************************!*\
  !*** ./src/app/brand/brand.module.ts ***!
  \***************************************/
/*! exports provided: BrandPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandPageModule", function() { return BrandPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _brand_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./brand.page */ "./src/app/brand/brand.page.ts");







var routes = [
    {
        path: '',
        component: _brand_page__WEBPACK_IMPORTED_MODULE_6__["BrandPage"]
    }
];
var BrandPageModule = /** @class */ (function () {
    function BrandPageModule() {
    }
    BrandPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_brand_page__WEBPACK_IMPORTED_MODULE_6__["BrandPage"]]
        })
    ], BrandPageModule);
    return BrandPageModule;
}());



/***/ }),

/***/ "./src/app/brand/brand.page.html":
/*!***************************************!*\
  !*** ./src/app/brand/brand.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title color=\"tertiary\" class=\"lbl-head-title\">Category Brand</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"tertiary\" routerLink=\"/search\">\n        <ion-icon name=\"search\" size=\"large\" mode=\"md\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"card-cat\" routerLink=\"/product\">\n    <img src=\"../../assets/img/home.jpg\" class=\"img-cat\" />\n    <ion-label class=\"lbl-txt\">Category Title</ion-label>\n  </ion-card>\n  <ion-card class=\"card-cat\">\n    <img src=\"../../assets/img/home.jpg\" class=\"img-cat\" />\n    <ion-label class=\"lbl-txt\">Category Title</ion-label>\n  </ion-card>\n  <ion-card class=\"card-cat\">\n    <img src=\"../../assets/img/home.jpg\" class=\"img-cat\" />\n    <ion-label class=\"lbl-txt\">Category Title</ion-label>\n  </ion-card>\n  <ion-card class=\"card-cat\">\n    <img src=\"../../assets/img/home.jpg\" class=\"img-cat\" />\n    <ion-label class=\"lbl-txt\">Category Title</ion-label>\n  </ion-card>\n  <ion-card class=\"card-cat\">\n    <img src=\"../../assets/img/home.jpg\" class=\"img-cat\" />\n    <ion-label class=\"lbl-txt\">Category Title</ion-label>\n  </ion-card>\n  <ion-card class=\"card-cat\">\n    <img src=\"../../assets/img/home.jpg\" class=\"img-cat\" />\n    <ion-label class=\"lbl-txt\">Category Title</ion-label>\n  </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/brand/brand.page.scss":
/*!***************************************!*\
  !*** ./src/app/brand/brand.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-cat {\n  margin: 10px;\n  height: 150px; }\n  .card-cat .img-cat {\n    height: 150px;\n    -o-object-fit: cover;\n       object-fit: cover; }\n  .card-cat .lbl-txt {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 100%;\n    text-align: center;\n    font-weight: bolder;\n    font-size: 26px;\n    color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9OUmVDb20vc3JjL2FwcC9icmFuZC9icmFuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osYUFBYSxFQUFBO0VBRmpCO0lBS1EsYUFBYTtJQUNiLG9CQUFpQjtPQUFqQixpQkFBaUIsRUFBQTtFQU56QjtJQVNRLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9icmFuZC9icmFuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jYXR7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG5cclxuICAgIC5pbWctY2F0e1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbiAgICAubGJsLXR4dHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/brand/brand.page.ts":
/*!*************************************!*\
  !*** ./src/app/brand/brand.page.ts ***!
  \*************************************/
/*! exports provided: BrandPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandPage", function() { return BrandPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");




var BrandPage = /** @class */ (function () {
    function BrandPage(navCtrl, statusBar) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
    }
    BrandPage.prototype.ngOnInit = function () {
    };
    BrandPage.prototype.ionViewWillEnter = function () {
        this.statusBar.overlaysWebView(false);
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    BrandPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    BrandPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brand',
            template: __webpack_require__(/*! ./brand.page.html */ "./src/app/brand/brand.page.html"),
            styles: [__webpack_require__(/*! ./brand.page.scss */ "./src/app/brand/brand.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
    ], BrandPage);
    return BrandPage;
}());



/***/ })

}]);
//# sourceMappingURL=brand-brand-module.js.map