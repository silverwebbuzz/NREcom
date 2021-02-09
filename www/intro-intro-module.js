(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["intro-intro-module"],{

/***/ "./src/app/intro/intro.module.ts":
/*!***************************************!*\
  !*** ./src/app/intro/intro.module.ts ***!
  \***************************************/
/*! exports provided: IntroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro.page */ "./src/app/intro/intro.page.ts");







var routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]
    }
];
var IntroPageModule = /** @class */ (function () {
    function IntroPageModule() {
    }
    IntroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]]
        })
    ], IntroPageModule);
    return IntroPageModule;
}());



/***/ }),

/***/ "./src/app/intro/intro.page.html":
/*!***************************************!*\
  !*** ./src/app/intro/intro.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <ion-slides pager=\"true\" [options]=\"slideOptsMain\" (ionSlideWillChange)=\"slideChanged()\" (ionSlideDrag)=\"slideMoved()\">\n    <ion-slide>\n      <div class=\"diag\">\n        <ion-icon name=\"analytics\" color=\"tertiary\" [@bounce]='state' (@bounce.done)=\"animationDone()\"></ion-icon>\n      </div>\n      <div [@bounce]='state'>\n        <h2>track your routine</h2>\n        <p>whether it's sets, reps, weight used, you can track it all with our intuitive interface.</p>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"diag\">\n        <ion-icon name=\"trophy\" color=\"tertiary\" [@bounce]='state'></ion-icon>\n      </div>\n      <div [@bounce]='state'>\n        <h2>set personal goals</h2>\n        <p>we're all in the gym for a reason: goals. set goals for diet and fitness.</p>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"diag\">\n        <ion-icon name=\"chatboxes\" color=\"tertiary\" [@bounce]='state'></ion-icon>\n      </div>\n      <div [@bounce]='state'>\n        <h2>chat with others</h2>\n        <p>inspire and help each other reach fitness and diet goals.</p>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n    <ion-row class=\"row-btns\">\n      <ion-col  class=\"col-btn-skip\">\n        <ion-button *ngIf=\"btnSkipActive\" fill=\"clear\" color=\"tertiary\" class=\"btn-skip\" (click)=\"btnSkip()\">SKIP</ion-button>\n      </ion-col>\n      <ion-col class=\"col-btn-done\">\n        <ion-button *ngIf=\"btnDoneActive\" fill=\"clear\" color=\"tertiary\" class=\"btn-done\" (click)=\"btnDone()\">DONE</ion-button>\n      </ion-col>\n    </ion-row>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/intro/intro.page.scss":
/*!***************************************!*\
  !*** ./src/app/intro/intro.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #EFEFEF !important; }\n\nion-slides {\n  height: 100%; }\n\nion-slides ion-slide .diag {\n    position: absolute;\n    z-index: 1;\n    width: 100%;\n    top: 0;\n    height: 100%;\n    background: url(\"/assets/img/whitebg.svg\") no-repeat; }\n\nion-icon {\n  margin-top: 40%;\n  font-size: 7em; }\n\nh2 {\n  margin-top: 80% !important;\n  font-weight: bold;\n  font-size: 1em; }\n\np {\n  width: 80%;\n  display: block;\n  margin: 0 auto;\n  font-size: .9em; }\n\n.row-btns {\n  bottom: 1.5%;\n  position: absolute;\n  width: 100%;\n  z-index: 1; }\n\n.row-btns .col-btn-skip {\n    padding: 0px;\n    text-align: left; }\n\n.row-btns .col-btn-skip .btn-skip {\n      margin: 0px;\n      font-weight: bold; }\n\n.row-btns .col-btn-done {\n    padding: 0px;\n    text-align: right; }\n\n.row-btns .col-btn-done .btn-done {\n      margin: 0px;\n      font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9OUmVDb20vc3JjL2FwcC9pbnRyby9pbnRyby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBYSxFQUFBOztBQUdqQjtFQUNJLFlBQVksRUFBQTs7QUFEaEI7SUFNWSxrQkFBaUI7SUFDakIsVUFBUztJQUNULFdBQVk7SUFDWixNQUFNO0lBQ04sWUFBWTtJQUNaLG9EQUFvRCxFQUFBOztBQUloRTtFQUNJLGVBQWM7RUFDZCxjQUFhLEVBQUE7O0FBR2pCO0VBQ0ksMEJBQXlCO0VBQ3pCLGlCQUFnQjtFQUNoQixjQUFhLEVBQUE7O0FBR2pCO0VBQ0ksVUFBUztFQUNULGNBQWE7RUFDYixjQUFjO0VBQ2QsZUFBYyxFQUFBOztBQUVsQjtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVUsRUFBQTs7QUFKZDtJQU9RLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTs7QUFSeEI7TUFXWSxXQUFXO01BQ1gsaUJBQWlCLEVBQUE7O0FBWjdCO0lBZ0JRLFlBQVk7SUFDWixpQkFBaUIsRUFBQTs7QUFqQnpCO01Bb0JZLFdBQVc7TUFDWCxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ludHJvL2ludHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI0VGRUZFRiAhaW1wb3J0YW50O1xyXG4gICAgLy9mb250LWZhbWlseTonUmFsZXdheSc7XHJcbn1cclxuaW9uLXNsaWRlc3tcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBpb24tc2xpZGV7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmRpYWcge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDoxO1xyXG4gICAgICAgICAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL3doaXRlYmcuc3ZnJykgbm8tcmVwZWF0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5pb24taWNvbiB7XHJcbiAgICBtYXJnaW4tdG9wOjQwJTtcclxuICAgIGZvbnQtc2l6ZTo3ZW07XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIG1hcmdpbi10b3A6ODAlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgZm9udC1zaXplOjFlbTtcclxufVxyXG5cclxucCB7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBmb250LXNpemU6LjllbTtcclxufVxyXG4ucm93LWJ0bnN7XHJcbiAgICBib3R0b206IDEuNSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgLmNvbC1idG4tc2tpcHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICAgLmJ0bi1za2lwe1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbC1idG4tZG9uZXtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgICAgIC5idG4tZG9uZXtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/intro/intro.page.ts":
/*!*************************************!*\
  !*** ./src/app/intro/intro.page.ts ***!
  \*************************************/
