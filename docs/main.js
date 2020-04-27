(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ng-svg-icon-sprite/fesm5/ng-svg-icon-sprite.js":
/*!*************************************************************!*\
  !*** ./dist/ng-svg-icon-sprite/fesm5/ng-svg-icon-sprite.js ***!
  \*************************************************************/
/*! exports provided: IconSpriteComponent, IconSpriteConfig, IconSpriteModule, IconSpriteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconSpriteComponent", function() { return IconSpriteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconSpriteConfig", function() { return IconSpriteConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconSpriteModule", function() { return IconSpriteModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconSpriteService", function() { return IconSpriteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");



var IconSpriteConfig = /** @class */ (function () {
    function IconSpriteConfig() {
    }
    return IconSpriteConfig;
}());

/**
 * To access a global sprite path
 */
var IconSpriteService = /** @class */ (function () {
    function IconSpriteService(config) {
        if (config) {
            this.setPath(config.path);
        }
    }
    IconSpriteService.prototype.setPath = function (path) {
        this.spritePath = path;
    };
    IconSpriteService.prototype.getPath = function () {
        return this.spritePath;
    };
    /** @nocollapse */ IconSpriteService.ɵfac = function IconSpriteService_Factory(t) { return new (t || IconSpriteService)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(IconSpriteConfig, 8)); };
    /** @nocollapse */ IconSpriteService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ token: IconSpriteService, factory: IconSpriteService.ɵfac, providedIn: 'root' });
    return IconSpriteService;
}());
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(IconSpriteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: IconSpriteConfig, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();

/**
 * Set your own attribute key/value pairs on the generated SVG element, i.e. focusable="false"
 */
var IconSpriteDirective = /** @class */ (function () {
    function IconSpriteDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    IconSpriteDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (Array.isArray(this.attribute[0])) {
            var attributeArr = this.attribute;
            attributeArr.forEach(function (obj) {
                _this.renderer.setAttribute(_this.el.nativeElement, obj[0], obj[1] ? obj[1] : '');
            });
        }
        else {
            var attribute = this.attribute;
            if (attribute[0]) {
                this.renderer.setAttribute(this.el.nativeElement, attribute[0], attribute[1] ? attribute[1] : '');
            }
        }
    };
    /** @nocollapse */ IconSpriteDirective.ɵfac = function IconSpriteDirective_Factory(t) { return new (t || IconSpriteDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    /** @nocollapse */ IconSpriteDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: IconSpriteDirective, selectors: [["", "svgIconSpriteAttr", ""]], inputs: { attribute: "attribute" } });
    return IconSpriteDirective;
}());
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(IconSpriteDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[svgIconSpriteAttr]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { attribute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

function IconSpriteComponent_ng_container_0__svg_title_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "title");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("id", ctx_r4.src.split("#")[1] + "-title");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r4.title);
} }
function IconSpriteComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "svg");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, IconSpriteComponent_ng_container_0__svg_title_2_Template, 2, 2, "title", 0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(3, "use");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    var ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("class", ctx_r0.classes)("width", ctx_r0.width)("height", ctx_r0.height || ctx_r0.width);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r0.title && ctx_r0.src);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("href", ctx_r0.src, null, "xlink");
} }
function IconSpriteComponent_ng_container_1__svg_title_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "title");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("id", ctx_r5.src.split("#")[1] + "-title");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r5.title);
} }
function IconSpriteComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "svg", 1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, IconSpriteComponent_ng_container_1__svg_title_2_Template, 2, 2, "title", 0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(3, "use");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("attribute", ctx_r1.attribute);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("class", ctx_r1.classes)("width", ctx_r1.width)("height", ctx_r1.height || ctx_r1.width);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r1.title && ctx_r1.src);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("href", ctx_r1.src, null, "xlink");
} }
function IconSpriteComponent_ng_container_2__svg_title_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "title");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("id", ctx_r6.src.split("#")[1] + "-title");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r6.title);
} }
function IconSpriteComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "svg");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, IconSpriteComponent_ng_container_2__svg_title_2_Template, 2, 2, "title", 0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(3, "use");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("class", ctx_r2.classes)("width", ctx_r2.width)("height", ctx_r2.height || ctx_r2.width)("viewBox", ctx_r2.viewBox)("preserveAspectRatio", ctx_r2.preserveAspectRatio);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r2.title && ctx_r2.src);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("href", ctx_r2.src, null, "xlink");
} }
function IconSpriteComponent_ng_container_3__svg_title_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "title");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r7 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("id", ctx_r7.src.split("#")[1] + "-title");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r7.title);
} }
function IconSpriteComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "svg", 1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, IconSpriteComponent_ng_container_3__svg_title_2_Template, 2, 2, "title", 0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(3, "use");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    var ctx_r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("attribute", ctx_r3.attribute);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("class", ctx_r3.classes)("width", ctx_r3.width)("height", ctx_r3.height || ctx_r3.width)("viewBox", ctx_r3.viewBox)("preserveAspectRatio", ctx_r3.preserveAspectRatio);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r3.title && ctx_r3.src);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("href", ctx_r3.src, null, "xlink");
} }
var IconSpriteComponent = /** @class */ (function () {
    function IconSpriteComponent(iconSpriteService) {
        this.iconSpriteService = iconSpriteService;
        this.classes = 'icon';
        this.width = '100%';
        this.preserveAspectRatio = 'xMinYMax meet';
    }
    IconSpriteComponent.prototype.ngOnChanges = function (changes) {
        // If the src does not contain a # and a spritePath is set via the service, concatenate them
        if (this.src && !this.src.includes('#') && this.iconSpriteService.spritePath) {
            this.src = this.iconSpriteService.getPath() + "#" + this.src;
        }
    };
    /** @nocollapse */ IconSpriteComponent.ɵfac = function IconSpriteComponent_Factory(t) { return new (t || IconSpriteComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(IconSpriteService)); };
    /** @nocollapse */ IconSpriteComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: IconSpriteComponent, selectors: [["svg-icon-sprite"]], inputs: { src: "src", classes: "classes", width: "width", height: "height", viewBox: "viewBox", preserveAspectRatio: "preserveAspectRatio", attribute: "attribute", title: "title" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 4, consts: [[4, "ngIf"], ["svgIconSpriteAttr", "", 3, "attribute"]], template: function IconSpriteComponent_Template(rf, ctx) { if (rf & 1) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, IconSpriteComponent_ng_container_0_Template, 4, 5, "ng-container", 0);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, IconSpriteComponent_ng_container_1_Template, 4, 6, "ng-container", 0);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, IconSpriteComponent_ng_container_2_Template, 4, 7, "ng-container", 0);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, IconSpriteComponent_ng_container_3_Template, 4, 8, "ng-container", 0);
        } if (rf & 2) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx.viewBox && !ctx.attribute);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx.viewBox && ctx.attribute);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.viewBox && !ctx.attribute);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.viewBox && ctx.attribute);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], IconSpriteDirective], styles: ["[_nghost-%COMP%]   svg[_ngcontent-%COMP%], [_nghost-%COMP%]   use[_ngcontent-%COMP%]{fill:currentColor}"] });
    return IconSpriteComponent;
}());
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(IconSpriteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'svg-icon-sprite',
                styleUrls: ['./icon-sprite.component.scss'],
                templateUrl: './icon-sprite.component.html'
            }]
    }], function () { return [{ type: IconSpriteService }]; }, { src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], viewBox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], preserveAspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], attribute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * Using forRoot({ path: 'filepath' }), this module can be provided as a
 * singleton for the global application (including lazy loaded submodules).
 */
