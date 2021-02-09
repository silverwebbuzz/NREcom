(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["splash-splash-module"],{

/***/ "./src/app/splash/splash.module.ts":
/*!*****************************************!*\
  !*** ./src/app/splash/splash.module.ts ***!
  \*****************************************/
/*! exports provided: SplashPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPageModule", function() { return SplashPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./splash.page */ "./src/app/splash/splash.page.ts");







var routes = [
    {
        path: '',
        component: _splash_page__WEBPACK_IMPORTED_MODULE_6__["SplashPage"]
    }
];
var SplashPageModule = /** @class */ (function () {
    function SplashPageModule() {
    }
    SplashPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_6__["SplashPage"]]
        })
    ], SplashPageModule);
    return SplashPageModule;
}());



/***/ }),

/***/ "./src/app/splash/splash.page.html":
/*!*****************************************!*\
  !*** ./src/app/splash/splash.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <img src=\"../../assets/img/shopping1.png\" class=\"img-splash\"/>\n\n  <div class=\"div-lbl\">\n  <ion-label color=\"tertiary\" class=\"lbl-sm\">Welcome to</ion-label>\n  <ion-label color=\"tertiary\" class=\"lbl-bg\">NR eCom</ion-label>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/splash/splash.page.scss":
/*!*****************************************!*\
  !*** ./src/app/splash/splash.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-splash {\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.div-lbl {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 100%;\n  text-align: center; }\n\n.div-lbl .lbl-sm {\n    display: block;\n    font-size: 24px;\n    font-weight: 600; }\n\n.div-lbl .lbl-bg {\n    display: block;\n    font-size: 44px;\n    font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9OUmVDb20vc3JjL2FwcC9zcGxhc2gvc3BsYXNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUx0QjtJQVFRLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7O0FBVnhCO0lBYVEsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NwbGFzaC9zcGxhc2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1zcGxhc2h7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4uZGl2LWxibHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLmxibC1zbXtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIC5sYmwtYmd7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiA0NHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/splash/splash.page.ts":
/*!***************************************!*\
  !*** ./src/app/splash/splash.page.ts ***!
  \***************************************/
/*! exports provided: SplashPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPage", function() { return SplashPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");




var SplashPage = /** @class */ (function () {
    function SplashPage(router, statusBar) {
        this.router = router;
        this.statusBar = statusBar;
    }
    SplashPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['/intro']);
        }, 3000);
    };
    SplashPage.prototype.ionViewWillEnter = function () {
        this.statusBar.overlaysWebView(true);
        //console.log('test');
        //this.statusBar.hide();
    };
    SplashPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-splash',
            template: __webpack_require__(/*! ./splash.page.html */ "./src/app/splash/splash.page.html"),
            styles: [__webpack_require__(/*! ./splash.page.scss */ "./src/app/splash/splash.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
    ], SplashPage);
    return SplashPage;
}());



/***/ })

}]);
//# sourceMappingURL=splash-splash-module.js.map