/*! exports provided: IntroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPage", function() { return IntroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_android_full_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/android-full-screen/ngx */ "./node_modules/@ionic-native/android-full-screen/ngx/index.js");







var IntroPage = /** @class */ (function () {
    function IntroPage(route, statusBar, androidFullScreen) {
        this.route = route;
        this.statusBar = statusBar;
        this.androidFullScreen = androidFullScreen;
        this.state = 'x';
        this.btnSkipActive = true;
        this.btnDoneActive = false;
        this.slideOptsMain = {
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
        };
    }
    IntroPage.prototype.ngOnInit = function () {
    };
    IntroPage.prototype.ionViewWillEnter = function () {
        this.statusBar.overlaysWebView(true);
        //console.log('test');
        //this.statusBar.hide();
    };
    IntroPage.prototype.btnSkip = function () {
        this.route.navigate(['/landing']);
    };
    IntroPage.prototype.btnDone = function () {
        this.route.navigate(['/landing']);
    };
    IntroPage.prototype.slideChanged = function () {
        var _this = this;
        var me = this;
        me.slides.isEnd().then(function (istrue) {
            if (istrue) {
                _this.btnDoneActive = true;
                _this.btnSkipActive = false;
            }
            else {
                _this.btnSkipActive = true;
                _this.btnDoneActive = false;
            }
        });
    };
    IntroPage.prototype.slideMoved = function () {
        if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex())
            this.state = 'rightSwipe';
        else
            this.state = 'leftSwipe';
    };
    IntroPage.prototype.animationDone = function () {
        this.state = 'x';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], IntroPage.prototype, "slides", void 0);
    IntroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.page.html */ "./src/app/intro/intro.page.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('bounce', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        transform: 'translateX(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => rightSwipe', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('700ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(0)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(-65px)', offset: .3 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(0)', offset: 1 })
                    ]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => leftSwipe', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('700ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(0)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(65px)', offset: .3 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(0)', offset: 1 })
                    ])))
                ])
            ],
            styles: [__webpack_require__(/*! ./intro.page.scss */ "./src/app/intro/intro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"],
            _ionic_native_android_full_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["AndroidFullScreen"]])
    ], IntroPage);
    return IntroPage;
}());



/***/ })

}]);
//# sourceMappingURL=intro-intro-module.js.map