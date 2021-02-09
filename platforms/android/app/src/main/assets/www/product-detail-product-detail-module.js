(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-detail-product-detail-module"],{

/***/ "./src/app/product-detail/product-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/product-detail/product-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: ProductDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageModule", function() { return ProductDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-detail.page */ "./src/app/product-detail/product-detail.page.ts");







var routes = [
    {
        path: '',
        component: _product_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailPage"]
    }
];
var ProductDetailPageModule = /** @class */ (function () {
    function ProductDetailPageModule() {
    }
    ProductDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_product_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailPage"]]
        })
    ], ProductDetailPageModule);
    return ProductDetailPageModule;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.page.html":
/*!*********************************************************!*\
  !*** ./src/app/product-detail/product-detail.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-button color=\"tertiary\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"tertiary\" class=\"lbl-head-title\">Product Detail</ion-title>\n    <ion-buttons slot=\"end\">\n      <div class=\"notify\">0</div>\n      <ion-button class=\"icon-search\" routerLink=\"/tabs/cart\">\n        <ion-icon name=\"cart\" mode=\"md\" size=\"large\" color=\"tertiary\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"page-details\">\n\n  <ion-slides pager=\"true\" [options]=\"slideOptsMain\" class=\"main-slides\">\n    <ion-slide class=\"main-slide\">\n      <img src=\"../../assets/img/home.jpg\" class=\"main-img\" />\n    </ion-slide>\n    <ion-slide class=\"main-slide\">\n      <img src=\"../../assets/img/sea.jpg\" class=\"main-img\" />\n    </ion-slide>\n    <ion-slide class=\"main-slide\">\n      <img src=\"../../assets/img/table.jpg\" class=\"main-img\" />\n    </ion-slide>\n  </ion-slides>\n\n  <ion-label class=\"lbl-name\">Product Title</ion-label>\n  <ion-label class=\"lbl-price\">$200</ion-label>\n\n  <!-- <div class=\"hr\"></div> -->\n\n  <ion-row class=\"row-star-sales\">\n    <ion-col>\n      <ion-badge color=\"success\" class=\"star\">4.2\n        <ion-icon name=\"star\"></ion-icon>\n      </ion-badge>\n    </ion-col>\n    <ion-col>\n      <ion-label class=\"lbl-sales\">892 Sale</ion-label>\n    </ion-col>\n  </ion-row>\n\n  <ion-card class=\"card-size-clr\">\n    <ion-label class=\"lbl-select\">Size</ion-label>\n    <div class=\"roundShape\">S</div>\n    <div class=\"roundShape\">M</div>\n    <div class=\"roundShape\">L</div>\n    <div class=\"roundShape\">XL</div>\n    <div class=\"hr\"></div>\n    <ion-label class=\"lbl-select\">Color</ion-label>\n    <div class=\"roundShape dark\"></div>\n    <div class=\"roundShape light\"></div>\n    <div class=\"roundShape primary\"></div>\n  </ion-card>\n\n  <ion-card class=\"card-desc\">\n    <ion-label class=\"lbl-desc\">Description</ion-label>\n    <ion-label class=\"desc\">\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n    </ion-label>\n    <ion-label class=\"lbl-more\">View More</ion-label>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/product-detail/product-detail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/product-detail/product-detail.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notify {\n  position: absolute;\n  top: 0;\n  z-index: 1;\n  height: 22px;\n  width: 22px;\n  font-size: 12px;\n  line-height: 1.8;\n  background: red;\n  color: white;\n  border-radius: 50%;\n  text-align: center; }\n\n.page-details {\n  --background: #f1f1f1; }\n\n.page-details .main-slides .main-slide {\n    height: 180px;\n    width: 100% !important; }\n\n.page-details .main-slides .main-slide .main-img {\n      height: 200px;\n      width: 100%;\n      -o-object-fit: cover;\n         object-fit: cover; }\n\n.page-details .lbl-name {\n    display: block;\n    font-weight: bold;\n    padding-left: 16px;\n    padding-top: 8px;\n    background: #fff; }\n\n.page-details .lbl-price {\n    display: block;\n    font-weight: bold;\n    padding-left: 16px;\n    padding-bottom: 8px;\n    background: #fff; }\n\n.page-details .hr {\n    border: 0.3px solid #f1f1f1;\n    margin-top: 10px; }\n\n.page-details .row-star-sales {\n    border-top: 0.3px solid #f1f1f1;\n    background: #fff;\n    padding-top: 5px; }\n\n.page-details .row-star-sales .star {\n      font-size: 14px;\n      margin-right: 8px;\n      margin-left: 8px; }\n\n.page-details .row-star-sales .lbl-sales {\n      text-align: right;\n      color: gray;\n      display: block;\n      margin-right: 8px; }\n\n.page-details .card-size-clr {\n    margin: 0px;\n    border-radius: 0px;\n    margin-top: 8px;\n    margin-bottom: 8px;\n    box-shadow: 0px 0px;\n    padding-left: 16px;\n    padding-right: 16px;\n    padding-bottom: 8px;\n    background: #fff; }\n\n.page-details .card-size-clr .lbl-select {\n      display: block;\n      font-weight: bold;\n      color: grey;\n      padding: 8px 0px 8px 0px; }\n\n.page-details .card-size-clr .roundShape {\n      display: inline-block;\n      text-align: center;\n      line-height: 36px;\n      margin-right: 10px;\n      border-radius: 50%;\n      border: 1px solid #ccc;\n      height: 40px;\n      width: 40px; }\n\n.page-details .light {\n    background: var(--ion-color-light); }\n\n.page-details .dark {\n    background: var(--ion-color-dark); }\n\n.page-details .primary {\n    background: var(--ion-color-primary); }\n\n.page-details .card-desc {\n    margin: 0px;\n    border-radius: 0px;\n    margin-top: 8px;\n    margin-bottom: 8px;\n    box-shadow: 0px 0px;\n    padding-left: 16px;\n    padding-right: 16px;\n    padding-bottom: 8px;\n    background: #fff; }\n\n.page-details .card-desc .lbl-desc {\n      display: block;\n      font-weight: bold;\n      color: grey;\n      padding: 8px 0px 8px 0px; }\n\n.page-details .card-desc .desc {\n      display: block;\n      font-size: 12px;\n      color: var(--ion-color-medium-tint); }\n\n.page-details .card-desc .lbl-more {\n      display: block;\n      text-align: center;\n      color: var(--ion-color-tertiary); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9OUmVDb20vc3JjL2FwcC9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0kscUJBQWEsRUFBQTs7QUFEakI7SUFLUSxhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7O0FBTjlCO01BU1ksYUFBYTtNQUNiLFdBQVc7TUFDWCxvQkFBaUI7U0FBakIsaUJBQWlCLEVBQUE7O0FBWDdCO0lBaUJRLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTs7QUFyQnhCO0lBd0JRLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0IsRUFBQTs7QUE1QnhCO0lBZ0NRLDJCQUEyQjtJQUMzQixnQkFBZ0IsRUFBQTs7QUFqQ3hCO0lBcUNRLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUE7O0FBdkN4QjtNQTBDWSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGdCQUFnQixFQUFBOztBQTVDNUI7TUErQ1ksaUJBQWlCO01BQ2pCLFdBQVc7TUFDWCxjQUFjO01BQ2QsaUJBQWlCLEVBQUE7O0FBbEQ3QjtJQXVEUSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBR25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQixFQUFBOztBQWpFeEI7TUFvRVksY0FBYztNQUNkLGlCQUFpQjtNQUNqQixXQUFXO01BQ1gsd0JBQXdCLEVBQUE7O0FBdkVwQztNQTBFWSxxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLHNCQUFzQjtNQUN0QixZQUFZO01BQ1osV0FBVyxFQUFBOztBQWpGdkI7SUFxRlEsa0NBQWtDLEVBQUE7O0FBckYxQztJQXdGUSxpQ0FBaUMsRUFBQTs7QUF4RnpDO0lBMkZRLG9DQUFvQyxFQUFBOztBQTNGNUM7SUErRlEsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQkFBZ0IsRUFBQTs7QUF2R3hCO01BMEdZLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsV0FBVztNQUNYLHdCQUF3QixFQUFBOztBQTdHcEM7TUFnSFksY0FBYztNQUNkLGVBQWU7TUFDZixtQ0FBbUMsRUFBQTs7QUFsSC9DO01BcUhZLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsZ0NBQWdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZ5e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBhZ2UtZGV0YWlsc3tcclxuICAgIC0tYmFja2dyb3VuZDogI2YxZjFmMTtcclxuXHJcbiAgICAubWFpbi1zbGlkZXN7XHJcbiAgICAgICAgLm1haW4tc2xpZGV7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAubWFpbi1pbWd7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICAubGJsLW5hbWV7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIH1cclxuICAgIC5sYmwtcHJpY2V7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICAuaHJ7XHJcbiAgICAgICAgYm9yZGVyOiAwLjNweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnJvdy1zdGFyLXNhbGVze1xyXG4gICAgICAgIGJvcmRlci10b3A6IDAuM3B4IHNvbGlkICNmMWYxZjE7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG5cclxuICAgICAgICAuc3RhcntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxibC1zYWxlc3tcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXNpemUtY2xye1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHg7XHJcbiAgICAgICAgLy8gYm9yZGVyLXRvcDogOHB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxuICAgICAgICAubGJsLXNlbGVjdHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDBweCA4cHggMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucm91bmRTaGFwZXtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubGlnaHR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIH1cclxuICAgIC5kYXJre1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIH1cclxuICAgIC5wcmltYXJ5e1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1kZXNje1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxuICAgICAgICAubGJsLWRlc2N7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlc2N7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGJsLW1vcmV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/product-detail/product-detail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/product-detail/product-detail.page.ts ***!
  \*******************************************************/
/*! exports provided: ProductDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPage", function() { return ProductDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");




var ProductDetailPage = /** @class */ (function () {
    function ProductDetailPage(actionSheetCtrl, statusBar, navCtrl) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.statusBar = statusBar;
        this.navCtrl = navCtrl;
        this.slideOptsMain = {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 1500
            }
        };
    }
    ProductDetailPage.prototype.ngOnInit = function () {
    };
    ProductDetailPage.prototype.ionViewWillEnter = function () {
        this.statusBar.overlaysWebView(false);
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    ProductDetailPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ProductDetailPage.prototype.viewDesc = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            mode: 'md',
                            header: 'Lorem ipsum dolor sit, sed consectetur adipiscing.Dolor sit amet, sed consectetur adipiscing.',
                            buttons: [{
                                    text: 'Cancel',
                                    //icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                },
                            ]
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
    ProductDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.page.html */ "./src/app/product-detail/product-detail.page.html"),
            styles: [__webpack_require__(/*! ./product-detail.page.scss */ "./src/app/product-detail/product-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], ProductDetailPage);
    return ProductDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=product-detail-product-detail-module.js.map