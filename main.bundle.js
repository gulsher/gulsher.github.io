webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_show_hide_password__ = __webpack_require__("./node_modules/ngx-show-hide-password/ngx-show-hide-password.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_show_hide_password___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_show_hide_password__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__("./node_modules/angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_fontawesome_angular2_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__change_pwd_change_pwd_component__ = __webpack_require__("./src/app/change-pwd/change-pwd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__forgot_pwd_forgot_pwd_component__ = __webpack_require__("./src/app/forgot-pwd/forgot-pwd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__unlock_acct_unlock_acct_component__ = __webpack_require__("./src/app/unlock-acct/unlock-acct.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import http module


// import forms from module

// import ng2 toastr









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__change_pwd_change_pwd_component__["a" /* ChangePwdComponent */],
                __WEBPACK_IMPORTED_MODULE_13__forgot_pwd_forgot_pwd_component__["a" /* ForgotPwdComponent */],
                __WEBPACK_IMPORTED_MODULE_14__unlock_acct_unlock_acct_component__["a" /* UnlockAcctComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"],
                __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_show_hide_password__["ShowHidePasswordModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */], pathMatch: 'full' },
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: 'change', component: __WEBPACK_IMPORTED_MODULE_12__change_pwd_change_pwd_component__["a" /* ChangePwdComponent */] },
                    { path: 'forgot', component: __WEBPACK_IMPORTED_MODULE_13__forgot_pwd_forgot_pwd_component__["a" /* ForgotPwdComponent */] },
                    { path: 'unlock', component: __WEBPACK_IMPORTED_MODULE_14__unlock_acct_unlock_acct_component__["a" /* UnlockAcctComponent */] },
                    { path: '**', component: __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */] },
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/change-pwd/change-pwd.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nbody {\r\n    background: #222D32;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.login-box {\r\n    margin-top: 60px;\r\n    height: auto;\r\n    background: #1A2226;\r\n    text-align: center;\r\n    -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    padding-bottom: 2%;\r\n}\r\n\r\n.login-key {\r\n    height: 100px;\r\n    font-size: 80px;\r\n    line-height: 100px;\r\n    background: -webkit-linear-gradient(#27EF9F, #0DB8DE);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.login-title {\r\n    margin-top: 15px;\r\n    text-align: center;\r\n    font-size: 30px;\r\n    letter-spacing: 2px;\r\n    margin-top: 15px;\r\n    font-weight: bold;\r\n    color: #ECF0F5;\r\n}\r\n\r\n.login-form {\r\n    margin-top: 25px;\r\n    text-align: left;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 40px;\r\n    outline: 0px;\r\n}\r\n\r\ninput:focus {\r\n    outline: none;\r\n    -webkit-box-shadow: 0 0 0;\r\n            box-shadow: 0 0 0;\r\n}\r\n\r\nlabel {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.form-control-label {\r\n    font-size: 10px;\r\n    color: #6C6C6C;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.btn-outline-primary {\r\n    border-color: #0DB8DE;\r\n    color: #0DB8DE;\r\n    border-radius: 0px;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.btn-outline-primary:hover {\r\n    background-color: #0DB8DE;\r\n    right: 0px;\r\n}\r\n\r\n.login-btm {\r\n    float: left;\r\n}\r\n\r\n.login-button {\r\n    padding-right: 0px;\r\n    text-align: right;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.login-text {\r\n    text-align: left;\r\n    padding-left: 0px;\r\n    color: #A2A4A4;\r\n}\r\n\r\n.loginbttm {\r\n    padding: 0px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/change-pwd/change-pwd.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light \" style=\"background-color: #d9faff\">\n  <a class=\"navbar-brand\" href=\"#\"><img class=\"img-fluid\" src=\"../../assets/fyers-dark-logo.png\" ></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\">\n    \n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid\" style=\"background-color: #87e5da\">\n  \n  \n<div class =\"row\" >\n  <div class=\"col-md-12 col-sm-12\">\n\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col-lg-3 col-md-2\"></div>\n              <div class=\"col-lg-6 col-md-8 login-box\">\n                  \n                  <div class=\"col-lg-12 login-title p-1\">\n                      CHANGE PASSWORD\n                  </div>\n  \n                  <div class=\"col-lg-12 login-form\">\n                      <div class=\"col-lg-12 login-form\">\n                          <form #LoginForm=\"ngForm\" (ngSubmit)=\"changePwd()\">\n                              <div class=\"form-group\">\n                                  <label class=\"form-control-label\">CLIENT ID</label>\n                                  <input type=\"text\" class=\"form-control\" name=\"clientId\" minlength=\"5\" maxlength=\"7\"  #ClientId=\"ngModel\" [(ngModel)]=\"clientId\" pattern=\"\" required oninput=\"this.value = this.value.toUpperCase()\">\n                                  <div [hidden]=\"ClientId.valid || ClientId.pristine\" class=\"alert alert-danger\">\n                                    min 5 characters and max 7 characters\n                                   </div>\n                              </div>\n                              \n                              <div class=\"form-group\">\n                                  <label class=\"form-control-label\">EXISTING PASSWORD</label>\n                                  <show-hide-password icon=\"fontawesome\">\n                                  <input type=\"password\" #pwd=\"ngModel\" name=\"password\" class=\"form-control\"[(ngModel)]=\"password\" required>\n                                </show-hide-password>\n                              </div>\n                              \n                              <div class=\"form-group\">\n                                  <label class=\"form-control-label\">NEW PASSWORD</label>\n                                  <show-hide-password icon=\"fontawesome\">\n                                  <input type=\"password\" #pwd1=\"ngModel\" name=\"password1\" class=\"form-control\"[(ngModel)]=\"password1\" required>\n                                </show-hide-password>\n                              </div>\n                              <div class=\"form-group\">\n                                  <label class=\"form-control-label\">CONFIRM PASSWORD</label>\n                                  <show-hide-password icon=\"fontawesome\">\n                                  <input type=\"password\" #pwd2=\"ngModel\" name=\"password2\" class=\"form-control\"[(ngModel)]=\"password2\" required>\n                                </show-hide-password>\n                              </div>\n\n  \n                              <div class=\"col-lg-12 loginbttm\">\n                                  <div class=\"col-lg-6 login-btm login-text\">\n                                      <!-- Error Message -->\n                                  </div>\n                                  <div class=\"col-lg-6 login-btm login-button\">\n                                      <button type=\"submit\" class=\"btn btn-outline-primary\">SUBMIT</button>\n                                  </div>\n                              </div>\n                          </form>\n                          \n                          <a [routerLink]=\"['/login']\" style=\"color: #fd5f00;cursor: pointer;\">Login</a><br>\n                          <a [routerLink]=\"['/forgot']\" style=\"color: #fd5f00;cursor: pointer;\">Forgot Password</a><br>\n                          <a [routerLink]=\"['/unlock']\" style=\"color: #fd5f00;cursor: pointer;\">Unlock Account</a>\n                        \n                      </div>\n                  </div>\n                  <div class=\"col-lg-3 col-md-2\"></div>\n              </div>\n          </div>\n          \n \n</div>\n<br>\n</div>\n\n<div class=\"container-fluid pt-2\" style=\"background-color: black;\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h4 class=\"text-center\" style=\"color: antiquewhite;\"> Copyright &copy; 2018 FYERS</h4>\n            <p class=\"text-center\" style=\"color: antiquewhite;\">All rights reserved</p>\n        </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/change-pwd/change-pwd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePwdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangePwdComponent = /** @class */ (function () {
    function ChangePwdComponent(_route, router, toastr, vcr) {
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    ChangePwdComponent.prototype.ngOnInit = function () {
    };
    ChangePwdComponent.prototype.changePwd = function () {
        console.log('change password testing');
        if (this.clientId === null || this.clientId === undefined || this.clientId === ' ') {
            console.log('empty');
            this.toastr.warning('client ID cannot be empty', 'error');
        }
        else if (this.password === null || this.password === undefined || this.password === ' ') {
            console.log('empty');
            this.toastr.warning('existing password cannot be empty', 'error');
        }
        else if (this.password1 === null || this.password1 === undefined || this.password1 === ' ') {
            console.log('empty');
            this.toastr.warning('new password cannot be empty', 'error');
        }
        else if (this.password2 === null || this.password2 === undefined || this.password2 === ' ') {
            console.log('empty');
            this.toastr.warning('confirm password cannot be empty', 'error');
        }
        else if (this.password === this.password1) {
            this.toastr.warning('new password cannot be same as old one', 'error');
        }
        else if (this.password1 !== this.password2) {
            this.toastr.warning('new password and confirm password should same', 'error');
        }
        else if (this.clientId.length < 5 || this.clientId.length > 7) {
            this.toastr.warning('Client ID should be between 5 to 7 characters', 'error');
        }
        else {
            this.toastr.success('Password change successfully', 'Success!');
        }
    };
    ChangePwdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-change-pwd',
            template: __webpack_require__("./src/app/change-pwd/change-pwd.component.html"),
            styles: [__webpack_require__("./src/app/change-pwd/change-pwd.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewContainerRef"]])
    ], ChangePwdComponent);
    return ChangePwdComponent;
}());



