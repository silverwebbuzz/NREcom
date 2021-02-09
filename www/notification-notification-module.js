(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-notification-module"],{

/***/ "./src/app/notification/notification.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.module.ts ***!
  \*****************************************************/
/*! exports provided: NotificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.page */ "./src/app/notification/notification.page.ts");







var routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]
    }
];
var NotificationPageModule = /** @class */ (function () {
    function NotificationPageModule() {
    }
    NotificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]]
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());



/***/ }),

/***/ "./src/app/notification/notification.page.html":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons>\n        <ion-button color=\"tertiary\" (click)=\"back()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title color=\"tertiary\" class=\"lbl-head-title\">Notification</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content class=\"page-notification\">\n\n  <!-- <ion-card class=\"empty-card\">\n    <img src=\"../../assets/img/bell.png\" class=\"img-bell\"/>\n    <ion-label class=\"lbl-title\">Not Have Notification</ion-label>\n  </ion-card> -->\n\n  <ion-row class=\"row-items\">\n    <ion-col size=\"2\" class=\"col-items\">\n      <img src=\"../../assets/img/home.jpg\" class=\"img-items\"/>\n    </ion-col>\n    <ion-col size=\"10\" class=\"col-items\">\n      <ion-label class=\"lbl-lines\">\n        <h3 class=\"lbl-head\">NR ECommerce</h3>\n        <p class=\"lbl-desc\">Thanks for downloaded NReCom app</p>\n      </ion-label>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"row-items\">\n    <ion-col size=\"2\" class=\"col-items\">\n      <img src=\"../../assets/img/home.jpg\" class=\"img-items\"/>\n    </ion-col>\n    <ion-col size=\"10\" class=\"col-items\">\n      <ion-label class=\"lbl-lines\">\n        <h3 class=\"lbl-head\">NR ECommerce</h3>\n        <p class=\"lbl-desc\">Thanks for downloaded NReCom app</p>\n      </ion-label>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/notification/notification.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-notification {\n  --background: #f1f1f1; }\n  .page-notification .empty-card {\n    box-shadow: 0px 0px;\n    top: 50%;\n    transform: translateY(-50%); }\n  .page-notification .empty-card .img-bell {\n      height: 200px;\n      width: 200px;\n      margin: 0 auto;\n      border-radius: 50%; }\n  .page-notification .empty-card .lbl-title {\n      display: block;\n      font-weight: bold;\n      color: #000;\n      text-align: center;\n      font-size: 18px;\n      margin-top: 25px; }\n  .page-notification .row-items {\n    margin-top: 10px;\n    border: 0.5px solid #ddd;\n    padding: 10px; }\n  .page-notification .row-items .col-items {\n      text-align: center; }\n  .page-notification .row-items .col-items .img-items {\n        border-radius: 30px;\n        height: 40px;\n        width: 40px; }\n  .page-notification .row-items .col-items .lbl-lines {\n        text-align: left; }\n  .page-notification .row-items .col-items .lbl-lines .lbl-head {\n          font-weight: bold;\n          font-size: 18px; }\n  .page-notification .row-items .col-items .lbl-lines .lbl-desc {\n          font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9OUmVDb20vc3JjL2FwcC9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhLEVBQUE7RUFEakI7SUFJUSxtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLDJCQUEyQixFQUFBO0VBTm5DO01BVVksYUFBYTtNQUNiLFlBQVk7TUFDWixjQUFjO01BQ2Qsa0JBQWtCLEVBQUE7RUFiOUI7TUFnQlksY0FBYztNQUNkLGlCQUFpQjtNQUNqQixXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTtFQXJCNUI7SUF5QlEsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixhQUFhLEVBQUE7RUEzQnJCO01BOEJZLGtCQUFrQixFQUFBO0VBOUI5QjtRQWlDZ0IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixXQUFXLEVBQUE7RUFuQzNCO1FBc0NnQixnQkFBZ0IsRUFBQTtFQXRDaEM7VUF5Q29CLGlCQUFpQjtVQUNqQixlQUFlLEVBQUE7RUExQ25DO1VBNkNvQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLW5vdGlmaWNhdGlvbntcclxuICAgIC0tYmFja2dyb3VuZDogI2YxZjFmMTtcclxuXHJcbiAgICAuZW1wdHktY2FyZHtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4O1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAgICAgLmltZy1iZWxse1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sYmwtdGl0bGV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yb3ctaXRlbXN7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAgICAgLmNvbC1pdGVtc3tcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgLmltZy1pdGVtc3tcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGJsLWxpbmVze1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICAgICAgICAgICAubGJsLWhlYWR7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxibC1kZXNje1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/notification/notification.page.ts":
/*!***************************************************!*\
  !*** ./src/app/notification/notification.page.ts ***!
  \***************************************************/
/*! exports provided: NotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPage", function() { return NotificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");




var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl, statusBar) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
    }
    NotificationPage.prototype.ngOnInit = function () {
    };
    NotificationPage.prototype.ionViewWillEnter = function () {
        this.statusBar.overlaysWebView(false);
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    NotificationPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    NotificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.page.html */ "./src/app/notification/notification.page.html"),
            styles: [__webpack_require__(/*! ./notification.page.scss */ "./src/app/notification/notification.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
    ], NotificationPage);
    return NotificationPage;
}());



/***/ })

}]);
//# sourceMappingURL=notification-notification-module.js.map