(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/icon-sprite/fesm5/icon-sprite.js":
/*!***********************************************!*\
  !*** ./dist/icon-sprite/fesm5/icon-sprite.js ***!
  \***********************************************/
/*! exports provided: IconSpriteService, IconSpriteComponent, IconSpriteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconSpriteService", function() { return IconSpriteService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconSpriteComponent", function() { return IconSpriteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconSpriteModule", function() { return IconSpriteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var IconSpriteService = /** @class */ (function () {
    function IconSpriteService() {
    }
    IconSpriteService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    IconSpriteService.ctorParameters = function () { return []; };
    /** @nocollapse */ IconSpriteService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function IconSpriteService_Factory() { return new IconSpriteService(); }, token: IconSpriteService, providedIn: "root" });
    return IconSpriteService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var IconSpriteComponent = /** @class */ (function () {
    function IconSpriteComponent() {
        this.width = '100%';
        this.preserveAspectRatio = 'xMinYMax meet';
    }
    /**
     * @return {?}
     */
    IconSpriteComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    IconSpriteComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'svg-icon-sprite',
                    styles: [":host svg,:host use{fill:currentColor}"],
                    template: "<ng-container ngIf=\"!viewBox; else viewBoxTemplate\">\n  <svg [attr.width]=\"width\" [attr.height]=\"height || width\" [attr.class]=\"classes\">\n    <use [attr.xlink:href]=\"src\"></use>\n  </svg>\n</ng-container>\n\n<ng-template #viewBoxTemplate>\n  <svg [attr.class]=\"classes\"\n       [attr.width]=\"width\"\n       [attr.height]=\"height || width\"\n       [attr.viewBox]=\"viewBox\"\n       [attr.preserveAspectRatio]=\"preserveAspectRatio\">\n    <use [attr.xlink:href]=\"src\"></use>\n  </svg>\n</ng-template>\n"
                },] },
    ];
    /** @nocollapse */
    IconSpriteComponent.ctorParameters = function () { return []; };
    IconSpriteComponent.propDecorators = {
        src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        viewBox: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        preserveAspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return IconSpriteComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var IconSpriteModule = /** @class */ (function () {
    function IconSpriteModule() {
    }
    IconSpriteModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [],
                    declarations: [IconSpriteComponent],
                    exports: [IconSpriteComponent]
                },] },
    ];
    return IconSpriteModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1zcHJpdGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL2ljb24tc3ByaXRlL2xpYi9pY29uLXNwcml0ZS5zZXJ2aWNlLnRzIiwibmc6Ly9pY29uLXNwcml0ZS9saWIvaWNvbi1zcHJpdGUuY29tcG9uZW50LnRzIiwibmc6Ly9pY29uLXNwcml0ZS9saWIvaWNvbi1zcHJpdGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSWNvblNwcml0ZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3ZnLWljb24tc3ByaXRlJyxcbiAgc3R5bGVzOiBbYDpob3N0IHN2Zyw6aG9zdCB1c2V7ZmlsbDpjdXJyZW50Q29sb3J9YF0sXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciBuZ0lmPVwiIXZpZXdCb3g7IGVsc2Ugdmlld0JveFRlbXBsYXRlXCI+XG4gIDxzdmcgW2F0dHIud2lkdGhdPVwid2lkdGhcIiBbYXR0ci5oZWlnaHRdPVwiaGVpZ2h0IHx8IHdpZHRoXCIgW2F0dHIuY2xhc3NdPVwiY2xhc3Nlc1wiPlxuICAgIDx1c2UgW2F0dHIueGxpbms6aHJlZl09XCJzcmNcIj48L3VzZT5cbiAgPC9zdmc+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLXRlbXBsYXRlICN2aWV3Qm94VGVtcGxhdGU+XG4gIDxzdmcgW2F0dHIuY2xhc3NdPVwiY2xhc3Nlc1wiXG4gICAgICAgW2F0dHIud2lkdGhdPVwid2lkdGhcIlxuICAgICAgIFthdHRyLmhlaWdodF09XCJoZWlnaHQgfHwgd2lkdGhcIlxuICAgICAgIFthdHRyLnZpZXdCb3hdPVwidmlld0JveFwiXG4gICAgICAgW2F0dHIucHJlc2VydmVBc3BlY3RSYXRpb109XCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCI+XG4gICAgPHVzZSBbYXR0ci54bGluazpocmVmXT1cInNyY1wiPjwvdXNlPlxuICA8L3N2Zz5cbjwvbmctdGVtcGxhdGU+XG5gXG59KVxuZXhwb3J0IGNsYXNzIEljb25TcHJpdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBzcmM6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIGNsYXNzZXM6ICdpY29uJztcbiAgQElucHV0KCkgcHVibGljIHdpZHRoID0gJzEwMCUnO1xuICBASW5wdXQoKSBwdWJsaWMgaGVpZ2h0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyB2aWV3Qm94OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBwcmVzZXJ2ZUFzcGVjdFJhdGlvID0gJ3hNaW5ZTWF4IG1lZXQnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25TcHJpdGVDb21wb25lbnQgfSBmcm9tICcuL2ljb24tc3ByaXRlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbSWNvblNwcml0ZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtJY29uU3ByaXRlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBJY29uU3ByaXRlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozs0QkFKRDs7Ozs7OztBQ0FBO0lBK0JFO3FCQUx3QixNQUFNO21DQUdRLGVBQWU7S0FFcEM7Ozs7SUFFakIsc0NBQVE7OztJQUFSLGVBQWE7O2dCQS9CZCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsTUFBTSxFQUFFLENBQUMsd0NBQXdDLENBQUM7b0JBQ2xELFFBQVEsRUFBRSwyZ0JBZVg7aUJBQ0E7Ozs7O3NCQUdFLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSztzQ0FDTCxLQUFLOzs4QkE3QlI7Ozs7Ozs7QUNBQTs7OztnQkFHQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUMvQjs7MkJBUkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div ::ng-deep svg.some-icon-class {\n  height: 75px;\n  width: 75px;\n  fill: orange; /* IE 11 support by polyfill */\n}\n\ndiv ::ng-deep svg.some-icon-class use {\n  fill: orange; /* evergreen browser symbol styling */\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>\n    {{ title }} <small>(package development app)</small>\n  </h1>\n\n  <p>\n    Angular package that provides both a solution for generating sprites and a component for including them.\n  </p>\n\n  <ul>\n    <li>\n      <a href=\"https://github.com/jannicz/ng-svg-icon-sprite\">\n        <strong>ng-svg-icon-sprite sources on Github</strong>\n      </a>\n    </li>\n    <li>\n      <a href=\"https://www.npmjs.com/package/ng-svg-icon-sprite\">\n        <strong>ng-svg-icon-sprite package on npm</strong>\n      </a>\n    </li>\n  </ul>\n\n  <h2>Usage</h2>\n\n  <p>\n    install <strong>ng-svg-icon-sprite</strong> and import the npm module via <code>import &#123; IconSpriteModule &#125; from 'ng-svg-icon-sprite';</code> and add it\n    in any <code>@NgModule</code> imports array.\n  </p>\n\n  <p>\n    run <strong>npm run create-icon-sprite</strong> to create a sprite out of your SVG icons. Include the <code>svg-icon-sprite</code>\n    directive like shown below.\n  </p>\n\n  <h2>Basic Examples</h2>\n\n  <ul class=\"inline\">\n    <li style=\"color: darkred;\">\n      <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#star'\" [width]=\"'100px'\"></svg-icon-sprite>\n      <span>red, 100px</span>\n    </li>\n    <li style=\"color: darkgreen;\">\n      <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#delete'\" [width]=\"'90px'\" [height]=\"'80px'\"></svg-icon-sprite>\n      <span>green, 90px</span>\n    </li>\n    <li>\n      <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#star'\" [classes]=\"'some-icon-class'\"></svg-icon-sprite>\n      <span>component styles by <code>::ng-deep</code><br>orange, 75px</span>\n    </li>\n  </ul>\n\n  <h2>ViewBox Example</h2>\n  <ul class=\"inline\">\n    <li style=\"color: magenta;\">\n      <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#star-no-viewBox'\" [width]=\"'80px'\" [viewBox]=\"'0 0 24 24'\"></svg-icon-sprite>\n      <span>magenta 80px,<br>viewBox <code>'0 0 24 24'</code></span>\n    </li>\n  </ul>\n\n  <h2>Variable Example</h2>\n\n  <button (click)=\"changeIconPath(iconSprite.src)\">Change Icon Path</button>\n  <button (click)=\"changeIconSize(iconSprite.width)\">Size +</button>\n  <input #colorInput type=\"text\" value=\"red\">\n  <button (click)=\"changeIconColor(colorInput.value)\">Set color</button>\n\n  <ul class=\"inline\">\n    <li [style.color]=\"color\">\n      <svg-icon-sprite #iconSprite [viewBox]=\"'0 0 24 24'\" [src]=\"'assets/sprites/sprite.svg#' + icon\" [width]=\"width\"></svg-icon-sprite>\n    </li>\n  </ul>\n\n  <p>\n    Report bugs or feature requests on <a href=\"https://github.com/jannicz/ng-svg-icon-sprite/issues\">Github Issues</a>\n  </p>\n  <p>\n    <small>Copyright Jan Suwart, MIT license</small>\n  </p>\n</div>\n\n<!-- https://blog.angularindepth.com/creating-a-library-in-angular-6-87799552e7e5 -->\n<!-- https://blog.angularindepth.com/creating-a-library-in-angular-6-part-2-6e2bc1e14121 -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'SVG-Icon-Sprite';
        this.icon = 'delete';
        this.width = '64px';
        this.color = 'red';
    }
    AppComponent.prototype.changeIconPath = function (src) {
        this.icon = src.split('#')[1] === 'delete' ? 'star' : 'delete';
    };
    AppComponent.prototype.changeIconSize = function (width) {
        this.width = Number(width.replace('px', '')) + 10 + 'px';
    };
    AppComponent.prototype.changeIconColor = function (color) {
        this.color = color;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var icon_sprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! icon-sprite */ "./dist/icon-sprite/fesm5/icon-sprite.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                icon_sprite__WEBPACK_IMPORTED_MODULE_3__["IconSpriteModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jan.suwart/Projects/ng-svg-icon-sprite/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map