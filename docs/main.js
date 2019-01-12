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
                    template: "<ng-container *ngIf=\"!viewBox && !attribute\">\n  <svg [attr.class]=\"classes\"\n       [attr.width]=\"width\"\n       [attr.height]=\"height || width\">\n    <title *ngIf=\"title\" [attr.id]=\"src.split('#')[1] + '-title'\">{{title}}</title>\n    <use [attr.xlink:href]=\"src\"></use>\n  </svg>\n</ng-container>\n\n<ng-container *ngIf=\"!viewBox && attribute\">\n  <svg [attr.class]=\"classes\"\n       [attr.width]=\"width\"\n       [attr.height]=\"height || width\"\n       svgIconSpriteAttr [attribute]=\"attribute\">\n    <title *ngIf=\"title\" [attr.id]=\"src.split('#')[1] + '-title'\">{{title}}</title>\n    <use [attr.xlink:href]=\"src\"></use>\n  </svg>\n</ng-container>\n\n<ng-container *ngIf=\"viewBox && !attribute\">\n  <svg [attr.class]=\"classes\"\n       [attr.width]=\"width\"\n       [attr.height]=\"height || width\"\n       [attr.viewBox]=\"viewBox\"\n       [attr.preserveAspectRatio]=\"preserveAspectRatio\">\n    <title *ngIf=\"title\" [attr.id]=\"src.split('#')[1] + '-title'\">{{title}}</title>\n    <use [attr.xlink:href]=\"src\"></use>\n  </svg>\n</ng-container>\n\n<ng-container *ngIf=\"viewBox && attribute\">\n  <svg [attr.class]=\"classes\"\n       [attr.width]=\"width\"\n       [attr.height]=\"height || width\"\n       [attr.viewBox]=\"viewBox\"\n       [attr.preserveAspectRatio]=\"preserveAspectRatio\"\n       svgIconSpriteAttr [attribute]=\"attribute\">\n    <title *ngIf=\"title\" [attr.id]=\"src.split('#')[1] + '-title'\">{{title}}</title>\n    <use [attr.xlink:href]=\"src\"></use>\n  </svg>\n</ng-container>\n",
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
        attribute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
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
        var _this = this;
        if (Array.isArray(this.attribute[0])) {
            /** @type {?} */
            var attributeArr = (/** @type {?} */ (this.attribute));
            attributeArr.forEach(function (obj) {
                _this.renderer.setAttribute(_this.el.nativeElement, obj[0], obj[1] ? obj[1] : '');
            });
        }
        else {
            /** @type {?} */
            var attribute = (/** @type {?} */ (this.attribute));
            if (attribute[0]) {
                this.renderer.setAttribute(this.el.nativeElement, attribute[0], attribute[1] ? attribute[1] : '');
            }
        }
    };
    IconSpriteDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[svgIconSpriteAttr]'
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

