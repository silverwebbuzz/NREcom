(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-setting-module"],{

/***/ "./src/app/setting/setting.module.ts":
/*!*******************************************!*\
  !*** ./src/app/setting/setting.module.ts ***!
  \*******************************************/
/*! exports provided: SettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting.page */ "./src/app/setting/setting.page.ts");







var routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]
    }
];
var SettingPageModule = /** @class */ (function () {
    function SettingPageModule() {
    }
    SettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]]
        })
    ], SettingPageModule);
    return SettingPageModule;
}());



/***/ }),

/***/ "./src/app/setting/setting.page.html":
/*!*******************************************!*\
  !*** ./src/app/setting/setting.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-button color=\"tertiary\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"tertiary\" class=\"lbl-head-title\">Setting Account</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"page-setting\">\n\n  <ion-list class=\"list\">\n    <ion-item class=\"item-list\">\n      <ion-label class=\"item-name\">Account</ion-label>\n    </ion-item>\n    <ion-item class=\"item-list\">\n      <ion-label class=\"item-sub-name\">Address</ion-label>\n      <ion-icon name=\"arrow-forward\" color=\"medium\"></ion-icon>\n    </ion-item>\n    <ion-item class=\"item-list\">\n      <ion-label class=\"item-sub-name\">Telephone</ion-label>\n      <ion-icon name=\"arrow-forward\" color=\"medium\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"item-list spc-B\">\n      <ion-label class=\"item-sub-name\">Email</ion-label>\n      <ion-icon name=\"arrow-forward\" color=\"medium\"></ion-icon>\n    </ion-item>\n    <ion-item class=\"item-list\">\n        <ion-label class=\"item-name\">Setting</ion-label>\n      </ion-item>\n      <ion-item class=\"item-list\">\n        <ion-label class=\"item-sub-name\">Order Notifications</ion-label>\n        <ion-icon name=\"arrow-forward\" color=\"medium\"></ion-icon>\n      </ion-item>\n      <ion-item class=\"item-list\">\n        <ion-label class=\"item-sub-name\">Discount Notifications</ion-label>\n        <ion-icon name=\"arrow-forward\" color=\"medium\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"item-list spc-B\">\n        <ion-label class=\"item-sub-name\">Credit Card</ion-label>\n        <ion-icon name=\"arrow-forward\" color=\"medium\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"item-list\" (click)=\"logout()\">\n          <ion-label class=\"item-name\">Logout</ion-label>\n        </ion-item>\n  </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/setting/setting.page.scss":
/*!*******************************************!*\
  !*** ./src/app/setting/setting.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-setting {\n  --background: #f1f1f1;\n  border-top: 5px solid #f1f1f1; }\n  .page-setting .list {\n    margin: 0px; }\n  .page-setting .list .item-list {\n      --padding-end: 16px; }\n  .page-setting .list .item-list .item-name {\n        font-weight: bold;\n        font-size: 18px;\n        padding: 8px; }\n  .page-setting .list .item-list .item-sub-name {\n        color: grey;\n        font-size: 18px;\n        padding: 8px 8px 8px 16px; }\n  .page-setting .list .item-list ion-icon {\n        height: 20px;\n        width: 20px; }\n  .spc-B {\n  border-bottom: 5px solid #f1f1f1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9OUmVDb20vc3JjL2FwcC9zZXR0aW5nL3NldHRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWE7RUFDYiw2QkFBNkIsRUFBQTtFQUZqQztJQUtRLFdBQVcsRUFBQTtFQUxuQjtNQVFZLG1CQUFjLEVBQUE7RUFSMUI7UUFhZ0IsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixZQUFZLEVBQUE7RUFmNUI7UUFrQmdCLFdBQVc7UUFDWCxlQUFlO1FBRWYseUJBQXlCLEVBQUE7RUFyQnpDO1FBd0JnQixZQUFZO1FBQ1osV0FBVyxFQUFBO0VBSzNCO0VBQ0ksZ0NBQWdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5nL3NldHRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Utc2V0dGluZ3tcclxuICAgIC0tYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZjFmMWYxO1xyXG5cclxuICAgIC5saXN0e1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG5cclxuICAgICAgICAuaXRlbS1saXN0e1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gICAgICAgICAgICAvL3BhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgLy8tLW1pbi1oZWlnaHQ6IDQwcHg7XHJcblxyXG4gICAgICAgICAgICAuaXRlbS1uYW1le1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW0tc3ViLW5hbWV7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIC8vcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDhweCA4cHggMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5zcGMtQntcclxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZjFmMWYxO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/setting/setting.page.ts":
/*!*****************************************!*\
  !*** ./src/app/setting/setting.page.ts ***!
  \*****************************************/
/*! exports provided: SettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPage", function() { return SettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");




var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, statusBar, alertCtrl) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.alertCtrl = alertCtrl;
    }
    SettingPage.prototype.ngOnInit = function () {
    };
    SettingPage.prototype.ionViewWillEnter = function () {
        this.statusBar.overlaysWebView(false);
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    SettingPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    SettingPage.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Confirm!',
                            message: 'Are you sure you want to logout ?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'alertColor'
                                },
                                {
                                    text: 'Logout',
                                    cssClass: 'alertColor',
                                    handler: function () {
                                        //console.log('Confirm Okay');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! ./setting.page.html */ "./src/app/setting/setting.page.html"),
            styles: [__webpack_require__(/*! ./setting.page.scss */ "./src/app/setting/setting.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], SettingPage);
    return SettingPage;
}());



/***/ })

}]);
//# sourceMappingURL=setting-setting-module.js.map