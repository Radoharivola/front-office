(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+An/":
/*!************************************************!*\
  !*** ./src/app/services/preference.service.ts ***!
  \************************************************/
/*! exports provided: PreferenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferenceService", function() { return PreferenceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var PreferenceService = /** @class */ (function () {
    function PreferenceService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            withCredentials: true,
            observe: 'response'
        };
    }
    PreferenceService.prototype.getPrefServices = function () {
        return this.http.get('https://m1p11mean-aro-kenny-1.onrender.com/preference/my-pref-services', this.httpOptions);
    };
    PreferenceService.prototype.getPrefEmps = function () {
        return this.http.get('https://m1p11mean-aro-kenny-1.onrender.com/preference/my-pref-emps', this.httpOptions);
    };
    PreferenceService.prototype.updatePrefService = function (service) {
        return this.http.post('https://m1p11mean-aro-kenny-1.onrender.com/preference/update-pref-service', service, this.httpOptions);
    };
    PreferenceService.prototype.updatePrefEmp = function (emp) {
        return this.http.post('https://m1p11mean-aro-kenny-1.onrender.com/preference/update-pref-emp', emp, this.httpOptions);
    };
    PreferenceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    PreferenceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PreferenceService);
    return PreferenceService;
}());



/***/ }),

/***/ "+TKo":
/*!**************************************************!*\
  !*** ./src/app/pages/navbar/navbar.component.ts ***!
  \**************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "HhcO");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.scss */ "o+hN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");









var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(spinner, router, userservice) {
        this.spinner = spinner;
        this.router = router;
        this.userservice = userservice;
        this.isCollapsed = true;
        this.isLoggedIn = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe(function (event) {
            if (event.urlAfterRedirects === '/') {
                _this.scrollToAppointment();
            }
        });
        this.isLoggedIn = this.userservice.isLoggedIn();
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    NavbarComponent.prototype.scrollToAppointment = function () {
        setTimeout(function () {
            var appointmentElement = document.getElementById('appointment');
            if (appointmentElement) {
                appointmentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.spinner.show();
        this.userservice.logout().subscribe(function (res) {
            localStorage.removeItem('uToken');
            localStorage.removeItem('username');
            _this.router.navigate(['/login']);
            window.location.reload();
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
    ]; };
    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\s7\web\PROJECTS\front-office\src\main.ts */"zUnb");


/***/ }),

/***/ "2a7U":
/*!********************************************************!*\
  !*** ./src/app/pages/some-shit/some-shit.component.ts ***!
  \********************************************************/
/*! exports provided: SomeShitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SomeShitComponent", function() { return SomeShitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_some_shit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./some-shit.component.html */ "Gtbq");
/* harmony import */ var _some_shit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./some-shit.component.scss */ "ywPk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var SomeShitComponent = /** @class */ (function () {
    // isCollapsed = true;
    // focus;
    // focus1;
    // focus2;
    // date = new Date();
    // pagination = 3;
    // pagination1 = 1;
    function SomeShitComponent() {
    }
    SomeShitComponent.prototype.ngOnDestroy = function () {
        // var body = document.getElementsByTagName("body")[0];
        // body.classList.remove("index-page");
        throw new Error('Method not implemented.');
    };
    SomeShitComponent.prototype.ngOnInit = function () {
        // var body = document.getElementsByTagName("body")[0];
        // body.classList.add("index-page");
        // var slider = document.getElementById("sliderRegular");
        // noUiSlider.create(slider, {
        //   start: 40,
        //   connect: false,
        //   range: {
        //     min: 0,
        //     max: 100
        //   }
        // });
        // var slider2 = document.getElementById("sliderDouble");
        // noUiSlider.create(slider2, {
        //   start: [20, 60],
        //   connect: true,
        //   range: {
        //     min: 0,
        //     max: 100
        //   }
        // });
        throw new Error('Method not implemented.');
    };
    SomeShitComponent.ctorParameters = function () { return []; };
    SomeShitComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-some-shit',
            template: _raw_loader_some_shit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_some_shit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SomeShitComponent);
    return SomeShitComponent;
}());



/***/ }),

/***/ "33AS":
/*!**************************************************!*\
  !*** ./src/app/pages/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "UJ+o");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.scss */ "BIXy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "69r7":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registerpage/registerpage.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n  <div class=\"page-header\">\r\n    <div class=\"page-header-image\"></div>\r\n    <div class=\"content\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-5 col-md-6 offset-lg-0 offset-md-3\">\r\n            <div class=\"square square-7\" id=\"square7\"></div>\r\n            <div class=\"square square-8\" id=\"square8\"></div>\r\n            <div class=\"card card-register\">\r\n              <div class=\"card-header\">\r\n                <img alt=\"Card image\" class=\"card-img\" src=\"assets/img/square1-red.png\" />\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <form class=\"form\" [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmit()\">\r\n                  <div class=\"input-group\" [ngClass]=\"{ 'input-group-focus': focus0 === true }\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <div class=\"input-group-text\">\r\n                        <i class=\"tim-icons icon-badge\"> </i>\r\n                      </div>\r\n                    </div>\r\n                    <input class=\"form-control\" formControlName=\"identifiant\" placeholder=\"identifiant\"\r\n                      (focus)=\"focus0 = true\" (blur)=\"focus0 = false\" />\r\n                    <div\r\n                      *ngIf=\"registrationForm.get('identifiant').invalid && registrationForm.get('identifiant').touched\"\r\n                      class=\"error-message\">\r\n                      Requis\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"input-group\" [ngClass]=\"{ 'input-group-focus': focus1 === true }\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <div class=\"input-group-text\">\r\n                        <i class=\"tim-icons icon-triangle-right-17\"> </i>\r\n                      </div>\r\n                    </div>\r\n                    <input class=\"form-control\" formControlName=\"nom\" placeholder=\"Nom\" (focus)=\"focus1 = true\"\r\n                      (blur)=\"focus1 = false\" />\r\n                    <div *ngIf=\"registrationForm.get('nom').invalid && registrationForm.get('nom').touched\"\r\n                      class=\"error-message\">\r\n                      Requis\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"input-group\" [ngClass]=\"{ 'input-group-focus': focus2 === true }\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <div class=\"input-group-text\">\r\n                        <i class=\"tim-icons icon-triangle-right-17\"> </i>\r\n                      </div>\r\n                    </div>\r\n                    <input class=\"form-control\" formControlName=\"prenoms\" placeholder=\"Prénoms\" (focus)=\"focus2 = true\"\r\n                      (blur)=\"focus2 = false\" />\r\n                    <div *ngIf=\"registrationForm.get('prenoms').invalid && registrationForm.get('prenoms').touched\"\r\n                      class=\"error-message\">\r\n                      Requis\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"input-group\" [ngClass]=\"{ 'input-group-focus': focus3 === true }\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <div class=\"input-group-text\">\r\n                        <i class=\"tim-icons icon-email-85\"> </i>\r\n                      </div>\r\n                    </div>\r\n                    <input class=\"form-control\" formControlName=\"email\" placeholder=\"Email\" (focus)=\"focus3 = true\"\r\n                      (blur)=\"focus3 = false\" />\r\n                    <div *ngIf=\"registrationForm.get('email').invalid && registrationForm.get('email').touched\"\r\n                      class=\"error-message\">\r\n                      Requis\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"input-group\" [ngClass]=\"{ 'input-group-focus': focus5 === true }\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <div class=\"input-group-text\">\r\n                        <i class=\"tim-icons icon-mobile\"> </i>\r\n                      </div>\r\n                    </div>\r\n                    <input class=\"form-control\" formControlName=\"telephone\" placeholder=\"Telephone\"\r\n                      (focus)=\"focus5 = true\" (blur)=\"focus5 = false\" />\r\n                    <div *ngIf=\"registrationForm.get('telephone').invalid && registrationForm.get('telephone').touched\"\r\n                      class=\"error-message\">\r\n                      Requis\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"input-group\" [ngClass]=\"{ 'input-group-focus': focus4 === true }\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <div class=\"input-group-text\">\r\n                        <i class=\"tim-icons icon-key-25\"> </i>\r\n                      </div>\r\n                    </div>\r\n                    <input class=\"form-control\" formControlName=\"motDePasse\" placeholder=\"Mot de passe\"\r\n                      (focus)=\"focus4 = true\" (blur)=\"focus4 = false\" />\r\n                    <div\r\n                      *ngIf=\"registrationForm.get('motDePasse').invalid && registrationForm.get('motDePasse').touched\"\r\n                      class=\"error-message\">\r\n                      Requis\r\n                    </div>\r\n                  </div>\r\n                  <ngx-dropzone (change)=\"onSelect($event)\" accept=\"image/jpeg,image/jpg,image/png,image/gif\"\r\n                    multiple=\"false\" class=\"dropzone\">\r\n                    <ngx-dropzone-label>Choisir photo de profil / déposer!</ngx-dropzone-label>\r\n                    <ngx-dropzone-image-preview ngProjectAs=\"ngx-dropzone-preview\" *ngFor=\"let f of files\" [file]=\"f\"\r\n                      [removable]=\"true\" (removed)=\"onRemove(f)\">\r\n                    </ngx-dropzone-image-preview>\r\n                  </ngx-dropzone>\r\n                  <div *ngIf=\"fileEmpty\" class=\"dz-error-message\">\r\n                    Veuillez choisir une photo de profil\r\n                  </div>\r\n                  <alert *ngIf=\"error\" class=\"alert\" [type]=\"'danger alert'\" [dismissible]=\"true\">\r\n                    <span> {{message}}\r\n                    </span>\r\n                  </alert>\r\n                  <alert *ngIf=\"success\" class=\"alert-with-icon\" [type]=\"'success alert-with-icon'\"\r\n                    [dismissible]=\"true\">\r\n                    <span class=\"tim-icons icon-check-2\" data-notify=\"icon\"> </span>\r\n                    <span>\r\n                      <b> Yay! </b> {{message}}\r\n                    </span>\r\n                  </alert>\r\n                  <ngx-spinner type=\"ball-scale-multiple\" color=\"#fd5d93\" bdColor=\"rgba(0, 0, 0, 0.8)\"></ngx-spinner>\r\n\r\n                </form>\r\n              </div>\r\n              <div class=\"card-footer\">\r\n                <button type=\"submit\" class=\"btn btn-danger btn-round btn-lg\" (click)=\"onSubmit()\">S'inscrire</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"register-bg\"></div>\r\n        <div class=\"square square-1\" id=\"square1\"></div>\r\n        <div class=\"square square-2\" id=\"square2\"></div>\r\n        <div class=\"square square-3\" id=\"square3\"></div>\r\n        <div class=\"square square-4\" id=\"square4\"></div>\r\n        <div class=\"square square-5\" id=\"square5\"></div>\r\n        <div class=\"square square-6\" id=\"square6\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "8g+j":
/*!*********************************************!*\
  !*** ./src/app/pipes/relative-time.pipe.ts ***!
  \*********************************************/
/*! exports provided: RelativeTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelativeTimePipe", function() { return RelativeTimePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var RelativeTimePipe = /** @class */ (function () {
    function RelativeTimePipe() {
    }
    RelativeTimePipe.prototype.transform = function (value) {
        var date = new Date(value);
        var now = new Date();
        var diff = date.getTime() - now.getTime();
        var seconds = Math.floor(Math.abs(diff) / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);
        if (diff > 0) {
            if (days > 0) {
                // Display the entire date when days > 0
                return this.formatDate(date);
            }
            else if (hours > 0) {
                return "Dans " + hours + " heure" + (hours > 1 ? 's' : '');
            }
            else if (minutes > 0) {
                return "Dans " + minutes + " minute" + (minutes > 1 ? 's' : '');
            }
            else {
                return "Dans " + seconds + " seconde" + (seconds > 1 ? 's' : '');
            }
        }
        else {
            if (days > 0) {
                // Display the entire date when days > 0
                return "Il y a " + days + " jour" + (days > 1 ? 's' : '');
            }
            else if (hours > 0) {
                return "Il y a " + hours + " heure" + (hours > 1 ? 's' : '');
            }
            else if (minutes > 0) {
                return "Il y a " + minutes + " minute" + (minutes > 1 ? 's' : '');
            }
            else {
                return "Il y a " + seconds + " seconde" + (seconds > 1 ? 's' : '');
            }
        }
    };
    RelativeTimePipe.prototype.formatDate = function (date) {
        var daysOfWeek = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
        var months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
        var dayOfWeek = daysOfWeek[date.getDay()];
        var dayOfMonth = date.getDate();
        var month = months[date.getMonth()];
        var hours = date.getHours();
        var minutes = date.getMinutes();
        return dayOfWeek + " " + dayOfMonth + " " + month + " \u00E0 " + hours + ":" + minutes.toString().padStart(2, '0');
    };
    RelativeTimePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'relativeTime'
        })
    ], RelativeTimePipe);
    return RelativeTimePipe;
}());



/***/ }),

/***/ "Ann2":
/*!*******************************************!*\
  !*** ./src/app/services/offer.service.ts ***!
  \*******************************************/