module.exports = "<div class=\"container\">\n  <h1>\n    {{ title }}\n  </h1>\n\n  <p>\n    Angular package that provides both a solution for generating sprites and a component for including them.\n  </p>\n\n\n  <h2>The Basics <small>(reference, width and styling)</small></h2>\n\n  <p>To use if you want to display the icons in original size. Just match the <code>[width]</code> and <code>[height]</code> with the width/height of the equivalent SVG properties.</p>\n\n  <ul class=\"vertical\">\n    <li>\n      <div class=\"icon-row icon-examples-1\">\n        <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#star_100x100'\" [width]=\"'100px'\"></svg-icon-sprite>\n      </div>\n      <pre>&lt;svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#star_100x100'\" [width]=\"'100px'\"&gt;&lt;/svg-icon&gt;\n\n.icon-example {{ '{' }}\n  color: darkred;\n{{ '}' }}</pre>\n    </li>\n    <li>\n      <div class=\"icon-row icon-examples-2\">\n        <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#delete_70x70'\" [width]=\"'70px'\" [height]=\"'65px'\"></svg-icon-sprite>\n      </div>\n      <pre>&lt;svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#delete_70x70'\" [width]=\"'70px'\" [height]=\"'65px'\"&gt;&lt;/svg-icon&gt;</pre>\n    </li>\n    <li>\n      <div class=\"icon-row icon-examples-3\">\n        <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#star_100x100_viewbox'\" [width]=\"'100px'\" [classes]=\"'css-styled-icon'\"></svg-icon-sprite>\n      </div>\n      <pre>&lt;svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#star_100x100'\" [classes]=\"'css-styled-icon'\" [width]=\"'100px'\"&gt;&lt;/svg-icon&gt;\n\n.container ::ng-deep svg.css-styled-icon {{ '{' }}\n  use {{ '{' }}\n    fill: orange;\n    stroke: black;\n  {{ '}' }}\n{{ '}' }}</pre>\n    </li>\n  </ul>\n\n  <p>\n\n  </p>\n\n\n  <h2 id=\"scaling\">Scaling <small>(using CSS transform)</small></h2>\n\n  <p>Use this pattern if you want to change the size of the original SVG. Apply same rules as above, wrap the SVG into a div and size it using CSS transforms.</p>\n\n  <ul class=\"vertical\">\n    <li>\n      <div class=\"icon-row icon-examples-2\">\n        <div class=\"icon-scale-down\" style=\"padding-bottom: 20px;\">\n          <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#delete_70x70'\" [width]=\"'70px'\"></svg-icon-sprite>\n        </div>\n      </div>\n      <pre>\n.icon-scale-down {{ '{' }}\n  // Scale down by 50%\n  transform: scale(0.5);\n{{ '}' }}\n      </pre>\n    </li>\n    <li>\n      <div class=\"icon-row icon-examples-4\" style=\"height: 0;\">\n        <div class=\"icon-scale-up\">\n          <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#circle_24x24-viewbox'\" [width]=\"'24px'\"></svg-icon-sprite>\n        </div>\n      </div>\n      <pre>\n.icon-scale-up {{ '{' }}\n  // Scale up by 500%\n  transform: scale(5);\n{{ '}' }}\n      </pre>\n    </li>\n  </ul>\n\n  <h2 id=\"viewBox\">Scaling <small>(using viewBox)</small></h2>\n\n  This is an alternative to the CSS scaling method presented above. Scaling via <code>viewBox</code> is <strong>less consistent across browsers</strong>.\n  The pattern depends on your SVG source file, whether it already contains a <code>viewBox</code> or not.\n  The following example SVGs with an original size of <code>100x100px</code> are scaled down by 50%.\n\n  <ul class=\"vertical\">\n    <li>\n      <div class=\"icon-row icon-examples-2\">\n        <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#star_100x100'\" [width]=\"'100px'\" [viewBox]=\"'-50 -50 200 200'\"></svg-icon-sprite>\n      </div>\n      <pre>\n&lt;!-- SVG source lacks a viewBox --&gt;\n&lt;svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#star_100x100'\" [width]=\"'100px'\" [viewBox]=\"'-50 -50 200 200'\"&gt;&lt;/svg-icon&gt;\n      </pre>\n    </li>\n    <li>\n      <div class=\"icon-row icon-examples-3\">\n        <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#star_100x100_viewbox'\" [width]=\"'50px'\" [viewBox]=\"'0 0 100 100'\"></svg-icon-sprite>\n      </div>\n      <pre>\n&lt;!-- SVG source contains a viewBox --&gt;\n&lt;svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#star_100x100_viewbox'\" [width]=\"'50px'\" [viewBox]=\"'0 0 100 100'\"&gt;&lt;/svg-icon&gt;\n      </pre>\n    </li>\n  </ul>\n\n\n  <h2 id=\"manipulation\">Manipulation <small>(using HTML properties)</small></h2>\n\n  <button (click)=\"changeIconPath(iconSprite.src)\">Change Icon Path</button>\n  <button [disabled]=\"iconSprite.width.split('px')[0] <= 20\" (click)=\"changeIconSizeMinus(iconSprite.width)\">Size -</button>\n  <button (click)=\"changeIconSizePlus(iconSprite.width)\">Size +</button>\n  <input #colorInput type=\"text\" value=\"blue\">\n  <button (click)=\"changeIconColor(colorInput.value)\">Set color</button>\n\n  <ul class=\"vertical\">\n    <li class=\"icon-change-size\">\n      <div class=\"icon-row\" [style.color]=\"color\">\n        <svg-icon-sprite #iconSprite [src]=\"'assets/sprites/sprite.svg#' + icon\" [width]=\"width\" [viewBox]=\"'0 0 100 100'\"></svg-icon-sprite>\n      </div>\n      <pre style=\"height: 30px;\">&lt;svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#' + icon\" [width]=\"width\" [viewBox]=\"'0 0 100 100'\"&gt;&lt;/svg-icon&gt;</pre>\n    </li>\n  </ul>\n\n  <h2 id=\"attributes\">Adding Custom SVG Attributes</h2>\n\n  <ul class=\"vertical\">\n    <li>\n      <div class=\"icon-row\">\n        <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#delete_70x70'\" [width]=\"'70px'\" [attribute]=\"['focusable', 'false']\"></svg-icon-sprite>\n      </div>\n      <pre>&lt;svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#delete_70x70'\" [attribute]=\"['focusable', 'false']\"&gt;&lt;/svg-icon&gt;</pre>\n    </li>\n  </ul>\n\n  Adding <code>focusable=\"false\"</code> will prevent browser focus on SVG element in IE11.\n\n  <h2 id=\"a11y\">Accessible example <small>(meaningful icon pattern)</small></h2>\n\n  <ul class=\"vertical\">\n    <li>\n      <div class=\"icon-row icon-examples-5\">\n        <svg-icon-sprite\n          [src]=\"'assets/sprites/sprite.svg#star_100x100'\"\n          [width]=\"'100px'\"\n          [title]=\"'Orange star'\"\n          [attribute]=\"[['aria-labelledby', 'star_100x100-title'], ['role', 'img']]\"></svg-icon-sprite>\n      </div>\n      <pre>\n&lt;svg-icon-sprite\n      [src]=\"'assets/sprites/sprite.svg#star_100x100'\"\n      [title]=\"'Orange star'\"\n      [attribute]=\"[['aria-labelledby', 'star_100x100-title'], ['role', 'img']]\"\n&gt;&lt;/svg-icon&gt;\n      </pre>\n    </li>\n  </ul>\n\n  Adding <code>[title]=\"'Orange star'\"</code> will render <code>&lt;title id=\"star_100x100-title\"&gt;Orange star&lt;/title&gt;</code> as the first child of the SVG node and serve as alternative text for screen readers.\n  To improve support, you can additionally reference the title's node via <code>'aria-labelledby'</code> using the title's generated id <code>star_100x100-title</code> and set the <code>role</code> to <code>img</code>.\n\n  <h2 id=\"multicolor\">Multicolor Icons</h2>\n\n  If you want to include an multicolor icon, you will have to provide it form a separate sprite file (where the fill and stroke attributes are not stripped).\n  Remember that you will not be able to overwrite styles via CSS.\n\n  <ul class=\"vertical\">\n    <li>\n      <div class=\"icon-row\">\n        <svg-icon-sprite [src]=\"'assets/sprites/image-sprite.svg#multicolor-image'\" [width]=\"'250px'\"></svg-icon-sprite>\n      </div>\n      <pre style=\"height: 30px;\">&lt;svg-icon-sprite [src]=\"'assets/sprites/image-sprite.svg#multicolor-image'\"&gt;&lt;/svg-icon&gt;</pre>\n    </li>\n  </ul>\n\n  <p>\n    Report bugs or feature requests on <a href=\"https://github.com/jannicz/ng-svg-icon-sprite/issues\">Github Issues</a>\n  </p>\n\n  <ul>\n    <li>\n      <a href=\"https://github.com/jannicz/ng-svg-icon-sprite\">\n        <strong>ng-svg-icon-sprite sources on Github</strong>\n      </a>\n    </li>\n    <li>\n      <a href=\"https://www.npmjs.com/package/ng-svg-icon-sprite\">\n        <strong>ng-svg-icon-sprite package on npm</strong>\n      </a>\n    </li>\n  </ul>\n\n  <p>\n    <small>Copyright Jan Suwart, MIT license</small>\n  </p>\n</div>\n\n<!-- https://blog.angularindepth.com/creating-a-library-in-angular-6-87799552e7e5 -->\n<!-- https://blog.angularindepth.com/creating-a-library-in-angular-6-part-2-6e2bc1e14121 -->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes mymove {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  50% {\n    -webkit-transform: translateX(2px);\n            transform: translateX(2px); }\n  75% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  100% {\n    -webkit-transform: translateX(-2px);\n            transform: translateX(-2px); } }\n\n@keyframes mymove {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  50% {\n    -webkit-transform: translateX(2px);\n            transform: translateX(2px); }\n  75% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  100% {\n    -webkit-transform: translateX(-2px);\n            transform: translateX(-2px); } }\n\n.icon-examples-1 {\n  color: darkred;\n  transition: -webkit-transform ease-in-out 0.2s;\n  transition: transform ease-in-out 0.2s;\n  transition: transform ease-in-out 0.2s, -webkit-transform ease-in-out 0.2s;\n  -webkit-transform-origin: center center;\n      -ms-transform-origin: center center;\n          transform-origin: center center; }\n\n.icon-examples-1:hover, .icon-examples-1:focus {\n    color: red;\n    -webkit-transform: rotate(12deg);\n        -ms-transform: rotate(12deg);\n            transform: rotate(12deg); }\n\n.icon-examples-2 {\n  color: darkgreen;\n  transition: color ease-in-out 0.4s; }\n\n.icon-examples-2:hover, .icon-examples-2:focus {\n    color: limegreen; }\n\n.icon-examples-3 {\n  transition: -webkit-transform ease-in-out 0.2s;\n  transition: transform ease-in-out 0.2s;\n  transition: transform ease-in-out 0.2s, -webkit-transform ease-in-out 0.2s;\n  -webkit-transform-origin: center center;\n      -ms-transform-origin: center center;\n          transform-origin: center center; }\n\n.icon-examples-3:hover, .icon-examples-3:focus {\n    -webkit-transform: scale(1.1);\n        -ms-transform: scale(1.1);\n            transform: scale(1.1); }\n\n.icon-examples-4 {\n  color: darkred; }\n\n.icon-examples-4:hover, .icon-examples-4:focus {\n    color: brown; }\n\n.icon-examples-5 {\n  color: darkorange;\n  transition: color ease-in-out 0.1s; }\n\n.icon-examples-5:hover, .icon-examples-5:focus {\n    color: darkgoldenrod; }\n\n.icon-scale-down {\n  -webkit-transform: scale(0.5);\n      -ms-transform: scale(0.5);\n          transform: scale(0.5); }\n\n.icon-scale-up {\n  -webkit-transform: scale(5);\n      -ms-transform: scale(5);\n          transform: scale(5); }\n\n.container ::ng-deep svg.css-styled-icon use {\n  fill: orange;\n  /* evergreen browser symbol styling */\n  stroke: black; }\n\n.icon-change-size ::ng-deep svg {\n  transition: all linear 0.2s;\n  -webkit-transform-origin: top center;\n      -ms-transform-origin: top center;\n          transform-origin: top center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW4uc3V3YXJ0L1Byb2plY3RzL25nLXN2Zy1pY29uLXNwcml0ZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQU8saUNBQXdCO1lBQXhCLHlCQUF3QixFQUFBO0VBQy9CO0lBQU8sbUNBQTBCO1lBQTFCLDJCQUEwQixFQUFBO0VBQ2pDO0lBQU8saUNBQXdCO1lBQXhCLHlCQUF3QixFQUFBO0VBQy9CO0lBQU8sb0NBQTJCO1lBQTNCLDRCQUEyQixFQUFBLEVBQUE7O0FBSnBDO0VBQ0U7SUFBTyxpQ0FBd0I7WUFBeEIseUJBQXdCLEVBQUE7RUFDL0I7SUFBTyxtQ0FBMEI7WUFBMUIsMkJBQTBCLEVBQUE7RUFDakM7SUFBTyxpQ0FBd0I7WUFBeEIseUJBQXdCLEVBQUE7RUFDL0I7SUFBTyxvQ0FBMkI7WUFBM0IsNEJBQTJCLEVBQUEsRUFBQTs7QUFHcEM7RUFFRSxlQUFjO0VBQ2QsK0NBQXNDO0VBQXRDLHVDQUFzQztFQUF0QywyRUFBc0M7RUFDdEMsd0NBQStCO01BQS9CLG9DQUErQjtVQUEvQixnQ0FBK0IsRUFNaEM7O0FBVkQ7SUFPSSxXQUFVO0lBQ1YsaUNBQXdCO1FBQXhCLDZCQUF3QjtZQUF4Qix5QkFBd0IsRUFDekI7O0FBR0g7RUFDRSxpQkFBZ0I7RUFDaEIsbUNBQWtDLEVBS25DOztBQVBEO0lBS0ksaUJBQWdCLEVBQ2pCOztBQUdIO0VBQ0UsK0NBQXNDO0VBQXRDLHVDQUFzQztFQUF0QywyRUFBc0M7RUFDdEMsd0NBQStCO01BQS9CLG9DQUErQjtVQUEvQixnQ0FBK0IsRUFLaEM7O0FBUEQ7SUFLSSw4QkFBcUI7UUFBckIsMEJBQXFCO1lBQXJCLHNCQUFxQixFQUN0Qjs7QUFHSDtFQUNFLGVBQWMsRUFLZjs7QUFORDtJQUlJLGFBQVksRUFDYjs7QUFHSDtFQUNFLGtCQUFpQjtFQUNqQixtQ0FBa0MsRUFLbkM7O0FBUEQ7SUFLSSxxQkFBb0IsRUFDckI7O0FBR0g7RUFFRSw4QkFBcUI7TUFBckIsMEJBQXFCO1VBQXJCLHNCQUFxQixFQUN0Qjs7QUFFRDtFQUVFLDRCQUFtQjtNQUFuQix3QkFBbUI7VUFBbkIsb0JBQW1CLEVBQ3BCOztBQUdEO0VBSVEsYUFBWTtFQUFFLHNDQUFzQztFQUNwRCxjQUFhLEVBQ2Q7O0FBS1A7RUFHTSw0QkFBMkI7RUFDM0IscUNBQTRCO01BQTVCLGlDQUE0QjtVQUE1Qiw2QkFBNEIsRUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIG15bW92ZSB7XG4gIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgNTAlICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpOyB9XG4gIDc1JSAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KTsgfVxufVxuXG4uaWNvbi1leGFtcGxlcy0xIHtcbiAgLy8gVXNlIGNvbG9yIHByb3BlcnR5IGZvciBvdmVycmlkaW5nIGRlZmF1bHQgY29sb3IgYW5kIGhvdmVyIGVmZmVjdFxuICBjb2xvcjogZGFya3JlZDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4tb3V0IDAuMnM7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG5cbiAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgY29sb3I6IHJlZDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMmRlZyk7XG4gIH1cbn1cblxuLmljb24tZXhhbXBsZXMtMiB7XG4gIGNvbG9yOiBkYXJrZ3JlZW47XG4gIHRyYW5zaXRpb246IGNvbG9yIGVhc2UtaW4tb3V0IDAuNHM7XG5cbiAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgY29sb3I6IGxpbWVncmVlbjtcbiAgfVxufVxuXG4uaWNvbi1leGFtcGxlcy0zIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4tb3V0IDAuMnM7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG5cbiAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9XG59XG5cbi5pY29uLWV4YW1wbGVzLTQge1xuICBjb2xvcjogZGFya3JlZDtcblxuICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICBjb2xvcjogYnJvd247XG4gIH1cbn1cblxuLmljb24tZXhhbXBsZXMtNSB7XG4gIGNvbG9yOiBkYXJrb3JhbmdlO1xuICB0cmFuc2l0aW9uOiBjb2xvciBlYXNlLWluLW91dCAwLjFzO1xuXG4gICY6aG92ZXIsICY6Zm9jdXMge1xuICAgIGNvbG9yOiBkYXJrZ29sZGVucm9kO1xuICB9XG59XG5cbi5pY29uLXNjYWxlLWRvd24ge1xuICAvLyBTY2FsZSBkb3duIGJ5IDUwJVxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG59XG5cbi5pY29uLXNjYWxlLXVwIHtcbiAgLy8gU2NhbGUgdXAgYnkgNTAwJVxuICB0cmFuc2Zvcm06IHNjYWxlKDUpO1xufVxuXG4vLyBBY2Nlc3MgdGhlIFNWRyB2aWEgOjpuZy1kZWVwIHNlbGVjdG9yLCBkb2VzIG5vdCB3b3JrIGluIEZpcmVmb3hcbi5jb250YWluZXIge1xuICA6Om5nLWRlZXAge1xuICAgIHN2Zy5jc3Mtc3R5bGVkLWljb24ge1xuICAgICAgdXNlIHtcbiAgICAgICAgZmlsbDogb3JhbmdlOyAvKiBldmVyZ3JlZW4gYnJvd3NlciBzeW1ib2wgc3R5bGluZyAqL1xuICAgICAgICBzdHJva2U6IGJsYWNrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uaWNvbi1jaGFuZ2Utc2l6ZSB7XG4gIDo6bmctZGVlcCB7XG4gICAgc3ZnIHtcbiAgICAgIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4ycztcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XG4gICAgfVxuICB9XG59XG4iXX0= */"

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
        this.icon = 'star_100x100_viewbox';
        this.width = '100px';
        this.color = 'red';
    }
    AppComponent.prototype.changeIconPath = function (src) {
        this.icon = src.split('#')[1] === 'delete_70x70' ? 'star_100x100_viewbox' : 'delete_70x70';
    };
    AppComponent.prototype.changeIconSizePlus = function (width) {
        this.width = Number(width.replace('px', '')) + 15 + 'px';
    };
    AppComponent.prototype.changeIconSizeMinus = function (width) {
        this.width = Number(width.replace('px', '')) - 15 + 'px';
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