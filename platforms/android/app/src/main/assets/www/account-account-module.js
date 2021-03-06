(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "./src/app/account/account.page.ts");







var routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]
    }
];
var AccountPageModule = /** @class */ (function () {
    function AccountPageModule() {
    }
    AccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
        })
    ], AccountPageModule);
    return AccountPageModule;
}());



/***/ }),

/***/ "./src/app/account/account.page.html":
/*!*******************************************!*\
  !*** ./src/app/account/account.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <img src=\"../../assets/img/home.jpg\" class=\"cover-pic\"/>\n  <img src=\"../../assets/img/home.jpg\" class=\"profile-pic\"/>\n  <ion-label class=\"lbl-user\">User Name</ion-label>\n  <ion-button fill=\"clear\" size=\"full\" color=\"medium\" class=\"btn-edit\">Edit Profile</ion-button>\n\n  <ion-list>\n    <ion-item routerLink=\"/notification\" mode=\"md\" class=\"item-list\">\n      <ion-icon name=\"notifications\" slot=\"start\" class=\"icon-menu\"></ion-icon>\n      <ion-label class=\"item-name\">Notification</ion-label>\n    </ion-item>\n    <ion-item mode=\"md\" class=\"item-list\">\n      <ion-icon name=\"card\" slot=\"start\" class=\"icon-menu\"></ion-icon>\n      <ion-label class=\"item-name\">Payments</ion-label>\n    </ion-item>\n    <ion-item routerLink=\"/message\" mode=\"md\" class=\"item-list\">\n      <ion-icon name=\"chatbubbles\" slot=\"start\" class=\"icon-menu\"></ion-icon>\n      <ion-label class=\"item-name\">Message</ion-label>\n    </ion-item>\n    <ion-item class=\"item-list\">\n      <ion-icon name=\"airplane\" slot=\"start\" class=\"icon-menu\"></ion-icon>\n      <ion-label class=\"item-name\">My Orders</ion-label>\n    </ion-item>\n    <ion-item routerLink=\"/setting\" mode=\"md\" class=\"item-list\">\n      <ion-icon name=\"settings\" slot=\"start\" class=\"icon-menu\"></ion-icon>\n      <ion-label class=\"item-name\">Setting Account</ion-label>\n    </ion-item>\n    <ion-item routerLink=\"/callcenter\" mode=\"md\" class=\"item-list\">\n      <ion-icon name=\"person\" slot=\"start\" class=\"icon-menu\"></ion-icon>\n      <ion-label class=\"item-name\">Call Center</ion-label>\n    </ion-item>\n    <ion-item routerLink=\"/about\" mode=\"md\" class=\"item-list\">\n      <ion-icon name=\"information-circle\" slot=\"start\" class=\"icon-menu\"></ion-icon>\n      <ion-label class=\"item-name\">About Apps</ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/account/account.page.scss":
/*!*******************************************!*\
  !*** ./src/app/account/account.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cover-pic {\n  height: 220px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.profile-pic {\n  height: 125px;\n  width: 125px;\n  border-radius: 65px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n  top: 150px;\n  right: 0;\n  left: 0;\n  margin: auto;\n  z-index: 1;\n  border: 3px solid #fff; }\n\n.lbl-user {\n  display: block;\n  margin-top: 55px;\n  text-align: center;\n  font-weight: bold;\n  font-size: 22px; }\n\n.btn-edit {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n  height: 20px;\n  font-size: 18px; }\n\nion-list {\n  margin-top: 12px;\n  margin-bottom: 0px; }\n\n.icon-menu {\n  color: var(--ion-color-tertiary);\n  font-size: 30px;\n  margin-right: 16px; }\n\n.item-name {\n  font-size: 16px; }\n\n.item-list {\n  padding-right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9OUmVDb20vc3JjL2FwcC9hY2NvdW50L2FjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLFdBQVc7RUFDWCxvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixPQUFPO0VBQ1AsWUFBWTtFQUNaLFVBQVU7RUFDVixzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUVuQjtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY292ZXItcGlje1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLnByb2ZpbGUtcGlje1xyXG4gICAgaGVpZ2h0OiAxMjVweDtcclxuICAgIHdpZHRoOiAxMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDY1cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTUwcHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcclxufVxyXG4ubGJsLXVzZXJ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDU1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG4uYnRuLWVkaXR7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5pb24tbGlzdHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5pY29uLW1lbnV7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxufVxyXG4uaXRlbS1uYW1le1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5pdGVtLWxpc3R7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/account/account.page.ts":
/*!*****************************************!*\
  !*** ./src/app/account/account.page.ts ***!
  \*****************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");




var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, statusBar) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
    }
    AccountPage.prototype.ngOnInit = function () {
    };
    AccountPage.prototype.ionViewWillEnter = function () {
        this.statusBar.overlaysWebView(true);
        // this.statusBar.show();
        // this.statusBar.styleLightContent();
        // this.statusBar.backgroundColorByHexString('#ff8d90');
    };
    AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.page.html */ "./src/app/account/account.page.html"),
            styles: [__webpack_require__(/*! ./account.page.scss */ "./src/app/account/account.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
    ], AccountPage);
    return AccountPage;
}());



/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map