/*! exports provided: OfferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferService", function() { return OfferService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var OfferService = /** @class */ (function () {
    function OfferService(http) {
        this.http = http;
    }
    OfferService.prototype.getOffers = function (_a) {
        var date = _a.date;
        return this.http.get('https://m1p11mean-aro-kenny-1.onrender.com/offer/offers/' + date);
    };
    OfferService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    OfferService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OfferService);
    return OfferService;
}());



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BIXy":
/*!****************************************************!*\
  !*** ./src/app/pages/footer/footer.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ "F+yX":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profilepage/profilepage.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n  <div class=\"page-header\">\r\n    <img class=\"dots\" src=\"assets/img/dots.png\" />\r\n\r\n    <img class=\"path\" src=\"assets/img/path4.png\" />\r\n\r\n    <div class=\"container align-items-center\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-lg-12 col-md-12 ml-auto mr-auto\">\r\n          <div class=\"card card-coin card-plain\">\r\n            <div class=\"card-header\">\r\n              <img class=\"img-center img-fluid rounded-circle\" [src]=\"image\" />\r\n\r\n              <!-- <h4 class=\"title\">{{user.firstName}} {{user.lastName}}</h4> -->\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <tabset class=\"nav-tabs-danger justify-content-center tab-subcategories\">\r\n                <tab>\r\n                  <ng-template tabHeading>\r\n                    <i class=\"tim-icons icon-notes\"> </i> historique\r\n                  </ng-template>\r\n                  <div *ngIf=\"rdvs && rdvs.length > 0; else noRdv\" class=\"scrollable-table-container\"\r\n                    (scroll)=\"onContainerScroll()\">\r\n                    <table class=\"table\" id=\"plain-table\">\r\n                      <thead class=\"text-danger\">\r\n                        <tr>\r\n                          <th class=\"header\"><button class=\"btn btn-link btn-danger mr-1\"\r\n                              (click)=\"flipDateSort()\">Date</button></th>\r\n                          <th class=\"header\">services</th>\r\n                          <th class=\"header\">employé</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let rdv of rdvs\">\r\n                          <td>{{rdv.date | relativeTime}}</td>\r\n                          <td>\r\n                            <ul>\r\n                              <li *ngFor=\"let service of rdv.services\">\r\n                                <p class=\"text-white mt-4\">{{service.name}}</p>\r\n                              </li>\r\n                            </ul>\r\n                          </td>\r\n                          <td>{{rdv.employee.firstName}} {{rdv.employee.lastName}}</td>\r\n                          <td>\r\n                            <!-- <button class=\"btn btn-default btn-icon mr-1\" type=\"button\" data-target=\"#myModal\" (click)=\"myModal.show();loadRdvData(rdv._id)\"> -->\r\n                            <button class=\"btn btn-default btn-icon mr-1\" type=\"button\" data-target=\"#myModal\"\r\n                              (click)=\"myModal.show();\">\r\n                              <i class=\"tim-icons icon-settings-gear-63\"> </i>\r\n                            </button>\r\n                            <!-- <button class=\"btn btn-danger btn-icon mr-1\" type=\"button\" (click)=\"delete(rdv._id)\">\r\n                              <i class=\"tim-icons icon-trash-simple\"> </i>\r\n                            </button> -->\r\n                            <button class=\"btn btn-danger btn-icon mr-1\" type=\"button\" data-target=\"#myModal1\"\r\n                              (click)=\"myModal1.show();tempId(rdv._id)\">\r\n                              <i class=\"tim-icons icon-trash-simple\"> </i>\r\n                            </button>\r\n\r\n\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n\r\n                  </div>\r\n                  <ng-template #noRdv>\r\n                    <div class=\"text-muted text-center\">\r\n                      <p>Aucun rendez-vous</p>\r\n                    </div>\r\n\r\n\r\n                  </ng-template>\r\n                </tab>\r\n\r\n                <tab heading=\"Employés\">\r\n                  <div class=\"scrollable-table-container\">\r\n                    <div *ngIf=\"prefEmps && prefEmps.length > 0; else noPE\" (scroll)=\"onContainerScroll()\">\r\n                      <table class=\"table\" id=\"plain-table\">\r\n                        <thead class=\"text-danger\">\r\n                          <tr>\r\n                            <th class=\"header\">employé pref</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let pref of prefEmps\">\r\n\r\n                            <td>{{pref.employee.firstName}} {{pref.employee.lastName}}</td>\r\n                            <td>\r\n                              <button class=\"btn btn-danger btn-icon mr-1\" type=\"button\" data-target=\"#myModal1\"\r\n                                (click)=\"updatePrefEmp(pref.employee)\">\r\n                                <i class=\"tim-icons icon-trash-simple\"> </i>\r\n                              </button>\r\n\r\n\r\n                            </td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n\r\n                    </div>\r\n                    <ng-template #noPE>\r\n                      <div class=\"text-muted text-center\">\r\n                        <p>Aucun employé préféré</p>\r\n                      </div>\r\n\r\n\r\n                    </ng-template>\r\n                    <hr />\r\n                    <div *ngIf=\"employees && employees.length > 0; else noEmp\" (scroll)=\"onContainerScroll()\">\r\n                      <table class=\"table\" id=\"plain-table\">\r\n                        <thead class=\"text-danger\">\r\n                          <tr>\r\n                            <th class=\"header\">employé</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <ng-container *ngFor=\"let emp of employees\">\r\n                            <tr *ngIf=\"!isInPrefEmps(emp)\">\r\n                              <td>{{emp.firstName}} {{emp.lastName}}</td>\r\n                              <td>\r\n                                <!-- <button class=\"btn btn-default btn-icon mr-1\" type=\"button\" data-target=\"#myModal\" (click)=\"myModal.show();loadRdvData(rdv._id)\"> -->\r\n                                <button class=\"btn btn-default btn-icon mr-1\" type=\"button\" data-target=\"#myModal\"\r\n                                  (click)=\"updatePrefEmp(emp)\">\r\n                                  <i class=\"tim-icons icon-heart-2\"> </i>\r\n                                </button>\r\n\r\n                              </td>\r\n                            </tr>\r\n                          </ng-container>\r\n                        </tbody>\r\n                      </table>\r\n\r\n                    </div>\r\n                    <ng-template #noEmp>\r\n                      <div class=\"text-muted text-center\">\r\n                        <p>Aucun employé</p>\r\n                      </div>\r\n\r\n\r\n                    </ng-template>\r\n                  </div>\r\n                </tab>\r\n                <tab heading=\"Services\">\r\n                  <div class=\"scrollable-table-container\">\r\n                    <div *ngIf=\"prefServices && prefServices.length > 0; else noPS\" (scroll)=\"onContainerScroll()\">\r\n                      <table class=\"table\" id=\"plain-table\">\r\n                        <thead class=\"text-danger\">\r\n                          <tr>\r\n                            <th class=\"header\">Services préférés</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let pref of prefServices\">\r\n                            <td>{{pref.service.name}}</td>\r\n                            <td>\r\n                              <button class=\"btn btn-danger btn-icon mr-1\" type=\"button\" data-target=\"#myModal1\"\r\n                                (click)=\"updatePrefService(pref.service)\">\r\n                                <i class=\"tim-icons icon-trash-simple\"> </i>\r\n                              </button>\r\n                            </td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n\r\n                    </div>\r\n                    <ng-template #noPS>\r\n                      <div class=\"text-muted text-center\">\r\n                        <p>Aucun service préféré</p>\r\n                      </div>\r\n\r\n\r\n                    </ng-template>\r\n                    <hr />\r\n                    <div *ngIf=\"services && services.length > 0; else noS\" (scroll)=\"onContainerScroll()\">\r\n                      <table class=\"table\" id=\"plain-table\">\r\n                        <thead class=\"text-danger\">\r\n                          <tr>\r\n                            <th class=\"header\">Service</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <ng-container *ngFor=\"let service of services\">\r\n\r\n                            <tr *ngIf=\"!isInPrefServices(service)\">\r\n\r\n                              <td>{{service.name}}</td>\r\n                              <td>\r\n                                <!-- <button class=\"btn btn-default btn-icon mr-1\" type=\"button\" data-target=\"#myModal\" (click)=\"myModal.show();loadRdvData(rdv._id)\"> -->\r\n                                <button class=\"btn btn-default btn-icon mr-1\" type=\"button\" data-target=\"#myModal\"\r\n                                  (click)=\"updatePrefService(service)\">\r\n                                  <i class=\"tim-icons icon-heart-2\"> </i>\r\n                                </button>\r\n\r\n                              </td>\r\n                            </tr>\r\n                          </ng-container>\r\n\r\n                        </tbody>\r\n                      </table>\r\n\r\n                    </div>\r\n                    <ng-template #noS>\r\n                      <div class=\"text-muted text-center\">\r\n                        <p>Aucun service</p>\r\n                      </div>\r\n\r\n\r\n                    </ng-template>\r\n                  </div>\r\n                </tab>\r\n                <tab heading=\"Mon profil\">\r\n                  <div class=\"scrollable-table-container\">\r\n                    <div class=\"text-muted text-center\">\r\n                      <p>Solde: {{solde}}</p>\r\n                    </div>\r\n                    <input [(ngModel)]=\"refill\" type=\"number\" min=\"10000\">\r\n                    <a (click)=\"refillBank()\">recharge</a>\r\n\r\n                  </div>\r\n                </tab>\r\n              </tabset>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ngx-spinner type=\"ball-scale-multiple\" color=\"#fd5d93\" bdColor=\"rgba(0, 0, 0, 0.8)\"></ngx-spinner>\r\n\r\n  <div class=\"section\">\r\n    <div class=\"container\">\r\n      <div aria-hidden=\"true\" aria-labelledby=\"myModalLabel\" bsModal class=\"modal fade\" #myModal=\"bs-modal\" id=\"myModal\"\r\n        role=\"dialog\" tabindex=\"-1\">\r\n        <div class=\"modal-dialog\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header justify-content-center\">\r\n              <button aria-hidden=\"true\" class=\"close\" data-dismiss=\"modal\" type=\"button\" (click)=\"myModal.hide()\">\r\n                <i class=\"tim-icons icon-simple-remove\"> </i>\r\n              </button>\r\n              <h4 class=\"title title-up\">Modifier rendez-vous</h4>\r\n            </div>\r\n            <div class=\"modal-body text-center\">\r\n              EDIT RDV\r\n              <!-- <div class=\"card card-register\">\r\n\r\n                <div class=\"card-body\">\r\n                  <form class=\"form\" (ngSubmit)=\"submitForm()\">\r\n  \r\n                    <div class=\"input-group\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <div class=\"input-group-text\">\r\n                          <i class=\"tim-icons icon-calendar-60\"> </i>\r\n                        </div>\r\n                      </div>\r\n                      <input class=\"form-control\" type=\"datetime-local\" name=\"date\" [(ngModel)]=\"formData.date\"\r\n                        required />\r\n                    </div>\r\n                    <div class=\"input-group\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <div class=\"input-group-text\">\r\n                          <i class=\"tim-icons icon-single-02\"> </i>\r\n                        </div>\r\n                      </div>\r\n                      <select class=\"form-control\" name=\"employee\" [(ngModel)]=\"formData.employee\">\r\n                        <option [ngValue]=\"null\" class=\"form-control\">\r\n                          Non spécifié\r\n                        </option>\r\n                        <option [ngValue]=\"employee._id\" class=\"form-control\" *ngFor=\"let employee of employees;\" [selected]=\"employees[0]._id\">\r\n                          {{ employee.firstName }} {{employee.lastName }}\r\n                        </option>\r\n  \r\n                      </select>\r\n                    </div>\r\n                    <hr />\r\n  \r\n                    <p class=\"category\">Veuillez choisir les Services</p>\r\n                    <span class=\"category\">Total: {{ totalPrice | currency }}</span>\r\n  \r\n                    <div class=\"row\" *ngIf=\"services\">\r\n                      <div class=\"col-md-6\" *ngFor=\"let service of services\">\r\n                        <div class=\"form-check\">\r\n                          <label class=\"form-check-label\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\"\r\n                              (change)=\"updateSelectedServices(service, $event.target.checked)\" />\r\n                            <span class=\"form-check-sign\"> </span> {{service.name}}\r\n                          </label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr />\r\n                    <div class=\"input-group\">\r\n                      <span class=\"category\">Avance (mobile money)</span>\r\n                      <bSwitch [switch-on-color]=\"'blue'\" [switch-on-text]=\"'oui'\" [switch-off-text]=\"'non'\"\r\n                        [switch-off-color]=\"'danger'\" [(ngModel)]=\"isSwitchOn\" name=\"bswitch\"></bSwitch>\r\n                    </div>\r\n                    <div *ngIf=\"isSwitchOn\">\r\n                      <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <div class=\"input-group-text\">\r\n                            <i class=\"tim-icons icon-single-02\"> </i>\r\n                          </div>\r\n                        </div>\r\n                        <input class=\"form-control\" placeholder=\"Numero\" type=\"text\" pattern=\"[0-9]{10}\"\r\n                          title=\"Please enter a valid phone number (10 digits)\" name=\"numero\"\r\n                          [(ngModel)]=\"formData.numero\" required />\r\n                      </div>\r\n                      <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <div class=\"input-group-text\">\r\n                            <i class=\"tim-icons icon-money-coins\"> </i>\r\n                          </div>\r\n                        </div>\r\n                        <input class=\"form-control\" placeholder=\"Montant\" type=\"number\" name=\"paid\"\r\n                          [(ngModel)]=\"formData.paid\" />\r\n                      </div>\r\n                    </div>\r\n                    <alert *ngIf=\"error\" class=\"alert-with-icon\" [type]=\"'warning alert-with-icon'\" [dismissible]=\"true\">\r\n                      <span class=\"tim-icons icon-alert-circle-exc\" data-notify=\"icon\"> </span>\r\n                      <span>\r\n                        <b> Oups! </b> {{message}}\r\n                      </span>\r\n                    </alert>\r\n                    <alert *ngIf=\"success\" class=\"alert-with-icon\" [type]=\"'success alert-with-icon'\"\r\n                      [dismissible]=\"true\">\r\n                      <span class=\"tim-icons icon-check-2\" data-notify=\"icon\"> </span>\r\n                      <span>\r\n                        <b> Yay! </b> {{message}}\r\n                      </span>\r\n                    </alert>\r\n                    <div class=\"input-group\">\r\n                      <input class=\"btn btn-danger btn-round btn-lg\" type=\"submit\" value=\"Valider\" />\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div> -->\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button class=\"btn btn-default\" type=\"button\">Valider</button>\r\n              <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" (click)=\"myModal.hide()\">\r\n                Annuler\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div aria-hidden=\"true\" aria-labelledby=\"myModalLabel\" bsModal\r\n        class=\"modal fade modal-mini modal-warning modal-mini\" #myModal1=\"bs-modal\" id=\"myModal1\" role=\"dialog\"\r\n        tabindex=\"-1\">\r\n        <div class=\"modal-dialog\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n              <p>Supprimer ce rendez-vous?</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button class=\"btn btn-link btn-neutral\" type=\"button\" (click)=\"delete();myModal1.hide()\">Oui</button>\r\n              <button class=\"btn btn-link btn-neutral\" data-dismiss=\"modal\" type=\"button\"\r\n                (click)=\"myModal1.hide();tempId('')\">\r\n                Annuler\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "Gtbq":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/some-shit/some-shit.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <div class=\"page-header header-filter\">\r\n      <div class=\"squares square1\"></div>\r\n      <div class=\"squares square2\"></div>\r\n      <div class=\"squares square3\"></div>\r\n      <div class=\"squares square4\"></div>\r\n      <div class=\"squares square5\"></div>\r\n      <div class=\"squares square6\"></div>\r\n      <div class=\"squares square7\"></div>\r\n      <div class=\"container\">\r\n        <div class=\"content-center brand\">\r\n          <h1 class=\"h1-seo\">BLK•</h1>\r\n          <h3>\r\n            A beautiful Design System for Bootstrap 4 and Angular. It's Free and\r\n            Open Source.\r\n          </h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"main\">\r\n      <div class=\"section section-basic\" id=\"basic-elements\">\r\n        <img class=\"path\" src=\"assets/img/path1.png\" />\r\n  \r\n        <div class=\"container\">\r\n          <h2 class=\"title\">Basic Elements</h2>\r\n          <h3>Buttons</h3>\r\n          <p class=\"category\">Pick your style</p>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-10\">\r\n              <button class=\"btn btn-primary mr-1\" type=\"button\">Default</button>\r\n              <button class=\"btn btn-primary btn-round mr-1\" type=\"button\">\r\n                Round\r\n              </button>\r\n              <button class=\"btn btn-primary btn-round mr-1\" type=\"button\">\r\n                <i class=\"tim-icons icon-heart-2\"> </i> With Icon\r\n              </button>\r\n              <button class=\"btn btn-primary btn-icon btn-round mr-1\" type=\"button\">\r\n                <i class=\"tim-icons icon-heart-2\"> </i>\r\n              </button>\r\n              <button class=\"btn btn-primary btn-simple btn-round\" type=\"button\">\r\n                Simple\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <p class=\"category\">Pick your size</p>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-10\">\r\n              <button class=\"btn btn-primary btn-sm mr-1\">Small</button>\r\n              <button class=\"btn btn-primary mr-1\">Regular</button>\r\n              <button class=\"btn btn-primary btn-lg\">Large</button>\r\n            </div>\r\n          </div>\r\n          <p class=\"category\">Pick your color</p>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <button class=\"btn mr-1\">Default</button>\r\n              <button class=\"btn btn-primary mr-1\">Primary</button>\r\n              <button class=\"btn btn-info mr-1\">Info</button>\r\n              <button class=\"btn btn-success mr-1\">Success</button>\r\n              <button class=\"btn btn-warning mr-1\">Warning</button>\r\n              <button class=\"btn btn-danger mr-1\">Danger</button>\r\n              <button class=\"btn btn-neutral\">Neutral</button>\r\n            </div>\r\n          </div>\r\n          <br />\r\n  \r\n          <h3>Links</h3>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n              <button class=\"btn btn-link mr-1\">Default</button>\r\n              <button class=\"btn btn-link btn-primary mr-1\">Primary</button>\r\n              <button class=\"btn btn-link btn-info mr-1\">Info</button>\r\n              <button class=\"btn btn-link btn-success mr-1\">Success</button>\r\n              <button class=\"btn btn-link btn-warning mr-1\">Warning</button>\r\n              <button class=\"btn btn-link btn-danger\">Danger</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"space-70\"></div>\r\n          <div id=\"inputs\">\r\n            <h3>Inputs</h3>\r\n            <p class=\"category\">Form Controls</p>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6 col-lg-3\">\r\n                <div class=\"form-group\">\r\n                  <input class=\"form-control\" placeholder=\"Regular\" type=\"text\" value=\"\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-6 col-lg-3\">\r\n                <div class=\"form-group has-success\">\r\n                  <input class=\"form-control form-control-success\" type=\"text\" value=\"Success\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-6 col-lg-3\">\r\n                <div class=\"form-group has-danger\">\r\n                  <input class=\"form-control form-control-danger\" type=\"email\" value=\"Error Input\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-6 col-lg-3\">\r\n                <div class=\"input-group\" [ngClass]=\"{ 'input-group-focus': focus === true }\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">\r\n                      <i class=\"fa fa-user\"> </i>\r\n                    </span>\r\n                  </div>\r\n                  <input class=\"form-control\" placeholder=\"Left Font Awesome Icon\" type=\"text\" (focus)=\"focus = true\"\r\n                    (blur)=\"focus = false\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-6 col-lg-3\">\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" placeholder=\"Right Nucleo Icon\" type=\"text\" />\r\n  \r\n                  <div class=\"input-group-append\">\r\n                    <span class=\"input-group-text\">\r\n                      <i class=\"tim-icons icon-lock-circle\"> </i>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"space-70\"></div>\r\n          <div class=\"row\" id=\"checkRadios\">\r\n            <div class=\"col-sm-6 col-lg-3\">\r\n              <p class=\"category\">Checkboxes</p>\r\n              <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                  <input class=\"form-check-input\" type=\"checkbox\" />\r\n  \r\n                  <span class=\"form-check-sign\"> </span> Unchecked\r\n                </label>\r\n              </div>\r\n              <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                  <input checked=\"checked\" class=\"form-check-input\" type=\"checkbox\" />\r\n  \r\n                  <span class=\"form-check-sign\"> </span> Checked\r\n                </label>\r\n              </div>\r\n              <div class=\"form-check disabled\">\r\n                <label class=\"form-check-label\">\r\n                  <input class=\"form-check-input\" disabled=\"disabled\" type=\"checkbox\" />\r\n  \r\n                  <span class=\"form-check-sign\"> </span> Disabled Unchecked\r\n                </label>\r\n              </div>\r\n              <div class=\"form-check disabled\">\r\n                <label class=\"form-check-label\">\r\n                  <input checked=\"checked\" class=\"form-check-input\" disabled=\"disabled\" type=\"checkbox\" />\r\n  \r\n                  <span class=\"form-check-sign\"> </span> Disabled Checked\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-3\">\r\n              <p class=\"category\">Radios</p>\r\n              <div class=\"form-check form-check-radio\">\r\n                <label class=\"form-check-label\">\r\n                  <input class=\"form-check-input\" id=\"exampleRadios1\" name=\"exampleRadios\" type=\"radio\" value=\"option1\" />\r\n  \r\n                  <span class=\"form-check-sign\"> </span> Radio is off\r\n                </label>\r\n              </div>\r\n              <div class=\"form-check form-check-radio\">\r\n                <label class=\"form-check-label\">\r\n                  <input checked=\"checked\" class=\"form-check-input\" id=\"exampleRadios1\" name=\"exampleRadios\" type=\"radio\"\r\n                    value=\"option2\" />\r\n  \r\n                  <span class=\"form-check-sign\"> </span> Radio is on\r\n                </label>\r\n              </div>\r\n              <div class=\"form-check form-check-radio disabled\">\r\n                <label class=\"form-check-label\">\r\n                  <input class=\"form-check-input\" disabled=\"disabled\" id=\"exampleRadios2\" name=\"exampleRadios1\"\r\n                    type=\"radio\" value=\"option3\" />\r\n  \r\n                  <span class=\"form-check-sign\"> </span> Disabled radio is off\r\n                </label>\r\n              </div>\r\n              <div class=\"form-check form-check-radio disabled\">\r\n                <label class=\"form-check-label\">\r\n                  <input checked=\"checked\" class=\"form-check-input\" disabled=\"disabled\" id=\"exampleRadios2\"\r\n                    name=\"exampleRadios1\" type=\"radio\" value=\"option4\" />\r\n  \r\n                  <span class=\"form-check-sign\"> </span> Disabled radio is on\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-3\">\r\n              <p class=\"category\">Toggle Buttons</p>\r\n              <bSwitch [switch-on-color]=\"'danger'\" [switch-off-color]=\"'danger'\" [switch-off-text]=\"' '\"\r\n                [switch-on-text]=\"' '\">\r\n              </bSwitch>\r\n              <br />\r\n              <bSwitch [switch-on-color]=\"'danger'\" [switch-off-color]=\"'danger'\">\r\n              </bSwitch>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-3\">\r\n              <p class=\"category\">Sliders</p>\r\n              <div class=\"slider\" id=\"sliderRegular\"></div>\r\n              <br />\r\n  \r\n              <div class=\"slider slider-danger\" id=\"sliderDouble\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"section section-navbars\">\r\n        <img class=\"path\" src=\"assets/img/path3.png\" />\r\n  \r\n        <div class=\"container\" id=\"menu-dropdown\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <h4>Menu</h4>\r\n              <nav class=\"navbar navbar-expand-lg bg-primary\">\r\n                <div class=\"container\">\r\n                  <a class=\"navbar-brand\" href=\"javascript:void(0)\"> Menu </a>\r\n                  <button aria-controls=\"navbarSupportedContent\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\"\r\n                    [attr.aria-expanded]=\"!isCollapsed\" (click)=\"isCollapsed = !isCollapsed\" id=\"example-navbar\"\r\n                    type=\"button\">\r\n                    <span class=\"navbar-toggler-bar bar1\"> </span>\r\n                    <span class=\"navbar-toggler-bar bar2\"> </span>\r\n                    <span class=\"navbar-toggler-bar bar3\"> </span>\r\n                  </button>\r\n                  <div class=\"navbar-collapse\" [isAnimated]=\"true\" [collapse]=\"isCollapsed\" id=\"example-navbar\">\r\n                    <ul class=\"navbar-nav\">\r\n                      <li class=\"nav-item active\">\r\n                        <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                          <p>Link</p>\r\n                        </a>\r\n                      </li>\r\n                      <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                          <p>Link</p>\r\n                        </a>\r\n                      </li>\r\n                      <li class=\"nav-item dropdown\" dropdown>\r\n                        <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"nav-link dropdown-toggle dropdown-toggle\"\r\n                          data-toggle=\"dropdown\" dropdownToggle href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\">\r\n                          <p>Dropdown</p>\r\n                        </a>\r\n                        <div aria-labelledby=\"navbarDropdownMenuLink\" class=\"dropdown-menu\" *dropdownMenu>\r\n                          <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                            Action\r\n                          </a>\r\n                          <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                            Another action\r\n                          </a>\r\n                          <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                            Something else here\r\n                          </a>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </nav>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <h4>Menu with Icons</h4>\r\n              <nav class=\"navbar navbar-expand-lg bg-info\">\r\n                <div class=\"container\">\r\n                  <a class=\"navbar-brand\" href=\"javascript:void(0)\"> Icons </a>\r\n                  <button aria-controls=\"navbarSupportedContent\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\"\r\n                    [attr.aria-expanded]=\"!isCollapsed\" (click)=\"isCollapsed = !isCollapsed\" id=\"example-navbar-icons\"\r\n                    type=\"button\">\r\n                    <span class=\"navbar-toggler-bar bar1\"> </span>\r\n                    <span class=\"navbar-toggler-bar bar2\"> </span>\r\n                    <span class=\"navbar-toggler-bar bar3\"> </span>\r\n                  </button>\r\n                  <div class=\"navbar-collapse\" [isAnimated]=\"true\" [collapse]=\"isCollapsed\" id=\"example-navbar-icons\">\r\n                    <ul class=\"navbar-nav ml-auto\">\r\n                      <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                          <i aria-hidden=\"true\" class=\"tim-icons icon-send\"> </i>\r\n                        </a>\r\n                      </li>\r\n                      <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                          <i aria-hidden=\"true\" class=\"tim-icons icon-single-02\">\r\n                          </i>\r\n                        </a>\r\n                      </li>\r\n                      <li class=\"nav-item dropdown\" dropdown>\r\n                        <a class=\"nav-link dropdown-toggle dropdown-toggle\" data-toggle=\"dropdown\" dropdownToggle\r\n                          href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\">\r\n                          <i aria-hidden=\"true\" class=\"tim-icons icon-settings-gear-63\">\r\n                          </i>\r\n                        </a>\r\n                        <div aria-labelledby=\"navbarDropdownMenuLink\" class=\"dropdown-menu dropdown-menu-right\"\r\n                          *dropdownMenu>\r\n                          <a class=\"dropdown-header\"> Dropdown header </a>\r\n                          <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                            Action\r\n                          </a>\r\n                          <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                            Another action\r\n                          </a>\r\n                          <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                            Something else here\r\n                          </a>\r\n                          <div class=\"divider\"></div>\r\n                          <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                            Separated link\r\n                          </a>\r\n                          <div class=\"divider\"></div>\r\n                          <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                            One more separated link\r\n                          </a>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </nav>\r\n            </div>\r\n          </div>\r\n          <h3 class=\"title mb-3\">Navigation</h3>\r\n        </div>\r\n        <div id=\"navbar\">\r\n          <div class=\"navigation-example\">\r\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\r\n              <div class=\"container\">\r\n                <div class=\"navbar-translate\">\r\n                  <a class=\"navbar-brand\" href=\"javascript:void(0)\">\r\n                    Primary color\r\n                  </a>\r\n                  <button aria-controls=\"navbarSupportedContent\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\"\r\n                    [attr.aria-expanded]=\"!isCollapsed\" (click)=\"isCollapsed = !isCollapsed\" id=\"example-navbar-primary\"\r\n                    type=\"button\">\r\n                    <span class=\"navbar-toggler-bar bar1\"> </span>\r\n                    <span class=\"navbar-toggler-bar bar2\"> </span>\r\n                    <span class=\"navbar-toggler-bar bar3\"> </span>\r\n                  </button>\r\n                </div>\r\n                <div class=\"navbar-collapse\" [isAnimated]=\"true\" [collapse]=\"isCollapsed\" id=\"example-navbar-primary\">\r\n                  <ul class=\"navbar-nav ml-auto\">\r\n                    <li class=\"nav-item active\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                        <i class=\"tim-icons icon-world\"> </i> Discover\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                        <i class=\"tim-icons icon-single-02\"> </i> Profile\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                        <i class=\"tim-icons icon-settings-gear-63\"> </i> Settings\r\n                      </a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </nav>\r\n            <nav class=\"navbar navbar-expand-lg bg-info\">\r\n              <div class=\"container\">\r\n                <div class=\"navbar-translate\">\r\n                  <a class=\"navbar-brand\" href=\"javascript:void(0)\">\r\n                    Info Color\r\n                  </a>\r\n                  <button aria-controls=\"navbarSupportedContent\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\"\r\n                    [attr.aria-expanded]=\"!isCollapsed\" (click)=\"isCollapsed = !isCollapsed\" id=\"example-navbar-info\"\r\n                    type=\"button\">\r\n                    <span class=\"navbar-toggler-bar bar1\"> </span>\r\n                    <span class=\"navbar-toggler-bar bar2\"> </span>\r\n                    <span class=\"navbar-toggler-bar bar3\"> </span>\r\n                  </button>\r\n                </div>\r\n                <div class=\"navbar-collapse\" [isAnimated]=\"true\" [collapse]=\"isCollapsed\" id=\"example-navbar-info\">\r\n                  <ul class=\"navbar-nav ml-auto\">\r\n                    <li class=\"nav-item active\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\"> Discover </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\"> Profile </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\"> Settings </a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </nav>\r\n            <nav class=\"navbar navbar-expand-lg bg-success\">\r\n              <div class=\"container\">\r\n                <div class=\"navbar-translate\">\r\n                  <a class=\"navbar-brand\" href=\"javascript:void(0)\">\r\n                    Success Color\r\n                  </a>\r\n                  <button aria-controls=\"navbarSupportedContent\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\"\r\n                    [attr.aria-expanded]=\"!isCollapsed\" (click)=\"isCollapsed = !isCollapsed\" id=\"example-navbar-success\"\r\n                    type=\"button\">\r\n                    <span class=\"navbar-toggler-bar bar1\"> </span>\r\n                    <span class=\"navbar-toggler-bar bar2\"> </span>\r\n                    <span class=\"navbar-toggler-bar bar3\"> </span>\r\n                  </button>\r\n                </div>\r\n                <div class=\"navbar-collapse\" [isAnimated]=\"true\" [collapse]=\"isCollapsed\" id=\"example-navbar-success\">\r\n                  <ul class=\"navbar-nav ml-auto\">\r\n                    <li class=\"nav-item active\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                        <i class=\"tim-icons icon-world\"> </i>\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                        <i class=\"tim-icons icon-single-02\"> </i>\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                        <i class=\"tim-icons icon-settings-gear-63\"> </i>\r\n                      </a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </nav>\r\n            <nav class=\"navbar navbar-expand-lg bg-warning\">\r\n              <div class=\"container\">\r\n                <div class=\"navbar-translate\">\r\n                  <a class=\"navbar-brand\" href=\"javascript:void(0)\">\r\n                    Warning Color\r\n                  </a>\r\n                  <button aria-controls=\"navbarSupportedContent\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\"\r\n                    [attr.aria-expanded]=\"!isCollapsed\" (click)=\"isCollapsed = !isCollapsed\" id=\"example-navbar-warning\"\r\n                    type=\"button\">\r\n                    <span class=\"navbar-toggler-bar bar1\"> </span>\r\n                    <span class=\"navbar-toggler-bar bar2\"> </span>\r\n                    <span class=\"navbar-toggler-bar bar3\"> </span>\r\n                  </button>\r\n                </div>\r\n                <div class=\"navbar-collapse\" [isAnimated]=\"true\" [collapse]=\"isCollapsed\" id=\"example-navbar-warning\">\r\n                  <ul class=\"navbar-nav ml-auto\">\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                        <i class=\"fab fa-facebook-square\"> </i>\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                        <i class=\"fab fa-twitter\"> </i>\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                        <i class=\"fab fa-google-plus\"> </i>\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                        <i class=\"fab fa-instagram\"> </i>\r\n                      </a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </nav>\r\n            <nav class=\"navbar navbar-expand-lg bg-danger\">\r\n              <div class=\"container\">\r\n                <div class=\"navbar-translate\">\r\n                  <a class=\"navbar-brand\" href=\"javascript:void(0)\">\r\n                    Danger Color\r\n                  </a>\r\n                  <button aria-controls=\"navbarSupportedContent\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\"\r\n                    [attr.aria-expanded]=\"!isCollapsed\" (click)=\"isCollapsed = !isCollapsed\" id=\"example-navbar-danger\"\r\n                    type=\"button\">\r\n                    <span class=\"navbar-toggler-bar bar1\"> </span>\r\n                    <span class=\"navbar-toggler-bar bar2\"> </span>\r\n                    <span class=\"navbar-toggler-bar bar3\"> </span>\r\n                  </button>\r\n                </div>\r\n                <div class=\"navbar-collapse\" [isAnimated]=\"true\" [collapse]=\"isCollapsed\" id=\"example-navbar-danger\">\r\n                  <ul class=\"navbar-nav ml-auto\">\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                        <i class=\"fab fa-facebook-square\"> </i> Share\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                        <i class=\"fab fa-twitter\"> </i> Tweet\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                        <i class=\"fab fa-pinterest\"> </i> Pin\r\n                      </a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </nav>\r\n            <nav class=\"navbar navbar-expand-lg navbar-transparent\">\r\n              <div class=\"container\">\r\n                <div class=\"navbar-translate\">\r\n                  <a class=\"navbar-brand\" href=\"javascript:void(0)\">\r\n                    Transparent\r\n                  </a>\r\n                  <button aria-controls=\"navbarSupportedContent\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\"\r\n                    [attr.aria-expanded]=\"!isCollapsed\" (click)=\"isCollapsed = !isCollapsed\"\r\n                    id=\"example-navbar-transparent\" type=\"button\">\r\n                    <span class=\"navbar-toggler-bar bar1\"> </span>\r\n                    <span class=\"navbar-toggler-bar bar2\"> </span>\r\n                    <span class=\"navbar-toggler-bar bar3\"> </span>\r\n                  </button>\r\n                </div>\r\n                <div class=\"navbar-collapse\" [isAnimated]=\"true\" [collapse]=\"isCollapsed\" id=\"example-navbar-transparent\">\r\n                  <ul class=\"navbar-nav ml-auto\">\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                        <i class=\"fab fa-facebook-square\"> </i> Facebook\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                        <i class=\"fab fa-twitter\"> </i> Twitter\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                        <i class=\"fab fa-instagram\"> </i> Instagram\r\n                      </a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </nav>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"section section-tabs\">\r\n        <div class=\"container\">\r\n          <div class=\"title\">\r\n            <h3 class=\"mb-3\">Navigation Tabs</h3>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\r\n              <div class=\"mb-3\">\r\n                <small class=\"text-uppercase font-weight-bold\">\r\n                  With icons\r\n                </small>\r\n              </div>\r\n              <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                  <tabset class=\"nav-tabs-danger\">\r\n                    <tab>\r\n                      <ng-template tabHeading>\r\n                        <i class=\"tim-icons icon-spaceship\"> </i> Profile\r\n                      </ng-template>\r\n                      <p>\r\n                        Collaboratively administrate empowered markets via\r\n                        plug-and-play networks. Dynamically procrastinate B2C\r\n                        users after installed base benefits. <br />\r\n  \r\n                        <br />\r\n  \r\n                        Dramatically visualize customer directed convergence\r\n                        without revolutionary ROI.\r\n                      </p>\r\n                    </tab>\r\n                    <tab>\r\n                      <ng-template tabHeading>\r\n                        <i class=\"tim-icons icon-settings-gear-63\"> </i> Settings\r\n                      </ng-template>\r\n                      <p>\r\n                        Completely synergize resource taxing relationships via\r\n                        premier niche markets. Professionally cultivate one-to-one\r\n                        customer service with robust ideas. <br />\r\n  \r\n                        <br />\r\n  \r\n                        Dynamically innovate resource-leveling customer service\r\n                        for state of the art customer service.\r\n                      </p>\r\n                    </tab>\r\n                    <tab>\r\n                      <ng-template tabHeading>\r\n                        <i class=\"tim-icons icon-bag-16\"> </i> Options\r\n                      </ng-template>\r\n                      <p>\r\n                        Efficiently unleash cross-media information without\r\n                        cross-media value. Quickly maximize timely deliverables\r\n                        for real-time schemas. <br />\r\n  \r\n                        <br />\r\n  \r\n                        Dramatically maintain clicks-and-mortar solutions without\r\n                        functional solutions.\r\n                      </p>\r\n                    </tab>\r\n                  </tabset>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\r\n              <div class=\"mb-3\">\r\n                <small class=\"text-uppercase font-weight-bold\"> With text </small>\r\n              </div>\r\n              <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                  <tabset class=\"nav-tabs-danger\">\r\n                    <tab heading=\"Profile\">\r\n                      <p>\r\n                        These cases are perfectly simple and easy to distinguish.\r\n                        In a free hour, when our power of choice is untrammelled\r\n                        and when nothing prevents our being able to do what we\r\n                        like best, every pleasure is to be welcomed and every pain\r\n                        avoided. <br />\r\n  \r\n                        But in certain circumstances and owing to the claims of\r\n                        duty or the obligations of business it will frequently\r\n                        occur that pleasures\r\n                      </p>\r\n                    </tab>\r\n                    <tab heading=\"Settings\">\r\n                      <p>\r\n                        I will be the leader of a company that ends up being worth\r\n                        billions of dollars, because I got the answers. I\r\n                        understand culture. I am the nucleus. I think thatâs a\r\n                        responsibility that I have, to push possibilities, to show\r\n                        people, this is the level that things could be at. I think\r\n                        thatâs a responsibility that I have, to push\r\n                        possibilities, to show people, this is the level that\r\n                        things could be at.\r\n                      </p>\r\n                    </tab>\r\n                    <tab heading=\"Options\">\r\n                      <p>\r\n                        I think thatâs a responsibility that I have, to push\r\n                        possibilities, to show people, this is the level that\r\n                        things could be at. So when you get something that has the\r\n                        name Kanye West on it, itâs supposed to be pushing the\r\n                        furthest possibilities. I will be the leader of a company\r\n                        that ends up being worth billions of dollars, because I\r\n                        got the answers. I understand culture. I am the nucleus.\r\n                      </p>\r\n                    </tab>\r\n                  </tabset>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"section section-pagination\">\r\n        <img class=\"path\" src=\"assets/img/path4.png\" />\r\n  \r\n        <img class=\"path path1\" src=\"assets/img/path5.png\" />\r\n  \r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <h3 class=\"mb-4\">Progress Bars</h3>\r\n              <div class=\"progress-container\">\r\n                <span class=\"progress-badge\"> Default </span>\r\n                <progressbar [value]=\"25\">\r\n                  <span class=\"progress-value\"> 25% </span>\r\n                </progressbar>\r\n              </div>\r\n              <div class=\"progress-container progress-danger\">\r\n                <span class=\"progress-badge\"> Danger </span>\r\n                <progressbar class=\"progress-bar-danger\" [value]=\"60\">\r\n                  <span class=\"progress-value\"> 60% </span>\r\n                </progressbar>\r\n              </div>\r\n              <br />\r\n  \r\n              <h3 class=\"mb-5\">Navigation Pills</h3>\r\n              <tabset type=\"pills\" class=\"nav-pills-danger nav-pills-icons\">\r\n                <tab>\r\n                  <ng-template tabHeading>\r\n                    <i class=\"tim-icons icon-atom\"> </i> Home\r\n                  </ng-template>\r\n                </tab>\r\n                <tab>\r\n                  <ng-template tabHeading>\r\n                    <i class=\"tim-icons icon-chat-33\"> </i> Messages\r\n                  </ng-template>\r\n                </tab>\r\n                <tab>\r\n                  <ng-template tabHeading>\r\n                    <i class=\"tim-icons icon-settings-gear-63\"> </i> Settings\r\n                  </ng-template>\r\n                </tab>\r\n              </tabset>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <h3 class=\"mb-5\">Pagination</h3>\r\n              <pagination class=\"pagination-danger\" [(ngModel)]=\"pagination1\" [totalItems]=\"30\">\r\n              </pagination>\r\n              <pagination class=\"pagination-danger\" [boundaryLinks]=\"true\" [totalItems]=\"45\" [ngModel]=\"pagination\"\r\n                previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\r\n              </pagination>\r\n              <br />\r\n  \r\n              <h3 class=\"mb-5\">Labels</h3>\r\n              <span class=\"badge badge-default mr-1\"> Default </span>\r\n              <span class=\"badge badge-primary mr-1\"> Primary </span>\r\n              <span class=\"badge badge-success mr-1\"> Success </span>\r\n              <span class=\"badge badge-info mr-1\"> Info </span>\r\n              <span class=\"badge badge-warning mr-1\"> Warning </span>\r\n              <span class=\"badge badge-danger mr-1\"> Danger </span>\r\n              <span class=\"badge badge-neutral\"> Neutral </span>\r\n            </div>\r\n          </div>\r\n          <br />\r\n        </div>\r\n      </div>\r\n      <div class=\"section section-notifications\" id=\"notifications\">\r\n        <div class=\"container\">\r\n          <div class=\"space\"></div>\r\n          <h3>Notifications</h3>\r\n          <alert class=\"alert-with-icon\" [type]=\"'primary alert-with-icon'\" [dismissible]=\"true\">\r\n            <span class=\"tim-icons icon-coins\" data-notify=\"icon\"> </span>\r\n            <span>\r\n              <b> Congrats! - </b> This is a regular notification made with\r\n              \".alert-primary\"\r\n            </span>\r\n          </alert>\r\n          <alert class=\"alert-with-icon\" [type]=\"'info alert-with-icon'\" [dismissible]=\"true\">\r\n            <span class=\"tim-icons icon-trophy\" data-notify=\"icon\"> </span>\r\n            <span>\r\n              <b> Heads up! - </b> This is a regular notification made with\r\n              \".alert-info\"\r\n            </span>\r\n          </alert>\r\n          <alert class=\"alert-with-icon\" [type]=\"'success alert-with-icon'\" [dismissible]=\"true\">\r\n            <span class=\"tim-icons icon-bell-55\" data-notify=\"icon\"> </span>\r\n            <span>\r\n              <b> Well done! - </b> This is a regular notification made with\r\n              \".alert-success\"\r\n            </span>\r\n          </alert>\r\n          <alert class=\"alert-with-icon\" [type]=\"'warning alert-with-icon'\" [dismissible]=\"true\">\r\n            <span class=\"tim-icons icon-bulb-63\" data-notify=\"icon\"> </span>\r\n            <span>\r\n              <b> Warning! - </b> This is a regular notification made with\r\n              \".alert-warning\"\r\n            </span>\r\n          </alert>\r\n          <alert class=\"alert-with-icon\" [type]=\"'danger alert-with-icon'\" [dismissible]=\"true\">\r\n            <span class=\"tim-icons icon-support-17\" data-notify=\"icon\"> </span>\r\n            <span>\r\n              <b> Oh snap! - </b> This is a regular notification made with\r\n              \".alert-danger\"\r\n            </span>\r\n          </alert>\r\n        </div>\r\n      </div>\r\n      <div class=\"section section-typo\">\r\n        <img class=\"path\" src=\"assets/img/path1.png\" />\r\n  \r\n        <img class=\"path path1\" src=\"assets/img/path3.png\" />\r\n  \r\n        <div class=\"container\">\r\n          <h3 class=\"title\">Typography</h3>\r\n          <div id=\"typography\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"typography-line\">\r\n                  <h1><span> Header 1 </span> The Life of BLK• Design System</h1>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                  <h2><span> Header 2 </span> The Life of BLK• Design System</h2>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                  <h3><span> Header 3 </span> The Life of BLK• Design System</h3>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                  <h4><span> Header 4 </span> The Life of BLK• Design System</h4>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                  <h5><span> Header 5 </span> The Life of BLK• Design System</h5>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                  <h6><span> Header 6 </span> The Life of BLK• Design System</h6>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                  <p>\r\n                    <span> Paragraph </span> I will be the leader of a company\r\n                    that ends up being worth billions of dollars, because I got\r\n                    the answers. I understand culture. I am the nucleus. I think\r\n                    thatâs a responsibility that I have, to push possibilities, to\r\n                    show people, this is the level that things could be at.\r\n                  </p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                  <span> Quote </span>\r\n                  <blockquote>\r\n                    <p class=\"blockquote blockquote-danger\">\r\n                      \"I will be the leader of a company that ends up being worth\r\n                      billions of dollars, because I got the answers. I understand\r\n                      culture. I am the nucleus. I think thatâs a responsibility\r\n                      that I have, to push possibilities, to show people, this is\r\n                      the level that things could be at.\" <br />\r\n  \r\n                      <br />\r\n  \r\n                      <small> - Noaa </small>\r\n                    </p>\r\n                  </blockquote>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                  <span> Muted Text </span>\r\n                  <p class=\"text-muted\">\r\n                    I will be the leader of a company that ends up being worth\r\n                    billions of dollars, because I got the answers...\r\n                  </p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                  <span> Primary Text </span>\r\n                  <p class=\"text-primary\">\r\n                    I will be the leader of a company that ends up being worth\r\n                    billions of dollars, because I got the answers...\r\n                  </p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                  <span> Info Text </span>\r\n                  <p class=\"text-info\">\r\n                    I will be the leader of a company that ends up being worth\r\n                    billions of dollars, because I got the answers...\r\n                  </p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                  <span> Success Text </span>\r\n                  <p class=\"text-success\">\r\n                    I will be the leader of a company that ends up being worth\r\n                    billions of dollars, because I got the answers...\r\n                  </p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                  <span> Warning Text </span>\r\n                  <p class=\"text-warning\">\r\n                    I will be the leader of a company that ends up being worth\r\n                    billions of dollars, because I got the answers...\r\n                  </p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                  <span> Danger Text </span>\r\n                  <p class=\"text-danger\">\r\n                    I will be the leader of a company that ends up being worth\r\n                    billions of dollars, because I got the answers...\r\n                  </p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                  <h2>\r\n                    <span> Small Tag </span> Header with small subtitle <br />\r\n  \r\n                    <small> Use \"small\" tag for the headers </small>\r\n                  </h2>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"space-50\"></div>\r\n          <div id=\"images\">\r\n            <h3 class=\"mb-5\">Images</h3>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-3 col-6\">\r\n                <small class=\"d-block text-uppercase font-weight-bold mb-4\">\r\n                  Image\r\n                </small>\r\n                <img alt=\"Rounded image\" class=\"img-fluid rounded shadow\" src=\"assets/img/ryan.jpg\"\r\n                  style=\"width: 150px;\" />\r\n              </div>\r\n              <div class=\"col-sm-3 col-6\">\r\n                <small class=\"d-block text-uppercase font-weight-bold mb-4\">\r\n                  Circle Image\r\n                </small>\r\n                <img alt=\"Circle image\" class=\"img-fluid rounded-circle shadow\" src=\"assets/img/james.jpg\"\r\n                  style=\"width: 150px;\" />\r\n              </div>\r\n              <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\r\n                <small class=\"d-block text-uppercase font-weight-bold mb-4\">\r\n                  Raised\r\n                </small>\r\n                <img alt=\"Raised image\" class=\"img-fluid rounded shadow-lg\" src=\"assets/img/lora.jpg\"\r\n                  style=\"width: 150px;\" />\r\n              </div>\r\n              <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\r\n                <small class=\"d-block text-uppercase font-weight-bold mb-4\">\r\n                  Circle Raised\r\n                </small>\r\n                <img alt=\"Raised circle image\" class=\"img-fluid rounded-circle shadow-lg\" src=\"assets/img/mike.jpg\"\r\n                  style=\"width: 150px;\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"section section-javascript\" id=\"javascriptComponents\">\r\n        <img class=\"path\" src=\"assets/img/path5.png\" />\r\n  \r\n        <img class=\"path path1\" src=\"assets/img/path5.png\" />\r\n  \r\n        <div class=\"container\">\r\n          <h3 class=\"title mb-5\">Javascript components</h3>\r\n          <h4 class=\"mb-5\">Modal</h4>\r\n          <div class=\"row\" id=\"modals\">\r\n            <div class=\"col-md-4\">\r\n              <button class=\"btn btn-danger\" data-target=\"#myModal\" (click)=\"myModal.show()\">\r\n                Launch Modal\r\n              </button>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <button class=\"btn btn-warning\" data-target=\"#myModal1\" (click)=\"myModal1.show()\">\r\n                Launch Modal Mini\r\n              </button>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <button class=\"btn btn-success\" data-target=\"#myModal2\" (click)=\"myModal2.show()\">\r\n                Launch Modal Form\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <br />\r\n  \r\n          <br />\r\n  \r\n          <h4 class=\"mb-5 mt-3\">Datepicker</h4>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"datepicker-container\">\r\n                <div class=\"form-group\">\r\n                  <input bsDatepicker class=\"form-control\" data-datepicker-color=\"danger\"\r\n                    [bsConfig]=\"{ isAnimated: true, containerClass: 'theme-red' }\" [bsValue]=\"date\" id=\"datepicker\"\r\n                    type=\"datetime-local\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <h4 class=\"mb-5 mt-3\">Popovers</h4>\r\n              <button class=\"btn btn-default btn-sm mr-1\" container=\"body\" placement=\"top\" popoverTitle=\"Popover on top\"\r\n                popover=\"Here will be some very useful information about his popover.\" type=\"button\">\r\n                On top\r\n              </button>\r\n              <button class=\"btn btn-default btn-sm mr-1\" container=\"body\" placement=\"right\"\r\n                popoverTitle=\"Popover on right\" popover=\"Here will be some very useful information about his popover.<br>\r\n                Here will be some very useful information about his popover.\" type=\"button\">\r\n                On right\r\n              </button>\r\n              <button class=\"btn btn-default btn-sm mr-1\" container=\"body\" placement=\"bottom\"\r\n                popoverTitle=\"Popover on bottom\" popover=\"Here will be some very useful information about his popover.\"\r\n                type=\"button\">\r\n                On bottom\r\n              </button>\r\n              <button class=\"btn btn-default btn-sm\" container=\"body\" placement=\"left\" popoverTitle=\"Popover on left\"\r\n                popover=\"Here will be some very useful information about his popover.\" type=\"button\">\r\n                On left\r\n              </button>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <h4 class=\"mb-5 mt-3\">Tooltips</h4>\r\n              <button class=\"btn btn-default btn-tooltip btn-sm mr-1\" data-animation=\"true\" data-container=\"body\"\r\n                data-delay=\"100\" placement=\"left\" tooltip=\"Tooltip on left\" type=\"button\">\r\n                On left\r\n              </button>\r\n              <button class=\"btn btn-default btn-tooltip btn-sm mr-1\" data-animation=\"true\" data-container=\"body\"\r\n                placement=\"top\" tooltip=\"Tooltip on top\" type=\"button\">\r\n                On top\r\n              </button>\r\n              <button class=\"btn btn-default btn-tooltip btn-sm mr-1\" data-animation=\"true\" data-container=\"body\"\r\n                placement=\"bottom\" tooltip=\"Tooltip on bottom\" type=\"button\">\r\n                On bottom\r\n              </button>\r\n              <button class=\"btn btn-default btn-tooltip btn-sm\" data-animation=\"true\" data-container=\"body\"\r\n                placement=\"right\" tooltip=\"Tooltip on right\" type=\"button\">\r\n                On right\r\n              </button>\r\n              <div class=\"clearfix\"></div>\r\n              <br />\r\n  \r\n              <br />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"section\">\r\n          <div class=\"container\">\r\n            <div class=\"title\">\r\n              <h3>Carousel</h3>\r\n            </div>\r\n            <div class=\"row justify-content-between align-items-center\">\r\n              <div class=\"col-lg-5 mb-5 mb-lg-0\">\r\n                <h1 class=\"text-white font-weight-light\">Bootstrap carousel</h1>\r\n                <p class=\"text-white mt-4\">\r\n                  Black Design comes with three pre-built pages to help you get\r\n                  started faster. You can change the text and images and you're\r\n                  good to go.\r\n                </p>\r\n                <a class=\"btn btn-warning mt-4\"\r\n                  href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/alerts\">\r\n                  See all components\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-6\">\r\n                <carousel [showIndicators]=\"false\">\r\n                  <slide>\r\n                    <img alt=\"First slide\" class=\"d-block w-100\" src=\"assets/img/denys.jpg\" />\r\n                  </slide>\r\n                  <slide>\r\n                    <img alt=\"Second slide\" class=\"d-block w-100\" src=\"assets/img/fabien-bazanegue.jpg\" />\r\n                  </slide>\r\n                  <slide>\r\n                    <img alt=\"Third slide\" class=\"d-block w-100\" src=\"assets/img/mark-finn.jpg\" />\r\n                  </slide>\r\n                </carousel>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"section section-nucleo-icons\">\r\n        <img class=\"path\" src=\"assets/img/path3.png\" />\r\n  \r\n        <div class=\"container\">\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-lg-8 col-md-12\">\r\n              <h2 class=\"title\">Nucleo Icons</h2>\r\n              <h4 class=\"description\">\r\n                BLK• Design System PRO comes with 100 custom icons made by our\r\n                friends from NucleoApp. The official package contains over 2.100\r\n                thin icons which are looking great in combination with BLK• Design\r\n                System PRO Make sure you check all of them and use those that you\r\n                like the most.\r\n              </h4>\r\n              <div class=\"btn-wrapper\">\r\n                <a class=\"btn btn-danger btn-round mr-1\"\r\n                  href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/icons\" target=\"_blank\">\r\n                  View Demo Icons\r\n                </a>\r\n                <a class=\"btn btn-danger btn-simple btn-round btn-lg\" href=\"https://nucleoapp.com/?ref=1712\"\r\n                  target=\"_blank\">\r\n                  View All Icons\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"blur-hover\">\r\n            <a href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/icons\" class=\"text-danger\">\r\n              <div class=\"icons-container blur-item on-screen mt-5\">\r\n                <i class=\"icon tim-icons icon-coins\"> </i>\r\n                <i class=\"icon icon-sm tim-icons icon-spaceship\"> </i>\r\n                <i class=\"icon icon-sm tim-icons icon-money-coins\"> </i>\r\n                <i class=\"icon icon-sm tim-icons icon-link-72\"> </i>\r\n                <i class=\"icon tim-icons icon-send\"> </i>\r\n                <i class=\"icon tim-icons icon-mobile\"> </i>\r\n                <i class=\"icon tim-icons icon-wifi\"> </i>\r\n                <i class=\"icon icon-sm tim-icons icon-key-25\"> </i>\r\n                <i class=\"icon icon-sm tim-icons icon-atom\"> </i>\r\n                <i class=\"icon icon-sm tim-icons icon-satisfied\"> </i>\r\n                <i class=\"icon tim-icons icon-gift-2\"> </i>\r\n                <i class=\"icon tim-icons icon-tap-02\"> </i>\r\n                <i class=\"icon tim-icons icon-wallet-43\"> </i>\r\n              </div>\r\n              <span class=\"blur-hidden h5 text-danger\">\r\n                Eplore all the 21.000+ Nucleo Icons\r\n              </span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"section section-signup\">\r\n        <div class=\"container\">\r\n          <div class=\"squares square-1\"></div>\r\n          <div class=\"squares square-2\"></div>\r\n          <div class=\"squares square-3\"></div>\r\n          <div class=\"squares square-4\"></div>\r\n          <div class=\"row row-grid justify-content-between align-items-center\">\r\n            <div class=\"col-lg-6\">\r\n              <h3 class=\"display-3 text-white\">\r\n                A beautiful Black Design\r\n                <span class=\"text-white\"> completed with examples </span>\r\n              </h3>\r\n              <p class=\"text-white mb-3\">\r\n                The Design System comes with four pre-built pages to help you get\r\n                started faster. You can change the text and images and you're good\r\n                to go. More importantly, looking at them will give you a picture\r\n                of what you can built with this powerful Bootstrap 4 Design\r\n                System.\r\n              </p>\r\n              <div class=\"btn-wrapper\">\r\n                <a class=\"btn btn-danger\" [routerLink]=\"['/register']\">\r\n                  Register Page\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-6 mb-lg-auto\">\r\n              <div class=\"card card-register\">\r\n                <div class=\"card-header\">\r\n                  <img alt=\"Card image\" class=\"card-img\" src=\"assets/img/square1-red.png\" />\r\n  \r\n                  <h4 class=\"card-title\">Register</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <form class=\"form\">\r\n                    <div class=\"input-group\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <div class=\"input-group-text\">\r\n                          <i class=\"tim-icons icon-single-02\"> </i>\r\n                        </div>\r\n                      </div>\r\n                      <input class=\"form-control\" placeholder=\"Full Name\" type=\"text\" />\r\n                    </div>\r\n                    <div class=\"input-group\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <div class=\"input-group-text\">\r\n                          <i class=\"tim-icons icon-email-85\"> </i>\r\n                        </div>\r\n                      </div>\r\n                      <input class=\"form-control\" placeholder=\"Email\" type=\"text\" />\r\n                    </div>\r\n                    <div class=\"input-group\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <div class=\"input-group-text\">\r\n                          <i class=\"tim-icons icon-lock-circle\"> </i>\r\n                        </div>\r\n                      </div>\r\n                      <input class=\"form-control\" placeholder=\"Password\" type=\"text\" />\r\n                    </div>\r\n                    <div class=\"form-check text-left\">\r\n                      <label class=\"form-check-label\">\r\n                        <input class=\"form-check-input\" type=\"checkbox\" />\r\n  \r\n                        <span class=\"form-check-sign\"> </span> I agree to the\r\n                        <a href=\"javascript:void(0)\"> terms and conditions </a> .\r\n                      </label>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                  <a class=\"btn btn-danger btn-round btn-lg\" href=\"javascript:void(0)\">\r\n                    Get Started\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"section section-examples\" data-background-color=\"black\">\r\n        <img class=\"path\" src=\"assets/img/path1.png\" />\r\n  \r\n        <div class=\"space-50\"></div>\r\n        <div class=\"container text-center\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <a [routerLink]=\"['/landing']\">\r\n                <img alt=\"Image\" class=\"img-raised\" src=\"assets/img/landing-page.png\" />\r\n              </a>\r\n              <a class=\"btn btn-simple btn-danger btn-round\" [routerLink]=\"['/landing']\">\r\n                View Landing Page\r\n              </a>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <a [routerLink]=\"['/profile']\">\r\n                <img alt=\"Image\" class=\"img-raised\" src=\"assets/img/profile-page.png\" />\r\n              </a>\r\n              <a class=\"btn btn-simple btn-danger btn-round\" [routerLink]=\"['/profile']\">\r\n                View Profile Page\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"section section-download\" data-background-color=\"black\" #target>\r\n        <img class=\"path\" src=\"assets/img/path1.png\" />\r\n  \r\n        <div class=\"container\">\r\n          <div class=\"row justify-content-md-center\">\r\n            <div class=\"text-center col-md-12 col-lg-8\">\r\n              <h2 class=\"title\">\r\n                Do you love this Bootstrap 4 Angular Design System?\r\n              </h2>\r\n              <h4 class=\"description\">\r\n                Cause if you do, it can be yours for FREE. Hit the button below to\r\n                navigate to Creative Tim where you can find the design system in\r\n                HTML format. Start a new project or give an old Bootstrap project\r\n                a new look!\r\n              </h4>\r\n            </div>\r\n            <div class=\"text-center col-md-12 col-lg-8\">\r\n              <a class=\"btn btn-danger btn-round btn-lg\"\r\n                href=\"https://www.creative-tim.com/product/blk-design-system-angular\" role=\"button\">\r\n                Download Angular\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <br />\r\n  \r\n          <br />\r\n  \r\n          <br />\r\n  \r\n          <br />\r\n  \r\n          <br />\r\n  \r\n          <div class=\"row row-grid align-items-center my-md\">\r\n            <div class=\"col-lg-6\">\r\n              <h3 class=\"text-danger font-weight-light mb-2\">\r\n                Thank you for supporting us!\r\n              </h3>\r\n              <h4 class=\"mb-0 font-weight-light\">\r\n                Let's get in touch on any of these platforms.\r\n              </h4>\r\n            </div>\r\n            <div class=\"col-lg-6 text-lg-center btn-wrapper\">\r\n              <a class=\"btn btn-icon btn-twitter btn-round btn-lg mr-1\" id=\"twitter\">\r\n                <i class=\"fab fa-twitter\"> </i>\r\n              </a>\r\n              <a class=\"btn btn-icon btn-facebook btn-round btn-lg mr-1\" id=\"facebook\">\r\n                <i class=\"fab fa-facebook-square\"> </i>\r\n              </a>\r\n              <a class=\"btn btn-icon btn-github btn-round btn-lg\" href=\"https://github.com/creativetimofficial\"\r\n                target=\"_blank\">\r\n                <i class=\"fab fa-github\"> </i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div aria-hidden=\"true\" aria-labelledby=\"myModalLabel\" bsModal class=\"modal fade\" #myModal=\"bs-modal\" id=\"myModal\"\r\n        role=\"dialog\" tabindex=\"-1\">\r\n        <div class=\"modal-dialog\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header justify-content-center\">\r\n              <button aria-hidden=\"true\" class=\"close\" data-dismiss=\"modal\" type=\"button\" (click)=\"myModal.hide()\">\r\n                <i class=\"tim-icons icon-simple-remove\"> </i>\r\n              </button>\r\n              <h4 class=\"title title-up\">Modal title</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <p>\r\n                Far far away, behind the word mountains, far from the countries\r\n                Vokalia and Consonantia, there live the blind texts. Separated\r\n                they live in Bookmarksgrove right at the coast of the Semantics, a\r\n                large language ocean. A small river named Duden flows by their\r\n                place and supplies it with the necessary regelialia. It is a\r\n                paradisematic country, in which roasted parts of sentences fly\r\n                into your mouth.\r\n              </p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button class=\"btn btn-default\" type=\"button\">Nice Button</button>\r\n              <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" (click)=\"myModal.hide()\">\r\n                Close\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div aria-hidden=\"true\" aria-labelledby=\"myModalLabel\" bsModal class=\"modal fade modal-mini modal-danger modal-mini\"\r\n        #myModal1=\"bs-modal\" id=\"myModal1\" role=\"dialog\" tabindex=\"-1\">\r\n        <div class=\"modal-dialog\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header justify-content-center\">\r\n              <button aria-hidden=\"true\" class=\"close\" data-dismiss=\"modal\" (click)=\"myModal1.hide()\" type=\"button\">\r\n                <i class=\"tim-icons icon-simple-remove text-white\"> </i>\r\n              </button>\r\n              <div class=\"modal-profile\">\r\n                <i class=\"tim-icons icon-single-02\"> </i>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <p>Always have an access to your profile</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button class=\"btn btn-link btn-neutral\" type=\"button\">Back</button>\r\n              <button class=\"btn btn-link btn-neutral\" data-dismiss=\"modal\" type=\"button\" (click)=\"myModal1.hide()\">\r\n                Close\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div aria-hidden=\"true\" aria-labelledby=\"myModalLabel\" bsModal class=\"modal fade modal-black\" #myModal2=\"bs-modal\"\r\n        id=\"myModal2\" role=\"dialog\" tabindex=\"-1\">\r\n        <div class=\"modal-dialog\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header justify-content-center\">\r\n              <button aria-hidden=\"true\" class=\"close\" data-dismiss=\"modal\" (click)=\"myModal2.hide()\" type=\"button\">\r\n                <i class=\"tim-icons icon-simple-remove text-white\"> </i>\r\n              </button>\r\n              <div class=\"text-muted text-center ml-auto mr-auto\">\r\n                <h3 class=\"mb-0\">Sign in with</h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <div class=\"btn-wrapper text-center\">\r\n                <a class=\"btn btn-neutral btn-icon mr-1\" href=\"javascript:void(0)\">\r\n                  <img src=\"assets/img/github.svg\" />\r\n                </a>\r\n                <a class=\"btn btn-neutral btn-icon\" href=\"javascript:void(0)\">\r\n                  <img src=\"assets/img/google.svg\" />\r\n                </a>\r\n              </div>\r\n              <div class=\"text-center text-muted mb-4 mt-3\">\r\n                <small> Or sign in with credentials </small>\r\n              </div>\r\n              <form role=\"form\">\r\n                <div class=\"form-group mb-3\">\r\n                  <div class=\"input-group input-group-alternative\" [ngClass]=\"{ 'input-group-focus': focus1 === true }\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\">\r\n                        <i class=\"tim-icons icon-email-85\"> </i>\r\n                      </span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus1 = true\"\r\n                      (blur)=\"focus1 = false\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <div class=\"input-group input-group-alternative\" [ngClass]=\"{ 'input-group-focus': focus2 === true }\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\">\r\n                        <i class=\"tim-icons icon-key-25\"> </i>\r\n                      </span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Password\" type=\"password\" (focus)=\"focus2 = true\"\r\n                      (blur)=\"focus2 = false\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-check mt-3\">\r\n                  <label class=\"form-check-label\">\r\n                    <input checked=\"checked\" class=\"form-check-input\" type=\"checkbox\" />\r\n  \r\n                    <span class=\"form-check-sign\"> </span> Remember me!\r\n                  </label>\r\n                </div>\r\n                <div class=\"text-center\">\r\n                  <button class=\"btn btn-primary my-4\" type=\"button\">\r\n                    Sign in\r\n                  </button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "Gzx9":
/*!******************************************************!*\
  !*** ./src/app/services/auth-guard-login.service.ts ***!
  \******************************************************/
