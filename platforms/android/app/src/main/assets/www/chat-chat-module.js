(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "./src/app/chat/chat.page.ts");







var routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]
    }
];
var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
        })
    ], ChatPageModule);
    return ChatPageModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.page.html":
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-button color=\"tertiary\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"tertiary\" class=\"lbl-head-title\">Chatting</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-card class=\"empty-card\">\n      <img src=\"../../assets/img/chat.jpg\" class=\"call-img\" />\n      <ion-label class=\"lbl-subtitle\">Not Have Message</ion-label>\n    </ion-card>\n\n</ion-content>\n\n<ion-footer class=\"page-chat-footer\">\n    <ion-item lines=\"none\" class=\"item-footer\"> \n      <ion-button fill=\"clear\" slot=\"start\" class=\"btns\">\n        <ion-icon name=\"add\" color=\"tertiary\" size=\"large\"></ion-icon>\n      </ion-button>\n      <ion-input placeholder=\"Enter some text to send a message\" class=\"input-box\"></ion-input>\n      <ion-button fill=\"clear\" slot=\"end\" class=\"btns spc\">\n          <ion-icon name=\"mail\" color=\"tertiary\" size=\"large\"></ion-icon>\n        </ion-button>\n    </ion-item>\n  </ion-footer>\n"

/***/ }),

/***/ "./src/app/chat/chat.page.scss":
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".empty-card {\n  box-shadow: 0px 0px;\n  top: 30%;\n  transform: translateY(-50%);\n  display: block; }\n  .empty-card .call-img {\n    height: 200px;\n    width: 200px;\n    margin: 0 auto; }\n  .empty-card .lbl-subtitle {\n    display: block;\n    color: #ccc;\n    text-align: center;\n    font-size: 16px;\n    padding-top: 20px; }\n  .spc {\n  padding-left: 5px; }\n  .page-chat-footer {\n  box-shadow: 0px 0px 4px 0px #ddd; }\n  .page-chat-footer .item-footer {\n    --padding-start: 8px;\n    --padding-end: 0px;\n    padding: 5px 0px; }\n  .page-chat-footer .item-footer .btns {\n      margin: 0px;\n      --padding-start: 0px;\n      --padding-end: 0px; }\n  .page-chat-footer .item-footer .input-box {\n      border: 0.5px solid #ddd;\n      font-size: 16px;\n      --padding-start: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9OUmVDb20vc3JjL2FwcC9jaGF0L2NoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CO0VBQ25CLFFBQVE7RUFDUiwyQkFBMkI7RUFDM0IsY0FBYyxFQUFBO0VBSmxCO0lBT1EsYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjLEVBQUE7RUFUdEI7SUFZUSxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7RUFHekI7RUFDSSxpQkFBaUIsRUFBQTtFQUVyQjtFQUNJLGdDQUFnQyxFQUFBO0VBRHBDO0lBSVEsb0JBQWdCO0lBQ2hCLGtCQUFjO0lBQ2QsZ0JBQWdCLEVBQUE7RUFOeEI7TUFTWSxXQUFXO01BQ1gsb0JBQWdCO01BQ2hCLGtCQUFjLEVBQUE7RUFYMUI7TUFjWSx3QkFBd0I7TUFDeEIsZUFBZTtNQUNmLG9CQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbXB0eS1jYXJke1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweDtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgLmNhbGwtaW1ne1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmxibC1zdWJ0aXRsZXtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBjb2xvcjogI2NjYztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcbi5zcGN7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG4ucGFnZS1jaGF0LWZvb3RlcntcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDBweCAjZGRkO1xyXG5cclxuICAgIC5pdGVtLWZvb3RlcntcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDBweDsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLmJ0bnN7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5wdXQtYm94e1xyXG4gICAgICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/chat/chat.page.ts":
/*!***********************************!*\
  !*** ./src/app/chat/chat.page.ts ***!
  \***********************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");




var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, statusBar) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
    }
    ChatPage.prototype.ngOnInit = function () {
    };
    ChatPage.prototype.ionViewWillEnter = function () {
        this.statusBar.overlaysWebView(false);
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    ChatPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.page.html */ "./src/app/chat/chat.page.html"),
            styles: [__webpack_require__(/*! ./chat.page.scss */ "./src/app/chat/chat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
    ], ChatPage);
    return ChatPage;
}());



/***/ })

}]);
//# sourceMappingURL=chat-chat-module.js.map