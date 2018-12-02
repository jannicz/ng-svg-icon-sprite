(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ng-svg-icon-sprite/fesm5/ng-svg-icon-sprite.js":
/*!*************************************************************!*\
  !*** ./dist/ng-svg-icon-sprite/fesm5/ng-svg-icon-sprite.js ***!
  \*************************************************************/
/*! exports provided: IconSpriteService, IconSpriteComponent, IconSpriteModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconSpriteService", function() { return IconSpriteService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconSpriteComponent", function() { return IconSpriteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconSpriteModule", function() { return IconSpriteModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return IconSpriteDirective; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IconSpriteService = /** @class */ (function () {
    function IconSpriteService() {
    }
    IconSpriteService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    IconSpriteService.ctorParameters = function () { return []; };
    /** @nocollapse */ IconSpriteService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function IconSpriteService_Factory() { return new IconSpriteService(); }, token: IconSpriteService, providedIn: "root" });
    return IconSpriteService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IconSpriteComponent = /** @class */ (function () {
    function IconSpriteComponent() {
        this.classes = 'icon';
        this.width = '100%';
        this.preserveAspectRatio = 'xMinYMax meet';
    }
    IconSpriteComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'svg-icon-sprite',
                    template: "<ng-container *ngIf=\"!viewBox && !attribute\">\n  <svg [attr.class]=\"classes\"\n       [attr.width]=\"width\"\n       [attr.height]=\"height || width\">\n    <use [attr.xlink:href]=\"src\"></use>\n  </svg>\n</ng-container>\n\n<ng-container *ngIf=\"!viewBox && attribute\">\n  <svg [attr.class]=\"classes\"\n       [attr.width]=\"width\"\n       [attr.height]=\"height || width\"\n       IconSpriteAttr [attribute]=\"attribute\">\n    <use [attr.xlink:href]=\"src\"></use>\n  </svg>\n</ng-container>\n\n<ng-container *ngIf=\"viewBox && !attribute\">\n    <svg [attr.class]=\"classes\"\n       [attr.width]=\"width\"\n       [attr.height]=\"height || width\"\n       [attr.viewBox]=\"viewBox\"\n       [attr.preserveAspectRatio]=\"preserveAspectRatio\">\n    <use [attr.xlink:href]=\"src\"></use>\n  </svg>\n</ng-container>\n\n<ng-container *ngIf=\"viewBox && attribute\">\n    <svg [attr.class]=\"classes\"\n       [attr.width]=\"width\"\n       [attr.height]=\"height || width\"\n       [attr.viewBox]=\"viewBox\"\n       [attr.preserveAspectRatio]=\"preserveAspectRatio\"\n       IconSpriteAttr [attribute]=\"attribute\">\n    <use [attr.xlink:href]=\"src\"></use>\n  </svg>\n</ng-container>\n",
                    styles: [":host svg,:host use{fill:currentColor}"]
                }] }
    ];
    /** @nocollapse */
    IconSpriteComponent.ctorParameters = function () { return []; };
    IconSpriteComponent.propDecorators = {
        src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        viewBox: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        preserveAspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        attribute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return IconSpriteComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Set your own attribute key/value pairs on the generated SVG element, i.e. focusable="false"
 */
var IconSpriteDirective = /** @class */ (function () {
    function IconSpriteDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * @return {?}
     */
    IconSpriteDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.attribute[0] && this.attribute[1]) {
            this.renderer.setAttribute(this.el.nativeElement, this.attribute[0], this.attribute[1]);
        }
        else if (this.attribute[0]) {
            this.renderer.setAttribute(this.el.nativeElement, this.attribute[0], '');
        }
    };
    IconSpriteDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[IconSpriteAttr]'
                },] }
    ];
    /** @nocollapse */
    IconSpriteDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    IconSpriteDirective.propDecorators = {
        attribute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return IconSpriteDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IconSpriteModule = /** @class */ (function () {
    function IconSpriteModule() {
    }
    IconSpriteModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                    declarations: [
                        IconSpriteComponent,
                        IconSpriteDirective
                    ],
                    exports: [IconSpriteComponent]
                },] }
    ];
    return IconSpriteModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-svg-icon-sprite.js.map

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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>\n    {{ title }} <small>(package development app)</small>\n  </h1>\n\n  <p>\n    Angular package that provides both a solution for generating sprites and a component for including them.\n  </p>\n\n  <ul>\n    <li>\n      <a href=\"https://github.com/jannicz/ng-svg-icon-sprite\">\n        <strong>ng-svg-icon-sprite sources on Github</strong>\n      </a>\n    </li>\n    <li>\n      <a href=\"https://www.npmjs.com/package/ng-svg-icon-sprite\">\n        <strong>ng-svg-icon-sprite package on npm</strong>\n      </a>\n    </li>\n  </ul>\n\n  <h2>Usage</h2>\n\n  <p>\n    Install <strong>ng-svg-icon-sprite</strong> and import the npm module via <code>import &#123; IconSpriteModule &#125; from 'ng-svg-icon-sprite';</code> and add it\n    in any <code>@NgModule</code> imports array.\n  </p>\n\n  <p>\n    Run <strong>npm run create-icon-sprite</strong> to create a sprite out of your SVG icons. Include the <code>svg-icon-sprite</code>\n    directive like shown below.\n  </p>\n\n  <strong [attr.foo]=\"bar\">Run development app (root project)</strong>\n\n  <p>\n    Execute <code>npm run build:lib</code> to generate the icon-sprite package. Then start the project via <code>npm run start</code>.\n  </p>\n\n  <h2>Basic Examples</h2>\n\n  <ul class=\"inline\">\n    <li>\n      <div class=\"icon-examples-1\">\n        <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#star'\" [width]=\"'100px'\"></svg-icon-sprite>\n      </div>\n      <span>red, 100px</span>\n    </li>\n    <li>\n      <div class=\"icon-examples-2\">\n        <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#delete'\" [width]=\"'90px'\" [height]=\"'80px'\"></svg-icon-sprite>\n      </div>\n      <span>green, 90px</span>\n    </li>\n    <li>\n      <div class=\"icon-examples-3\">\n        <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#star'\" [classes]=\"'some-icon-class'\"></svg-icon-sprite>\n      </div>\n      <span>component styles by <code>::ng-deep</code><br>orange, 75px</span>\n    </li>\n  </ul>\n\n  <h2>ViewBox Example</h2>\n  <ul class=\"inline\">\n    <li>\n      <div class=\"icon-examples-4\">\n        <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#star-no-viewBox'\" [width]=\"'80px'\" [viewBox]=\"'0 0 24 24'\"></svg-icon-sprite>\n      </div>\n      <span>magenta 80px,<br>viewBox <code>'0 0 24 24'</code></span>\n    </li>\n  </ul>\n\n  <h2>Variable Example</h2>\n\n  <button (click)=\"changeIconPath(iconSprite.src)\">Change Icon Path</button>\n  <button (click)=\"changeIconSize(iconSprite.width)\">Size +</button>\n  <input #colorInput type=\"text\" value=\"red\">\n  <button (click)=\"changeIconColor(colorInput.value)\">Set color</button>\n\n  <ul class=\"inline\">\n    <li [style.color]=\"color\">\n      <svg-icon-sprite #iconSprite [viewBox]=\"'0 0 24 24'\" [src]=\"'assets/sprites/sprite.svg#' + icon\" [width]=\"width\"></svg-icon-sprite>\n    </li>\n  </ul>\n\n  <h2>Custom SVG Attribute Example</h2>\n\n  <ul class=\"inline\">\n    <li>\n      <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#star'\" [width]=\"'60px'\" [attribute]=\"['focusable', 'false']\"></svg-icon-sprite>\n      <span>custom attribute,<br><code>\"focusable\", \"false\"</code></span>\n    </li>\n  </ul>\n\n  <p>\n    Report bugs or feature requests on <a href=\"https://github.com/jannicz/ng-svg-icon-sprite/issues\">Github Issues</a>\n  </p>\n  <p>\n    <small>Copyright Jan Suwart, MIT license</small>\n  </p>\n</div>\n\n<!-- https://blog.angularindepth.com/creating-a-library-in-angular-6-87799552e7e5 -->\n<!-- https://blog.angularindepth.com/creating-a-library-in-angular-6-part-2-6e2bc1e14121 -->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes mymove {\n  0% {\n    padding-left: 0; }\n  50% {\n    padding-left: 3px; }\n  75% {\n    padding-left: 0; }\n  100% {\n    padding-left: -3px; } }\n\n@keyframes mymove {\n  0% {\n    padding-left: 0; }\n  50% {\n    padding-left: 3px; }\n  75% {\n    padding-left: 0; }\n  100% {\n    padding-left: -3px; } }\n\n.icon-examples-1 {\n  color: darkred;\n  transition: -webkit-transform ease-in-out 0.2s;\n  transition: transform ease-in-out 0.2s;\n  transition: transform ease-in-out 0.2s, -webkit-transform ease-in-out 0.2s; }\n\n.icon-examples-1:hover, .icon-examples-1:focus {\n    color: red;\n    -webkit-transform: rotate(20deg);\n        -ms-transform: rotate(20deg);\n            transform: rotate(20deg); }\n\n.icon-examples-2 {\n  color: darkgreen;\n  transition: color ease-in-out 0.2s; }\n\n.icon-examples-2:hover, .icon-examples-2:focus {\n    color: limegreen; }\n\n.icon-examples-3 {\n  transition: -webkit-transform ease-in-out 0.2s;\n  transition: transform ease-in-out 0.2s;\n  transition: transform ease-in-out 0.2s, -webkit-transform ease-in-out 0.2s;\n  -webkit-transform-origin: left center;\n      -ms-transform-origin: left center;\n          transform-origin: left center; }\n\n.icon-examples-3:hover, .icon-examples-3:focus {\n    -webkit-transform: scale(1.2);\n        -ms-transform: scale(1.2);\n            transform: scale(1.2); }\n\n.icon-examples-4 {\n  color: magenta; }\n\n.icon-examples-4:hover, .icon-examples-4:focus {\n    color: indigo;\n    transition: color ease-in-out 0.2s;\n    -webkit-animation: mymove 0.2s infinite ease-in-out;\n            animation: mymove 0.2s infinite ease-in-out; }\n\ndiv ::ng-deep svg.some-icon-class {\n  height: 75px;\n  width: 75px; }\n\ndiv ::ng-deep svg.some-icon-class use {\n  fill: orange;\n  /* evergreen browser symbol styling */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW4uc3V3YXJ0L1Byb2plY3RzL25nLXN2Zy1pY29uLXNwcml0ZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQU8sZ0JBQWdCLEVBQUE7RUFDdkI7SUFBTyxrQkFBa0IsRUFBQTtFQUN6QjtJQUFPLGdCQUFlLEVBQUE7RUFDdEI7SUFBTyxtQkFBbUIsRUFBQSxFQUFBOztBQUo1QjtFQUNFO0lBQU8sZ0JBQWdCLEVBQUE7RUFDdkI7SUFBTyxrQkFBa0IsRUFBQTtFQUN6QjtJQUFPLGdCQUFlLEVBQUE7RUFDdEI7SUFBTyxtQkFBbUIsRUFBQSxFQUFBOztBQUk1QjtFQUNFLGVBQWM7RUFDZCwrQ0FBc0M7RUFBdEMsdUNBQXNDO0VBQXRDLDJFQUFzQyxFQU12Qzs7QUFSRDtJQUtJLFdBQVU7SUFDVixpQ0FBd0I7UUFBeEIsNkJBQXdCO1lBQXhCLHlCQUF3QixFQUN6Qjs7QUFHSDtFQUNFLGlCQUFnQjtFQUNoQixtQ0FBa0MsRUFLbkM7O0FBUEQ7SUFLSSxpQkFBZ0IsRUFDakI7O0FBR0g7RUFDRSwrQ0FBc0M7RUFBdEMsdUNBQXNDO0VBQXRDLDJFQUFzQztFQUN0QyxzQ0FBNkI7TUFBN0Isa0NBQTZCO1VBQTdCLDhCQUE2QixFQUs5Qjs7QUFQRDtJQUtJLDhCQUFxQjtRQUFyQiwwQkFBcUI7WUFBckIsc0JBQXFCLEVBQ3RCOztBQUdIO0VBQ0UsZUFBYyxFQU9mOztBQVJEO0lBSUksY0FBYTtJQUNiLG1DQUFrQztJQUNsQyxvREFBMkM7WUFBM0MsNENBQTJDLEVBQzVDOztBQUlIO0VBQ0UsYUFBWTtFQUNaLFlBQVcsRUFDWjs7QUFFRDtFQUNFLGFBQVk7RUFBRSxzQ0FBc0MsRUFDckQiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIG15bW92ZSB7XG4gIDAlICAgeyBwYWRkaW5nLWxlZnQ6IDAgfVxuICA1MCUgIHsgcGFkZGluZy1sZWZ0OiAzcHggfVxuICA3NSUgIHsgcGFkZGluZy1sZWZ0OiAwOyB9XG4gIDEwMCUgeyBwYWRkaW5nLWxlZnQ6IC0zcHggfVxufVxuXG4vLyBVc2UgY29sb3IgcHJvcGVydHkgZm9yIG92ZXJyaWRpbmcgZGVmYXVsdCBjb2xvciBhbmQgaG92ZXIgZWZmZWN0XG4uaWNvbi1leGFtcGxlcy0xIHtcbiAgY29sb3I6IGRhcmtyZWQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjJzO1xuXG4gICY6aG92ZXIsICY6Zm9jdXMge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xuICB9XG59XG5cbi5pY29uLWV4YW1wbGVzLTIge1xuICBjb2xvcjogZGFya2dyZWVuO1xuICB0cmFuc2l0aW9uOiBjb2xvciBlYXNlLWluLW91dCAwLjJzO1xuXG4gICY6aG92ZXIsICY6Zm9jdXMge1xuICAgIGNvbG9yOiBsaW1lZ3JlZW47XG4gIH1cbn1cblxuLmljb24tZXhhbXBsZXMtMyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjJzO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcblxuICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIH1cbn1cblxuLmljb24tZXhhbXBsZXMtNCB7XG4gIGNvbG9yOiBtYWdlbnRhO1xuXG4gICY6aG92ZXIsICY6Zm9jdXMge1xuICAgIGNvbG9yOiBpbmRpZ287XG4gICAgdHJhbnNpdGlvbjogY29sb3IgZWFzZS1pbi1vdXQgMC4ycztcbiAgICBhbmltYXRpb246IG15bW92ZSAwLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICB9XG59XG5cbi8vIEFjY2VzcyB0aGUgU1ZHIHZpYSA6Om5nLWRlZXAgc2VsZWN0b3JcbmRpdiA6Om5nLWRlZXAgc3ZnLnNvbWUtaWNvbi1jbGFzcyB7XG4gIGhlaWdodDogNzVweDtcbiAgd2lkdGg6IDc1cHg7XG59XG5cbmRpdiA6Om5nLWRlZXAgc3ZnLnNvbWUtaWNvbi1jbGFzcyB1c2Uge1xuICBmaWxsOiBvcmFuZ2U7IC8qIGV2ZXJncmVlbiBicm93c2VyIHN5bWJvbCBzdHlsaW5nICovXG59XG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


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
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng_svg_icon_sprite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-svg-icon-sprite */ "./dist/ng-svg-icon-sprite/fesm5/ng-svg-icon-sprite.js");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ng_svg_icon_sprite__WEBPACK_IMPORTED_MODULE_4__["IconSpriteModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
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