/*! exports provided: AuthGuardLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardLoginService", function() { return AuthGuardLoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "qfBg");



 // Update the path to auth.service
var AuthGuardLoginService = /** @class */ (function () {
    function AuthGuardLoginService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardLoginService.prototype.canActivate = function () {
        if (!this.authService.isLoggedIn()) {
            return true; // Allow access to the route
        }
        else {
            this.router.navigate(['/home']); // Redirect to login page if not logged in
            return false; // Deny access to the route
        }
    };
    AuthGuardLoginService.ctorParameters = function () { return [
        { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuardLoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardLoginService);
    return AuthGuardLoginService;
}());



/***/ }),

/***/ "HhcO":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navbar/navbar.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"100\" id=\"navbar-top\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-translate\">\r\n      <a class=\"navbar-brand\" placement=\"bottom\" [routerLink]=\"['/']\">\r\n        <span> MANJATIANA• </span>\r\n      </a>\r\n      <button aria-controls=\"navigation-index\" aria-label=\"Toggle navigation\" class=\"navbar-toggler navbar-toggler\"\r\n        [attr.aria-expanded]=\"!isCollapsed\" (click)=\"isCollapsed = !isCollapsed\" id=\"navigation\" type=\"button\">\r\n        <span class=\"navbar-toggler-bar bar1\"> </span>\r\n        <span class=\"navbar-toggler-bar bar2\"> </span>\r\n        <span class=\"navbar-toggler-bar bar3\"> </span>\r\n      </button>\r\n    </div>\r\n    <div class=\"navbar-collapse justify-content-end\" [collapse]=\"isCollapsed\" id=\"navigation\">\r\n      <div class=\"navbar-collapse-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6 collapse-brand\"><a> MANJATIANA• </a></div>\r\n          <div class=\"col-6 collapse-close text-right\">\r\n            <button aria-controls=\"navigation-index\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\"\r\n              [attr.aria-expanded]=\"!isCollapsed\" (click)=\"isCollapsed = !isCollapsed\" id=\"navigation\" type=\"button\">\r\n              <i class=\"tim-icons icon-simple-remove\"> </i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item p-0\">\r\n          <a class=\"nav-link\" placement=\"bottom\" target=\"_blank\" tooltip=\"Suivez-nous sur twitter\">\r\n            <i class=\"fab fa-twitter\"> </i>\r\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item p-0\">\r\n          <a class=\"nav-link\" placement=\"bottom\" target=\"_blank\" tooltip=\"likez notre page facebook\">\r\n            <i class=\"fab fa-facebook-square\"> </i>\r\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item p-0\">\r\n          <a class=\"nav-link\" placement=\"bottom\" target=\"_blank\" tooltip=\"On se follow sur Insta\">\r\n            <i class=\"fab fa-instagram\"> </i>\r\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\r\n          </a>\r\n        </li>\r\n        <li class=\"dropdown nav-item\" dropdown>\r\n          <a class=\"dropdown-toggle nav-link dropdown-toggle\" data-toggle=\"dropdown\" dropdownToggle\r\n            href=\"javascript:void(0)\">\r\n            <i class=\"tim-icons icon-bullet-list-67\"> </i>\r\n          </a>\r\n          <div class=\"dropdown-menu dropdown-with-icons\" *dropdownMenu>\r\n            <!-- <a class=\"dropdown-item\"\r\n                href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/overview\">\r\n                <i class=\"tim-icons icon-paper\"> </i> Documentation\r\n              </a> -->\r\n            <a *ngIf=\"!isLoggedIn\" class=\"dropdown-item\" [routerLink]=\"['/register']\">\r\n              <i class=\"tim-icons icon-bullet-list-67\"> </i> S'inscrire\r\n            </a>\r\n            <!-- <a class=\"dropdown-item\" [routerLink]=\"['/landing']\">\r\n                <i class=\"tim-icons icon-image-02\"> </i> Landing Page\r\n              </a> -->\r\n            <a *ngIf=\"isLoggedIn\" class=\"dropdown-item\" [routerLink]=\"['/profile']\">\r\n              <i class=\"tim-icons icon-single-02\"> </i> Profile\r\n            </a>\r\n            <a *ngIf=\"isLoggedIn\" class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"logout()\">\r\n              <i class=\"tim-icons icon-simple-remove\"> </i> Se déconnecter\r\n            </a>\r\n            <a *ngIf=\"!isLoggedIn\" class=\"dropdown-item\" [routerLink]=\"['/login']\">\r\n              <i class=\"tim-icons icon-simple-remove\"> </i> Se connecter\r\n            </a>\r\n          </div>\r\n        </li>\r\n        <!-- <li class=\"dropdown nav-item\" dropdown>\r\n          <a class=\"dropdown-toggle nav-link dropdown-toggle\" data-toggle=\"dropdown\" dropdownToggle\r\n            href=\"javascript:void(0)\">\r\n            <i class=\"tim-icons icon-bell-55\"> </i>\r\n          </a>\r\n          <div class=\"dropdown-menu dropdown-with-icons\" *dropdownMenu>\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/register']\">\r\n              <i class=\"tim-icons icon-bullet-list-67\"> </i> S'inscrire\r\n            </a>\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/profile']\">\r\n              <i class=\"tim-icons icon-single-02\"> </i> Profile\r\n            </a>\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/home']\">\r\n              <i class=\"tim-icons icon-simple-remove\"> </i> Se déconnecter\r\n            </a>\r\n          </div>\r\n        </li> -->\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link btn btn-default d-none d-lg-block\" [routerLink]=\"['/']\" (click)=\"scrollToAppointment()\">\r\n            <i class=\"tim-icons icon-calendar-60\"> </i> Prendre rendez-vous\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>");