/***/ }),

/***/ "./src/app/forgot-pwd/forgot-pwd.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nbody {\r\n    background: #222D32;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.login-box {\r\n    margin-top: 60px;\r\n    height: auto;\r\n    background: #1A2226;\r\n    text-align: center;\r\n    -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    padding-bottom: 2%;\r\n}\r\n\r\n.login-key {\r\n    height: 100px;\r\n    font-size: 80px;\r\n    line-height: 100px;\r\n    background: -webkit-linear-gradient(#27EF9F, #0DB8DE);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.login-title {\r\n    margin-top: 15px;\r\n    text-align: center;\r\n    font-size: 30px;\r\n    letter-spacing: 2px;\r\n    margin-top: 15px;\r\n    font-weight: bold;\r\n    color: #ECF0F5;\r\n}\r\n\r\n.login-form {\r\n    margin-top: 25px;\r\n    text-align: left;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 40px;\r\n    outline: 0px;\r\n}\r\n\r\ninput:focus {\r\n    outline: none;\r\n    -webkit-box-shadow: 0 0 0;\r\n            box-shadow: 0 0 0;\r\n}\r\n\r\nlabel {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.form-control-label {\r\n    font-size: 10px;\r\n    color: #6C6C6C;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.btn-outline-primary {\r\n    border-color: #0DB8DE;\r\n    color: #0DB8DE;\r\n    border-radius: 0px;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.btn-outline-primary:hover {\r\n    background-color: #0DB8DE;\r\n    right: 0px;\r\n}\r\n\r\n.login-btm {\r\n    float: left;\r\n}\r\n\r\n.login-button {\r\n    padding-right: 0px;\r\n    text-align: right;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.login-text {\r\n    text-align: left;\r\n    padding-left: 0px;\r\n    color: #A2A4A4;\r\n}\r\n\r\n.loginbttm {\r\n    padding: 0px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/forgot-pwd/forgot-pwd.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light \" style=\"background-color: #d9faff\">\n    <a class=\"navbar-brand\" href=\"#\"><img class=\"img-fluid\" src=\"../../assets/fyers-dark-logo.png\" ></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n      <div class=\"navbar-nav\">\n      \n      </div>\n    </div>\n  </nav>\n  <div class=\"container-fluid\" style=\"background-color: #87e5da\">\n    \n    \n  <div class =\"row\" >\n    <div class=\"col-md-12 col-sm-12\">\n  \n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-3 col-md-2\"></div>\n                <div class=\"col-lg-6 col-md-8 login-box\">\n                    \n                    <div class=\"col-lg-12 login-title p-1\">\n                        FORGOT PASSWORD\n                    </div>\n    \n                    <div class=\"col-lg-12 login-form\">\n                        <div class=\"col-lg-12 login-form\">\n                            <form #LoginForm=\"ngForm\" (ngSubmit)=\"forgotPwd()\">\n                                <div class=\"form-group\">\n                                    <label class=\"form-control-label\">CLIENT ID</label>\n                                    <input type=\"text\" class=\"form-control\" name=\"clientId\" minlength=\"5\" maxlength=\"7\"  #ClientId=\"ngModel\" [(ngModel)]=\"clientId\" pattern=\"\" required oninput=\"this.value = this.value.toUpperCase()\">\n                                    <div [hidden]=\"ClientId.valid || ClientId.pristine\" class=\"alert alert-danger\">\n                                      min 5 characters and max 7 characters\n                                     </div>\n                                </div>\n                                \n                                <div class=\"form-group\">\n                                    <label class=\"form-control-label\">EMAIL</label>\n\n                                    <input type=\"email\" name=\"email\" #email1=\"ngModel\" class=\"form-control\"[(ngModel)]=\"email\" required>\n                                    <div [hidden]=\"email1.valid || email1.pristine\" class=\"alert alert-danger\">\n                                        @ is mandatory\n                                       </div>\n                                  \n                                </div>\n                                \n                                <div class=\"form-group\">\n                                    <label class=\"form-control-label\">PAN NUMBER</label>\n                                  \n                                    <input type=\"text\" class=\"form-control\" name=\"PAN\" minlength=\"10\" maxlength=\"10\"  #PAN=\"ngModel\" [(ngModel)]=\"pan\" pattern=\"\" required oninput=\"this.value = this.value.toUpperCase()\">\n                                    <div [hidden]=\"PAN.valid || PAN.pristine\" class=\"alert alert-danger\">\n                                      Enter 10 Digits PAN number\n                                     </div>\n                                </div>\n  \n    \n                                <div class=\"col-lg-12 loginbttm\">\n                                    <div class=\"col-lg-6 login-btm login-text\">\n                                        <!-- Error Message -->\n                                    </div>\n                                    <div class=\"col-lg-6 login-btm login-button\">\n                                        <button type=\"submit\" class=\"btn btn-outline-primary\">SUBMIT</button>\n                                    </div>\n                                </div>\n                            </form>\n                            \n                            <a [routerLink]=\"['/login']\" style=\"color: #fd5f00;cursor: pointer;\">Login</a><br>\n                            <a [routerLink]=\"['/change']\" style=\"color: #fd5f00;cursor: pointer;\">Change Password</a><br>\n                            <a [routerLink]=\"['/unlock']\" style=\"color: #fd5f00;cursor: pointer;\">Unlock Account</a>\n                          \n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-2\"></div>\n                </div>\n            </div>\n            \n   \n  </div>\n  <br>\n  </div>\n  \n  <div class=\"container-fluid pt-2\" style=\"background-color: black;\">\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n              <h4 class=\"text-center\" style=\"color: antiquewhite;\"> Copyright &copy; 2018 FYERS</h4>\n              <p class=\"text-center\" style=\"color: antiquewhite;\">All rights reserved</p>\n          </div>\n      </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/forgot-pwd/forgot-pwd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPwdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotPwdComponent = /** @class */ (function () {
    function ForgotPwdComponent(_route, router, toastr, vcr) {
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    ForgotPwdComponent.prototype.ngOnInit = function () {
    };
    ForgotPwdComponent.prototype.forgotPwd = function () {
        console.log('forgot password testing');
        if (this.clientId === null || this.clientId === undefined || this.clientId === ' ') {
            console.log('empty');
            this.toastr.warning('client ID cannot be empty', 'error');
        }
        else if (this.email === null || this.email === undefined || this.email === '') {
            this.toastr.warning('EMAIL ID cannot be empty', 'error');
        }
        else if (this.pan === null || this.pan === undefined || this.pan === '') {
            this.toastr.warning('PAN number cannot be empty', 'error');
        }
        else if (this.pan.length < 10 || this.pan.length > 10) {
            this.toastr.warning('PAN number cannot be less than 10', 'error');
        }
        else if (this.clientId.length < 5 || this.clientId.length > 7) {
            this.toastr.warning('Client ID should be between 5 to 7 characters', 'error');
        }
        else {
            this.toastr.success('Confirmation mail sent :)', 'Success!');
        }
    };
    ForgotPwdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot-pwd',
            template: __webpack_require__("./src/app/forgot-pwd/forgot-pwd.component.html"),
            styles: [__webpack_require__("./src/app/forgot-pwd/forgot-pwd.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], ForgotPwdComponent);
    return ForgotPwdComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nbody {\r\n    background: #222D32;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.login-box {\r\n    margin-top: 60px;\r\n    height: auto;\r\n    background: #1A2226;\r\n    text-align: center;\r\n    -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    padding-bottom: 2%;\r\n}\r\n\r\n.login-key {\r\n    height: 100px;\r\n    font-size: 80px;\r\n    line-height: 100px;\r\n    background: -webkit-linear-gradient(#27EF9F, #0DB8DE);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.login-title {\r\n    margin-top: 15px;\r\n    text-align: center;\r\n    font-size: 30px;\r\n    letter-spacing: 2px;\r\n    margin-top: 15px;\r\n    font-weight: bold;\r\n    color: #ECF0F5;\r\n}\r\n\r\n.login-form {\r\n    margin-top: 25px;\r\n    text-align: left;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 40px;\r\n    outline: 0px;\r\n}\r\n\r\ninput:focus {\r\n    outline: none;\r\n    -webkit-box-shadow: 0 0 0;\r\n            box-shadow: 0 0 0;\r\n}\r\n\r\nlabel {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.form-control-label {\r\n    font-size: 10px;\r\n    color: #6C6C6C;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.btn-outline-primary {\r\n    border-color: #0DB8DE;\r\n    color: #0DB8DE;\r\n    border-radius: 0px;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.btn-outline-primary:hover {\r\n    background-color: #0DB8DE;\r\n    right: 0px;\r\n}\r\n\r\n.login-btm {\r\n    float: left;\r\n}\r\n\r\n.login-button {\r\n    padding-right: 0px;\r\n    text-align: right;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.login-text {\r\n    text-align: left;\r\n    padding-left: 0px;\r\n    color: #A2A4A4;\r\n}\r\n\r\n.loginbttm {\r\n    padding: 0px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light \" style=\"background-color: #d9faff\">\n  <a class=\"navbar-brand\" href=\"#\"><img class=\"img-fluid\" src=\"../../assets/fyers-dark-logo.png\" ></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\">\n    \n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid\" style=\"background-color: #87e5da\">\n  \n  \n<div class =\"row\" >\n  <div class=\"col-md-6 col-sm-12\">\n\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col-lg-3 col-md-2\"></div>\n              <div class=\"col-lg-6 col-md-8 login-box\">\n                  \n                  <div class=\"col-lg-12 login-title p-1\">\n                      CLIENT\n                  </div>\n  \n                  <div class=\"col-lg-12 login-form\">\n                      <div class=\"col-lg-12 login-form\">\n                          <form #LoginForm=\"ngForm\" (ngSubmit)=\"login()\">\n                              <div class=\"form-group\">\n                                  <label class=\"form-control-label\">CLIENT ID</label>\n                                  <input type=\"text\" class=\"form-control\" name=\"clientId\" minlength=\"5\" maxlength=\"7\"  #ClientId=\"ngModel\" [(ngModel)]=\"clientId\" pattern=\"\" required oninput=\"this.value = this.value.toUpperCase()\">\n                                  <div [hidden]=\"ClientId.valid || ClientId.pristine\" class=\"alert alert-danger\">\n                                    min 5 characters and max 7 characters\n                                   </div>\n                              </div>\n                              \n                              <div class=\"form-group\">\n                                  <label class=\"form-control-label\">PASSWORD</label>\n                                  <show-hide-password icon=\"fontawesome\">\n                                  <input type=\"password\" #pwd=\"ngModel\" name=\"password\" class=\"form-control\"[(ngModel)]=\"password\" required>\n                                </show-hide-password>\n                              </div>\n                              \n                              <div class=\"form-group\">\n                                  <label class=\"form-control-label\">DOB</label>\n                                  <input type=\"date\" class=\"form-control\" name=\"dob\" [(ngModel)]=\"dob\" required>\n                                  \n  \n                              </div>\n\n  \n                              <div class=\"col-lg-12 loginbttm\">\n                                  <div class=\"col-lg-6 login-btm login-text\">\n                                      <!-- Error Message -->\n                                  </div>\n                                  <div class=\"col-lg-6 login-btm login-button\">\n                                      <button type=\"submit\" class=\"btn btn-outline-primary\">LOGIN</button>\n                                  </div>\n                              </div>\n                          </form>\n                          \n                          <a [routerLink]=\"['/change']\" style=\"color: #fd5f00;cursor: pointer;\">Change Password</a><br>\n                          <a [routerLink]=\"['/forgot']\" style=\"color: #fd5f00;cursor: pointer;\">Forgot Password</a><br>\n                          <a [routerLink]=\"['/unlock']\" style=\"color: #fd5f00;cursor: pointer;\">Unlock Account</a>\n                        \n                      </div>\n                  </div>\n                  <div class=\"col-lg-3 col-md-2\"></div>\n              </div>\n          </div>\n\n \n</div>\n<br>\n\n</div>\n\n<div class=\"col-md-6 col-sm-12\">\n        \n    <div class=\"container mt-5 \">\n        <div class=\"row\">\n                <div class=\"col-lg-12 login-title p-1\">\n                        GUEST\n                    </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-12 mt-lg-5 mt-sm-5\">\n                    <button type=\"button\" class=\"btn btn-info btn-lg btn-block\"><i class=\"fa fa-facebook-square\"></i>  Login With Facebook</button>\n            </div>\n        </div><br>\n        <div class=\"row\">\n                <div class=\"col-sm-12 mt-lg-5 mt-sm-5\">\n                        <button type=\"button\" class=\"btn btn-danger btn-lg btn-block\"><i class=\"fa fa-google-plus\"></i>  Login With Google</button>\n                </div>\n            </div>\n        \n    </div>\n  \n  </div>\n\n        <div class=\"container-fluid pt-2\" style=\"background-color: black;\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <h4 class=\"text-center\" style=\"color: antiquewhite;\"> Copyright &copy; 2018 FYERS</h4>\n                    <p class=\"text-center\" style=\"color: antiquewhite;\">All rights reserved</p>\n                </div>\n            </div>\n        </div>\n  \n</div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_route, router, toastr, vcr) {
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        console.log('login function has been called');
        // tslint:disable-next-line:curly
        if (this.clientId === null || this.clientId === undefined || this.clientId === ' ') {
            console.log('empty');
            this.toastr.warning('client ID cannot be empty', 'error');
        }
        else if (this.password === null || this.password === undefined || this.password === ' ') {
            console.log('password is empty');
            this.toastr.warning('password cannot be empty', 'error');
        }
        else if (this.dob === null || this.dob === undefined || this.dob === ' ') {
            console.log('date of birth is empty');
            this.toastr.warning('date of birth cannot be cannot be empty', 'error');
        }
        else if (this.clientId.length < 5 || this.clientId.length > 7) {
            this.toastr.warning('Client ID should be between 5 to 7 characters', 'error');
        }
        else {
            this.toastr.success('login successfully', 'Success!');
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/unlock-acct/unlock-acct.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nbody {\r\n    background: #222D32;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.login-box {\r\n    margin-top: 60px;\r\n    height: auto;\r\n    background: #1A2226;\r\n    text-align: center;\r\n    -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    padding-bottom: 2%;\r\n}\r\n\r\n.login-key {\r\n    height: 100px;\r\n    font-size: 80px;\r\n    line-height: 100px;\r\n    background: -webkit-linear-gradient(#27EF9F, #0DB8DE);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.login-title {\r\n    margin-top: 15px;\r\n    text-align: center;\r\n    font-size: 30px;\r\n    letter-spacing: 2px;\r\n    margin-top: 15px;\r\n    font-weight: bold;\r\n    color: #ECF0F5;\r\n}\r\n\r\n.login-form {\r\n    margin-top: 25px;\r\n    text-align: left;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 40px;\r\n    outline: 0px;\r\n}\r\n\r\ninput:focus {\r\n    outline: none;\r\n    -webkit-box-shadow: 0 0 0;\r\n            box-shadow: 0 0 0;\r\n}\r\n\r\nlabel {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.form-control-label {\r\n    font-size: 10px;\r\n    color: #6C6C6C;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.btn-outline-primary {\r\n    border-color: #0DB8DE;\r\n    color: #0DB8DE;\r\n    border-radius: 0px;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.btn-outline-primary:hover {\r\n    background-color: #0DB8DE;\r\n    right: 0px;\r\n}\r\n\r\n.login-btm {\r\n    float: left;\r\n}\r\n\r\n.login-button {\r\n    padding-right: 0px;\r\n    text-align: right;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.login-text {\r\n    text-align: left;\r\n    padding-left: 0px;\r\n    color: #A2A4A4;\r\n}\r\n\r\n.loginbttm {\r\n    padding: 0px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/unlock-acct/unlock-acct.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light \" style=\"background-color: #d9faff\">\n  <a class=\"navbar-brand\" href=\"#\"><img class=\"img-fluid\" src=\"../../assets/fyers-dark-logo.png\" ></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\">\n    \n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid\" style=\"background-color: #87e5da\">\n  \n  \n<div class =\"row\" >\n  <div class=\"col-md-12 col-sm-12\">\n\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col-lg-3 col-md-2\"></div>\n              <div class=\"col-lg-6 col-md-8 login-box\">\n                  \n                  <div class=\"col-lg-12 login-title p-1\">\n                      UNLOCK PASSWORD\n                  </div>\n  \n                  <div class=\"col-lg-12 login-form\">\n                      <div class=\"col-lg-12 login-form\">\n                          <form #LoginForm=\"ngForm\" (ngSubmit)=\"unlockAcct()\">\n                              <div class=\"form-group\">\n                                  <label class=\"form-control-label\">CLIENT ID</label>\n                                  <input type=\"text\" class=\"form-control\" name=\"clientId\" minlength=\"5\" maxlength=\"7\"  #ClientId=\"ngModel\" [(ngModel)]=\"clientId\" pattern=\"\" required oninput=\"this.value = this.value.toUpperCase()\">\n                                  <div [hidden]=\"ClientId.valid || ClientId.pristine\" class=\"alert alert-danger\">\n                                    min 5 characters and max 7 characters\n                                   </div>\n                              </div>\n                              \n                              <div class=\"form-group\">\n                                  <label class=\"form-control-label\">EMAIL</label>\n\n                                  <input type=\"email\" name=\"email\" #email1=\"ngModel\" class=\"form-control\"[(ngModel)]=\"email\" required>\n                                  <div [hidden]=\"email1.valid || email1.pristine\" class=\"alert alert-danger\">\n                                      @ is mandatory\n                                     </div>\n                                \n                              </div>\n                              \n                              <div class=\"form-group\">\n                                  <label class=\"form-control-label\">PAN NUMBER</label>\n                                \n                                  <input type=\"text\" class=\"form-control\" name=\"PAN\" minlength=\"10\" maxlength=\"10\"  #PAN=\"ngModel\" [(ngModel)]=\"pan\" pattern=\"\" required oninput=\"this.value = this.value.toUpperCase()\">\n                                  <div [hidden]=\"PAN.valid || PAN.pristine\" class=\"alert alert-danger\">\n                                    Enter 10 Digits PAN number\n                                   </div>\n                              </div>\n\n  \n                              <div class=\"col-lg-12 loginbttm\">\n                                  <div class=\"col-lg-6 login-btm login-text\">\n                                      <!-- Error Message -->\n                                  </div>\n                                  <div class=\"col-lg-6 login-btm login-button\">\n                                      <button type=\"submit\" class=\"btn btn-outline-primary\">SUBMIT</button>\n                                  </div>\n                              </div>\n                          </form>\n                          \n                          <a [routerLink]=\"['/login']\" style=\"color: #fd5f00;cursor: pointer;\">Login</a><br>\n                          <a [routerLink]=\"['/change']\" style=\"color: #fd5f00;cursor: pointer;\">Change Password</a><br>\n                          <a [routerLink]=\"['/forgot']\" style=\"color: #fd5f00;cursor: pointer;\">Forgot Account</a>\n                        \n                      </div>\n                  </div>\n                  <div class=\"col-lg-3 col-md-2\"></div>\n              </div>\n          </div>\n          \n \n</div>\n<br>\n</div>\n\n<div class=\"container-fluid pt-2\" style=\"background-color: black;\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h4 class=\"text-center\" style=\"color: antiquewhite;\"> Copyright &copy; 2018 FYERS</h4>\n            <p class=\"text-center\" style=\"color: antiquewhite;\">All rights reserved</p>\n        </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/unlock-acct/unlock-acct.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnlockAcctComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnlockAcctComponent = /** @class */ (function () {
    function UnlockAcctComponent(_route, router, toastr, vcr) {
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    UnlockAcctComponent.prototype.ngOnInit = function () {
    };
    UnlockAcctComponent.prototype.unlockAcct = function () {
        console.log('forgot password testing');
        if (this.clientId === null || this.clientId === undefined || this.clientId === ' ') {
            console.log('empty');
            this.toastr.warning('client ID cannot be empty', 'error');
        }
        else if (this.email === null || this.email === undefined || this.email === '') {
            this.toastr.warning('EMAIL ID cannot be empty', 'error');
        }
        else if (this.pan === null || this.pan === undefined || this.pan === '') {
            this.toastr.warning('PAN number cannot be empty', 'error');
        }
        else if (this.pan.length < 10 || this.pan.length > 10) {
            this.toastr.warning('PAN number cannot be less than 10', 'error');
        }
        else if (this.clientId.length < 5 || this.clientId.length > 7) {
            this.toastr.warning('Client ID should be between 5 to 7 characters', 'error');
        }
        else {
            this.toastr.success('Confirmation mail sent :)', 'Success!');
        }
    };
    UnlockAcctComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-unlock-acct',
            template: __webpack_require__("./src/app/unlock-acct/unlock-acct.component.html"),
            styles: [__webpack_require__("./src/app/unlock-acct/unlock-acct.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], UnlockAcctComponent);
    return UnlockAcctComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map