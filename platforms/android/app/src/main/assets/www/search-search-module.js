(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.page */ "./src/app/search/search.page.ts");







var routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]
    }
];
var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());



/***/ }),

/***/ "./src/app/search/search.page.html":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-button color=\"tertiary\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"tertiary\" class=\"lbl-head-title\">Search</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-label class=\"lbl-head\">Hello, i am NReCom. What would you like to search ?</ion-label>\n\n  <ion-searchbar placeholder=\"Find you want\" class=\"search\"></ion-searchbar>\n\n  <ion-label class=\"lbl-divider\">Popular Keyword</ion-label>\n\n  <ion-slides [options]=\"slideOpts\" class=\"slides\">\n    <ion-slide class=\"slide\">\n      <ion-chip>Iphone X</ion-chip>\n    </ion-slide>\n    <ion-slide class=\"slide\">\n      <ion-chip>Samsung</ion-chip>\n    </ion-slide>\n    <ion-slide class=\"slide\">\n      <ion-chip>Note 9</ion-chip>\n    </ion-slide>\n    <ion-slide class=\"slide\">\n      <ion-chip>Watch</ion-chip>\n    </ion-slide>\n    <ion-slide class=\"slide\">\n      <ion-chip>Shoes</ion-chip>\n    </ion-slide>\n    <ion-slide class=\"slide\">\n      <ion-chip>Laptops</ion-chip>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-slides [options]=\"slideOpts\" class=\"slides\">\n    <ion-slide class=\"slide\">\n      <ion-chip>Mobiles</ion-chip>\n    </ion-slide>\n    <ion-slide class=\"slide\">\n      <ion-chip>Cloths</ion-chip>\n    </ion-slide>\n    <ion-slide class=\"slide\">\n      <ion-chip>Electronics</ion-chip>\n    </ion-slide>\n    <ion-slide class=\"slide\">\n      <ion-chip>Furnitures</ion-chip>\n    </ion-slide>\n    <ion-slide class=\"slide\">\n      <ion-chip>Shoes</ion-chip>\n    </ion-slide>\n    <ion-slide class=\"slide\">\n      <ion-chip>Laptops</ion-chip>\n    </ion-slide>\n  </ion-slides>\n  \n  <ion-label class=\"lbl-divider extra-spc\">Favorite</ion-label>\n\n  <ion-slides [options]=\"slideOptsProd\" class=\"slidesProd\">\n    <ion-slide class=\"slideProd\">\n      <ion-card class=\"card-prod\">\n      <img src=\"../../assets/img/home.jpg\" class=\"img-cardProd\" />\n      <ion-label class=\"lbl-title\">Shoes</ion-label>\n      <ion-label class=\"lbl-price\">$ 200</ion-label>\n      <ion-label class=\"lbl-rating\">4.8\n        <ion-icon name=\"star\"></ion-icon>\n      923 Sale\n      </ion-label>\n      </ion-card>\n    </ion-slide>\n    <ion-slide class=\"slideProd\">\n        <ion-card class=\"card-prod\">\n            <img src=\"../../assets/img/sea.jpg\" class=\"img-cardProd\" />\n            <ion-label class=\"lbl-title\">Shoes</ion-label>\n            <ion-label class=\"lbl-price\">$ 200</ion-label>\n            <ion-label class=\"lbl-rating\">4.8\n              <ion-icon name=\"star\"></ion-icon>\n            923 Sale\n            </ion-label>\n            </ion-card>\n    </ion-slide>\n    <ion-slide class=\"slideProd\">\n        <ion-card class=\"card-prod\">\n            <img src=\"../../assets/img/table.jpg\" class=\"img-cardProd\" />\n            <ion-label class=\"lbl-title\">Shoes</ion-label>\n            <ion-label class=\"lbl-price\">$ 200</ion-label>\n            <ion-label class=\"lbl-rating\">4.8\n              <ion-icon name=\"star\"></ion-icon>\n            923 Sale\n            </ion-label>\n            </ion-card>\n    </ion-slide>\n    <ion-slide class=\"slideProd\">\n        <ion-card class=\"card-prod\">\n            <img src=\"../../assets/img/home.jpg\" class=\"img-cardProd\" />\n            <ion-label class=\"lbl-title\">Shoes</ion-label>\n            <ion-label class=\"lbl-price\">$ 200</ion-label>\n            <ion-label class=\"lbl-rating\">4.8\n              <ion-icon name=\"star\"></ion-icon>\n            923 Sale\n            </ion-label>\n            </ion-card>\n    </ion-slide>\n    <ion-slide class=\"slideProd\">\n        <ion-card class=\"card-prod\">\n            <img src=\"../../assets/img/sea.jpg\" class=\"img-cardProd\" />\n            <ion-label class=\"lbl-title\">Shoes</ion-label>\n            <ion-label class=\"lbl-price\">$ 200</ion-label>\n            <ion-label class=\"lbl-rating\">4.8\n              <ion-icon name=\"star\"></ion-icon>\n            923 Sale\n            </ion-label>\n            </ion-card>\n    </ion-slide>\n    <ion-slide class=\"slideProd\">\n        <ion-card class=\"card-prod\">\n            <img src=\"../../assets/img/table.jpg\" class=\"img-cardProd\" />\n            <ion-label class=\"lbl-title\">Shoes</ion-label>\n            <ion-label class=\"lbl-price\">$ 200</ion-label>\n            <ion-label class=\"lbl-rating\">4.8\n              <ion-icon name=\"star\"></ion-icon>\n            923 Sale\n            </ion-label>\n            </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/search/search.page.scss":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lbl-head {\n  font-weight: bold;\n  font-size: 28px;\n  color: grey;\n  display: block;\n  padding: 24px 16px 24px 16px; }\n\n.search {\n  --background: #fff;\n  padding-left: 16px;\n  padding-right: 16px; }\n\n.lbl-divider {\n  color: #ccc;\n  font-size: 16px;\n  padding: 16px 0px 16px 16px;\n  display: block; }\n\n.extra-spc {\n  padding-top: 11px; }\n\n.slides {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-bottom: 5px; }\n\n.slides .slide {\n    width: auto; }\n\n.slides .slide ion-chip {\n      background: #fff;\n      box-shadow: 0px 0px 4px 4px #f1f1f1;\n      padding-left: 16px;\n      padding-right: 16px; }\n\n.slidesProd {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-bottom: 10px; }\n\n.slidesProd .slideProd {\n    height: 210px;\n    width: 150px; }\n\n.slidesProd .slideProd .card-prod {\n      margin: 0px;\n      border-radius: 5px;\n      box-shadow: 0px 0px 4px 0px #ddd;\n      height: 210px; }\n\n.slidesProd .slideProd .card-prod .img-cardProd {\n        height: 135px;\n        width: 150px;\n        -o-object-fit: cover;\n           object-fit: cover; }\n\n.slidesProd .slideProd .card-prod .lbl-title {\n        display: block;\n        color: grey;\n        font-size: 14px;\n        padding: 2px 10px;\n        text-align: left; }\n\n.slidesProd .slideProd .card-prod .lbl-price {\n        display: block;\n        font-size: 13px;\n        font-weight: bold;\n        color: #000;\n        padding: 2px 10px;\n        text-align: left; }\n\n.slidesProd .slideProd .card-prod .lbl-rating {\n        display: block;\n        color: #ccc;\n        font-size: 12px;\n        padding: 2px 10px;\n        text-align: left;\n        font-weight: bold; }\n\n.slidesProd .slideProd .card-prod .lbl-rating ion-icon {\n          color: orange; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9OUmVDb20vc3JjL2FwcC9zZWFyY2gvc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCw0QkFBNEIsRUFBQTs7QUFFaEM7RUFDSSxrQkFBYTtFQUViLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxXQUFXO0VBQ1gsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFIdkI7SUFNTSxXQUFXLEVBQUE7O0FBTmpCO01BU1UsZ0JBQWdCO01BQ2hCLG1DQUFtQztNQUNuQyxrQkFBa0I7TUFDbEIsbUJBQW1CLEVBQUE7O0FBSzdCO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0IsRUFBQTs7QUFIeEI7SUFNTSxhQUFhO0lBQ2IsWUFBWSxFQUFBOztBQVBsQjtNQVVVLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsZ0NBQWdDO01BQ2hDLGFBQWEsRUFBQTs7QUFidkI7UUFnQlksYUFBYTtRQUNiLFlBQVk7UUFDWixvQkFBaUI7V0FBakIsaUJBQWlCLEVBQUE7O0FBbEI3QjtRQXFCWSxjQUFjO1FBQ2QsV0FBVztRQUNYLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsZ0JBQWdCLEVBQUE7O0FBekI1QjtRQTRCWSxjQUFjO1FBQ2QsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGdCQUFnQixFQUFBOztBQWpDNUI7UUFvQ1ksY0FBYztRQUNkLFdBQVc7UUFDWCxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixpQkFBaUIsRUFBQTs7QUF6QzdCO1VBNENnQixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYmwtaGVhZHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDI0cHggMTZweCAyNHB4IDE2cHg7XHJcbn1cclxuLnNlYXJjaHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC8vcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG59XHJcbi5sYmwtZGl2aWRlcntcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMTZweCAwcHggMTZweCAxNnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmV4dHJhLXNwY3tcclxuICAgIHBhZGRpbmctdG9wOiAxMXB4O1xyXG59XHJcbi5zbGlkZXN7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICBcclxuICAgIC5zbGlkZXtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcblxyXG4gICAgICBpb24tY2hpcHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCA0cHggI2YxZjFmMTtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNsaWRlc1Byb2R7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgXHJcbiAgICAuc2xpZGVQcm9ke1xyXG4gICAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcblxyXG4gICAgICAuY2FyZC1wcm9ke1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAwcHggI2RkZDtcclxuICAgICAgICAgIGhlaWdodDogMjEwcHg7XHJcblxyXG4gICAgICAgIC5pbWctY2FyZFByb2R7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTM1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGJsLXRpdGxle1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGJsLXByaWNle1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxibC1yYXRpbmd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBjb2xvcjogI2NjYztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHggMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/search/search.page.ts":
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");




var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, statusBar) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.slideOpts = {
            slidesPerView: 'auto',
            spaceBetween: 0,
        };
        this.slideOptsProd = {
            slidesPerView: 2.4,
            spaceBetween: 15,
        };
    }
    SearchPage.prototype.ngOnInit = function () {
    };
    SearchPage.prototype.ionViewWillEnter = function () {
        this.statusBar.overlaysWebView(false);
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    SearchPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.page.html */ "./src/app/search/search.page.html"),
            styles: [__webpack_require__(/*! ./search.page.scss */ "./src/app/search/search.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
    ], SearchPage);
    return SearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=search-search-module.js.map