/***/ }),

/***/ "LNnH":
/*!**************************************************!*\
  !*** ./src/app/pages/index/index.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scrollable-table-container {\n  max-height: 400px;\n  /* Adjust as needed */\n  overflow-y: auto;\n}\n\n.scrollable-table-container::-webkit-scrollbar {\n  width: 7px;\n  /* width of the scrollbar */\n}\n\n.scrollable-table-container::-webkit-scrollbar-track {\n  background: #17194100;\n  /* color of the track */\n}\n\n.scrollable-table-container::-webkit-scrollbar-thumb {\n  background: #fd5d93;\n  border-radius: 5px;\n  /* color of the thumb */\n}\n\n.scrollable-table-container::-webkit-scrollbar-thumb:hover {\n  background: #fd5d93;\n  /* color of the thumb on hover */\n}\n\nselect.form-control option {\n  background-color: #1f2251;\n  /* Change the background color here */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbmRleC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQTJCLHFDQUFBO0FBRTdCIiwiZmlsZSI6ImluZGV4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbGFibGUtdGFibGUtY29udGFpbmVyIHtcclxuICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAvKiBBZGp1c3QgYXMgbmVlZGVkICovXHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLnNjcm9sbGFibGUtdGFibGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDdweDtcclxuICAvKiB3aWR0aCBvZiB0aGUgc2Nyb2xsYmFyICovXHJcbn1cclxuXHJcbi5zY3JvbGxhYmxlLXRhYmxlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICMxNzE5NDEwMDtcclxuICAvKiBjb2xvciBvZiB0aGUgdHJhY2sgKi9cclxufVxyXG5cclxuLnNjcm9sbGFibGUtdGFibGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2ZkNWQ5MztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLyogY29sb3Igb2YgdGhlIHRodW1iICovXHJcbn1cclxuXHJcbi5zY3JvbGxhYmxlLXRhYmxlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZDVkOTM7XHJcbiAgLyogY29sb3Igb2YgdGhlIHRodW1iIG9uIGhvdmVyICovXHJcbn1cclxuXHJcbnNlbGVjdC5mb3JtLWNvbnRyb2wgb3B0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyMjUxOyAvKiBDaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3IgaGVyZSAqL1xyXG59Il19 */");

/***/ }),

