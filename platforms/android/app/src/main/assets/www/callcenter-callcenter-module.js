(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["callcenter-callcenter-module"],{

/***/ "./src/app/callcenter/callcenter.module.ts":
/*!*************************************************!*\
  !*** ./src/app/callcenter/callcenter.module.ts ***!
  \*************************************************/
/*! exports provided: CallcenterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallcenterPageModule", function() { return CallcenterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _callcenter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./callcenter.page */ "./src/app/callcenter/callcenter.page.ts");







var routes = [
    {
        path: '',
        component: _callcenter_page__WEBPACK_IMPORTED_MODULE_6__["CallcenterPage"]
    }
];
var CallcenterPageModule = /** @class */ (function () {
    function CallcenterPageModule() {
    }
    CallcenterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_callcenter_page__WEBPACK_IMPORTED_MODULE_6__["CallcenterPage"]]
        })
    ], CallcenterPageModule);
    return CallcenterPageModule;
}());



/***/ }),

/***/ "./src/app/callcenter/callcenter.page.html":
/*!*************************************************!*\
  !*** ./src/app/callcenter/callcenter.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-button color=\"tertiary\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"tertiary\" class=\"lbl-head-title\">Call Center</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"empty-card\">\n    <img src=\"../../assets/img/center.jpg\" class=\"call-img\"/>\n    <ion-label class=\"lbl-title\">We're Happy to Help You!</ion-label>\n    <ion-label class=\"lbl-subtitle\">If you have complain about the product chat me</ion-label>\n    <ion-button shape=\"round\" expand=\"full\" size=\"large\" color=\"tertiary\" routerLink=\"/chat\" class=\"btn-chat\">Chat Me</ion-button>\n  </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/callcenter/callcenter.page.scss":
/*!*************************************************!*\
  !*** ./src/app/callcenter/callcenter.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".empty-card {\n  box-shadow: 0px 0px;\n  top: 50%;\n  transform: translateY(-50%);\n  margin: 0px 30px; }\n  .empty-card .call-img {\n    height: 200px;\n    width: 200px;\n    margin: 0 auto; }\n  .empty-card .lbl-title {\n    display: block;\n    font-weight: bold;\n    color: #000;\n    text-align: center;\n    font-size: 16px;\n    padding: 5px; }\n  .empty-card .lbl-subtitle {\n    display: block;\n    color: #ccc;\n    text-align: center;\n    font-size: 15px;\n    width: 65%;\n    margin: 0 auto; }\n  .empty-card .btn-chat {\n    font-weight: bold;\n    margin: 40px 34px 0px 34px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9OUmVDb20vc3JjL2FwcC9jYWxsY2VudGVyL2NhbGxjZW50ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CO0VBQ25CLFFBQVE7RUFDUiwyQkFBMkI7RUFFM0IsZ0JBQWdCLEVBQUE7RUFMcEI7SUFRUSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWMsRUFBQTtFQVZ0QjtJQWFRLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWSxFQUFBO0VBbEJwQjtJQXFCUSxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsVUFBVTtJQUNWLGNBQWMsRUFBQTtFQTFCdEI7SUFnQ1EsaUJBQWlCO0lBQ2pCLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FsbGNlbnRlci9jYWxsY2VudGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbXB0eS1jYXJke1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDBweCAzMHB4O1xyXG5cclxuICAgIC5jYWxsLWltZ3tcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICAgIC5sYmwtdGl0bGV7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbiAgICAubGJsLXN1YnRpdGxle1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAvL3BhZGRpbmc6IDBweCA2MHB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1jaGF0e1xyXG4gICAgICAgIC8vbWFyZ2luLXRvcDogMzVweDtcclxuICAgICAgICAvL3dpZHRoOiA3NSU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luOiA0MHB4IDM0cHggMHB4IDM0cHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/callcenter/callcenter.page.ts":
/*!***********************************************!*\
  !*** ./src/app/callcenter/callcenter.page.ts ***!
  \***********************************************/
/*! exports provided: CallcenterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallcenterPage", function() { return CallcenterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");




var CallcenterPage = /** @class */ (function () {
    function CallcenterPage(navCtrl, statusBar) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
    }
    CallcenterPage.prototype.ngOnInit = function () {
    };
    CallcenterPage.prototype.ionViewWillEnter = function () {
        this.statusBar.overlaysWebView(false);
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    CallcenterPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    CallcenterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-callcenter',
            template: __webpack_require__(/*! ./callcenter.page.html */ "./src/app/callcenter/callcenter.page.html"),
            styles: [__webpack_require__(/*! ./callcenter.page.scss */ "./src/app/callcenter/callcenter.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
    ], CallcenterPage);
    return CallcenterPage;
}());



/***/ })

}]);
//# sourceMappingURL=callcenter-callcenter-module.js.map