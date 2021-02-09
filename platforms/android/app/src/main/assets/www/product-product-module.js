(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"],{

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageModule", function() { return ProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product.page */ "./src/app/product/product.page.ts");







var routes = [
    {
        path: '',
        component: _product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"]
    }
];
var ProductPageModule = /** @class */ (function () {
    function ProductPageModule() {
    }
    ProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"]]
        })
    ], ProductPageModule);
    return ProductPageModule;
}());



/***/ }),

/***/ "./src/app/product/product.page.html":
/*!*******************************************!*\
  !*** ./src/app/product/product.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-button color=\"tertiary\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"tertiary\" class=\"lbl-head-title\">Products</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"icon-search\" routerLink=\"/message\">\n        <ion-icon name=\"text\" color=\"tertiary\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <!-- <div class=\"notify\">0</div> -->\n      <ion-button class=\"icon-search\">\n        <ion-icon name=\"notifications\" color=\"tertiary\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"page-product\">\n\n  <ion-card class=\"card-main\">\n    <img src=\"../../assets/img/home.jpg\" class=\"img-main\" />\n  </ion-card>\n\n  <ion-label class=\"lbl-desc\">\n    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\n    type specimen book.\n  </ion-label>\n\n  <ion-item-divider sticky class=\"item-divider\">\n    <ion-row class=\"row-sticky\">\n      <ion-col class=\"col-sticky border-R\">\n        <ion-button fill=\"clear\" expand=\"full\" size=\"large\" class=\"btn\" (click)=\"sortSheet()\">\n          <ion-icon name=\"arrow-dropdown\" mode=\"md\"></ion-icon>\n          Sort\n        </ion-button>\n      </ion-col>\n      <ion-col class=\"col-sticky border-L\">\n        <ion-button fill=\"clear\" expand=\"full\" size=\"large\" class=\"btn\" (click)=\"filterSheet()\">\n          <ion-icon name=\"arrow-dropdown\" mode=\"md\"></ion-icon>\n          Filter\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n\n  <ion-row class=\"row-recomend\">\n    <ion-col size=\"6\" class=\"col-recomend\">\n      <ion-card class=\"card-recomend\" routerLink=\"/product-detail\">\n        <img src=\"../../assets/img/home.jpg\" class=\"img-recomend\">\n        <ion-label class=\"lbl-cat-title\">Cat Title</ion-label>\n        <ion-label class=\"lbl-price\">$ 10</ion-label>\n        <ion-row class=\"row-line\">\n          <ion-col class=\"col-line\">\n            <ion-label class=\"lbl-line\">\n              4.3\n              <ion-icon name=\"star\" class=\"rating\"></ion-icon>\n            </ion-label>\n          </ion-col>\n          <ion-col class=\"col-line\">\n            <ion-label class=\"lbl-line-right\">892 sale</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"6\" class=\"col-recomend\">\n      <ion-card class=\"card-recomend\">\n        <img src=\"../../assets/img/home.jpg\" class=\"img-recomend\">\n        <ion-label class=\"lbl-cat-title\">Cat Title</ion-label>\n        <ion-label class=\"lbl-price\">$ 10</ion-label>\n        <ion-row class=\"row-line\">\n          <ion-col class=\"col-line\">\n            <ion-label class=\"lbl-line\">\n              4.3\n              <ion-icon name=\"star\" class=\"rating\"></ion-icon>\n            </ion-label>\n          </ion-col>\n          <ion-col class=\"col-line\">\n            <ion-label class=\"lbl-line-right\">892 sale</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"row-recomend\">\n    <ion-col size=\"6\" class=\"col-recomend\">\n      <ion-card class=\"card-recomend\" routerLink=\"/product-detail\">\n        <img src=\"../../assets/img/home.jpg\" class=\"img-recomend\">\n        <ion-label class=\"lbl-cat-title\">Cat Title</ion-label>\n        <ion-label class=\"lbl-price\">$ 10</ion-label>\n        <ion-row class=\"row-line\">\n          <ion-col class=\"col-line\">\n            <ion-label class=\"lbl-line\">\n              4.3\n              <ion-icon name=\"star\" class=\"rating\"></ion-icon>\n            </ion-label>\n          </ion-col>\n          <ion-col class=\"col-line\">\n            <ion-label class=\"lbl-line-right\">892 sale</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"6\" class=\"col-recomend\">\n      <ion-card class=\"card-recomend\">\n        <img src=\"../../assets/img/home.jpg\" class=\"img-recomend\">\n        <ion-label class=\"lbl-cat-title\">Cat Title</ion-label>\n        <ion-label class=\"lbl-price\">$ 10</ion-label>\n        <ion-row class=\"row-line\">\n          <ion-col class=\"col-line\">\n            <ion-label class=\"lbl-line\">\n              4.3\n              <ion-icon name=\"star\" class=\"rating\"></ion-icon>\n            </ion-label>\n          </ion-col>\n          <ion-col class=\"col-line\">\n            <ion-label class=\"lbl-line-right\">892 sale</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/product/product.page.scss":
/*!*******************************************!*\
  !*** ./src/app/product/product.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-product .card-main {\n  margin: 0px;\n  border-radius: 0px;\n  box-shadow: 0px 0px; }\n  .page-product .card-main .img-main {\n    height: 200px; }\n  .page-product .lbl-desc {\n  display: block;\n  padding: 16px;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint); }\n  .page-product .item-divider {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  background: #fff;\n  box-shadow: 0px 0px 4px 0px #ccc; }\n  .page-product .item-divider .row-sticky {\n    width: 100%; }\n  .page-product .item-divider .row-sticky .col-sticky {\n      padding: 0px; }\n  .page-product .item-divider .row-sticky .col-sticky .btn {\n        margin: 0px;\n        color: var(--ion-color-dark);\n        font-weight: bold; }\n  .page-product .border-L {\n  border-left: 0.5px solid #ccc; }\n  .page-product .border-R {\n  border-right: 0.5px solid #ccc; }\n  .page-product .row-recomend {\n  padding: 5px 5px 0px 5px; }\n  .page-product .row-recomend .col-recomend {\n    padding: 0px; }\n  .page-product .row-recomend .col-recomend .card-recomend {\n      margin: 5px;\n      border-radius: 0px;\n      box-shadow: 0px 0px 4px 0px #ccc; }\n  .page-product .row-recomend .col-recomend .card-recomend .img-recomend {\n        height: 250px;\n        -o-object-fit: cover;\n           object-fit: cover; }\n  .page-product .row-recomend .col-recomend .card-recomend .lbl-cat-title {\n        display: block;\n        font-size: 14px;\n        color: var(--ion-color-medium-shade);\n        padding: 2px 8px; }\n  .page-product .row-recomend .col-recomend .card-recomend .lbl-price {\n        display: block;\n        font-size: 13px;\n        color: var(--ion-color-dark);\n        font-weight: bold;\n        padding-left: 8px; }\n  .page-product .row-recomend .col-recomend .card-recomend .row-line {\n        padding: 2px 8px; }\n  .page-product .row-recomend .col-recomend .card-recomend .row-line .col-line {\n          padding: 0px; }\n  .page-product .row-recomend .col-recomend .card-recomend .row-line .col-line .lbl-line {\n            display: block;\n            font-size: 12px;\n            font-weight: bold;\n            color: var(--ion-color-medium-tint); }\n  .page-product .row-recomend .col-recomend .card-recomend .row-line .col-line .lbl-line .rating {\n              color: orange; }\n  .page-product .row-recomend .col-recomend .card-recomend .row-line .col-line .lbl-line-right {\n            display: block;\n            font-size: 12px;\n            font-weight: bold;\n            color: var(--ion-color-medium-tint);\n            text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9OUmVDb20vc3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1EsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTtFQUwzQjtJQVFZLGFBQWEsRUFBQTtFQVJ6QjtFQVlRLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZUFBZTtFQUNmLG1DQUFtQyxFQUFBO0VBZjNDO0VBa0JRLG9CQUFnQjtFQUNoQix3QkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQyxFQUFBO0VBckJ4QztJQXdCWSxXQUFXLEVBQUE7RUF4QnZCO01BMkJnQixZQUFZLEVBQUE7RUEzQjVCO1FBNkJvQixXQUFXO1FBQ1gsNEJBQTRCO1FBQzVCLGlCQUFpQixFQUFBO0VBL0JyQztFQXFDUSw2QkFBNkIsRUFBQTtFQXJDckM7RUF3Q1EsOEJBQThCLEVBQUE7RUF4Q3RDO0VBNENRLHdCQUF3QixFQUFBO0VBNUNoQztJQStDVSxZQUFZLEVBQUE7RUEvQ3RCO01Ba0RZLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsZ0NBQWdDLEVBQUE7RUFwRDVDO1FBdURjLGFBQWE7UUFDYixvQkFBaUI7V0FBakIsaUJBQWlCLEVBQUE7RUF4RC9CO1FBMkRjLGNBQWM7UUFDZCxlQUFlO1FBQ2Ysb0NBQW9DO1FBQ3BDLGdCQUFnQixFQUFBO0VBOUQ5QjtRQWlFYyxjQUFjO1FBQ2QsZUFBZTtRQUNmLDRCQUE0QjtRQUM1QixpQkFBaUI7UUFDakIsaUJBQWlCLEVBQUE7RUFyRS9CO1FBd0VjLGdCQUFnQixFQUFBO0VBeEU5QjtVQTJFZ0IsWUFBWSxFQUFBO0VBM0U1QjtZQThFa0IsY0FBYztZQUNkLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsbUNBQW1DLEVBQUE7RUFqRnJEO2NBb0ZvQixhQUFhLEVBQUE7RUFwRmpDO1lBd0ZrQixjQUFjO1lBQ2QsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixtQ0FBbUM7WUFDbkMsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtcHJvZHVjdHtcclxuXHJcbiAgICAuY2FyZC1tYWlue1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4O1xyXG5cclxuICAgICAgICAuaW1nLW1haW57XHJcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxibC1kZXNje1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xyXG4gICAgfVxyXG4gICAgLml0ZW0tZGl2aWRlcntcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAwcHggI2NjYztcclxuXHJcbiAgICAgICAgLnJvdy1zdGlja3l7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgLmNvbC1zdGlja3l7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAuYnRue1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYm9yZGVyLUx7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDAuNXB4IHNvbGlkICNjY2M7XHJcbiAgICB9XHJcbiAgICAuYm9yZGVyLVJ7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwLjVweCBzb2xpZCAjY2NjO1xyXG4gICAgfVxyXG5cclxuICAgIC5yb3ctcmVjb21lbmR7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDVweCAwcHggNXB4OyBcclxuICAgIFxyXG4gICAgICAgIC5jb2wtcmVjb21lbmR7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBcclxuICAgICAgICAgIC5jYXJkLXJlY29tZW5ke1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAwcHggI2NjYztcclxuICAgICAgICBcclxuICAgICAgICAgICAgLmltZy1yZWNvbWVuZHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sYmwtY2F0LXRpdGxle1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGJsLXByaWNle1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yb3ctbGluZXtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAycHggOHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgLmNvbC1saW5le1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAubGJsLWxpbmV7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAucmF0aW5ne1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5sYmwtbGluZS1yaWdodHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/product/product.page.ts":
/*!*****************************************!*\
  !*** ./src/app/product/product.page.ts ***!
  \*****************************************/