/***/ "MKys":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "qfBg");



 // Update the path to auth.service
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        var _this = this;
        if (this.authService.isLoggedIn()) {
            return true; // Allow access to the route
        }
        else {
            this.authService.logout().subscribe(function (res) {
                _this.router.navigate(['/login']);
            }, function (err) {
                _this.router.navigate(['/login']);
            });
            return false; // Deny access to the route
        }
    };
    AuthGuardService.ctorParameters = function () { return [
        { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "R9rn":
/*!**************************************************************!*\
  !*** ./src/app/pages/profilepage/profilepage.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scrollable-table-container {\n  max-height: 400px;\n  /* Adjust as needed */\n  overflow-y: auto;\n}\n\n.scrollable-table-container::-webkit-scrollbar {\n  width: 7px;\n  /* width of the scrollbar */\n}\n\n.scrollable-table-container::-webkit-scrollbar-track {\n  background: #17194100;\n  /* color of the track */\n}\n\n.scrollable-table-container::-webkit-scrollbar-thumb {\n  background: #fd5d93;\n  border-radius: 5px;\n  /* color of the thumb */\n}\n\n.scrollable-table-container::-webkit-scrollbar-thumb:hover {\n  background: #fd5d93;\n  /* color of the thumb on hover */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUFZLDJCQUFBO0FBRWhCOztBQUNFO0VBQ0UscUJBQUE7RUFBdUIsdUJBQUE7QUFHM0I7O0FBQUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQW9CLHVCQUFBO0FBSXhCOztBQURFO0VBQ0UsbUJBQUE7RUFBcUIsZ0NBQUE7QUFLekIiLCJmaWxlIjoicHJvZmlsZXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsYWJsZS10YWJsZS1jb250YWluZXIge1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICAvKiBBZGp1c3QgYXMgbmVlZGVkICovXHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uc2Nyb2xsYWJsZS10YWJsZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA3cHg7IC8qIHdpZHRoIG9mIHRoZSBzY3JvbGxiYXIgKi9cclxuICB9XHJcbiAgXHJcbiAgLnNjcm9sbGFibGUtdGFibGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTcxOTQxMDA7IC8qIGNvbG9yIG9mIHRoZSB0cmFjayAqL1xyXG4gIH1cclxuICBcclxuICAuc2Nyb2xsYWJsZS10YWJsZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZDVkOTM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IC8qIGNvbG9yIG9mIHRoZSB0aHVtYiAqL1xyXG4gIH1cclxuICBcclxuICAuc2Nyb2xsYWJsZS10YWJsZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZDVkOTM7IC8qIGNvbG9yIG9mIHRoZSB0aHVtYiBvbiBob3ZlciAqL1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, location, document) {
        this.renderer = renderer;
        this.location = location;
    }
    AppComponent.prototype.onWindowScroll = function (e) {
        if (window.pageYOffset > 100) {
            var element = document.getElementById("navbar-top");
            if (element) {
                element.classList.remove("navbar-transparent");
                element.classList.add("bg-danger");
            }
        }
        else {
            var element = document.getElementById("navbar-top");
            if (element) {
                element.classList.add("navbar-transparent");
                element.classList.remove("bg-danger");
            }
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.onWindowScroll(event);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
    ]; };
    AppComponent.propDecorators = {
        onWindowScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ["window:scroll", ["$event"],] }]
    };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-root",
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], Object])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "UJ+o":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/footer/footer.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\r\n    <div class=\"container\">\r\n        <div>\r\n            <b class=\"names\">ANDRIAMANANTSOA Aro Andoniaina-RADOHARIVOLA Anjatiana Kenny Brian</b>\r\n        </div>\r\n    </div>\r\n</footer>");

