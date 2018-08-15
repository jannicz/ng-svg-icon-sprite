(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ng-svg-icon-sprite/fesm5/ng-svg-icon-sprite.js":
/*!*************************************************************!*\
  !*** ./dist/ng-svg-icon-sprite/fesm5/ng-svg-icon-sprite.js ***!
  \*************************************************************/
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc3ZnLWljb24tc3ByaXRlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZy1zdmctaWNvbi1zcHJpdGUvbGliL2ljb24tc3ByaXRlLnNlcnZpY2UudHMiLCJuZzovL25nLXN2Zy1pY29uLXNwcml0ZS9saWIvaWNvbi1zcHJpdGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZy1zdmctaWNvbi1zcHJpdGUvbGliL2ljb24tc3ByaXRlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEljb25TcHJpdGVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N2Zy1pY29uLXNwcml0ZScsXG4gIHN0eWxlczogW2A6aG9zdCBzdmcsOmhvc3QgdXNle2ZpbGw6Y3VycmVudENvbG9yfWBdLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgbmdJZj1cIiF2aWV3Qm94OyBlbHNlIHZpZXdCb3hUZW1wbGF0ZVwiPlxuICA8c3ZnIFthdHRyLndpZHRoXT1cIndpZHRoXCIgW2F0dHIuaGVpZ2h0XT1cImhlaWdodCB8fCB3aWR0aFwiIFthdHRyLmNsYXNzXT1cImNsYXNzZXNcIj5cbiAgICA8dXNlIFthdHRyLnhsaW5rOmhyZWZdPVwic3JjXCI+PC91c2U+XG4gIDwvc3ZnPlxuPC9uZy1jb250YWluZXI+XG5cbjxuZy10ZW1wbGF0ZSAjdmlld0JveFRlbXBsYXRlPlxuICA8c3ZnIFthdHRyLmNsYXNzXT1cImNsYXNzZXNcIlxuICAgICAgIFthdHRyLndpZHRoXT1cIndpZHRoXCJcbiAgICAgICBbYXR0ci5oZWlnaHRdPVwiaGVpZ2h0IHx8IHdpZHRoXCJcbiAgICAgICBbYXR0ci52aWV3Qm94XT1cInZpZXdCb3hcIlxuICAgICAgIFthdHRyLnByZXNlcnZlQXNwZWN0UmF0aW9dPVwicHJlc2VydmVBc3BlY3RSYXRpb1wiPlxuICAgIDx1c2UgW2F0dHIueGxpbms6aHJlZl09XCJzcmNcIj48L3VzZT5cbiAgPC9zdmc+XG48L25nLXRlbXBsYXRlPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBJY29uU3ByaXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBwdWJsaWMgc3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBjbGFzc2VzOiAnaWNvbic7XG4gIEBJbnB1dCgpIHB1YmxpYyB3aWR0aCA9ICcxMDAlJztcbiAgQElucHV0KCkgcHVibGljIGhlaWdodDogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgdmlld0JveDogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgcHJlc2VydmVBc3BlY3RSYXRpbyA9ICd4TWluWU1heCBtZWV0JztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge31cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uU3ByaXRlQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uLXNwcml0ZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0ljb25TcHJpdGVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbSWNvblNwcml0ZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgSWNvblNwcml0ZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtJQU9FO0tBQWlCOztnQkFMbEIsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7NEJBSkQ7Ozs7Ozs7QUNBQTtJQStCRTtxQkFMd0IsTUFBTTttQ0FHUSxlQUFlO0tBRXBDOzs7O0lBRWpCLHNDQUFROzs7SUFBUixlQUFhOztnQkEvQmQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLE1BQU0sRUFBRSxDQUFDLHdDQUF3QyxDQUFDO29CQUNsRCxRQUFRLEVBQUUsMmdCQWVYO2lCQUNBOzs7OztzQkFHRSxLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7c0NBQ0wsS0FBSzs7OEJBN0JSOzs7Ozs7O0FDQUE7Ozs7Z0JBR0MsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxFQUNSO29CQUNELFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDL0I7OzJCQVJEOzs7Ozs7Ozs7Ozs7Ozs7In0=

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
/* harmony import */ var ng_svg_icon_sprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-svg-icon-sprite */ "./dist/ng-svg-icon-sprite/fesm5/ng-svg-icon-sprite.js");
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
                ng_svg_icon_sprite__WEBPACK_IMPORTED_MODULE_3__["IconSpriteModule"]
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