/*! exports provided: ProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPage", function() { return ProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ProductPage = /** @class */ (function () {
    function ProductPage(navCtrl, statusBar, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.actionSheetCtrl = actionSheetCtrl;
    }
    ProductPage.prototype.ngOnInit = function () {
    };
    ProductPage.prototype.ionViewWillEnter = function () {
        this.statusBar.overlaysWebView(false);
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    ProductPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ProductPage.prototype.sortSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: 'SORT BY',
                            cssClass: 'headBottom',
                            mode: 'md',
                            buttons: [{
                                    text: 'Popularity',
                                    cssClass: 'btnBottom',
                                    handler: function () {
                                        console.log('Popularity clicked');
                                    }
                                }, {
                                    text: 'New',
                                    cssClass: 'btnBottom',
                                    handler: function () {
                                        console.log('New clicked');
                                    }
                                }, {
                                    text: 'Discount',
                                    cssClass: 'btnBottom',
                                    handler: function () {
                                        console.log('Discount clicked');
                                    }
                                }, {
                                    text: 'Price : High - Low',
                                    cssClass: 'btnBottom',
                                    handler: function () {
                                        console.log('High - Low clicked');
                                    }
                                }, {
                                    text: 'Price : Low - High',
                                    cssClass: 'btnBottom',
                                    handler: function () {
                                        console.log('Low - High clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductPage.prototype.filterSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: 'FILTER BY',
                            cssClass: 'headBottom',
                            mode: 'md',
                            buttons: [{
                                    text: 'Categories',
                                    cssClass: 'btnBottom',
                                    handler: function () {
                                        console.log('Categories clicked');
                                    }
                                }, {
                                    text: 'Price',
                                    cssClass: 'btnBottom',
                                    handler: function () {
                                        console.log('Price clicked');
                                    }
                                }, {
                                    text: 'Brand',
                                    cssClass: 'btnBottom',
                                    handler: function () {
                                        console.log('Brand clicked');
                                    }
                                }, {
                                    text: 'Ratings',
                                    cssClass: 'btnBottom',
                                    handler: function () {
                                        console.log('Ratings clicked');
                                    }
                                }, {
                                    text: 'Offers',
                                    cssClass: 'btnBottom',
                                    handler: function () {
                                        console.log('Offers clicked');
                                    }
                                }, {
                                    text: 'Availability',
                                    cssClass: 'btnBottom',
                                    handler: function () {
                                        console.log('Availability clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.page.html */ "./src/app/product/product.page.html"),
            styles: [__webpack_require__(/*! ./product.page.scss */ "./src/app/product/product.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]])
    ], ProductPage);
    return ProductPage;
}());



/***/ })

}]);
//# sourceMappingURL=product-product-module.js.map