var IconSpriteModule = /** @class */ (function () {
    function IconSpriteModule() {
    }
    IconSpriteModule.forRoot = function (config) {
        return {
            ngModule: IconSpriteModule,
            providers: [
                { provide: IconSpriteConfig, useValue: config }
            ]
        };
    };
    /** @nocollapse */ IconSpriteModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: IconSpriteModule });
    /** @nocollapse */ IconSpriteModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function IconSpriteModule_Factory(t) { return new (t || IconSpriteModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
    return IconSpriteModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(IconSpriteModule, { declarations: [IconSpriteComponent,
        IconSpriteDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [IconSpriteComponent] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(IconSpriteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [
                    IconSpriteComponent,
                    IconSpriteDirective
                ],
                exports: [IconSpriteComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of icon-sprite
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng-svg-icon-sprite.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"!changed\">\n  <h1>SVG-Icon-Sprite <small>Demo</small></h1>\n\n  <h2>The Basics <small>(reference, width and styling)</small></h2>\n\n  <p>To display the icons in original size match the <code>[width]</code> and <code>[height]</code> with the width/height of the equivalent SVG.</p>\n\n  <ul class=\"vertical\">\n    <li>\n      <div class=\"icon-row icon-examples-1\">\n        <svg-icon-sprite src=\"star_100x100\" [width]=\"'100px'\"></svg-icon-sprite>\n      </div>\n      <pre>&lt;svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#star_100x100'\" [width]=\"'100px'\"&gt;&lt;/svg-icon&gt;\n\n.icon-example {{ '{' }}\n  color: darkred;\n{{ '}' }}</pre>\n    </li>\n    <li>\n      <div class=\"icon-row icon-examples-2\">\n        <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#delete_70x70'\" [width]=\"'70px'\" [height]=\"'65px'\"></svg-icon-sprite>\n      </div>\n      <pre>&lt;svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#delete_70x70'\" [width]=\"'70px'\" [height]=\"'65px'\"&gt;&lt;/svg-icon&gt;</pre>\n    </li>\n  </ul>\n  <p>To access the inner SVG properties like <strong>fill</strong> or <strong>stroke</strong> via CSS use <code>::ng-deep</code></p>\n  <ul class=\"vertical\">\n    <li>\n      <div class=\"icon-row icon-examples-3\" style=\"padding-top: 20px;\">\n        <svg-icon-sprite [src]=\"'star_100x100_viewbox'\" [width]=\"'100px'\" [classes]=\"'styled-icon'\"></svg-icon-sprite>\n      </div>\n      <pre>\n.container {{ '{' }}\n  ::ng-deep {{ '{' }}\n    .styled-icon {{ '{' }}\n      use {{ '{' }}\n        fill: orange;\n        stroke: black;</pre>\n    </li>\n  </ul>\n\n\n  <h2 id=\"scaling\">Scaling <small>(using CSS transform)</small></h2>\n\n  <p>Use this pattern if you want to change the size of the original SVG. Apply same rules as above, wrap the SVG into a div and size it using CSS transforms.</p>\n\n  <ul class=\"vertical\">\n    <li>\n      <div class=\"icon-row icon-examples-2\">\n        <div class=\"icon-scale-down\" style=\"padding-bottom: 20px;\">\n          <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#delete_70x70'\" [width]=\"'70px'\"></svg-icon-sprite>\n        </div>\n      </div>\n      <pre>\n.icon-scale-down {{ '{' }}\n  // Scale down by 50%\n  transform: scale(0.5);\n{{ '}' }}</pre>\n    </li>\n    <li>\n      <div class=\"icon-row icon-examples-4\" style=\"height: 0;\">\n        <div class=\"icon-scale-up\">\n          <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#circle_24x24-viewbox'\" [width]=\"'24px'\"></svg-icon-sprite>\n        </div>\n      </div>\n      <pre>\n.icon-scale-up {{ '{' }}\n  // Scale up by 500%\n  transform: scale(5);\n{{ '}' }}\n      </pre>\n    </li>\n  </ul>\n\n  <h2 id=\"viewBox\">Scaling <small>(using viewBox)</small></h2>\n\n  This is an alternative to the CSS scaling method presented above. Scaling via <code>viewBox</code> is <strong>less consistent across browsers</strong>.\n  The pattern depends on your SVG source file, whether it already contains a <code>viewBox</code> or not.\n  The following example SVGs with an original size of <code>100x100px</code> are scaled down by 50%.\n\n  <ul class=\"vertical\">\n    <li>\n      <div class=\"icon-row icon-examples-2\">\n        <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#star_100x100'\" [width]=\"'100px'\" [viewBox]=\"'-50 -50 200 200'\"></svg-icon-sprite>\n      </div>\n      <pre>\n&lt;!-- SVG source lacks a viewBox --&gt;\n&lt;svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#star_100x100'\" [width]=\"'100px'\" [viewBox]=\"'-50 -50 200 200'\"&gt;&lt;/svg-icon&gt;\n      </pre>\n    </li>\n    <li>\n      <div class=\"icon-row icon-examples-3\">\n        <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#star_100x100_viewbox'\" [width]=\"'50px'\" [viewBox]=\"'0 0 100 100'\"></svg-icon-sprite>\n      </div>\n      <pre>\n&lt;!-- SVG source contains a viewBox --&gt;\n&lt;svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#star_100x100_viewbox'\" [width]=\"'50px'\" [viewBox]=\"'0 0 100 100'\"&gt;&lt;/svg-icon&gt;\n      </pre>\n    </li>\n  </ul>\n\n  <h2 id=\"defaultpath\">Default sprite path</h2>\n\n  Set the sprite path in your <code>environment.ts</code> and set the default path using <code>forRoot()</code>. Now you\n  can invoke the component and simply pass the plain icon name as <code>[src]</code>.\n\n  <ul class=\"vertical\">\n    <li>\n      <div class=\"icon-row\" style=\"padding-top: 30px\">\n        <svg-icon-sprite [src]=\"'delete_70x70'\" [width]=\"'100px'\"></svg-icon-sprite>\n      </div>\n      <div class=\"pre-vertical\">\n        <pre>\nimport {{ '{' }} IconSpriteModule {{ '}' }} from 'ng-svg-icon-sprite';\nimport {{ '{' }} environment {{ '}' }} from '../environments/environment';\n\n@NgModule({{ '{' }}\n  imports: [\n    IconSpriteModule.forRoot({{ '{' }} path: environment.spritePath {{ '}' }})\n</pre>\n        <pre style=\"height: 25px;\">&lt;svg-icon-sprite [src]=\"'star_100x100'\" [width]=\"width\"&gt;&lt;/svg-icon&gt;</pre>\n      </div>\n    </li>\n  </ul>\n\n  <p style=\"padding-left: 25%;\">\n    <strong>Advanced Tip:</strong> to change the sprite path during runtime, inject the <code>iconSpriteService</code> anywhere and execute <code>this.iconSpriteService.setPath('new-path.svg')</code>\n    Re-render all icon-components afterwards!\n    &nbsp;\n    <button (click)=\"changeDefaultSpritePath(); changeDone = true;\" [disabled]=\"changeDone\">Change and render</button>\n  </p>\n\n  <h2 id=\"manipulation\">Manipulation <small>(using dynamic icon path)</small></h2>\n\n  <button (click)=\"changeIconPath(iconSprite.src)\">Change Icon Path</button>\n  <button [disabled]=\"iconSprite.width.split('px')[0] <= 20\" (click)=\"changeIconSizeMinus(iconSprite.width)\">Size -</button>\n  <button (click)=\"changeIconSizePlus(iconSprite.width)\">Size +</button>\n  <input #colorInput type=\"text\" value=\"blue\">\n  <button (click)=\"changeIconColor(colorInput.value)\">Set color</button>\n\n  <ul class=\"vertical\">\n    <li class=\"icon-change-size\">\n      <div class=\"icon-row\" [style.color]=\"color\">\n        <svg-icon-sprite #iconSprite [src]=\"icon\" [width]=\"width\" [viewBox]=\"'0 0 100 100'\"></svg-icon-sprite>\n        <!-- Alternatively use the full sprite path via: [src]=\"'assets/sprites/sprite.svg#' + icon\" -->\n      </div>\n      <pre style=\"height: 30px;\">&lt;svg-icon-sprite [src]=\"icon\" [width]=\"width\" [viewBox]=\"'0 0 100 100'\"&gt;&lt;/svg-icon&gt;</pre>\n    </li>\n  </ul>\n\n  <h2 id=\"a11y\">Accessible example <small>(meaningful icon pattern)</small></h2>\n\n  <ul class=\"vertical\">\n    <li>\n      <div class=\"icon-row icon-examples-5\">\n        <svg-icon-sprite\n          [src]=\"'star_100x100'\"\n          [width]=\"'100px'\"\n          [title]=\"'Orange star'\"\n          [attribute]=\"[['aria-labelledby', 'star_100x100-title'], ['role', 'img']]\"></svg-icon-sprite>\n      </div>\n      <pre>\n&lt;svg-icon-sprite\n      [src]=\"'star_100x100'\"\n      [title]=\"'Orange star'\"\n      [attribute]=\"[['aria-labelledby', 'star_100x100-title'], ['role', 'img']]\"\n&gt;&lt;/svg-icon&gt;\n      </pre>\n    </li>\n  </ul>\n\n  Adding <code>[title]=\"'Orange star'\"</code> will render <code>&lt;title id=\"star_100x100-title\"&gt;Orange star&lt;/title&gt;</code> as the first child of the SVG node and serve as alternative text for screen readers.\n  To improve support, you can additionally reference the title's node via <code>'aria-labelledby'</code> using the title's generated id <code>star_100x100-title</code> and set the <code>role</code> to <code>img</code>.\n\n  <h2 id=\"multicolor\">Multicolor Icons <small>(preserving svg properties)</small></h2>\n\n  If you want to include an multicolor icon, you will have to provide it form a separate sprite file (where the fill and stroke attributes are not stripped).\n  Remember that you will not be able to overwrite styles it's via CSS.\n\n  <ul class=\"vertical\">\n    <li>\n      <div class=\"icon-row icon-examples-6\" style=\"width: 33%;\">\n        <svg-icon-sprite [src]=\"'assets/sprites/image-sprite.svg#multicolor-image'\" [width]=\"'250px'\"></svg-icon-sprite>\n      </div>\n      <pre style=\"height: 70px;\">\n&lt;svg-icon-sprite\n  [src]=\"'assets/sprites/image-sprite.svg#multicolor-image'\"&gt;\n&lt;/svg-icon&gt;</pre>\n    </li>\n  </ul>\n\n  <p>\n    Report bugs or feature requests on <a href=\"https://github.com/jannicz/ng-svg-icon-sprite/issues\">Github Issues</a>\n  </p>\n\n  <ul>\n    <li>\n      <a href=\"https://github.com/jannicz/ng-svg-icon-sprite\">\n        <strong>ng-svg-icon-sprite sources on Github</strong>\n      </a>\n    </li>\n    <li>\n      <a href=\"https://www.npmjs.com/package/ng-svg-icon-sprite\">\n        <strong>ng-svg-icon-sprite package on npm</strong>\n      </a>\n    </li>\n  </ul>\n\n  <p>\n    <small>Copyright Jan Suwart, MIT license</small>\n  </p>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@-webkit-keyframes mymove {\n  0% {\n    transform: translateX(0);\n  }\n  50% {\n    transform: translateX(2px);\n  }\n  75% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-2px);\n  }\n}\n@keyframes mymove {\n  0% {\n    transform: translateX(0);\n  }\n  50% {\n    transform: translateX(2px);\n  }\n  75% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-2px);\n  }\n}\n.icon-examples-1 {\n  color: darkred;\n  transition: transform ease-in-out 0.2s;\n  -ms-transform-origin: center center;\n      transform-origin: center center;\n}\n.icon-examples-1:hover, .icon-examples-1:focus {\n  color: red;\n  -ms-transform: rotate(12deg);\n      transform: rotate(12deg);\n}\n.icon-examples-2 {\n  color: darkgreen;\n  transition: color ease-in-out 0.4s;\n}\n.icon-examples-2:hover, .icon-examples-2:focus {\n  color: limegreen;\n}\n.icon-examples-3 {\n  transition: transform ease-in-out 0.2s;\n  -ms-transform-origin: center center;\n      transform-origin: center center;\n}\n.icon-examples-3:hover, .icon-examples-3:focus {\n  -ms-transform: scale(1.1);\n      transform: scale(1.1);\n}\n.icon-examples-4 {\n  color: darkred;\n}\n.icon-examples-4:hover, .icon-examples-4:focus {\n  color: brown;\n}\n.icon-examples-5 {\n  color: darkorange;\n  transition: color ease-in-out 0.1s;\n}\n.icon-examples-5:hover, .icon-examples-5:focus {\n  color: darkgoldenrod;\n}\n.icon-examples-6 {\n  transition: transform ease-in-out 0.1s;\n  -ms-transform-origin: center center;\n      transform-origin: center center;\n}\n.icon-examples-6:hover, .icon-examples-6:focus {\n  transform: rotateY(30deg);\n}\n.icon-scale-down {\n  -ms-transform: scale(0.5);\n      transform: scale(0.5);\n}\n.icon-scale-up {\n  -ms-transform: scale(5);\n      transform: scale(5);\n}\n.container ::ng-deep .styled-icon use {\n  fill: orange;\n  /* evergreen browser symbol styling */\n  stroke: black;\n}\n.icon-change-size ::ng-deep svg {\n  transition: all linear 0.2s;\n  -ms-transform-origin: top center;\n      transform-origin: top center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW4uc3V3YXJ0L1Byb2plY3RzL25nLXN2Zy1pY29uLXNwcml0ZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFBTyx3QkFBQTtFQ0VQO0VEREE7SUFBTywwQkFBQTtFQ0lQO0VESEE7SUFBTyx3QkFBQTtFQ01QO0VETEE7SUFBTywyQkFBQTtFQ1FQO0FBQ0Y7QURiQTtFQUNFO0lBQU8sd0JBQUE7RUNFUDtFRERBO0lBQU8sMEJBQUE7RUNJUDtFREhBO0lBQU8sd0JBQUE7RUNNUDtFRExBO0lBQU8sMkJBQUE7RUNRUDtBQUNGO0FETkE7RUFFRSxjQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQ0FBQTtNQUFBLCtCQUFBO0FDT0Y7QURMRTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtNQUFBLHdCQUFBO0FDT0o7QURIQTtFQUNFLGdCQUFBO0VBQ0Esa0NBQUE7QUNNRjtBREpFO0VBQ0UsZ0JBQUE7QUNNSjtBREZBO0VBQ0Usc0NBQUE7RUFDQSxtQ0FBQTtNQUFBLCtCQUFBO0FDS0Y7QURIRTtFQUNFLHlCQUFBO01BQUEscUJBQUE7QUNLSjtBRERBO0VBQ0UsY0FBQTtBQ0lGO0FERkU7RUFDRSxZQUFBO0FDSUo7QURBQTtFQUNFLGlCQUFBO0VBQ0Esa0NBQUE7QUNHRjtBRERFO0VBQ0Usb0JBQUE7QUNHSjtBRENBO0VBQ0Usc0NBQUE7RUFDQSxtQ0FBQTtNQUFBLCtCQUFBO0FDRUY7QURBRTtFQUNFLHlCQUFBO0FDRUo7QURFQTtFQUVFLHlCQUFBO01BQUEscUJBQUE7QUNBRjtBREdBO0VBRUUsdUJBQUE7TUFBQSxtQkFBQTtBQ0RGO0FEUU07RUFDRSxZQUFBO0VBQWMscUNBQUE7RUFDZCxhQUFBO0FDSlI7QURZSTtFQUNFLDJCQUFBO0VBQ0EsZ0NBQUE7TUFBQSw0QkFBQTtBQ1ROIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBteW1vdmUge1xuICAwJSAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG4gIDUwJSAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KTsgfVxuICA3NSUgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7IH1cbn1cblxuLmljb24tZXhhbXBsZXMtMSB7XG4gIC8vIFVzZSBjb2xvciBwcm9wZXJ0eSBmb3Igb3ZlcnJpZGluZyBkZWZhdWx0IGNvbG9yIGFuZCBob3ZlciBlZmZlY3RcbiAgY29sb3I6IGRhcmtyZWQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjJzO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuXG4gICY6aG92ZXIsICY6Zm9jdXMge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTJkZWcpO1xuICB9XG59XG5cbi5pY29uLWV4YW1wbGVzLTIge1xuICBjb2xvcjogZGFya2dyZWVuO1xuICB0cmFuc2l0aW9uOiBjb2xvciBlYXNlLWluLW91dCAwLjRzO1xuXG4gICY6aG92ZXIsICY6Zm9jdXMge1xuICAgIGNvbG9yOiBsaW1lZ3JlZW47XG4gIH1cbn1cblxuLmljb24tZXhhbXBsZXMtMyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjJzO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuXG4gICY6aG92ZXIsICY6Zm9jdXMge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxufVxuXG4uaWNvbi1leGFtcGxlcy00IHtcbiAgY29sb3I6IGRhcmtyZWQ7XG5cbiAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgY29sb3I6IGJyb3duO1xuICB9XG59XG5cbi5pY29uLWV4YW1wbGVzLTUge1xuICBjb2xvcjogZGFya29yYW5nZTtcbiAgdHJhbnNpdGlvbjogY29sb3IgZWFzZS1pbi1vdXQgMC4xcztcblxuICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICBjb2xvcjogZGFya2dvbGRlbnJvZDtcbiAgfVxufVxuXG4uaWNvbi1leGFtcGxlcy02IHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4tb3V0IDAuMXM7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG5cbiAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDMwZGVnKTtcbiAgfVxufVxuXG4uaWNvbi1zY2FsZS1kb3duIHtcbiAgLy8gU2NhbGUgZG93biBieSA1MCVcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xufVxuXG4uaWNvbi1zY2FsZS11cCB7XG4gIC8vIFNjYWxlIHVwIGJ5IDUwMCVcbiAgdHJhbnNmb3JtOiBzY2FsZSg1KTtcbn1cblxuLy8gQWNjZXNzIHRoZSBTVkcgdmlhIDo6bmctZGVlcCBzZWxlY3RvclxuLmNvbnRhaW5lciB7XG4gIDo6bmctZGVlcCB7XG4gICAgLnN0eWxlZC1pY29uIHtcbiAgICAgIHVzZSB7XG4gICAgICAgIGZpbGw6IG9yYW5nZTsgLyogZXZlcmdyZWVuIGJyb3dzZXIgc3ltYm9sIHN0eWxpbmcgKi9cbiAgICAgICAgc3Ryb2tlOiBibGFjaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmljb24tY2hhbmdlLXNpemUge1xuICA6Om5nLWRlZXAge1xuICAgIHN2ZyB7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMnM7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xuICAgIH1cbiAgfVxufVxuIiwiQGtleWZyYW1lcyBteW1vdmUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xuICB9XG59XG4uaWNvbi1leGFtcGxlcy0xIHtcbiAgY29sb3I6IGRhcmtyZWQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjJzO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xufVxuLmljb24tZXhhbXBsZXMtMTpob3ZlciwgLmljb24tZXhhbXBsZXMtMTpmb2N1cyB7XG4gIGNvbG9yOiByZWQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEyZGVnKTtcbn1cblxuLmljb24tZXhhbXBsZXMtMiB7XG4gIGNvbG9yOiBkYXJrZ3JlZW47XG4gIHRyYW5zaXRpb246IGNvbG9yIGVhc2UtaW4tb3V0IDAuNHM7XG59XG4uaWNvbi1leGFtcGxlcy0yOmhvdmVyLCAuaWNvbi1leGFtcGxlcy0yOmZvY3VzIHtcbiAgY29sb3I6IGxpbWVncmVlbjtcbn1cblxuLmljb24tZXhhbXBsZXMtMyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjJzO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xufVxuLmljb24tZXhhbXBsZXMtMzpob3ZlciwgLmljb24tZXhhbXBsZXMtMzpmb2N1cyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLmljb24tZXhhbXBsZXMtNCB7XG4gIGNvbG9yOiBkYXJrcmVkO1xufVxuLmljb24tZXhhbXBsZXMtNDpob3ZlciwgLmljb24tZXhhbXBsZXMtNDpmb2N1cyB7XG4gIGNvbG9yOiBicm93bjtcbn1cblxuLmljb24tZXhhbXBsZXMtNSB7XG4gIGNvbG9yOiBkYXJrb3JhbmdlO1xuICB0cmFuc2l0aW9uOiBjb2xvciBlYXNlLWluLW91dCAwLjFzO1xufVxuLmljb24tZXhhbXBsZXMtNTpob3ZlciwgLmljb24tZXhhbXBsZXMtNTpmb2N1cyB7XG4gIGNvbG9yOiBkYXJrZ29sZGVucm9kO1xufVxuXG4uaWNvbi1leGFtcGxlcy02IHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4tb3V0IDAuMXM7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG59XG4uaWNvbi1leGFtcGxlcy02OmhvdmVyLCAuaWNvbi1leGFtcGxlcy02OmZvY3VzIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDMwZGVnKTtcbn1cblxuLmljb24tc2NhbGUtZG93biB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbn1cblxuLmljb24tc2NhbGUtdXAge1xuICB0cmFuc2Zvcm06IHNjYWxlKDUpO1xufVxuXG4uY29udGFpbmVyIDo6bmctZGVlcCAuc3R5bGVkLWljb24gdXNlIHtcbiAgZmlsbDogb3JhbmdlO1xuICAvKiBldmVyZ3JlZW4gYnJvd3NlciBzeW1ib2wgc3R5bGluZyAqL1xuICBzdHJva2U6IGJsYWNrO1xufVxuXG4uaWNvbi1jaGFuZ2Utc2l6ZSA6Om5nLWRlZXAgc3ZnIHtcbiAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjJzO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ng_svg_icon_sprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-svg-icon-sprite */ "./dist/ng-svg-icon-sprite/fesm5/ng-svg-icon-sprite.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(
    // Optionally inject the icon sprite service to set path manually
    iconSpriteService) {
        this.iconSpriteService = iconSpriteService;
        this.icon = 'star_100x100_viewbox';
        this.width = '100px';
        this.color = 'red';
        this.changed = false;
        this.changeDone = false;
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.changeIconPath = function (src) {
        this.icon = src.split('#')[1] === 'delete_70x70' ? 'star_100x100_viewbox' : 'delete_70x70';
        console.log('changed path', this.icon);
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
    // Optionally, change the default sprite path during runtime
    AppComponent.prototype.changeDefaultSpritePath = function () {
        var _this = this;
        this.changed = true;
        this.iconSpriteService.setPath('assets/sprites-secondary/sprite.svg');
        console.log('changeDefaultSpritePath', this.iconSpriteService.getPath());
        setTimeout(function () {
            // Demo purpose: force change detection to re-render
            _this.changed = false;
        }, 0);
    };
    AppComponent.ctorParameters = function () { return [
        { type: ng_svg_icon_sprite__WEBPACK_IMPORTED_MODULE_2__["IconSpriteService"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ng_svg_icon_sprite__WEBPACK_IMPORTED_MODULE_2__["IconSpriteService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng_svg_icon_sprite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-svg-icon-sprite */ "./dist/ng-svg-icon-sprite/fesm5/ng-svg-icon-sprite.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ng_svg_icon_sprite__WEBPACK_IMPORTED_MODULE_4__["IconSpriteModule"].forRoot({ path: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].spritePath })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    spritePath: 'assets/sprites/sprite.svg'
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
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