/***/ }),

/***/ "V/Tm":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/index.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner type=\"ball-scale-multiple\" color=\"#fd5d93\" bdColor=\"rgba(0, 0, 0, 0.8)\"></ngx-spinner>\r\n\r\n<div class=\"wrapper\">\r\n  <div class=\"page-header header-filter\">\r\n    <div class=\"squares square1\"></div>\r\n    <div class=\"squares square2\"></div>\r\n    <div class=\"squares square3\"></div>\r\n    <div class=\"squares square4\"></div>\r\n    <div class=\"squares square5\"></div>\r\n    <div class=\"squares square6\"></div>\r\n    <div class=\"squares square7\"></div>\r\n    <div class=\"container\">\r\n      <div class=\"content-center brand\">\r\n        <h1 class=\"h1-seo\">MANJATIANA•</h1>\r\n        <!-- <h3>\r\n          Salon de beauté Manjatiana, vous rendre Manja est notre priorité. (on fera de notre mieux)\r\n        </h3> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"main\">\r\n    <div class=\"section section-signup\" id=\"appointment\">\r\n      <div class=\"container\">\r\n        <div class=\"squares square-1\"></div>\r\n        <div class=\"squares square-2\"></div>\r\n        <div class=\"squares square-3\"></div>\r\n        <div class=\"squares square-4\"></div>\r\n        <div class=\"row row-grid justify-content-between\">\r\n          <div class=\"col-lg-6\">\r\n\r\n            <h3 class=\"display-3 text-white\">\r\n              Prennez rendez-vous:\r\n            </h3>\r\n            <p class=\"text-white mb-3\">\r\n              Choisissez la date, les services que vous souhaitez, ainsi que votre employé préféré si vous le\r\n              souhaitez.\r\n              Tout ça en quelques clics.\r\n            </p>\r\n          </div>\r\n          <div class=\"col-lg-6 mb-lg-auto\">\r\n            <div class=\"card card-register\">\r\n\r\n              <div class=\"card-body\">\r\n                <form class=\"form\" (ngSubmit)=\"submitForm()\">\r\n\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <div class=\"input-group-text\">\r\n                        <i class=\"tim-icons icon-calendar-60\"> </i>\r\n                      </div>\r\n                    </div>\r\n                    <input class=\"form-control\" type=\"datetime-local\" name=\"date\" [(ngModel)]=\"formData.date\"\r\n                      required />\r\n                  </div>\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <div class=\"input-group-text\">\r\n                        <i class=\"tim-icons icon-single-02\"> </i>\r\n                      </div>\r\n                    </div>\r\n                    <select class=\"form-control\" name=\"employee\" [(ngModel)]=\"formData.employee\">\r\n                      <option [ngValue]=\"null\" class=\"form-control\">\r\n                        Non spécifié\r\n                      </option>\r\n                      <option [ngValue]=\"employee._id\" class=\"form-control\" *ngFor=\"let employee of employees;\">\r\n                        {{ employee.firstName }} {{employee.lastName }}\r\n                      </option>\r\n\r\n                    </select>\r\n                  </div>\r\n                  <hr />\r\n\r\n                  <p class=\"category\">Veuillez choisir les Services</p>\r\n                  <span class=\"category\">Total: {{ totalPrice | currency }}</span>\r\n\r\n                  <div class=\"row\" *ngIf=\"services\">\r\n                    <div class=\"col-md-6\" *ngFor=\"let service of services\">\r\n                      <div class=\"form-check\">\r\n                        <label class=\"form-check-label\">\r\n                          <input class=\"form-check-input\" type=\"checkbox\"\r\n                            (change)=\"updateSelectedServices(service, $event.target.checked)\" />\r\n                          <span class=\"form-check-sign\"> </span> {{service.name}}\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr />\r\n                  <!-- <div class=\"input-group\">\r\n                    <span class=\"category\">Avance (mobile money)</span>\r\n                    <bSwitch [switch-on-color]=\"'blue'\" [switch-on-text]=\"'oui'\" [switch-off-text]=\"'non'\"\r\n                      [switch-off-color]=\"'danger'\" [(ngModel)]=\"isSwitchOn\" name=\"bswitch\"></bSwitch>\r\n                  </div> -->\r\n                  <!-- <div *ngIf=\"isSwitchOn\">\r\n                    <div class=\"input-group\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <div class=\"input-group-text\">\r\n                          <i class=\"tim-icons icon-single-02\"> </i>\r\n                        </div>\r\n                      </div>\r\n                      <input class=\"form-control\" placeholder=\"Numero\" type=\"text\" pattern=\"[0-9]{10}\"\r\n                        title=\"Please enter a valid phone number (10 digits)\" name=\"numero\"\r\n                        [(ngModel)]=\"formData.numero\" required />\r\n                    </div>\r\n                    <div class=\"input-group\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <div class=\"input-group-text\">\r\n                          <i class=\"tim-icons icon-money-coins\"> </i>\r\n                        </div>\r\n                      </div>\r\n                      <input class=\"form-control\" placeholder=\"Montant\" type=\"number\" name=\"paid\"\r\n                        [(ngModel)]=\"formData.paid\" />\r\n                    </div>\r\n                  </div> -->\r\n                  <alert *ngIf=\"error\" class=\"alert-with-icon\" [type]=\"'warning alert-with-icon'\" [dismissible]=\"true\">\r\n                    <span class=\"tim-icons icon-alert-circle-exc\" data-notify=\"icon\"> </span>\r\n                    <span>\r\n                      <b> Oups! </b> {{message}}\r\n                    </span>\r\n                  </alert>\r\n                  <alert *ngIf=\"success\" class=\"alert-with-icon\" [type]=\"'success alert-with-icon'\"\r\n                    [dismissible]=\"true\">\r\n                    <span class=\"tim-icons icon-check-2\" data-notify=\"icon\"> </span>\r\n                    <span>\r\n                      <b> Yay! </b> {{message}}\r\n                    </span>\r\n                  </alert>\r\n                  <div class=\"input-group\">\r\n                    <input class=\"btn btn-danger btn-round btn-lg\" type=\"submit\" value=\"Valider\" />\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"section section-tabs\">\r\n      <div class=\"container\">\r\n        <div class=\"title\">\r\n          <h3 class=\"mb-3\">Actualités</h3>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 ml-auto col-xl-12 mr-auto\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                <tabset class=\"nav-tabs-danger\">\r\n                  <tab>\r\n                    <ng-template tabHeading>\r\n                      <i class=\"tim-icons icon-gift-2\"> </i> Offres\r\n                      <span class=\"text-danger\">{{offers?.length}}</span>\r\n\r\n                    </ng-template>\r\n                    <div class=\"row\" *ngIf=\"offers && offers.length > 0; else noOffers\">\r\n                      <div class=\"col-lg-4 mb-lg-auto\" *ngFor=\"let offer of offers\">\r\n                        <div class=\"card card-register\">\r\n                          <div class=\"card-body\">\r\n\r\n                            <div class=\"card\">\r\n                              <div class=\"text-center card-body\">\r\n                                <p class=\"text-white font-weight-light\">{{offer.description}}</p>\r\n                                <h3 class=\"text-danger font-weight-light\">-{{offer.reduction}}%</h3>\r\n                                <p class=\"text-warning font-weight-light\">Expire {{offer.dateFin | relativeTime}}</p>\r\n                              </div>\r\n                            </div>\r\n                            <ul>\r\n                              <li *ngFor=\"let service of offer.services\">\r\n                                <p class=\"text-white mt-4\">{{service.name}}</p>\r\n                              </li>\r\n                            </ul>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <ng-template #noOffers>\r\n                      <div class=\"text-muted text-center\">\r\n                        <p>Aucune offre pour le moment.</p>\r\n                      </div>\r\n                    </ng-template>\r\n                  </tab>\r\n                  <tab>\r\n                    <ng-template tabHeading>\r\n                      <i class=\"tim-icons icon-alert-circle-exc\"> </i> Today\r\n                      <span class=\"text-danger\">{{todaysRdv?.length}}</span>\r\n                    </ng-template>\r\n\r\n                    <div class=\"row\" *ngIf=\"todaysRdv && todaysRdv.length > 0; else noRdv\">\r\n                      <div class=\"col-lg-4 mb-lg-auto\" *ngFor=\"let rdv of todaysRdv\">\r\n                        <div class=\"card card-register\">\r\n                          <div class=\"card-body\">\r\n                            <h3 class=\"text-warning font-weight-light\">{{rdv.date | relativeTime}}</h3>\r\n                            <h4 class=\"text-white font-weight-light\">Avec {{rdv.employee.firstName}}\r\n                              {{rdv.employee.lastName}}:</h4>\r\n\r\n                            <ul>\r\n                              <li *ngFor=\"let service of rdv.services\">\r\n                                <p class=\"text-white mt-4\">{{service.name}}</p>\r\n                              </li>\r\n                            </ul>\r\n                          </div>\r\n                          <div class=\"card-footer\">\r\n                            <button class=\"btn btn-warning btn-round mr-1\" type=\"button\" data-target=\"#myModal1\"\r\n                              (click)=\"myModal1.show();tempId(rdv._id)\">\r\n                              Annuler\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <ng-template #noRdv>\r\n                      <div class=\"text-muted text-center\">\r\n                        <p>Aucun rendez-vous</p>\r\n                      </div>\r\n                    </ng-template>\r\n                  </tab>\r\n                  <tab>\r\n                    <ng-template tabHeading>\r\n                      <i class=\"tim-icons icon-notes\"> </i> historique\r\n                    </ng-template>\r\n                    <div *ngIf=\"history && history.length > 0; else noHistory\" class=\"scrollable-table-container\"\r\n                      (scroll)=\"onContainerScroll()\">\r\n                      <table class=\"table\" id=\"plain-table\">\r\n                        <thead class=\"text-danger\">\r\n                          <tr>\r\n                            <th class=\"header\"><button class=\"btn btn-link btn-danger mr-1\"\r\n                                (click)=\"flipDateSort()\">Date</button></th>\r\n                            <th class=\"header\">services</th>\r\n                            <th class=\"header\">employé</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let rdv of history\">\r\n                            <td>{{rdv.date | relativeTime}}</td>\r\n                            <td>\r\n                              <ul>\r\n                                <li *ngFor=\"let service of rdv.services\">\r\n                                  <p class=\"text-white mt-4\">{{service.name}}</p>\r\n                                </li>\r\n                              </ul>\r\n                            </td>\r\n                            <td>{{rdv.employee.firstName}} {{rdv.employee.lastName}}</td>\r\n\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n\r\n                    </div>\r\n                    <ng-template #noHistory>\r\n                      <div class=\"text-muted text-center\">\r\n                        <p>Aucun rendez-vous</p>\r\n                      </div>\r\n\r\n\r\n                    </ng-template>\r\n                  </tab>\r\n\r\n                </tabset>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"section\">\r\n    <div class=\"container\">\r\n      <div aria-hidden=\"true\" aria-labelledby=\"myModalLabel\" bsModal\r\n        class=\"modal fade modal-mini modal-warning modal-mini\" #myModal1=\"bs-modal\" id=\"myModal1\" role=\"dialog\"\r\n        tabindex=\"-1\">\r\n        <div class=\"modal-dialog\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n              <p>Supprimer ce rendez-vous?</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button class=\"btn btn-link btn-neutral\" type=\"button\" (click)=\"delete();myModal1.hide()\">Oui</button>\r\n              <button class=\"btn btn-link btn-neutral\" data-dismiss=\"modal\" type=\"button\"\r\n                (click)=\"myModal1.hide();tempId('')\">\r\n                Annuler\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "VKW6":
/*!****************************************************************!*\
  !*** ./src/app/pages/registerpage/registerpage.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error-message {\n  color: #e14eca;\n  font-size: 0.5em;\n  margin: auto;\n  padding: 0.8em;\n}\n\n.dz-error-message {\n  color: #e14eca;\n  margin: auto;\n  padding: 0.8em;\n  text-align: center;\n}\n\n.dropzone {\n  background-color: transparent;\n  border-radius: 0.5em;\n  border-color: #2b3553;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3RlcnBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUNGIiwiZmlsZSI6InJlZ2lzdGVycGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tZXNzYWdlIHtcclxuICBjb2xvcjogI2UxNGVjYTtcclxuICBmb250LXNpemU6IDAuNWVtO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAwLjhlbTtcclxufVxyXG4uZHotZXJyb3ItbWVzc2FnZSB7XHJcbiAgY29sb3I6ICNlMTRlY2E7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAuOGVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5kcm9wem9uZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgYm9yZGVyLWNvbG9yOiAjMmIzNTUzO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "YUbt":
/*!*****************************************!*\
  !*** ./src/app/services/rdv.service.ts ***!
  \*****************************************/
/*! exports provided: RdvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RdvService", function() { return RdvService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var RdvService = /** @class */ (function () {
    function RdvService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            withCredentials: true,
            observe: 'response'
        };
    }
    RdvService.prototype.newRdv = function (_a) {
        var data = _a.data;
        return this.http.post('https://m1p11mean-aro-kenny-1.onrender.com/rdv/new', data, this.httpOptions);
    };
    RdvService.prototype.getRdv = function (_a) {
        var dateInit = _a.dateInit, dateFin = _a.dateFin, limit = _a.limit, page = _a.page, dateSort = _a.dateSort;
        return this.http.get('https://m1p11mean-aro-kenny-1.onrender.com/rdv/' + dateInit + '/' + dateFin + '/' + limit + '/' + page + '/' + dateSort, this.httpOptions);
    };
    RdvService.prototype.get = function (_a) {
        var id = _a.id;
        return this.http.get('https://m1p11mean-aro-kenny-1.onrender.com/rdv/' + id, this.httpOptions);
    };
    RdvService.prototype.delete = function (id) {
        return this.http.delete('https://m1p11mean-aro-kenny-1.onrender.com/rdv/rdvs/' + id, this.httpOptions);
    };
    RdvService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    RdvService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RdvService);
    return RdvService;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/pages.module */ "dgmN");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_8__["PagesModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "ZxaP":
/*!****************************************************************!*\
  !*** ./src/app/pages/client-login/client-login.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error-message {\n  color: #e14eca;\n  font-size: 0.5em;\n  margin: auto;\n  padding: 0.8em;\n}\n\n.input-group .pass {\n  border-right: 0 none;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjbGllbnQtbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FBQ0YiLCJmaWxlIjoiY2xpZW50LWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1lc3NhZ2Uge1xyXG4gIGNvbG9yOiAjZTE0ZWNhO1xyXG4gIGZvbnQtc2l6ZTogMC41ZW07XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAuOGVtO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAgLnBhc3Mge1xyXG4gIGJvcmRlci1yaWdodDogMCBub25lO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG5cclxufSJdfQ== */");

/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "yyhP");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "44PX");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/alert */ "psEu");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/popover */ "EDFS");
/* harmony import */ var _pipes_relative_time_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../pipes/relative-time.pipe */ "8g+j");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./index/index.component */ "sqmE");
/* harmony import */ var _profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./profilepage/profilepage.component */ "wmyY");
/* harmony import */ var _registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./registerpage/registerpage.component */ "vqka");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./navbar/navbar.component */ "+TKo");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./footer/footer.component */ "33AS");
/* harmony import */ var _some_shit_some_shit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./some-shit/some-shit.component */ "2a7U");
/* harmony import */ var _client_login_client_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./client-login/client-login.component */ "k3Ac");
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-dropzone-wrapper */ "vV3i");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-dropzone */ "kvL/");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-spinner */ "JqCM");






























var DEFAULT_DROPZONE_CONFIG = {
    // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    acceptedFiles: 'image/*'
};
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_26__["DropzoneModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_7__["ProgressbarModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(),
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_17__["PopoverModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"].forRoot(),
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_16__["JwBootstrapSwitchNg2Module"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__["TabsModule"].forRoot(),
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"].forRoot(),
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_12__["AlertModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_14__["CarouselModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"].forRoot(),
                ngx_dropzone__WEBPACK_IMPORTED_MODULE_27__["NgxDropzoneModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_28__["NgxSpinnerModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [
                _index_index_component__WEBPACK_IMPORTED_MODULE_19__["IndexComponent"],
                _profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_20__["ProfilepageComponent"],
                _registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_21__["RegisterpageComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_22__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
                _some_shit_some_shit_component__WEBPACK_IMPORTED_MODULE_24__["SomeShitComponent"],
                _client_login_client_login_component__WEBPACK_IMPORTED_MODULE_25__["ClientLoginComponent"],
                _pipes_relative_time_pipe__WEBPACK_IMPORTED_MODULE_18__["RelativeTimePipe"]
            ],
            exports: [
                _index_index_component__WEBPACK_IMPORTED_MODULE_19__["IndexComponent"],
                _profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_20__["ProfilepageComponent"],
                _registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_21__["RegisterpageComponent"],
                _client_login_client_login_component__WEBPACK_IMPORTED_MODULE_25__["ClientLoginComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_22__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"]
            ],
            providers: [{
                    provide: ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_26__["DROPZONE_CONFIG"],
                    useValue: DEFAULT_DROPZONE_CONFIG
                }]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "fu6R":
/*!******************************************!*\
  !*** ./src/app/services/bank.service.ts ***!
  \******************************************/
/*! exports provided: BankService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankService", function() { return BankService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var BankService = /** @class */ (function () {
    function BankService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            withCredentials: true,
            observe: 'response'
        };
    }
    BankService.prototype.refill = function (data) {
        return this.http.post('https://m1p11mean-aro-kenny-1.onrender.com/bank/refill', data, this.httpOptions);
    };
    BankService.prototype.get = function () {
        return this.http.get('https://m1p11mean-aro-kenny-1.onrender.com/bank/', this.httpOptions);
    };
    BankService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    BankService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BankService);
    return BankService;
}());



/***/ }),

/***/ "k3Ac":
/*!**************************************************************!*\
  !*** ./src/app/pages/client-login/client-login.component.ts ***!
  \**************************************************************/
/*! exports provided: ClientLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLoginComponent", function() { return ClientLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_client_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./client-login.component.html */ "v0sM");
/* harmony import */ var _client_login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-login.component.scss */ "ZxaP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








var ClientLoginComponent = /** @class */ (function () {
    function ClientLoginComponent(fb, userservice, spinner, router, elementRef) {
        this.fb = fb;
        this.userservice = userservice;
        this.spinner = spinner;
        this.router = router;
        this.elementRef = elementRef;
        this.isCollapsed = true;
        this.loading = false;
        this.error = false;
        this.success = false;
        this.message = '';
        this.hidden = false;
    }
    // @HostListener("document:mousemove", ["$event"])
    // onMouseMove(e) {
    //   var squares1 = document.getElementById("square1");
    //   var squares2 = document.getElementById("square2");
    //   var squares3 = document.getElementById("square3");
    //   var squares4 = document.getElementById("square4");
    //   var squares5 = document.getElementById("square5");
    //   var squares6 = document.getElementById("square6");
    //   var squares7 = document.getElementById("square7");
    //   var squares8 = document.getElementById("square8");
    //   var posX = e.clientX - window.innerWidth / 2;
    //   var posY = e.clientY - window.innerWidth / 6;
    //   squares1.style.transform =
    //     "perspective(500px) rotateY(" +
    //     posX * 0.05 +
    //     "deg) rotateX(" +
    //     posY * -0.05 +
    //     "deg)";
    //   squares2.style.transform =
    //     "perspective(500px) rotateY(" +
    //     posX * 0.05 +
    //     "deg) rotateX(" +
    //     posY * -0.05 +
    //     "deg)";
    //   squares3.style.transform =
    //     "perspective(500px) rotateY(" +
    //     posX * 0.05 +
    //     "deg) rotateX(" +
    //     posY * -0.05 +
    //     "deg)";
    //   squares4.style.transform =
    //     "perspective(500px) rotateY(" +
    //     posX * 0.05 +
    //     "deg) rotateX(" +
    //     posY * -0.05 +
    //     "deg)";
    //   squares5.style.transform =
    //     "perspective(500px) rotateY(" +
    //     posX * 0.05 +
    //     "deg) rotateX(" +
    //     posY * -0.05 +
    //     "deg)";
    //   squares6.style.transform =
    //     "perspective(500px) rotateY(" +
    //     posX * 0.05 +
    //     "deg) rotateX(" +
    //     posY * -0.05 +
    //     "deg)";
    //   squares7.style.transform =
    //     "perspective(500px) rotateY(" +
    //     posX * 0.02 +
    //     "deg) rotateX(" +
    //     posY * -0.02 +
    //     "deg)";
    //   squares8.style.transform =
    //     "perspective(500px) rotateY(" +
    //     posX * 0.02 +
    //     "deg) rotateX(" +
    //     posY * -0.02 +
    //     "deg)";
    // }
    ClientLoginComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("register-page");
        this.loginForm = this.fb.group({
            identifiant: ['paul', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            motDePasse: ['aZ12345678', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        console.log("init login page");
        // this.onMouseMove(event);
    };
    ClientLoginComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        console.log("destroyingu: " + body);
        body.classList.remove("register-page");
    };
    ClientLoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.spinner.show();
            var data = {
                username: this.loginForm.value.identifiant,
                password: this.loginForm.value.motDePasse
            };
            this.userservice.login({ data: data }).subscribe(function (response) {
                _this.error = false;
                _this.success = true;
                setTimeout(function () {
                    _this.success = false;
                }, 5000);
                _this.message = response.message;
                var user = response.body.user;
                localStorage.setItem('uToken', btoa(user.role));
                localStorage.setItem('username', user.username);
                console.log(localStorage.getItem('uToken'));
                _this.router.navigate(['/']);
                window.location.reload();
                console.log(response);
                _this.spinner.hide();
            }, function (error) {
                _this.spinner.hide();
                _this.success = false;
                _this.error = true;
                setTimeout(function () {
                    _this.error = false;
                }, 5000);
                _this.message = error.error.error;
                console.log(error.error.error);
            });
            console.log("Form submitted successfully");
        }
        else {
            console.log("not valid");
            this.loginForm.markAllAsTouched();
        }
        // setTimeout(() => {
        //   /** spinner ends after 5 seconds */
        // }, 5000);
    };
    // test() {
    //   this.userservice.test().subscribe(
    //     response => {
    //       // this.error = false;
    //       // this.success = true;
    //       // setTimeout(() => {
    //       //   this.success = false;
    //       // }, 5000);
    //       // this.message = response.message;
    //       console.log(response);
    //     },
    //     error => {
    //       // this.success = false;
    //       // this.error = true;
    //       // setTimeout(() => {
    //       //   this.error = false;
    //       // }, 5000);
    //       // this.message = error.error.message;
    //       console.log(error);
    //     }
    //   );
    //   console.log(this.userservice.isLoggedIn());
    // }
    ClientLoginComponent.prototype.togglePasswordVisibility = function (inputField) {
        if (this.hidden) {
            this.hidden = false;
        }
        else {
            this.hidden = true;
        }
        inputField.type = inputField.type === 'text' ? 'password' : 'text';
    };
    ClientLoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
    ]; };
    ClientLoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-client-login',
            template: _raw_loader_client_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_client_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
    ], ClientLoginComponent);
    return ClientLoginComponent;
}());



/***/ }),

/***/ "o+hN":
/*!****************************************************!*\
  !*** ./src/app/pages/navbar/navbar.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            withCredentials: true,
            observe: 'response'
        };
    }
    UserService.prototype.getEmployees = function () {
        return this.http.get('https://m1p11mean-aro-kenny-1.onrender.com/users/employees?sortBy=name&sortOrder=-1', this.httpOptions);
    };
    UserService.prototype.newUser = function (_a) {
        var formData = _a.formData;
        return this.http.post('https://m1p11mean-aro-kenny-1.onrender.com/auth/register', formData);
    };
    UserService.prototype.login = function (_a) {
        var data = _a.data;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            withCredentials: true,
            observe: 'response'
        };
        return this.http.post('https://m1p11mean-aro-kenny-1.onrender.com/auth/login', data, httpOptions);
    };
    UserService.prototype.test = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            withCredentials: true,
            observe: 'response'
        };
        return this.http.get('https://m1p11mean-aro-kenny-1.onrender.com/protected', httpOptions);
    };
    UserService.prototype.isLoggedIn = function () {
        var token = localStorage.getItem('uToken');
        if (!token)
            return false;
        return true;
    };
    UserService.prototype.logout = function () {
        return this.http.post('https://m1p11mean-aro-kenny-1.onrender.com/auth/logout', null, this.httpOptions);
    };
    UserService.prototype.myProfile = function () {
        return this.http.get('https://m1p11mean-aro-kenny-1.onrender.com/users/emp/profile', this.httpOptions);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "rRxC":
/*!*********************************************!*\
  !*** ./src/app/services/service.service.ts ***!
  \*********************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



var ServiceService = /** @class */ (function () {
    function ServiceService(http) {
        this.http = http;
    }
    ServiceService.prototype.getServices = function () {
        console.log('getting services');
        return this.http.get('https://m1p11mean-aro-kenny-1.onrender.com/service/services');
    };
    ServiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ServiceService);
    return ServiceService;
}());



/***/ }),

/***/ "sqmE":
/*!************************************************!*\
  !*** ./src/app/pages/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./index.component.html */ "V/Tm");
/* harmony import */ var _index_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.component.scss */ "LNnH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/service.service */ "rRxC");
/* harmony import */ var _services_rdv_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/rdv.service */ "YUbt");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_offer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/offer.service */ "Ann2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");










var IndexComponent = /** @class */ (function () {
    function IndexComponent(spinner, serviceService, userService, rdvservice, offerservice, route) {
        this.spinner = spinner;
        this.serviceService = serviceService;
        this.userService = userService;
        this.rdvservice = rdvservice;
        this.offerservice = offerservice;
        this.route = route;
        this.dateSort = -1;
        this.page = 1;
        this.error = false;
        this.success = false;
        this.message = "";
        this.selectedServices = [];
        this.totalPrice = 0;
        this.isSwitchOn = false;
        this.client = "65c0c12041f49e5ca93ded6e";
        this.phoneRegex = /^[0-9]{10}$/;
        this.formData = { date: '', employee: "null", paid: 0, numero: '' };
        this.limit = 10;
        this.totalPages = 0;
        this.temp = '';
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("index-page");
        Promise.all([this.spinner.show(),
            this.fetchServices(),
            this.fetchEmployees(),
            this.fetchTodaysRdv(),
            this.fetchRdvHistory(this.page),
            this.fetchOffers()]).then(function () {
            _this.spinner.hide();
        }).catch(function (error) {
            console.error('Error fetching data:', error);
            _this.spinner.hide();
        });
    };
    IndexComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("index-page");
    };
    IndexComponent.prototype.fetchOffers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.offerservice.getOffers({ 'date': new Date().toISOString() }).subscribe(function (response) {
                console.log(response.offers);
                _this.offers = response.offers;
                resolve();
            }, function (error) {
                reject();
                console.log(error);
            });
        });
    };
    IndexComponent.prototype.setSelectedServices = function (services, reduction) {
        // this.selectedServices = services;
        // const totalPrice = this.selectedServices.reduce((total, service) => total + service.price, 0);
        // console.log(this.selectedServices);
    };
    IndexComponent.prototype.fetchServices = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.serviceService.getServices().subscribe(function (data) {
                _this.services = data.services;
                resolve();
            }, function (err) {
                console.log(err);
                reject();
            });
        });
    };
    IndexComponent.prototype.fetchEmployees = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.getEmployees().subscribe(function (data) {
                _this.employees = data.body.employees;
                resolve();
            }, function (err) {
                console.log(err);
                reject();
            });
        });
    };
    IndexComponent.prototype.fetchTodaysRdv = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var today = new Date();
            var dateInit = today.toISOString();
            today.setHours(23, 59, 59, 999);
            var dateFin = today.toISOString();
            _this.rdvservice.getRdv({ 'dateInit': dateInit, 'dateFin': dateFin, 'limit': 10, 'page': 1, 'dateSort': 1 }).subscribe(function (response) {
                _this.todaysRdv = response.body.rdvs;
                resolve();
            }, function (error) {
                _this.userService.logout().subscribe(function (res) {
                    localStorage.removeItem('uToken');
                    localStorage.removeItem('username');
                    _this.route.navigate(['/login']);
                    reject();
                }, function (err) {
                    console.log(err);
                });
                console.log(error);
            });
        });
    };
    IndexComponent.prototype.fetchRdvHistory = function (page) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var today = new Date();
            var dateFin = today.toISOString();
            var dateInit = new Date("1970-01-01").toISOString();
            _this.rdvservice.getRdv({ 'dateInit': dateInit, 'dateFin': dateFin, 'limit': _this.limit, 'page': page, 'dateSort': _this.dateSort }).subscribe(function (response) {
                if (_this.page == 1) {
                    _this.history = response.body.rdvs;
                }
                else {
                    _this.history = _this.history.concat(response.body.rdvs);
                }
                _this.totalPages = response.body.totalPages;
                resolve();
            }, function (error) {
                reject();
                console.log(error);
            });
        });
    };
    IndexComponent.prototype.flipDateSort = function () {
        var _this = this;
        this.dateSort = this.dateSort * -1;
        this.page = 1;
        Promise.all([this.spinner.show(), this.fetchRdvHistory(1)]).then(function () {
            _this.spinner.hide();
        }).catch(function (error) {
            console.log(error);
            _this.spinner.hide();
        });
    };
    IndexComponent.prototype.onContainerScroll = function () {
        var _this = this;
        var container = document.querySelector('.scrollable-table-container');
        if (container) {
            if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
                if (this.page < this.totalPages) {
                    this.page += 1;
                    Promise.all([this.spinner.show(), this.fetchRdvHistory(this.page)]).then(function () {
                        _this.spinner.hide();
                    }).catch(function (error) {
                        console.log(error);
                        _this.spinner.hide();
                    });
                }
            }
        }
    };
    IndexComponent.prototype.updateSelectedServices = function (service, isChecked) {
        if (isChecked) {
            this.selectedServices.push(service);
            this.totalPrice += service.price;
        }
        else {
            var index = this.selectedServices.indexOf(service);
            if (index !== -1) {
                this.selectedServices.splice(index, 1);
                this.totalPrice -= service.price;
            }
        }
    };
    IndexComponent.prototype.submitForm = function () {
        var _this = this;
        if (this.formData.date.trim() === '') {
            this.success = false;
            this.error = true;
            setTimeout(function () {
                _this.error = false;
            }, 5000);
            this.message = "Veuillez choisir une date!";
            return;
        }
        // if (this.isSwitchOn) {
        //   if (!this.phoneRegex.test(this.formData.numero)) {
        //     this.success = false;
        //     this.error = true;
        //     setTimeout(() => {
        //       this.error = false;
        //     }, 5000);
        //     this.message = "Numero de telephone invalide!";
        //   }
        //   return;
        // }
        if (this.selectedServices.length == 0 || this.totalPrice == 0) {
            this.success = false;
            this.error = true;
            setTimeout(function () {
                _this.error = false;
            }, 5000);
            this.message = "Veuillez choisir au moins un service!";
            return;
        }
        else {
            this.spinner.show();
            var data = {
                "client": this.client,
                "employee": this.formData.employee,
                "services": this.selectedServices,
                "total": this.totalPrice,
                "paid": 0,
                "date": this.formData.date
            };
            this.rdvservice.newRdv({ data: data }).subscribe(function (response) {
                _this.error = false;
                _this.success = true;
                setTimeout(function () {
                    _this.success = false;
                }, 5000);
                _this.message = response.message;
                Promise.all([_this.fetchTodaysRdv()]).then(function () {
                    _this.spinner.hide();
                }).catch(function (err) {
                    _this.spinner.hide();
                    console.log(err);
                });
                // console.log(response);
            }, function (error) {
                _this.spinner.hide();
                _this.success = false;
                _this.error = true;
                setTimeout(function () {
                    _this.error = false;
                }, 5000);
                _this.message = error.error.message;
            });
        }
        // console.log(data);
    };
    IndexComponent.prototype.tempId = function (id) {
        this.temp = id;
        console.log(this.temp);
    };
    // loadRdvData(id: string) {
    //   this.rdvservice.get({ id }).subscribe(response => {
    //     this.rdv = response.body.rdv;
    //     this.formData.date=this.rdv.date;
    //   }, err => {
    //     console.log(err);
    //   })
    // }
    IndexComponent.prototype.delete = function () {
        var _this = this;
        this.spinner.show();
        this.rdvservice.delete(this.temp).subscribe(function (response) {
            _this.page = 1;
            Promise.all([_this.fetchTodaysRdv()]).then(function () {
                _this.spinner.hide();
            }).catch(function (err) {
                _this.spinner.hide();
                console.log(err);
            });
            _this.temp = '';
        }, function (error) { _this.spinner.hide(); console.log(error); });
    };
    IndexComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
        { type: _services_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _services_rdv_service__WEBPACK_IMPORTED_MODULE_5__["RdvService"] },
        { type: _services_offer_service__WEBPACK_IMPORTED_MODULE_7__["OfferService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-index",
            template: _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_index_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"], _services_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"], _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _services_rdv_service__WEBPACK_IMPORTED_MODULE_5__["RdvService"], _services_offer_service__WEBPACK_IMPORTED_MODULE_7__["OfferService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "v0sM":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/client-login/client-login.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n\r\n  <div class=\"page-header\">\r\n\r\n    <div class=\"page-header-image\"></div>\r\n    <div class=\"content\">\r\n\r\n      <div class=\"container\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-5 col-md-6 offset-lg-0 offset-md-3\">\r\n            <div class=\"square square-7\" id=\"square7\"></div>\r\n            <div class=\"square square-8\" id=\"square8\"></div>\r\n            <div class=\"card card-register\">\r\n              <div class=\"card-header\">\r\n                <img alt=\"Card image\" class=\"card-img\" src=\"assets/img/square1-red.png\" />\r\n\r\n                <h4 class=\"card-title\">Hey!</h4>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <form class=\"form\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n                  <div class=\"input-group\" [ngClass]=\"{ 'input-group-focus': focus0 === true }\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <div class=\"input-group-text\">\r\n                        <i class=\"tim-icons icon-single-02\"> </i>\r\n                      </div>\r\n                    </div>\r\n                    <input class=\"form-control\" formControlName=\"identifiant\" placeholder=\"identifiant\"\r\n                      (focus)=\"focus0 = true\" (blur)=\"focus0 = false\" />\r\n                    <div *ngIf=\"loginForm.get('identifiant').invalid && loginForm.get('identifiant').touched\"\r\n                      class=\"error-message\">\r\n                      Requis\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"input-group\" [ngClass]=\"{ 'input-group-focus': focus1 === true }\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <div class=\"input-group-text\">\r\n                        <i class=\"tim-icons icon-lock-circle\"> </i>\r\n                      </div>\r\n                    </div>\r\n                    <input #passwordInput type=\"password\" class=\"form-control pass\" formControlName=\"motDePasse\"\r\n                      placeholder=\"Mot de passe\" (focus)=\"focus1 = true\" (blur)=\"focus1 = false\" />\r\n                    <div class=\"input-group-append\">\r\n                      <span class=\"input-group-text\">\r\n                        <i *ngIf=\"hidden\" class=\"fa fa-eye\" aria-hidden=\"true\"\r\n                          (click)=\"togglePasswordVisibility(passwordInput)\"></i>\r\n                        <i *ngIf=\"!hidden\" class=\"fa fa-eye-slash\" aria-hidden=\"true\"\r\n                          (click)=\"togglePasswordVisibility(passwordInput)\"></i>\r\n\r\n                      </span>\r\n                    </div>\r\n                    <div *ngIf=\"loginForm.get('motDePasse').invalid && loginForm.get('motDePasse').touched\"\r\n                      class=\"error-message\">\r\n                      Requis\r\n                    </div>\r\n                  </div>\r\n                  <alert *ngIf=\"error\" class=\"alert\" [type]=\"'danger alert'\" [dismissible]=\"true\">\r\n                    <span> {{message}}\r\n                    </span>\r\n                  </alert>\r\n                  <alert *ngIf=\"success\" class=\"alert-with-icon\" [type]=\"'success alert-with-icon'\"\r\n                    [dismissible]=\"true\">\r\n                    <span class=\"tim-icons icon-check-2\" data-notify=\"icon\"> </span>\r\n                    <span>\r\n                      <b> Yay! </b> {{message}}\r\n                    </span>\r\n                  </alert>\r\n                  <!-- <div class=\"form-check text-left\">\r\n                      <label class=\"form-check-label\">\r\n                        <input class=\"form-check-input\" type=\"checkbox\" />\r\n  \r\n                        <span class=\"form-check-sign\"> </span> I agree to the\r\n                        <a href=\"javascript:void(0)\"> terms and conditions </a> .\r\n                      </label>\r\n                    </div> -->\r\n                  <ngx-spinner type=\"ball-scale-multiple\" color=\"#fd5d93\" bdColor=\"rgba(0, 0, 0, 0.8)\"></ngx-spinner>\r\n\r\n                  <input type=\"submit\" class=\"btn btn-danger btn-round btn-lg\" />\r\n                </form>\r\n                <!-- <button (click)=\"test()\">Test</button> -->\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"register-bg\"></div>\r\n        <div class=\"square square-1\" id=\"square1\"></div>\r\n        <div class=\"square square-2\" id=\"square2\"></div>\r\n        <div class=\"square square-3\" id=\"square3\"></div>\r\n        <div class=\"square square-4\" id=\"square4\"></div>\r\n        <div class=\"square square-5\" id=\"square5\"></div>\r\n        <div class=\"square square-6\" id=\"square6\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index/index.component */ "sqmE");
/* harmony import */ var _pages_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/profilepage/profilepage.component */ "wmyY");
/* harmony import */ var _pages_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/registerpage/registerpage.component */ "vqka");
/* harmony import */ var _pages_some_shit_some_shit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/some-shit/some-shit.component */ "2a7U");
/* harmony import */ var _pages_client_login_client_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/client-login/client-login.component */ "k3Ac");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth-guard.service */ "MKys");
/* harmony import */ var _services_auth_guard_login_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth-guard-login.service */ "Gzx9");












var routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]] },
    { path: "profile", component: _pages_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_6__["ProfilepageComponent"] },
    {
        path: "register", component: _pages_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_7__["RegisterpageComponent"],
        canActivate: [_services_auth_guard_login_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardLoginService"]]
    },
    { path: "someshit", component: _pages_some_shit_some_shit_component__WEBPACK_IMPORTED_MODULE_8__["SomeShitComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]] },
    {
        path: "login", component: _pages_client_login_client_login_component__WEBPACK_IMPORTED_MODULE_9__["ClientLoginComponent"],
        canActivate: [_services_auth_guard_login_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardLoginService"]]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "vqka":
/*!**************************************************************!*\
  !*** ./src/app/pages/registerpage/registerpage.component.ts ***!
  \**************************************************************/
/*! exports provided: RegisterpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterpageComponent", function() { return RegisterpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registerpage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registerpage.component.html */ "69r7");
/* harmony import */ var _registerpage_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registerpage.component.scss */ "VKW6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");








var RegisterpageComponent = /** @class */ (function () {
    function RegisterpageComponent(fb, userservice, route, spinner) {
        this.fb = fb;
        this.userservice = userservice;
        this.route = route;
        this.spinner = spinner;
        this.files = [];
        this.isCollapsed = true;
        this.success = false;
        this.error = false;
        this.message = '';
        this.fileEmpty = false;
    }
    RegisterpageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("register-page");
        // this.onMouseMove(event);
        // Initialize the form with FormBuilder
        this.registrationForm = this.fb.group({
            identifiant: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            nom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            prenoms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            motDePasse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            telephone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    RegisterpageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("register-page");
    };
    RegisterpageComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.files.length === 0) {
            this.fileEmpty = true;
            setTimeout(function () {
                _this.fileEmpty = false;
            }, 5000);
            return;
        }
        // Check if the form is valid
        if (this.registrationForm.valid) {
            // console.log(this.registrationForm);
            var formData = new FormData();
            formData.append('pic', this.files[0]);
            formData.append('username', this.registrationForm.value.identifiant);
            formData.append('password', this.registrationForm.value.motDePasse);
            formData.append('role', "client");
            formData.append('firstName', this.registrationForm.value.prenoms);
            formData.append('lastName', this.registrationForm.value.nom);
            formData.append('email', this.registrationForm.value.email);
            formData.append('phone', this.registrationForm.value.telephone);
            this.spinner.show();
            this.userservice.newUser({ formData: formData }).subscribe(function (response) {
                _this.error = false;
                setTimeout(function () {
                    _this.spinner.hide();
                    _this.route.navigate(['/login']);
                }, 3000);
                _this.message = response.message;
                console.log(response);
            }, function (error) {
                _this.spinner.hide();
                _this.success = false;
                _this.error = true;
                setTimeout(function () {
                    _this.error = false;
                }, 5000);
                _this.message = error.error.error;
            });
        }
        else {
            // Mark all fields as touched to display errors
            this.registrationForm.markAllAsTouched();
        }
    };
    RegisterpageComponent.prototype.onSelect = function (event) {
        var _a;
        console.log(event);
        (_a = this.files).push.apply(_a, event.addedFiles);
    };
    RegisterpageComponent.prototype.onRemove = function (event) {
        console.log(event);
        this.files.splice(this.files.indexOf(event), 1);
    };
    RegisterpageComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }
    ]; };
    RegisterpageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-registerpage",
            template: _raw_loader_registerpage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_registerpage_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], RegisterpageComponent);
    return RegisterpageComponent;
}());



/***/ }),

/***/ "wmyY":
/*!************************************************************!*\
  !*** ./src/app/pages/profilepage/profilepage.component.ts ***!
  \************************************************************/
/*! exports provided: ProfilepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilepageComponent", function() { return ProfilepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profilepage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profilepage.component.html */ "F+yX");
/* harmony import */ var _profilepage_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profilepage.component.scss */ "R9rn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_rdv_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rdv.service */ "YUbt");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_preference_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/preference.service */ "+An/");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/service.service */ "rRxC");
/* harmony import */ var _services_bank_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/bank.service */ "fu6R");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "JqCM");












var ProfilepageComponent = /** @class */ (function () {
    function ProfilepageComponent(spinner, rdvservice, userService, sanitizer, route, preferenceservice, serviceservice, bankservice) {
        this.spinner = spinner;
        this.rdvservice = rdvservice;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.route = route;
        this.preferenceservice = preferenceservice;
        this.serviceservice = serviceservice;
        this.bankservice = bankservice;
        this.isCollapsed = true;
        this.rdvs = [];
        this.page = 1;
        this.services = [];
        this.employees = [];
        this.limit = 10;
        this.totalPages = 0;
        this.dateSort = -1;
        this.formData = { date: '', employee: "null", paid: 0, numero: '' };
        this.message = "";
        this.error = false;
        this.success = false;
        this.selectedServices = [];
        this.totalPrice = 0;
        this.phoneRegex = /^[0-9]{10}$/;
        this.isSwitchOn = false;
        this.temp = '';
        // rdv: any = [];
        this.prefServices = [];
        this.prefEmps = [];
        this.refill = 0;
    }
    ProfilepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("profile-page");
        Promise.all([this.spinner.show(), this.fetchRdv(this.page),
            this.fetchEmp(),
            this.fetcPrefServices(),
            this.fetcPrefEmps(),
            this.fetchServices(),
            this.fetchEmployees(),
            this.fetchBank(),]).then(function () {
            _this.spinner.hide();
        }).catch(function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    ProfilepageComponent.prototype.refillBank = function () {
        var _this = this;
        this.spinner.show();
        var data = {
            solde: this.refill
        };
        this.bankservice.refill(data).subscribe(function (data) {
            Promise.all([_this.fetchBank()]).then(function () {
                _this.spinner.hide();
            }).catch(function (err) {
                _this.spinner.hide();
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    };
    ProfilepageComponent.prototype.fetchBank = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.bankservice.get().subscribe(function (res) {
                _this.solde = res.body.solde;
                resolve();
            }, function (err) {
                console.log(err);
                reject();
            });
        });
    };
    ProfilepageComponent.prototype.isInPrefServices = function (service) {
        return this.prefServices.some(function (pref) { return pref.service._id === service._id; });
    };
    ProfilepageComponent.prototype.isInPrefEmps = function (emp) {
        return this.prefEmps.some(function (pref) { return pref.employee._id === emp._id; });
    };
    ProfilepageComponent.prototype.updatePrefService = function (service) {
        var _this = this;
        this.spinner.show();
        var data = {
            service: service
        };
        this.preferenceservice.updatePrefService(data).subscribe(function (data) {
            Promise.all([_this.fetcPrefServices()]).then(function () {
                _this.spinner.hide();
            }).catch(function (err) {
                _this.spinner.hide();
                console.log(err);
            });
        }, function (err) { _this.spinner.hide(); console.log(err); });
    };
    ProfilepageComponent.prototype.updatePrefEmp = function (emp) {
        var _this = this;
        this.spinner.show();
        var data = {
            employee: emp
        };
        this.preferenceservice.updatePrefEmp(data).subscribe(function (data) {
            Promise.all([_this.fetcPrefEmps()]).then(function () {
                _this.spinner.hide();
            }).catch(function (err) {
                _this.spinner.hide();
                console.log(err);
            });
        }, function (err) { _this.spinner.hide(); console.log(err); });
    };
    ProfilepageComponent.prototype.fetchServices = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.serviceservice.getServices().subscribe(function (data) {
                _this.services = data.services;
                resolve();
            }, function (err) { reject(); console.log(err); });
        });
    };
    ProfilepageComponent.prototype.fetchEmployees = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.getEmployees().subscribe(function (data) {
                _this.employees = data.body.employees;
                resolve();
            }, function (err) { reject(); console.log(err); });
        });
    };
    ProfilepageComponent.prototype.fetcPrefServices = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.preferenceservice.getPrefServices().subscribe(function (res) {
                _this.prefServices = res.body.prefServices;
                resolve();
            }, function (err) {
                console.log(err);
                reject();
            });
        });
    };
    ProfilepageComponent.prototype.fetcPrefEmps = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.preferenceservice.getPrefEmps().subscribe(function (res) {
                _this.prefEmps = res.body.prefEmps;
                resolve();
            }, function (err) {
                console.log(err);
                reject();
            });
        });
    };
    ProfilepageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("profile-page");
    };
    ProfilepageComponent.prototype.flipDateSort = function () {
        var _this = this;
        this.spinner.show();
        this.dateSort = this.dateSort * -1;
        this.page = 1;
        Promise.all([this.fetchRdv(1)]).then(function () {
            _this.spinner.hide();
        }).catch(function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    ProfilepageComponent.prototype.fetchRdv = function (page) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var today = new Date();
            var dateInit = today.toISOString();
            var dateFin = new Date("20100-12-12").toISOString();
            _this.rdvservice.getRdv({ 'dateInit': dateInit, 'dateFin': dateFin, 'limit': _this.limit, 'page': page, 'dateSort': _this.dateSort }).subscribe(function (response) {
                if (_this.page == 1) {
                    _this.rdvs = response.body.rdvs;
                    console.log(response.body.rdvs);
                }
                else {
                    _this.rdvs = _this.rdvs.concat(response.body.rdvs);
                }
                _this.totalPages = response.body.totalPages;
                resolve();
            }, function (error) {
                console.log(error);
                reject();
            });
        });
    };
    ProfilepageComponent.prototype.onContainerScroll = function () {
        var _this = this;
        var container = document.querySelector('.scrollable-table-container');
        if (container) {
            if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
                if (this.page < this.totalPages) {
                    this.page += 1;
                    Promise.all([this.spinner.show(), this.fetchRdv(this.page)]).then(function () {
                        _this.spinner.hide();
                    }).catch(function (err) {
                        _this.spinner.hide();
                        console.log(err);
                    });
                }
            }
        }
    };
    ProfilepageComponent.prototype.tempId = function (id) {
        this.temp = id;
        console.log(this.temp);
    };
    // loadRdvData(id: string) {
    //   this.rdvservice.get({ id }).subscribe(response => {
    //     this.rdv = response.body.rdv;
    //     this.formData.date=this.rdv.date;
    //   }, err => {
    //     console.log(err);
    //   })
    // }
    ProfilepageComponent.prototype.delete = function () {
        var _this = this;
        this.spinner.show();
        this.rdvservice.delete(this.temp).subscribe(function (response) {
            console.log(response);
            _this.page = 1;
            Promise.all([_this.fetchRdv(1)]).then(function () {
                _this.spinner.hide();
            }).catch(function (err) {
                _this.spinner.hide();
                console.log(err);
            });
            _this.temp = '';
        }, function (error) { _this.spinner.hide(); console.log(error); });
    };
    ProfilepageComponent.prototype.fetchEmp = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.myProfile().subscribe(function (data) {
                _this.user = data.body.employee;
                console.log(_this.user.lastName);
                var base64Image = data.body.profilePicture;
                var byteCharacters = atob(base64Image);
                var byteNumbers = new Array(byteCharacters.length);
                for (var i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                var byteArray = new Uint8Array(byteNumbers);
                var blob = new Blob([byteArray], { type: 'image/jpeg' });
                var imageFile = new File([blob], 'profile_picture.jpg', { type: 'image/jpeg' });
                _this.image = _this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(imageFile));
                _this.files = [];
                _this.files.push(imageFile);
                console.log(_this.files[0]);
                resolve();
            }, function (err) {
                _this.userService.logout().subscribe(function (response) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('username');
                    _this.route.navigate(['/login']);
                }, function (err) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('username');
                    _this.route.navigate(['/login']);
                    console.log(err);
                });
                console.log(err);
                reject();
            });
        });
    };
    ProfilepageComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"] },
        { type: src_app_services_rdv_service__WEBPACK_IMPORTED_MODULE_4__["RdvService"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _services_preference_service__WEBPACK_IMPORTED_MODULE_8__["PreferenceService"] },
        { type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_9__["ServiceService"] },
        { type: _services_bank_service__WEBPACK_IMPORTED_MODULE_10__["BankService"] }
    ]; };
    ProfilepageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-profilepage",
            template: _raw_loader_profilepage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_profilepage_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"], src_app_services_rdv_service__WEBPACK_IMPORTED_MODULE_4__["RdvService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _services_preference_service__WEBPACK_IMPORTED_MODULE_8__["PreferenceService"], src_app_services_service_service__WEBPACK_IMPORTED_MODULE_9__["ServiceService"], _services_bank_service__WEBPACK_IMPORTED_MODULE_10__["BankService"]])
    ], ProfilepageComponent);
    return ProfilepageComponent;
}());



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ywPk":
/*!**********************************************************!*\
  !*** ./src/app/pages/some-shit/some-shit.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb21lLXNoaXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*
=========================================================
* BLK Design System Angular - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-angular
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map