(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




// import { GaurdsGuard } from './core/gaurds/gaurds.guard';
const routes = [
    { path: '', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./core/core.module */ "./src/app/core/core.module.ts")).then(m => m.CoreModule) },
    { path: 'dashboard', loadChildren: () => __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(m => m.DashboardModule) },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
            })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/service.service */ "./src/app/core/service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _core_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/left-sidebar/left-sidebar.component */ "./src/app/core/left-sidebar/left-sidebar.component.ts");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/header/header.component */ "./src/app/core/header/header.component.ts");











function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-left-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
let AppComponent = class AppComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.title = 'cdsmrai-hospital';
        this.showHead = false;
        this.showSideBar = false;
        this.pagenotfoundd = false;
        this.mode = 'indeterminate';
        this.value = 0;
        this.screenwidth = window.innerWidth;
        if (this.screenwidth < 768) {
            this.showSideBar = false;
        }
        else {
            this.showSideBar = true;
        }
        router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                this.pageNotFound();
                if (event['url'] == '/login' || event['url'] == '/otp' || event['url'].includes('/reset-password')
                    || event['url'] == '/forgot-password' || event['url'] == '/' || event['url'] == '/pagenotfound' || event['url'] == '/shared/success') {
                    this.showHead = false;
                }
                else {
                    console.log(event['url']);
                    this.showHead = true;
                    window.scroll(0, 0);
                    this.service.headerString.next(event['url']);
                }
            }
        });
        this.service.spinnerProgressBar.subscribe((val) => {
            console.log(val);
            if (val > 0) {
                this.mode = 'determinate';
                this.value = val;
            }
        });
    }
    onResize(event) {
        this.screenwidth = event.target.innerWidth;
        if (this.screenwidth < 768) {
            this.showSideBar = false;
        }
        else {
            this.showSideBar = true;
        }
    }
    pageNotFound() {
        //   this.service.pageNotfound
        //   .subscribe((val)=>{
        //     if(val){
        //       setTimeout(() => {        
        //         this.pagenotfoundd = true
        //       }, 10);
        //     }
        //     else{
        //       setTimeout(() => {        
        //         this.pagenotfoundd = false
        //       }, 10);
        //     }
        //   })
    }
};
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 5, consts: [[1, "containerdiv", 3, "resize"], ["class", "leftsidebar", 4, "ngIf"], [1, "rightside-layout"], [1, "right_containerDiv"], ["class", "header", 4, "ngIf"], ["bdColor", "rgba(0, 0, 0, 0.9)", "size", "large", "color", "#fff", "type", "square-loader", 3, "fullScreen"], [2, "color", "white", "position", "relative", "top", "5rem"], [3, "mode", "value"], [1, "leftsidebar"], [1, "header"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function AppComponent_Template_div_resize_0_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppComponent_div_4_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ngx-spinner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Hey! You have protected your valuable assets ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "mat-progress-bar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showHead && ctx.showSideBar && !ctx.pagenotfoundd);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showHead && !ctx.pagenotfoundd);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullScreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("mode", ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.value);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerComponent"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBar"], _core_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["LeftSidebarComponent"], _core_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: Poppins;\n}\n\n.comman_heading[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 56px;\n  line-height: 84px;\n  color: #337B94;\n}\n\n.comman_headingtext[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  color: #000000;\n}\n\n.common_button[_ngcontent-%COMP%] {\n  width: 158px;\n  background: #357C95;\n  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);\n  border-radius: 16px;\n  font-family: \"Inter\", sans-serif;\n  padding: 18px 0;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  color: #FFFFFF;\n  cursor: pointer;\n  border: none;\n  outline: none;\n}\n\n.ipadview[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.flexsb[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.containerdiv[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 1440px;\n  margin: auto;\n}\n\n.rightside-layout[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.setting_item[_ngcontent-%COMP%] {\n  padding: 0px 45px 0 37px;\n}\n\n.leftsidebar[_ngcontent-%COMP%] {\n  width: 285px;\n}\n\n.productlist[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.productlist[_ngcontent-%COMP%]   .productName[_ngcontent-%COMP%] {\n  box-shadow: 3px 3px 14px #808080b8;\n  border-radius: 10px;\n  font-size: 16px;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  text-align: center;\n  cursor: pointer;\n  height: 100px;\n  display: flex;\n  align-items: center;\n}\n\n@media (max-width: 768px) {\n  .dekstopview[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .ipadview[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .comman_heading[_ngcontent-%COMP%] {\n    font-family: Poppins;\n    font-size: 24px;\n    line-height: 36px;\n    color: #357C95;\n  }\n\n  .comman_headingtext[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n\n  .common_button[_ngcontent-%COMP%] {\n    width: 100%;\n    font-family: Poppins;\n    font-weight: 100;\n    font-size: 18px;\n    line-height: 16px;\n    text-align: center;\n    color: #FFFFFF;\n  }\n}\n\n.form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  position: absolute;\n  top: 100%;\n  left: 15px;\n  margin-top: -1px;\n}\n\n.invalid[_ngcontent-%COMP%] {\n  color: #FB3F4A;\n  position: absolute;\n  margin-top: 10px;\n  font-family: Poppins;\n  font-weight: 100;\n  font-size: 16px;\n}\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXJ1bHZlcm1hL0RvY3VtZW50cy91bnRpdGxlZCBmb2xkZXIvY2RzbXJhaS1ob3NwaXRhbC9zcmMvc2hhcmVkL3N0eWxlL2dsb2JhbC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvcGFydWx2ZXJtYS9Eb2N1bWVudHMvdW50aXRsZWQgZm9sZGVyL2Nkc21yYWktaG9zcGl0YWwvc3JjL3NoYXJlZC9zdHlsZS92YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksb0JBQUE7QUNBSjs7QURHQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVFbUJLO0VGbEJMLGlCRXlDSztFRnhDTCxjQUFBO0FDQUo7O0FERUE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNFSjs7QURBQTtFQUNJLGFBQUE7QUNHSjs7QUREQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ0lKOztBREZBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0tKOztBREZBO0VBRUksV0FBQTtBQ0lKOztBREZBO0VBQ0ksd0JBQUE7QUNLSjs7QURGQTtFQUNJLFlBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7QUNNSjs7QURGSTtFQUVJLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0dSOztBREFBO0VBQ0k7SUFDSSxhQUFBO0VDR047O0VEREU7SUFDSSxjQUFBO0VDSU47O0VERkU7SUFDSSxvQkFBQTtJQUVKLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7RUNJRjs7RURGRTtJQUNJLGVBQUE7RUNLTjs7RURIRTtJQUNJLFdBQUE7SUFDQSxvQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VDTU47QUFDRjs7QURGQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0dKOztBREFBO0VBQW1CLGNBQUE7QUNJbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3ZhcmlhYmxlLnNjc3MnO1xyXG4qe1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbn1cclxuXHJcbi5jb21tYW5faGVhZGluZ3tcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQ1NjtcclxuICAgIGxpbmUtaGVpZ2h0OiAkbGluZTg0O1xyXG4gICAgY29sb3I6ICMzMzdCOTQ7XHJcbn1cclxuLmNvbW1hbl9oZWFkaW5ndGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG4uY29tbW9uX2J1dHRvbntcclxuICAgIHdpZHRoOiAxNThweDtcclxuICAgIGJhY2tncm91bmQ6ICMzNTdDOTU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDE2cHggcmdiKDAgMCAwIC8gMjUlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzogMThweCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uaXBhZHZpZXd7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5mbGV4c2J7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5jb250YWluZXJkaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBcclxufVxyXG4ucmlnaHRzaWRlLWxheW91dHtcclxuICAgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnNldHRpbmdfaXRlbXtcclxuICAgIHBhZGRpbmc6IDBweCA0NXB4IDAgMzdweDtcclxufVxyXG5cclxuLmxlZnRzaWRlYmFye1xyXG4gICAgd2lkdGg6Mjg1cHg7XHJcbn1cclxuLnByb2R1Y3RsaXN0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC8vIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgLnByb2R1Y3ROYW1le1xyXG4gICAgICAgIC8vIHdpZHRoOiAyMyU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxNHB4ICM4MDgwODBiODtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICAgLmRla3N0b3B2aWV3e1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuaXBhZHZpZXd7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuY29tbWFuX2hlYWRpbmd7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAvLyBmb250LXdlaWdodDogMTAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICBjb2xvcjogIzM1N0M5NTtcclxuICAgIH1cclxuICAgIC5jb21tYW5faGVhZGluZ3RleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbW1vbl9idXR0b257XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIC5pbnZhbGlkLWZlZWRiYWNre1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgIFxyXG59XHJcblxyXG4uaW52YWxpZHtcclxuICAgIGNvbG9yOiAjRkIzRjRBO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmludmFsaWQtZmVlZGJhY2t7IGRpc3BsYXk6IGJsb2NrOyB9IiwiKiB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xufVxuXG4uY29tbWFuX2hlYWRpbmcge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDU2cHg7XG4gIGxpbmUtaGVpZ2h0OiA4NHB4O1xuICBjb2xvcjogIzMzN0I5NDtcbn1cblxuLmNvbW1hbl9oZWFkaW5ndGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uY29tbW9uX2J1dHRvbiB7XG4gIHdpZHRoOiAxNThweDtcbiAgYmFja2dyb3VuZDogIzM1N0M5NTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDE4cHggMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaXBhZHZpZXcge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZmxleHNiIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY29udGFpbmVyZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnJpZ2h0c2lkZS1sYXlvdXQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNldHRpbmdfaXRlbSB7XG4gIHBhZGRpbmc6IDBweCA0NXB4IDAgMzdweDtcbn1cblxuLmxlZnRzaWRlYmFyIHtcbiAgd2lkdGg6IDI4NXB4O1xufVxuXG4ucHJvZHVjdGxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnByb2R1Y3RsaXN0IC5wcm9kdWN0TmFtZSB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTRweCAjODA4MDgwYjg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5kZWtzdG9wdmlldyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5pcGFkdmlldyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuY29tbWFuX2hlYWRpbmcge1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICBjb2xvcjogIzM1N0M5NTtcbiAgfVxuXG4gIC5jb21tYW5faGVhZGluZ3RleHQge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIC5jb21tb25fYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gIH1cbn1cbi5mb3JtLWdyb3VwIC5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAtMXB4O1xufVxuXG4uaW52YWxpZCB7XG4gIGNvbG9yOiAjRkIzRjRBO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59IiwiJGZvbnQxOiAxMHB4O1xyXG4kZm9udDI6IDEzcHg7XHJcbiRmb250MzogMTRweDtcclxuJGZvbnQ0OiAxNXB4O1xyXG4kZm9udDU6IDE2cHg7XHJcbiRmb250NjogMThweDtcclxuJGZvbnQ3OiAyMHB4O1xyXG4kZm9udDg6IDIycHg7XHJcbiRmb250OTogMjZweDtcclxuJGZvbnQxMDogMzBweDtcclxuJGZvbnQxMTogMzZweDtcclxuJGZvbnQxMjogNDBweDtcclxuJGZvbnQxMzogNDVweDtcclxuJGZvbnQxNDogNTBweDtcclxuXHJcbi8vRk9OVFNcclxuLy8kZm9udDExOiAxMXB4O1xyXG4kZm9udDE1OiAxNXB4O1xyXG4kZm9udDE2OiAxNnB4O1xyXG4kZm9udDE4OiAxOHB4O1xyXG4kZm9udDIwOiAyMHB4O1xyXG4kZm9udDIyOiAyMnB4O1xyXG4kZm9udDI2OiAyNnB4O1xyXG4kZm9udDUwOiAzMHB4O1xyXG4kZm9udDM2OiAzNnB4O1xyXG4kZm9udDQwOiA0MHB4O1xyXG4kZm9udDQ1OiA0NXB4O1xyXG4kZm9udDU1OiA1NXB4O1xyXG4kZm9udDU2OiA1NnB4O1xyXG4kZm9udDYwOiA2MHB4O1xyXG5cclxuLy8gZm9udFxyXG4kZm9udDA3OiAwLjd2dztcclxuJGZvbnQwODogMC44dnc7XHJcbiRmb250MTAxOiAxdnc7XHJcbiRmb250MTEyOiAxLjJ2dztcclxuJGZvbnQxMTM6IDEuM3Z3O1xyXG4kZm9udDExNTogMS41dnc7XHJcbiRmb250MTAyOiAydnc7XHJcbiRmb250MTI1OiAyLjV2dztcclxuJGZvbnQxMDM6IDN2dztcclxuJGZvbnQxMDQ6IDR2dztcclxuJGZvbnQxMDU6IDV2dztcclxuXHJcbi8vICRmb250MTEwOjJ2dztcclxuXHJcbi8vTElORSBIRUlHSFRTXHJcbiRsaW5lMTI6IDEycHg7XHJcbiRsaW5lMzQ6IDM0cHg7XHJcbiRsaW5lNDQ6IDQ0cHg7XHJcbiRsaW5lNjk6IDY5cHg7XHJcbiRsaW5lODQ6IDg0cHg7XHJcblxyXG4vL0xFVFRFUiBTUEFDSU5HU1xyXG4kbGV0dGVyMTogMXB4O1xyXG4kbGV0dGVyMjogMS41cHg7XHJcbiRsZXR0ZXIzOiAycHg7XHJcbiRsZXR0ZXI0OiAyLjVweDtcclxuJGxldHRlcjU6IDRweDtcclxuJGxldHRlcjY6IDZweDtcclxuJGxldHRlcjc6IDhweDtcclxuIl19 */"] });
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], AppComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
        args: ['window:resize', ['$event']]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _core_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _core_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/interceptor.interceptor */ "./src/app/core/interceptor.interceptor.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _core_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_10__["InterceptorInterceptor"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"],
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _core_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_10__["InterceptorInterceptor"], multi: true },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/authentication/index.ts":
/*!**********************************************!*\
  !*** ./src/app/core/authentication/index.ts ***!
  \**********************************************/
/*! exports provided: components, LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/core/authentication/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });


const components = [_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]];



/***/ }),

/***/ "./src/app/core/authentication/login/login.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/authentication/login/login.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service.service */ "./src/app/core/service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function LoginComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email ID/ Mobile no. is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_19_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.submitted || ctx_r0.forgotSubmited) && ctx_r0.f.email.errors.required);
} }
function LoginComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email ID is not valid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Mobile no. is not valid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_26_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.submitted && ctx_r3.f.password.errors.required);
} }
const _c0 = function (a0) { return { "invalid-danger": a0 }; };
class LoginComponent {
    constructor(fb, router, service) {
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.submitted = false;
        this.forgotSubmited = false;
        this.mobileError = false;
        this.emailError = false;
        this.all_groups = [];
    }
    ngOnInit() {
        localStorage.removeItem("token");
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    get f() { return this.loginForm.controls; }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submitted = true;
            this.forgotSubmited = false;
            console.log(this.loginForm);
            if (this.loginForm.invalid) {
                return;
            }
            const emailvalidation = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$/;
            if (!(emailvalidation.test(this.loginForm.value.email))) {
                this.mobileError = false;
                this.emailError = true;
                return;
            }
            this.service.spinnerStart();
            this.service.login(this.loginForm.value).subscribe(data => {
                console.log(data["data"]);
                localStorage.setItem("token", data["data"]);
                this.router.navigateByUrl('dashboard/ward');
                this.service.spinnerClose();
            }, error => {
                console.log(error);
                this.service.spinnerClose();
            });
        });
    }
    forgotPass() { }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 32, vars: 11, consts: [[1, "containerDiv", "flexsb"], [1, "leftgrey"], [1, "desk_leftscreen", 2, "background-image", "url(/assets/images/signin_image.png)"], [1, "logo"], ["src", "/assets/logo.png", "alt", "", 1, "dekstopview"], ["src", "/assets/logo.png", "alt", "", 1, "ipadview"], [1, "desk_rightscreen"], [1, "loginbox"], [1, "comman_heading", "ipadview"], [1, "comman_heading", "dekstopview"], [1, "comman_headingtext"], [3, "formGroup"], [1, "floating-label-group"], ["type", "text", "id", "username", "autocomplete", "off", "required", "", "formControlName", "email"], [1, "floating-label", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "invalid", 4, "ngIf"], ["type", "password", "id", "password", "autocomplete", "off", "required", "", "formControlName", "password"], [1, "forgott", "buttontext", 3, "click"], ["id", "loginButtons", 1, "buttondiv"], ["type", "submit", 1, "common_button", 3, "click"], [1, "invalid-feedback"], [1, "invalid"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Login to your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "with the credentials provided by team CDSMH.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Email ID/ Mobile no.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LoginComponent_div_19_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LoginComponent_div_20_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, LoginComponent_div_21_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, LoginComponent_div_26_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_27_listener() { return ctx.forgotPass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_30_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Login Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, (ctx.submitted || ctx.forgotSubmited) && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.forgotSubmited) && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.emailError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobileError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: Poppins;\n}\n\n.comman_heading[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 56px;\n  line-height: 84px;\n  color: #337B94;\n}\n\n.comman_headingtext[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  color: #000000;\n}\n\n.common_button[_ngcontent-%COMP%] {\n  width: 158px;\n  background: #357C95;\n  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);\n  border-radius: 16px;\n  font-family: \"Inter\", sans-serif;\n  padding: 18px 0;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  color: #FFFFFF;\n  cursor: pointer;\n  border: none;\n  outline: none;\n}\n\n.ipadview[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.flexsb[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.containerdiv[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 1440px;\n  margin: auto;\n}\n\n.rightside-layout[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.setting_item[_ngcontent-%COMP%] {\n  padding: 0px 45px 0 37px;\n}\n\n.leftsidebar[_ngcontent-%COMP%] {\n  width: 285px;\n}\n\n.productlist[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.productlist[_ngcontent-%COMP%]   .productName[_ngcontent-%COMP%] {\n  box-shadow: 3px 3px 14px #808080b8;\n  border-radius: 10px;\n  font-size: 16px;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  text-align: center;\n  cursor: pointer;\n  height: 100px;\n  display: flex;\n  align-items: center;\n}\n\n@media (max-width: 768px) {\n  .dekstopview[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .ipadview[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .comman_heading[_ngcontent-%COMP%] {\n    font-family: Poppins;\n    font-size: 24px;\n    line-height: 36px;\n    color: #357C95;\n  }\n\n  .comman_headingtext[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n\n  .common_button[_ngcontent-%COMP%] {\n    width: 100%;\n    font-family: Poppins;\n    font-weight: 100;\n    font-size: 18px;\n    line-height: 16px;\n    text-align: center;\n    color: #FFFFFF;\n  }\n}\n\n.form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  position: absolute;\n  top: 100%;\n  left: 15px;\n  margin-top: -1px;\n}\n\n.invalid[_ngcontent-%COMP%] {\n  color: #FB3F4A;\n  position: absolute;\n  margin-top: 10px;\n  font-family: Poppins;\n  font-weight: 100;\n  font-size: 16px;\n}\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.invalid-danger[_ngcontent-%COMP%] {\n  color: #FB3F4A !important;\n  margin: 0;\n}\n\n.containerDiv[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  height: 100vh;\n  max-width: 1440px;\n  margin: auto;\n}\n\n.containerDiv[_ngcontent-%COMP%]   .desk_leftscreen[_ngcontent-%COMP%] {\n  width: 50%;\n  background: #F9F9F9;\n}\n\n.containerDiv[_ngcontent-%COMP%]   .desk_leftscreen[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding: 15px 72px 15px 34px;\n}\n\n.containerDiv[_ngcontent-%COMP%]   .desk_leftscreen[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 9rem;\n}\n\n.containerDiv[_ngcontent-%COMP%]   .desk_leftscreen[_ngcontent-%COMP%]   .leftman_icon[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n\n.containerDiv[_ngcontent-%COMP%]   .desk_leftscreen[_ngcontent-%COMP%]   .leftman_icon[_ngcontent-%COMP%]   .deskimage[_ngcontent-%COMP%] {\n  position: relative;\n  top: 70px;\n}\n\n.containerDiv[_ngcontent-%COMP%]   .desk_rightscreen[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.containerDiv[_ngcontent-%COMP%]   .desk_rightscreen[_ngcontent-%COMP%]   .loginbox[_ngcontent-%COMP%] {\n  width: 60%;\n  position: relative;\n  left: 12%;\n  top: 100px;\n}\n\n.containerDiv[_ngcontent-%COMP%]   .desk_rightscreen[_ngcontent-%COMP%]   .floating-label-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 15px;\n  margin-bottom: 25px;\n}\n\n.containerDiv[_ngcontent-%COMP%]   .desk_rightscreen[_ngcontent-%COMP%]   .floating-label-group[_ngcontent-%COMP%]   .floating-label[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: none;\n  top: 5rem;\n  left: 0px;\n  transition: all 0.1s ease;\n  font-family: Poppins;\n  font-weight: 100;\n  font-size: 16px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  color: #B2B3BD;\n}\n\n.containerDiv[_ngcontent-%COMP%]   .desk_rightscreen[_ngcontent-%COMP%]   .floating-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: navajowhite;\n  border-bottom: 1.5px solid #357C95;\n  width: 100%;\n  padding: 7px 0;\n  margin-top: 4rem;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n  color: #757575;\n}\n\n.containerDiv[_ngcontent-%COMP%]   .desk_rightscreen[_ngcontent-%COMP%]   .floating-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline-width: 0;\n}\n\n.containerDiv[_ngcontent-%COMP%]   .desk_rightscreen[_ngcontent-%COMP%]   .floating-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .floating-label[_ngcontent-%COMP%], .containerDiv[_ngcontent-%COMP%]   .desk_rightscreen[_ngcontent-%COMP%]   .floating-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:focus):valid    ~ .floating-label[_ngcontent-%COMP%] {\n  top: -15px;\n  bottom: 0px;\n  left: 0px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 12px;\n  line-height: 18px;\n  color: #B2B3BD;\n}\n\n.containerDiv[_ngcontent-%COMP%]   .desk_rightscreen[_ngcontent-%COMP%]   .buttondiv[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 28px;\n}\n\n.containerDiv[_ngcontent-%COMP%]   .desk_rightscreen[_ngcontent-%COMP%]   .buttondiv[_ngcontent-%COMP%]   .buttontext[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 21px;\n  display: flex;\n  align-items: center;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #1F4167;\n  cursor: pointer;\n}\n\n.forgott[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 21px;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #1F4167;\n  text-align: right;\n  margin-top: 70px;\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.leftgrey[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (min-width: 1440px) {\n  .leftgrey[_ngcontent-%COMP%] {\n    width: 50%;\n    height: 100vh;\n    position: absolute;\n    left: 0;\n    display: block;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    position: relative;\n  }\n\n  .containerDiv[_ngcontent-%COMP%]   .desk_rightscreen[_ngcontent-%COMP%]   .loginbox[_ngcontent-%COMP%] {\n    width: 65%;\n    position: relative;\n    left: 20%;\n    top: 100px;\n  }\n}\n\n@media (max-width: 768px) {\n  .invalid[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n\n  .containerDiv[_ngcontent-%COMP%] {\n    display: block;\n    background-image: url(\"/assets/mobile/background_mobile.svg\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 812px;\n  }\n  .containerDiv[_ngcontent-%COMP%]   .desk_leftscreen[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .containerDiv[_ngcontent-%COMP%]   .desk_leftscreen[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    margin: 0;\n    text-align: center;\n    padding: 25px 0;\n  }\n  .containerDiv[_ngcontent-%COMP%]   .desk_leftscreen[_ngcontent-%COMP%]   .leftman_icon[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .containerDiv[_ngcontent-%COMP%]   .desk_leftscreen[_ngcontent-%COMP%]   .leftman_icon[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%] {\n    width: 50%;\n    font-family: Poppins;\n    font-style: normal;\n    font-size: 34px;\n    line-height: 36px;\n    color: #357C95;\n    text-align: left;\n  }\n  .containerDiv[_ngcontent-%COMP%]   .desk_rightscreen[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .containerDiv[_ngcontent-%COMP%]   .desk_rightscreen[_ngcontent-%COMP%]   .loginbox[_ngcontent-%COMP%] {\n    background: #FFFFFF;\n    box-shadow: 0px 20px 100px rgba(0, 0, 0, 0.17);\n    border-radius: 20px;\n    width: 90%;\n    margin: auto;\n    top: 40px;\n    padding: 40px 32px 52px 31px;\n    left: auto;\n  }\n  .containerDiv[_ngcontent-%COMP%]   .desk_rightscreen[_ngcontent-%COMP%]   .floating-label-group[_ngcontent-%COMP%] {\n    position: relative;\n    margin-top: 15px;\n    margin-bottom: 5px;\n  }\n  .containerDiv[_ngcontent-%COMP%]   .desk_rightscreen[_ngcontent-%COMP%]   .floating-label-group[_ngcontent-%COMP%]   .floating-label[_ngcontent-%COMP%] {\n    top: 2rem;\n    font-size: 15px;\n    line-height: 22px;\n  }\n  .containerDiv[_ngcontent-%COMP%]   .desk_rightscreen[_ngcontent-%COMP%]   .floating-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin-top: 1.5rem;\n    font-weight: 300;\n    font-size: 15px;\n    line-height: 22px;\n  }\n  .containerDiv[_ngcontent-%COMP%]   .desk_rightscreen[_ngcontent-%COMP%]   .floating-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n    outline-width: 0;\n  }\n  .containerDiv[_ngcontent-%COMP%]   .desk_rightscreen[_ngcontent-%COMP%]   .floating-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .floating-label[_ngcontent-%COMP%], .containerDiv[_ngcontent-%COMP%]   .desk_rightscreen[_ngcontent-%COMP%]   .floating-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:focus):valid    ~ .floating-label[_ngcontent-%COMP%] {\n    top: -22px;\n    font-size: 15px;\n    line-height: 22px;\n  }\n  .containerDiv[_ngcontent-%COMP%]   .desk_rightscreen[_ngcontent-%COMP%]   .forgott[_ngcontent-%COMP%] {\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: 100;\n    font-size: 12px;\n    line-height: 18px;\n    color: #9F9F9F;\n    margin-bottom: 23px;\n    text-align: right;\n    margin-top: 8px;\n    margin-right: 0;\n    cursor: pointer;\n    text-decoration: none;\n  }\n  .containerDiv[_ngcontent-%COMP%]   .desk_rightscreen[_ngcontent-%COMP%]   .buttondiv[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    margin-top: 0;\n  }\n  .containerDiv[_ngcontent-%COMP%]   .desk_rightscreen[_ngcontent-%COMP%]   .buttondiv[_ngcontent-%COMP%]   .buttontext[_ngcontent-%COMP%] {\n    font-weight: 400;\n    color: #357C95;\n    line-height: 22px;\n    font-size: 15px;\n    margin-top: 31px;\n    cursor: pointer;\n    text-decoration: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXJ1bHZlcm1hL0RvY3VtZW50cy91bnRpdGxlZCBmb2xkZXIvY2RzbXJhaS1ob3NwaXRhbC9zcmMvc2hhcmVkL3N0eWxlL2dsb2JhbC5zY3NzIiwic3JjL2FwcC9jb3JlL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3BhcnVsdmVybWEvRG9jdW1lbnRzL3VudGl0bGVkIGZvbGRlci9jZHNtcmFpLWhvc3BpdGFsL3NyYy9zaGFyZWQvc3R5bGUvdmFyaWFibGUuc2NzcyIsIi9Vc2Vycy9wYXJ1bHZlcm1hL0RvY3VtZW50cy91bnRpdGxlZCBmb2xkZXIvY2RzbXJhaS1ob3NwaXRhbC9zcmMvYXBwL2NvcmUvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxvQkFBQTtBQ0FKOztBREdBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUVtQks7RUZsQkwsaUJFeUNLO0VGeENMLGNBQUE7QUNBSjs7QURFQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtBQ0dKOztBRERBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDSUo7O0FERkE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDS0o7O0FERkE7RUFFSSxXQUFBO0FDSUo7O0FERkE7RUFDSSx3QkFBQTtBQ0tKOztBREZBO0VBQ0ksWUFBQTtBQ0tKOztBREhBO0VBQ0ksYUFBQTtBQ01KOztBREZJO0VBRUksa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDR1I7O0FEQUE7RUFDSTtJQUNJLGFBQUE7RUNHTjs7RURERTtJQUNJLGNBQUE7RUNJTjs7RURGRTtJQUNJLG9CQUFBO0lBRUosZUFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtFQ0lGOztFREZFO0lBQ0ksZUFBQTtFQ0tOOztFREhFO0lBQ0ksV0FBQTtJQUNBLG9CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7RUNNTjtBQUNGOztBREZBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDSUo7O0FEQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDR0o7O0FEQUE7RUFBbUIsY0FBQTtBQ0luQjs7QUVsSUE7RUFDSSx5QkFBQTtFQUNBLFNBQUE7QUZxSUo7O0FFbElBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBRnFJSjs7QUVwSUk7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUZzSVI7O0FFcklRO0VBRUksNEJBQUE7QUZzSVo7O0FFcklZO0VBQ0ksV0FBQTtBRnVJaEI7O0FFcElRO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUZzSVo7O0FFcklZO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FGdUloQjs7QUVuSUk7RUFDSSxVQUFBO0FGcUlSOztBRXBJUTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FGc0laOztBRXBJUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBRnNJWjs7QUVwSVk7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FGc0loQjs7QUVwSVk7RUFDSSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUZzSWhCOztBRXBJWTtFQUNJLGdCQUFBO0FGc0loQjs7QUVuSVk7O0VBRUksVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBRnFJaEI7O0FFbElRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRm9JWjs7QUVsSVk7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUZvSWhCOztBRTlIQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBRmlJSjs7QUU5SEE7RUFDSSxhQUFBO0FGaUlKOztBRTlIQTtFQUNJO0lBRUksVUFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLE9BQUE7SUFDQSxjQUFBO0VGZ0lOOztFRTlIRTtJQUNJLGtCQUFBO0VGaUlOOztFRS9IRTtJQUNJLFVBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0VGa0lOO0FBQ0Y7O0FFL0hBO0VBQ0k7SUFDSSxlQUFBO0VGaUlOOztFRS9IRTtJQUNJLGNBQUE7SUFDQSw2REFBQTtJQUNBLDRCQUFBO0lBQ0Esc0JBQUE7SUFDQSxhQUFBO0VGa0lOO0VFaklNO0lBQ0ksV0FBQTtFRm1JVjtFRWxJVTtJQUNJLGFBQUE7SUFDQSx1QkFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7RUZvSWQ7RUVsSVU7SUFDSSxXQUFBO0VGb0lkO0VFbkljO0lBQ0ksVUFBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7SUFFQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RUZvSWxCO0VFaElNO0lBQ0ksV0FBQTtFRmtJVjtFRWpJVTtJQUNJLG1CQUFBO0lBQ0EsOENBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0EsU0FBQTtJQUNBLDRCQUFBO0lBQ0EsVUFBQTtFRm1JZDtFRWpJVTtJQUNJLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFRm1JZDtFRWpJYztJQUNJLFNBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUZtSWxCO0VFakljO0lBQ0ksa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFRm1JbEI7RUVqSWM7SUFDSSxnQkFBQTtFRm1JbEI7RUVoSWM7O0lBRUksVUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFRmtJbEI7RUUvSFU7SUFDSSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLHFCQUFBO0VGaUlkO0VFOUhVO0lBQ0ksOEJBQUE7SUFDQSxhQUFBO0VGZ0lkO0VFL0hjO0lBQ0ksZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EscUJBQUE7RUZpSWxCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi92YXJpYWJsZS5zY3NzJztcclxuKntcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG59XHJcblxyXG4uY29tbWFuX2hlYWRpbmd7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6ICRmb250NTY7XHJcbiAgICBsaW5lLWhlaWdodDogJGxpbmU4NDtcclxuICAgIGNvbG9yOiAjMzM3Qjk0O1xyXG59XHJcbi5jb21tYW5faGVhZGluZ3RleHR7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLmNvbW1vbl9idXR0b257XHJcbiAgICB3aWR0aDogMTU4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzU3Qzk1O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxNnB4IHJnYigwIDAgMCAvIDI1JSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDE4cHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmlwYWR2aWV3e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uZmxleHNie1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uY29udGFpbmVyZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgXHJcbn1cclxuLnJpZ2h0c2lkZS1sYXlvdXR7XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5zZXR0aW5nX2l0ZW17XHJcbiAgICBwYWRkaW5nOiAwcHggNDVweCAwIDM3cHg7XHJcbn1cclxuXHJcbi5sZWZ0c2lkZWJhcntcclxuICAgIHdpZHRoOjI4NXB4O1xyXG59XHJcbi5wcm9kdWN0bGlzdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAvLyBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIC5wcm9kdWN0TmFtZXtcclxuICAgICAgICAvLyB3aWR0aDogMjMlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTRweCAjODA4MDgwYjg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgIC5kZWtzdG9wdmlld3tcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmlwYWR2aWV3e1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmNvbW1hbl9oZWFkaW5ne1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgY29sb3I6ICMzNTdDOTU7XHJcbiAgICB9XHJcbiAgICAuY29tbWFuX2hlYWRpbmd0ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICAgIC5jb21tb25fYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4uZm9ybS1ncm91cCAuaW52YWxpZC1mZWVkYmFja3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gICBcclxufVxyXG5cclxuLmludmFsaWR7XHJcbiAgICBjb2xvcjogI0ZCM0Y0QTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5pbnZhbGlkLWZlZWRiYWNreyBkaXNwbGF5OiBibG9jazsgfSIsIioge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbn1cblxuLmNvbW1hbl9oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiA1NnB4O1xuICBsaW5lLWhlaWdodDogODRweDtcbiAgY29sb3I6ICMzMzdCOTQ7XG59XG5cbi5jb21tYW5faGVhZGluZ3RleHQge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmNvbW1vbl9idXR0b24ge1xuICB3aWR0aDogMTU4cHg7XG4gIGJhY2tncm91bmQ6ICMzNTdDOTU7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAxOHB4IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmlwYWR2aWV3IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZsZXhzYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNvbnRhaW5lcmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTQ0MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5yaWdodHNpZGUtbGF5b3V0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZXR0aW5nX2l0ZW0ge1xuICBwYWRkaW5nOiAwcHggNDVweCAwIDM3cHg7XG59XG5cbi5sZWZ0c2lkZWJhciB7XG4gIHdpZHRoOiAyODVweDtcbn1cblxuLnByb2R1Y3RsaXN0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wcm9kdWN0bGlzdCAucHJvZHVjdE5hbWUge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDE0cHggIzgwODA4MGI4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZGVrc3RvcHZpZXcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuaXBhZHZpZXcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmNvbW1hbl9oZWFkaW5nIHtcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgY29sb3I6ICMzNTdDOTU7XG4gIH1cblxuICAuY29tbWFuX2hlYWRpbmd0ZXh0IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAuY29tbW9uX2J1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICB9XG59XG4uZm9ybS1ncm91cCAuaW52YWxpZC1mZWVkYmFjayB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMTVweDtcbiAgbWFyZ2luLXRvcDogLTFweDtcbn1cblxuLmludmFsaWQge1xuICBjb2xvcjogI0ZCM0Y0QTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaW52YWxpZC1mZWVkYmFjayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW52YWxpZC1kYW5nZXIge1xuICBjb2xvcjogI0ZCM0Y0QSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG59XG5cbi5jb250YWluZXJEaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogMTAwdmg7XG4gIG1heC13aWR0aDogMTQ0MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uY29udGFpbmVyRGl2IC5kZXNrX2xlZnRzY3JlZW4ge1xuICB3aWR0aDogNTAlO1xuICBiYWNrZ3JvdW5kOiAjRjlGOUY5O1xufVxuLmNvbnRhaW5lckRpdiAuZGVza19sZWZ0c2NyZWVuIC5sb2dvIHtcbiAgcGFkZGluZzogMTVweCA3MnB4IDE1cHggMzRweDtcbn1cbi5jb250YWluZXJEaXYgLmRlc2tfbGVmdHNjcmVlbiAubG9nbyBpbWcge1xuICB3aWR0aDogOXJlbTtcbn1cbi5jb250YWluZXJEaXYgLmRlc2tfbGVmdHNjcmVlbiAubGVmdG1hbl9pY29uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250YWluZXJEaXYgLmRlc2tfbGVmdHNjcmVlbiAubGVmdG1hbl9pY29uIC5kZXNraW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNzBweDtcbn1cbi5jb250YWluZXJEaXYgLmRlc2tfcmlnaHRzY3JlZW4ge1xuICB3aWR0aDogNTAlO1xufVxuLmNvbnRhaW5lckRpdiAuZGVza19yaWdodHNjcmVlbiAubG9naW5ib3gge1xuICB3aWR0aDogNjAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDEyJTtcbiAgdG9wOiAxMDBweDtcbn1cbi5jb250YWluZXJEaXYgLmRlc2tfcmlnaHRzY3JlZW4gLmZsb2F0aW5nLWxhYmVsLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmNvbnRhaW5lckRpdiAuZGVza19yaWdodHNjcmVlbiAuZmxvYXRpbmctbGFiZWwtZ3JvdXAgLmZsb2F0aW5nLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdG9wOiA1cmVtO1xuICBsZWZ0OiAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogI0IyQjNCRDtcbn1cbi5jb250YWluZXJEaXYgLmRlc2tfcmlnaHRzY3JlZW4gLmZsb2F0aW5nLWxhYmVsLWdyb3VwIGlucHV0IHtcbiAgYm9yZGVyOiBuYXZham93aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgIzM1N0M5NTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDdweCAwO1xuICBtYXJnaW4tdG9wOiA0cmVtO1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBjb2xvcjogIzc1NzU3NTtcbn1cbi5jb250YWluZXJEaXYgLmRlc2tfcmlnaHRzY3JlZW4gLmZsb2F0aW5nLWxhYmVsLWdyb3VwIGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZS13aWR0aDogMDtcbn1cbi5jb250YWluZXJEaXYgLmRlc2tfcmlnaHRzY3JlZW4gLmZsb2F0aW5nLWxhYmVsLWdyb3VwIGlucHV0OmZvY3VzIH4gLmZsb2F0aW5nLWxhYmVsLFxuLmNvbnRhaW5lckRpdiAuZGVza19yaWdodHNjcmVlbiAuZmxvYXRpbmctbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpmb2N1cyk6dmFsaWQgfiAuZmxvYXRpbmctbGFiZWwge1xuICB0b3A6IC0xNXB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogI0IyQjNCRDtcbn1cbi5jb250YWluZXJEaXYgLmRlc2tfcmlnaHRzY3JlZW4gLmJ1dHRvbmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjhweDtcbn1cbi5jb250YWluZXJEaXYgLmRlc2tfcmlnaHRzY3JlZW4gLmJ1dHRvbmRpdiAuYnV0dG9udGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjMUY0MTY3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb3Jnb3R0IHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgY29sb3I6ICMxRjQxNjc7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxlZnRncmV5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAubGVmdGdyZXkge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5sb2dvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuY29udGFpbmVyRGl2IC5kZXNrX3JpZ2h0c2NyZWVuIC5sb2dpbmJveCB7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMjAlO1xuICAgIHRvcDogMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaW52YWxpZCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgLmNvbnRhaW5lckRpdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9tb2JpbGUvYmFja2dyb3VuZF9tb2JpbGUuc3ZnXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDgxMnB4O1xuICB9XG4gIC5jb250YWluZXJEaXYgLmRlc2tfbGVmdHNjcmVlbiB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgLmNvbnRhaW5lckRpdiAuZGVza19sZWZ0c2NyZWVuIC5sb2dvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjVweCAwO1xuICB9XG4gIC5jb250YWluZXJEaXYgLmRlc2tfbGVmdHNjcmVlbiAubGVmdG1hbl9pY29uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY29udGFpbmVyRGl2IC5kZXNrX2xlZnRzY3JlZW4gLmxlZnRtYW5faWNvbiAud2VsY29tZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgIGNvbG9yOiAjMzU3Qzk1O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgLmNvbnRhaW5lckRpdiAuZGVza19yaWdodHNjcmVlbiB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgLmNvbnRhaW5lckRpdiAuZGVza19yaWdodHNjcmVlbiAubG9naW5ib3gge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMHB4IDIwcHggMTAwcHggcmdiYSgwLCAwLCAwLCAwLjE3KTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogNDBweDtcbiAgICBwYWRkaW5nOiA0MHB4IDMycHggNTJweCAzMXB4O1xuICAgIGxlZnQ6IGF1dG87XG4gIH1cbiAgLmNvbnRhaW5lckRpdiAuZGVza19yaWdodHNjcmVlbiAuZmxvYXRpbmctbGFiZWwtZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICAuY29udGFpbmVyRGl2IC5kZXNrX3JpZ2h0c2NyZWVuIC5mbG9hdGluZy1sYWJlbC1ncm91cCAuZmxvYXRpbmctbGFiZWwge1xuICAgIHRvcDogMnJlbTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIH1cbiAgLmNvbnRhaW5lckRpdiAuZGVza19yaWdodHNjcmVlbiAuZmxvYXRpbmctbGFiZWwtZ3JvdXAgaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgfVxuICAuY29udGFpbmVyRGl2IC5kZXNrX3JpZ2h0c2NyZWVuIC5mbG9hdGluZy1sYWJlbC1ncm91cCBpbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZS13aWR0aDogMDtcbiAgfVxuICAuY29udGFpbmVyRGl2IC5kZXNrX3JpZ2h0c2NyZWVuIC5mbG9hdGluZy1sYWJlbC1ncm91cCBpbnB1dDpmb2N1cyB+IC5mbG9hdGluZy1sYWJlbCxcbi5jb250YWluZXJEaXYgLmRlc2tfcmlnaHRzY3JlZW4gLmZsb2F0aW5nLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6Zm9jdXMpOnZhbGlkIH4gLmZsb2F0aW5nLWxhYmVsIHtcbiAgICB0b3A6IC0yMnB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgfVxuICAuY29udGFpbmVyRGl2IC5kZXNrX3JpZ2h0c2NyZWVuIC5mb3Jnb3R0IHtcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgY29sb3I6ICM5RjlGOUY7XG4gICAgbWFyZ2luLWJvdHRvbTogMjNweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgLmNvbnRhaW5lckRpdiAuZGVza19yaWdodHNjcmVlbiAuYnV0dG9uZGl2IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICAuY29udGFpbmVyRGl2IC5kZXNrX3JpZ2h0c2NyZWVuIC5idXR0b25kaXYgLmJ1dHRvbnRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICMzNTdDOTU7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDMxcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufSIsIiRmb250MTogMTBweDtcclxuJGZvbnQyOiAxM3B4O1xyXG4kZm9udDM6IDE0cHg7XHJcbiRmb250NDogMTVweDtcclxuJGZvbnQ1OiAxNnB4O1xyXG4kZm9udDY6IDE4cHg7XHJcbiRmb250NzogMjBweDtcclxuJGZvbnQ4OiAyMnB4O1xyXG4kZm9udDk6IDI2cHg7XHJcbiRmb250MTA6IDMwcHg7XHJcbiRmb250MTE6IDM2cHg7XHJcbiRmb250MTI6IDQwcHg7XHJcbiRmb250MTM6IDQ1cHg7XHJcbiRmb250MTQ6IDUwcHg7XHJcblxyXG4vL0ZPTlRTXHJcbi8vJGZvbnQxMTogMTFweDtcclxuJGZvbnQxNTogMTVweDtcclxuJGZvbnQxNjogMTZweDtcclxuJGZvbnQxODogMThweDtcclxuJGZvbnQyMDogMjBweDtcclxuJGZvbnQyMjogMjJweDtcclxuJGZvbnQyNjogMjZweDtcclxuJGZvbnQ1MDogMzBweDtcclxuJGZvbnQzNjogMzZweDtcclxuJGZvbnQ0MDogNDBweDtcclxuJGZvbnQ0NTogNDVweDtcclxuJGZvbnQ1NTogNTVweDtcclxuJGZvbnQ1NjogNTZweDtcclxuJGZvbnQ2MDogNjBweDtcclxuXHJcbi8vIGZvbnRcclxuJGZvbnQwNzogMC43dnc7XHJcbiRmb250MDg6IDAuOHZ3O1xyXG4kZm9udDEwMTogMXZ3O1xyXG4kZm9udDExMjogMS4ydnc7XHJcbiRmb250MTEzOiAxLjN2dztcclxuJGZvbnQxMTU6IDEuNXZ3O1xyXG4kZm9udDEwMjogMnZ3O1xyXG4kZm9udDEyNTogMi41dnc7XHJcbiRmb250MTAzOiAzdnc7XHJcbiRmb250MTA0OiA0dnc7XHJcbiRmb250MTA1OiA1dnc7XHJcblxyXG4vLyAkZm9udDExMDoydnc7XHJcblxyXG4vL0xJTkUgSEVJR0hUU1xyXG4kbGluZTEyOiAxMnB4O1xyXG4kbGluZTM0OiAzNHB4O1xyXG4kbGluZTQ0OiA0NHB4O1xyXG4kbGluZTY5OiA2OXB4O1xyXG4kbGluZTg0OiA4NHB4O1xyXG5cclxuLy9MRVRURVIgU1BBQ0lOR1NcclxuJGxldHRlcjE6IDFweDtcclxuJGxldHRlcjI6IDEuNXB4O1xyXG4kbGV0dGVyMzogMnB4O1xyXG4kbGV0dGVyNDogMi41cHg7XHJcbiRsZXR0ZXI1OiA0cHg7XHJcbiRsZXR0ZXI2OiA2cHg7XHJcbiRsZXR0ZXI3OiA4cHg7XHJcbiIsIlxuQGltcG9ydCAnLi4vLi4vLi4vLi4vc2hhcmVkL3N0eWxlL2dsb2JhbC5zY3NzJzsgXG4vLyBAaW1wb3J0OiBgZ2xvYmFsLnNjc3NgO1xuXG4uaW52YWxpZC1kYW5nZXJ7XG4gICAgY29sb3I6ICNGQjNGNEEgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDA7XG5cbn1cbi5jb250YWluZXJEaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgLmRlc2tfbGVmdHNjcmVlbntcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZDogI0Y5RjlGOTtcbiAgICAgICAgLmxvZ297XG4gICAgICAgICAgICAvLyBtYXJnaW46IDQzcHggNzNweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggNzJweCAxNXB4IDM0cHg7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDlyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmxlZnRtYW5faWNvbntcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIC5kZXNraW1hZ2V7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHRvcCA6IDcwcHhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuZGVza19yaWdodHNjcmVlbntcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgLmxvZ2luYm94e1xuICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGxlZnQ6IDEyJTtcbiAgICAgICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZsb2F0aW5nLWxhYmVsLWdyb3VwIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICBcbiAgICAgICAgICAgIC5mbG9hdGluZy1sYWJlbCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgIHRvcDogNXJlbTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNCMkIzQkQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5hdmFqb3doaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkICMzNTdDOTU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogN3B4IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM3NTc1NzU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICAgICAgb3V0bGluZS13aWR0aDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXQ6Zm9jdXMgfiAuZmxvYXRpbmctbGFiZWwsXG4gICAgICAgICAgICBpbnB1dDpub3QoOmZvY3VzKTp2YWxpZCB+IC5mbG9hdGluZy1sYWJlbCB7XG4gICAgICAgICAgICAgICAgdG9wOiAtMTVweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjQjJCM0JEO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5idXR0b25kaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XG5cbiAgICAgICAgICAgIC5idXR0b250ZXh0e1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzFGNDE2NztcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5mb3Jnb3R0e1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiAjMUY0MTY3O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxufVxuLmxlZnRncmV5e1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYShtaW4td2lkdGg6MTQ0MHB4KXtcbiAgICAubGVmdGdyZXl7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDsgIFxuICAgICAgICBkaXNwbGF5OiBibG9jazsgIFxuICAgIH1cbiAgICAubG9nb3tcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAuY29udGFpbmVyRGl2IC5kZXNrX3JpZ2h0c2NyZWVuIC5sb2dpbmJveHtcbiAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiAyMCU7XG4gICAgICAgIHRvcDogMTAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOjc2OHB4KXtcbiAgICAuaW52YWxpZHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbiAgICAuY29udGFpbmVyRGl2e1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL21vYmlsZS9iYWNrZ3JvdW5kX21vYmlsZS5zdmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgaGVpZ2h0OiA4MTJweDtcbiAgICAgICAgLmRlc2tfbGVmdHNjcmVlbntcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgLmxvZ297XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sZWZ0bWFuX2ljb257XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgLndlbGNvbWV7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzU3Qzk1O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZGVza19yaWdodHNjcmVlbntcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgLmxvZ2luYm94e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDIwcHggMTAwcHggcmdiKDAgMCAwIC8gMTclKTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIHRvcDogNDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDMycHggNTJweCAzMXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6YXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mbG9hdGluZy1sYWJlbC1ncm91cCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLmZsb2F0aW5nLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAycmVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbnB1dHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmUtd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGlucHV0OmZvY3VzIH4gLmZsb2F0aW5nLWxhYmVsLFxuICAgICAgICAgICAgICAgIGlucHV0Om5vdCg6Zm9jdXMpOnZhbGlkIH4gLmZsb2F0aW5nLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMjJweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9yZ290dHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5RjlGOUY7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjNweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5idXR0b25kaXZ7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgLmJ1dHRvbnRleHR7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzU3Qzk1O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMXB4O1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/core-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/core/core-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication */ "./src/app/core/authentication/index.ts");





const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: "login", component: _authentication__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
];
class CoreRoutingModule {
}
CoreRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreRoutingModule });
CoreRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreRoutingModule_Factory(t) { return new (t || CoreRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core-routing.module */ "./src/app/core/core-routing.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication */ "./src/app/core/authentication/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./left-sidebar/left-sidebar.component */ "./src/app/core/left-sidebar/left-sidebar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authentication/login/login.component */ "./src/app/core/authentication/login/login.component.ts");











class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _core_routing_module__WEBPACK_IMPORTED_MODULE_2__["CoreRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["LeftSidebarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _core_routing_module__WEBPACK_IMPORTED_MODULE_2__["CoreRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["LeftSidebarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], ..._authentication__WEBPACK_IMPORTED_MODULE_4__["components"], _left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["LeftSidebarComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _core_routing_module__WEBPACK_IMPORTED_MODULE_2__["CoreRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]
                ],
                exports: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                    _left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["LeftSidebarComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service.service */ "./src/app/core/service.service.ts");



class HeaderComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.headerString.subscribe(val => {
            // console.log(val);
            if (val == '/dashboard') {
                this.headerValue = 'Dashboard';
            }
            if (val == '/dashboard/ward') {
                this.headerValue = 'Ward';
            }
            if (val == '/dashboard/registration') {
                this.headerValue = 'Registration';
            }
        }, err => {
            console.log(err);
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 5, vars: 1, consts: [[1, "conatinerDiv"], [1, "namediv"], [1, "buttondiv_search"], [1, "header_heading"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headerValue);
    } }, styles: ["*[_ngcontent-%COMP%] {\n  font-family: Poppins;\n}\n\n.comman_heading[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 56px;\n  line-height: 84px;\n  color: #337B94;\n}\n\n.comman_headingtext[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  color: #000000;\n}\n\n.common_button[_ngcontent-%COMP%] {\n  width: 158px;\n  background: #357C95;\n  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);\n  border-radius: 16px;\n  font-family: \"Inter\", sans-serif;\n  padding: 18px 0;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  color: #FFFFFF;\n  cursor: pointer;\n  border: none;\n  outline: none;\n}\n\n.ipadview[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.flexsb[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.containerdiv[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 1440px;\n  margin: auto;\n}\n\n.rightside-layout[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.setting_item[_ngcontent-%COMP%] {\n  padding: 0px 45px 0 37px;\n}\n\n.leftsidebar[_ngcontent-%COMP%] {\n  width: 285px;\n}\n\n.productlist[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.productlist[_ngcontent-%COMP%]   .productName[_ngcontent-%COMP%] {\n  box-shadow: 3px 3px 14px #808080b8;\n  border-radius: 10px;\n  font-size: 16px;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  text-align: center;\n  cursor: pointer;\n  height: 100px;\n  display: flex;\n  align-items: center;\n}\n\n@media (max-width: 768px) {\n  .dekstopview[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .ipadview[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .comman_heading[_ngcontent-%COMP%] {\n    font-family: Poppins;\n    font-size: 24px;\n    line-height: 36px;\n    color: #357C95;\n  }\n\n  .comman_headingtext[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n\n  .common_button[_ngcontent-%COMP%] {\n    width: 100%;\n    font-family: Poppins;\n    font-weight: 100;\n    font-size: 18px;\n    line-height: 16px;\n    text-align: center;\n    color: #FFFFFF;\n  }\n}\n\n.form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  position: absolute;\n  top: 100%;\n  left: 15px;\n  margin-top: -1px;\n}\n\n.invalid[_ngcontent-%COMP%] {\n  color: #FB3F4A;\n  position: absolute;\n  margin-top: 10px;\n  font-family: Poppins;\n  font-weight: 100;\n  font-size: 16px;\n}\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.header_heading[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 28px;\n  display: flex;\n  align-items: center;\n  color: #000000;\n  padding: 78px 45px 0px 37px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXJ1bHZlcm1hL0RvY3VtZW50cy91bnRpdGxlZCBmb2xkZXIvY2RzbXJhaS1ob3NwaXRhbC9zcmMvc2hhcmVkL3N0eWxlL2dsb2JhbC5zY3NzIiwic3JjL2FwcC9jb3JlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvcGFydWx2ZXJtYS9Eb2N1bWVudHMvdW50aXRsZWQgZm9sZGVyL2Nkc21yYWktaG9zcGl0YWwvc3JjL3NoYXJlZC9zdHlsZS92YXJpYWJsZS5zY3NzIiwiL1VzZXJzL3BhcnVsdmVybWEvRG9jdW1lbnRzL3VudGl0bGVkIGZvbGRlci9jZHNtcmFpLWhvc3BpdGFsL3NyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksb0JBQUE7QUNBSjs7QURHQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVFbUJLO0VGbEJMLGlCRXlDSztFRnhDTCxjQUFBO0FDQUo7O0FERUE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNFSjs7QURBQTtFQUNJLGFBQUE7QUNHSjs7QUREQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ0lKOztBREZBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0tKOztBREZBO0VBRUksV0FBQTtBQ0lKOztBREZBO0VBQ0ksd0JBQUE7QUNLSjs7QURGQTtFQUNJLFlBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7QUNNSjs7QURGSTtFQUVJLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0dSOztBREFBO0VBQ0k7SUFDSSxhQUFBO0VDR047O0VEREU7SUFDSSxjQUFBO0VDSU47O0VERkU7SUFDSSxvQkFBQTtJQUVKLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7RUNJRjs7RURGRTtJQUNJLGVBQUE7RUNLTjs7RURIRTtJQUNJLFdBQUE7SUFDQSxvQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VDTU47QUFDRjs7QURGQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0dKOztBREFBO0VBQW1CLGNBQUE7QUNJbkI7O0FFbElBO0VBRUksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBRm9JSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vdmFyaWFibGUuc2Nzcyc7XHJcbip7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxufVxyXG5cclxuLmNvbW1hbl9oZWFkaW5ne1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAkZm9udDU2O1xyXG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lODQ7XHJcbiAgICBjb2xvcjogIzMzN0I5NDtcclxufVxyXG4uY29tbWFuX2hlYWRpbmd0ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5jb21tb25fYnV0dG9ue1xyXG4gICAgd2lkdGg6IDE1OHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzM1N0M5NTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTZweCByZ2IoMCAwIDAgLyAyNSUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5pcGFkdmlld3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmZsZXhzYntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmNvbnRhaW5lcmRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIFxyXG59XHJcbi5yaWdodHNpZGUtbGF5b3V0e1xyXG4gICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uc2V0dGluZ19pdGVte1xyXG4gICAgcGFkZGluZzogMHB4IDQ1cHggMCAzN3B4O1xyXG59XHJcblxyXG4ubGVmdHNpZGViYXJ7XHJcbiAgICB3aWR0aDoyODVweDtcclxufVxyXG4ucHJvZHVjdGxpc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLy8gZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAucHJvZHVjdE5hbWV7XHJcbiAgICAgICAgLy8gd2lkdGg6IDIzJTtcclxuICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDE0cHggIzgwODA4MGI4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAuZGVrc3RvcHZpZXd7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5pcGFkdmlld3tcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5jb21tYW5faGVhZGluZ3tcclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIGNvbG9yOiAjMzU3Qzk1O1xyXG4gICAgfVxyXG4gICAgLmNvbW1hbl9oZWFkaW5ndGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuY29tbW9uX2J1dHRvbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgLmludmFsaWQtZmVlZGJhY2t7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgXHJcbn1cclxuXHJcbi5pbnZhbGlke1xyXG4gICAgY29sb3I6ICNGQjNGNEE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uaW52YWxpZC1mZWVkYmFja3sgZGlzcGxheTogYmxvY2s7IH0iLCIqIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG59XG5cbi5jb21tYW5faGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogNTZweDtcbiAgbGluZS1oZWlnaHQ6IDg0cHg7XG4gIGNvbG9yOiAjMzM3Qjk0O1xufVxuXG4uY29tbWFuX2hlYWRpbmd0ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5jb21tb25fYnV0dG9uIHtcbiAgd2lkdGg6IDE1OHB4O1xuICBiYWNrZ3JvdW5kOiAjMzU3Qzk1O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMThweCAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5pcGFkdmlldyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mbGV4c2Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jb250YWluZXJkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucmlnaHRzaWRlLWxheW91dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2V0dGluZ19pdGVtIHtcbiAgcGFkZGluZzogMHB4IDQ1cHggMCAzN3B4O1xufVxuXG4ubGVmdHNpZGViYXIge1xuICB3aWR0aDogMjg1cHg7XG59XG5cbi5wcm9kdWN0bGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucHJvZHVjdGxpc3QgLnByb2R1Y3ROYW1lIHtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxNHB4ICM4MDgwODBiODtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmRla3N0b3B2aWV3IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmlwYWR2aWV3IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5jb21tYW5faGVhZGluZyB7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgIGNvbG9yOiAjMzU3Qzk1O1xuICB9XG5cbiAgLmNvbW1hbl9oZWFkaW5ndGV4dCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgLmNvbW1vbl9idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgfVxufVxuLmZvcm0tZ3JvdXAgLmludmFsaWQtZmVlZGJhY2sge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG59XG5cbi5pbnZhbGlkIHtcbiAgY29sb3I6ICNGQjNGNEE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmludmFsaWQtZmVlZGJhY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmhlYWRlcl9oZWFkaW5nIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmc6IDc4cHggNDVweCAwcHggMzdweDtcbn0iLCIkZm9udDE6IDEwcHg7XHJcbiRmb250MjogMTNweDtcclxuJGZvbnQzOiAxNHB4O1xyXG4kZm9udDQ6IDE1cHg7XHJcbiRmb250NTogMTZweDtcclxuJGZvbnQ2OiAxOHB4O1xyXG4kZm9udDc6IDIwcHg7XHJcbiRmb250ODogMjJweDtcclxuJGZvbnQ5OiAyNnB4O1xyXG4kZm9udDEwOiAzMHB4O1xyXG4kZm9udDExOiAzNnB4O1xyXG4kZm9udDEyOiA0MHB4O1xyXG4kZm9udDEzOiA0NXB4O1xyXG4kZm9udDE0OiA1MHB4O1xyXG5cclxuLy9GT05UU1xyXG4vLyRmb250MTE6IDExcHg7XHJcbiRmb250MTU6IDE1cHg7XHJcbiRmb250MTY6IDE2cHg7XHJcbiRmb250MTg6IDE4cHg7XHJcbiRmb250MjA6IDIwcHg7XHJcbiRmb250MjI6IDIycHg7XHJcbiRmb250MjY6IDI2cHg7XHJcbiRmb250NTA6IDMwcHg7XHJcbiRmb250MzY6IDM2cHg7XHJcbiRmb250NDA6IDQwcHg7XHJcbiRmb250NDU6IDQ1cHg7XHJcbiRmb250NTU6IDU1cHg7XHJcbiRmb250NTY6IDU2cHg7XHJcbiRmb250NjA6IDYwcHg7XHJcblxyXG4vLyBmb250XHJcbiRmb250MDc6IDAuN3Z3O1xyXG4kZm9udDA4OiAwLjh2dztcclxuJGZvbnQxMDE6IDF2dztcclxuJGZvbnQxMTI6IDEuMnZ3O1xyXG4kZm9udDExMzogMS4zdnc7XHJcbiRmb250MTE1OiAxLjV2dztcclxuJGZvbnQxMDI6IDJ2dztcclxuJGZvbnQxMjU6IDIuNXZ3O1xyXG4kZm9udDEwMzogM3Z3O1xyXG4kZm9udDEwNDogNHZ3O1xyXG4kZm9udDEwNTogNXZ3O1xyXG5cclxuLy8gJGZvbnQxMTA6MnZ3O1xyXG5cclxuLy9MSU5FIEhFSUdIVFNcclxuJGxpbmUxMjogMTJweDtcclxuJGxpbmUzNDogMzRweDtcclxuJGxpbmU0NDogNDRweDtcclxuJGxpbmU2OTogNjlweDtcclxuJGxpbmU4NDogODRweDtcclxuXHJcbi8vTEVUVEVSIFNQQUNJTkdTXHJcbiRsZXR0ZXIxOiAxcHg7XHJcbiRsZXR0ZXIyOiAxLjVweDtcclxuJGxldHRlcjM6IDJweDtcclxuJGxldHRlcjQ6IDIuNXB4O1xyXG4kbGV0dGVyNTogNHB4O1xyXG4kbGV0dGVyNjogNnB4O1xyXG4kbGV0dGVyNzogOHB4O1xyXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9zaGFyZWQvc3R5bGUvZ2xvYmFsLnNjc3MnO1xuXG5cblxuLmhlYWRlcl9oZWFkaW5ne1xuICAgIC8vIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgcGFkZGluZzogNzhweCA0NXB4IDBweCAzN3B4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/interceptor.interceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/core/interceptor.interceptor.ts ***!
  \*************************************************/
/*! exports provided: InterceptorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorInterceptor", function() { return InterceptorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service.service */ "./src/app/core/service.service.ts");




class InterceptorInterceptor {
    constructor(service) {
        this.service = service;
    }
    intercept(request, next) {
        // add auth header with jwt if account is logged in and request is to the api url
        const account = localStorage.getItem("token");
        const isLoggedIn = account;
        const isApiUrl = request.url.startsWith(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: { authorization: `${account}` }
            });
        }
        return next.handle(request);
    }
}
InterceptorInterceptor.ɵfac = function InterceptorInterceptor_Factory(t) { return new (t || InterceptorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"])); };
InterceptorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InterceptorInterceptor, factory: InterceptorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterceptorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/left-sidebar/left-sidebar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/left-sidebar/left-sidebar.component.ts ***!
  \*************************************************************/
/*! exports provided: LeftSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftSidebarComponent", function() { return LeftSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service.service */ "./src/app/core/service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0) { return { "active": a0 }; };
class LeftSidebarComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
    }
    ngOnInit() {
        this.service.headerString.subscribe(val => {
            console.log(val);
            if (val == '/dashboard') {
                this.headerValue = 'Dashboard';
            }
            if (val == '/dashboard/ward') {
                this.headerValue = 'Ward';
            }
            if (val == '/dashboard/registration') {
                this.headerValue = 'Registration';
            }
        });
    }
    openModal() { }
}
LeftSidebarComponent.ɵfac = function LeftSidebarComponent_Factory(t) { return new (t || LeftSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"])); };
LeftSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeftSidebarComponent, selectors: [["app-left-sidebar"]], decls: 53, vars: 24, consts: [[1, "leftsidemenuDiv"], [1, "logodiv"], ["src", "../../../assets/logo.jpeg", "alt", ""], [1, "menudiv"], [1, "menu"], [3, "ngClass"], ["href", "javascript:void(#)"], [1, "spanimgclass"], ["src", "../../../assets/leftsidemenu/Activity.svg", "alt", ""], ["routerLink", "/dashboard/ward"], ["src", "../../../assets/leftsidemenu/Group 540.svg", "alt", ""], ["routerLink", "/dashboard/registration"], ["src", "../../../assets/leftsidemenu/Chart.svg", "alt", ""], ["routerLink", "/master/insurer"], ["routerLink", "/master/product"], ["routerLink", "/manage-clients/claims-manager"], ["routerLink", "/master/faqs"], ["routerLink", "/master/access-control"], [1, "blankborder"], [1, "logoutDiv"], [1, "logoutimg"], ["src", "../../../assets/leftsidemenu/avatar 1.svg", "alt", ""], [1, "logout", 3, "click"]], template: function LeftSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Ward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Insurers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Claims Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Settings and Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "FAQ'S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Access Control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftSidebarComponent_Template_div_click_51_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.headerValue == "Dashboard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.headerValue == "Ward"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.headerValue == "Registration"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.headerValue == "Insurer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.headerValue == "Products"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.headerValue == "Claims"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.headerValue == "faqs"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.headerValue == "accessControl"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".leftsidemenuDiv[_ngcontent-%COMP%]   .logodiv[_ngcontent-%COMP%] {\n  padding: 15px 72px 15px 34px;\n}\n.leftsidemenuDiv[_ngcontent-%COMP%]   .logodiv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n  height: 9rem;\n}\n.leftsidemenuDiv[_ngcontent-%COMP%]   .menudiv[_ngcontent-%COMP%] {\n  padding: 32px 20px 60px;\n}\n.leftsidemenuDiv[_ngcontent-%COMP%]   .menudiv[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.leftsidemenuDiv[_ngcontent-%COMP%]   .menudiv[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 16px 16px;\n}\n.leftsidemenuDiv[_ngcontent-%COMP%]   .menudiv[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  color: #808191;\n  text-decoration: none;\n}\n.leftsidemenuDiv[_ngcontent-%COMP%]   .menudiv[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .spanimgclass[_ngcontent-%COMP%] {\n  width: 18.36px;\n  height: 18.36px;\n}\n.leftsidemenuDiv[_ngcontent-%COMP%]   .menudiv[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .spanimgclass[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0px;\n  margin-right: 16px;\n}\n.leftsidemenuDiv[_ngcontent-%COMP%]   .menudiv[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: #347C94;\n  border-radius: 12px;\n}\n.leftsidemenuDiv[_ngcontent-%COMP%]   .menudiv[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n.leftsidemenuDiv[_ngcontent-%COMP%]   .blankborder[_ngcontent-%COMP%] {\n  margin: 32px 36px 40px;\n  background: #F0F3F6;\n  height: 2px;\n}\n.leftsidemenuDiv[_ngcontent-%COMP%]   .supportdiv[_ngcontent-%COMP%] {\n  margin: 40px;\n}\n.leftsidemenuDiv[_ngcontent-%COMP%]   .supportdiv[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n  color: #808191;\n}\n.leftsidemenuDiv[_ngcontent-%COMP%]   .supportdiv[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.leftsidemenuDiv[_ngcontent-%COMP%]   .supportdiv[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 16px 0px;\n}\n.leftsidemenuDiv[_ngcontent-%COMP%]   .supportdiv[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  color: #808191;\n  text-decoration: none;\n}\n.leftsidemenuDiv[_ngcontent-%COMP%]   .supportdiv[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .spanimgclass[_ngcontent-%COMP%] {\n  width: 18.36px;\n  height: 18.36px;\n}\n.leftsidemenuDiv[_ngcontent-%COMP%]   .supportdiv[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .spanimgclass[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0px;\n  margin-right: 16px;\n}\n.leftsidemenuDiv[_ngcontent-%COMP%]   .supportdiv[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  float: right;\n  background: #51C5A9;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  text-align: center;\n  color: #FFFFFF;\n  padding: 5px 6px;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n}\n.leftsidemenuDiv[_ngcontent-%COMP%]   .supportdiv[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: #347C94;\n  border-radius: 12px;\n}\n.leftsidemenuDiv[_ngcontent-%COMP%]   .supportdiv[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n.leftsidemenuDiv[_ngcontent-%COMP%]   .logoutDiv[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.leftsidemenuDiv[_ngcontent-%COMP%]   .logoutDiv[_ngcontent-%COMP%]   .logoutimg[_ngcontent-%COMP%] {\n  padding: 34px 0 34px 43px;\n}\n.leftsidemenuDiv[_ngcontent-%COMP%]   .logoutDiv[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  color: #11142D;\n  margin-left: 16px;\n  cursor: pointer;\n}\n.modal[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  padding: 67px 0 75px;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 36px;\n  \n  align-items: center;\n  color: #000000;\n  text-align: center;\n  width: 100%;\n}\n.modal[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: #337B94;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 27px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #FFFFFF;\n  \n  padding: 8px 60px;\n  cursor: pointer;\n}\n.modal[_ngcontent-%COMP%]   .white[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 27px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #337B94;\n  \n  padding: 8px 36px;\n  border: 1px solid #337B94;\n  margin-right: 23px;\n}\n.modal[_ngcontent-%COMP%]   .imgcross[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 22px;\n  top: 22px;\n}\n.modal[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 83px;\n}\n.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  border-radius: 28px;\n}\n.modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  max-width: 593px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXJ1bHZlcm1hL0RvY3VtZW50cy91bnRpdGxlZCBmb2xkZXIvY2RzbXJhaS1ob3NwaXRhbC9zcmMvYXBwL2NvcmUvbGVmdC1zaWRlYmFyL2xlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9sZWZ0LXNpZGViYXIvbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksNEJBQUE7QUNBUjtBRENRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDWjtBREVJO0VBQ0ksdUJBQUE7QUNBUjtBRENRO0VBQ0kscUJBQUE7QUNDWjtBREFZO0VBQ0ksa0JBQUE7QUNFaEI7QURBZ0I7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNFcEI7QUREb0I7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0d4QjtBREZ3QjtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FDSTVCO0FEQ1k7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0FDQ2hCO0FEQWdCO0VBQ0ksWUFBQTtBQ0VwQjtBREdJO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNEUjtBREdJO0VBQ0ksWUFBQTtBQ0RSO0FERVE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQVo7QURHUTtFQUNJLHFCQUFBO0FDRFo7QURFWTtFQUNJLGlCQUFBO0FDQWhCO0FERWdCO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDQXBCO0FEQ29CO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNDeEI7QURBd0I7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQ0U1QjtBREVnQjtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQXBCO0FER1k7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0FDRGhCO0FERWdCO0VBQ0ksWUFBQTtBQ0FwQjtBRE1JO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDSlI7QURLUTtFQUNJLHlCQUFBO0FDSFo7QURLUTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNIWjtBRFFJO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDTFI7QURRSTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDTlI7QURRSTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDTlI7QURRSTtFQUNJLGtCQUFBO0VBQ0osV0FBQTtFQUNBLFNBQUE7QUNOSjtBRFFJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNOUjtBRFFJO0VBQ0ksbUJBQUE7QUNOUjtBRFFJO0VBQ0ksZ0JBQUE7QUNOUiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGVmdC1zaWRlYmFyL2xlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWZ0c2lkZW1lbnVEaXZ7XG4gICAgLmxvZ29kaXZ7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggNzJweCAxNXB4IDM0cHg7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgaGVpZ2h0OiA5cmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5tZW51ZGl2e1xuICAgICAgICBwYWRkaW5nOiAzMnB4IDIwcHggNjBweDtcbiAgICAgICAgLm1lbnV7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICBsaXtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDE2cHg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYXtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4MDgxOTE7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgLnNwYW5pbWdjbGFzc3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOC4zNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOC4zNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWN0aXZle1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNDdDOTQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5ibGFua2JvcmRlcntcbiAgICAgICAgbWFyZ2luOiAzMnB4IDM2cHggNDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI0YwRjNGNjtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgfVxuICAgIC5zdXBwb3J0ZGl2e1xuICAgICAgICBtYXJnaW46IDQwcHg7XG4gICAgICAgIC5oZWFkaW5ne1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBjb2xvcjogIzgwODE5MTtcblxuICAgICAgICB9XG4gICAgICAgIC5tZW51e1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgbGl7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAwcHg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYXtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4MDgxOTE7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgLnNwYW5pbWdjbGFzc3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOC4zNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOC4zNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvdW50e1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1MUM1QTk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA2cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWN0aXZle1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNDdDOTQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgLmxvZ291dERpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLmxvZ291dGltZ3tcbiAgICAgICAgICAgIHBhZGRpbmc6IDM0cHggMCAzNHB4IDQzcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ291dHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICMxMTE0MkQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5tb2RhbHtcbiAgICAuaGVhZGVye1xuICAgICAgICBwYWRkaW5nOiA2N3B4IDAgNzVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmFjdGl2ZXtcbiAgICAgICAgYmFja2dyb3VuZDogIzMzN0I5NDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAvKiB3aWR0aDogMTcxcHg7ICovXG4gICAgICAgIHBhZGRpbmc6IDhweCA2MHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC53aGl0ZXtcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjMzM3Qjk0O1xuICAgICAgICAvKiB3aWR0aDogMTcxcHg7ICovXG4gICAgICAgIHBhZGRpbmc6IDhweCAzNnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzM3Qjk0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIzcHg7XG4gICAgfVxuICAgIC5pbWdjcm9zc3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMnB4O1xuICAgIHRvcDogMjJweDtcbiAgICB9XG4gICAgLmJ1dHRvbntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDgzcHg7XG4gICAgfVxuICAgIC5tb2RhbC1jb250ZW50e1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICAgIH1cbiAgICAubW9kYWwtZGlhbG9ne1xuICAgICAgICBtYXgtd2lkdGg6IDU5M3B4O1xuICAgIH1cbn0iLCIubGVmdHNpZGVtZW51RGl2IC5sb2dvZGl2IHtcbiAgcGFkZGluZzogMTVweCA3MnB4IDE1cHggMzRweDtcbn1cbi5sZWZ0c2lkZW1lbnVEaXYgLmxvZ29kaXYgaW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogOXJlbTtcbn1cbi5sZWZ0c2lkZW1lbnVEaXYgLm1lbnVkaXYge1xuICBwYWRkaW5nOiAzMnB4IDIwcHggNjBweDtcbn1cbi5sZWZ0c2lkZW1lbnVEaXYgLm1lbnVkaXYgLm1lbnUge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4ubGVmdHNpZGVtZW51RGl2IC5tZW51ZGl2IC5tZW51IGxpIHtcbiAgcGFkZGluZzogMTZweCAxNnB4O1xufVxuLmxlZnRzaWRlbWVudURpdiAubWVudWRpdiAubWVudSBsaSBhIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICM4MDgxOTE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5sZWZ0c2lkZW1lbnVEaXYgLm1lbnVkaXYgLm1lbnUgbGkgYSAuc3BhbmltZ2NsYXNzIHtcbiAgd2lkdGg6IDE4LjM2cHg7XG4gIGhlaWdodDogMTguMzZweDtcbn1cbi5sZWZ0c2lkZW1lbnVEaXYgLm1lbnVkaXYgLm1lbnUgbGkgYSAuc3BhbmltZ2NsYXNzIGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5sZWZ0c2lkZW1lbnVEaXYgLm1lbnVkaXYgLm1lbnUgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMzNDdDOTQ7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG4ubGVmdHNpZGVtZW51RGl2IC5tZW51ZGl2IC5tZW51IC5hY3RpdmUgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5sZWZ0c2lkZW1lbnVEaXYgLmJsYW5rYm9yZGVyIHtcbiAgbWFyZ2luOiAzMnB4IDM2cHggNDBweDtcbiAgYmFja2dyb3VuZDogI0YwRjNGNjtcbiAgaGVpZ2h0OiAycHg7XG59XG4ubGVmdHNpZGVtZW51RGl2IC5zdXBwb3J0ZGl2IHtcbiAgbWFyZ2luOiA0MHB4O1xufVxuLmxlZnRzaWRlbWVudURpdiAuc3VwcG9ydGRpdiAuaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGNvbG9yOiAjODA4MTkxO1xufVxuLmxlZnRzaWRlbWVudURpdiAuc3VwcG9ydGRpdiAubWVudSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5sZWZ0c2lkZW1lbnVEaXYgLnN1cHBvcnRkaXYgLm1lbnUgbGkge1xuICBwYWRkaW5nOiAxNnB4IDBweDtcbn1cbi5sZWZ0c2lkZW1lbnVEaXYgLnN1cHBvcnRkaXYgLm1lbnUgbGkgYSB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjODA4MTkxO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubGVmdHNpZGVtZW51RGl2IC5zdXBwb3J0ZGl2IC5tZW51IGxpIGEgLnNwYW5pbWdjbGFzcyB7XG4gIHdpZHRoOiAxOC4zNnB4O1xuICBoZWlnaHQ6IDE4LjM2cHg7XG59XG4ubGVmdHNpZGVtZW51RGl2IC5zdXBwb3J0ZGl2IC5tZW51IGxpIGEgLnNwYW5pbWdjbGFzcyBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4ubGVmdHNpZGVtZW51RGl2IC5zdXBwb3J0ZGl2IC5tZW51IGxpIC5jb3VudCB7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZDogIzUxQzVBOTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgcGFkZGluZzogNXB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuLmxlZnRzaWRlbWVudURpdiAuc3VwcG9ydGRpdiAubWVudSAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzM0N0M5NDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbi5sZWZ0c2lkZW1lbnVEaXYgLnN1cHBvcnRkaXYgLm1lbnUgLmFjdGl2ZSBhIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmxlZnRzaWRlbWVudURpdiAubG9nb3V0RGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sZWZ0c2lkZW1lbnVEaXYgLmxvZ291dERpdiAubG9nb3V0aW1nIHtcbiAgcGFkZGluZzogMzRweCAwIDM0cHggNDNweDtcbn1cbi5sZWZ0c2lkZW1lbnVEaXYgLmxvZ291dERpdiAubG9nb3V0IHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICMxMTE0MkQ7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tb2RhbCAuaGVhZGVyIHtcbiAgcGFkZGluZzogNjdweCAwIDc1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1vZGFsIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMzM3Qjk0O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIC8qIHdpZHRoOiAxNzFweDsgKi9cbiAgcGFkZGluZzogOHB4IDYwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tb2RhbCAud2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzMzdCOTQ7XG4gIC8qIHdpZHRoOiAxNzFweDsgKi9cbiAgcGFkZGluZzogOHB4IDM2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzdCOTQ7XG4gIG1hcmdpbi1yaWdodDogMjNweDtcbn1cbi5tb2RhbCAuaW1nY3Jvc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMnB4O1xuICB0b3A6IDIycHg7XG59XG4ubW9kYWwgLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA4M3B4O1xufVxuLm1vZGFsIC5tb2RhbC1jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcbn1cbi5tb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgbWF4LXdpZHRoOiA1OTNweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-left-sidebar',
                templateUrl: './left-sidebar.component.html',
                styleUrls: ['./left-sidebar.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/core/service.service.ts ***!
  \*****************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");


// import { ToastrService } from "ngx-toastr";





class ServiceService {
    constructor(router, spinner, 
    // private toastr: ToastrService,
    http) {
        this.router = router;
        this.spinner = spinner;
        this.http = http;
        this.userDetails = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.checkEmailForForgotPage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('No Email'); //  No Email is the initial value.
        this.headerString = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](''); //  '' is the initial value.
        this.pageNotfound = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false); //  '' is the initial value.
        this.spinnerProgressBar = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.policyBenefits = '';
        this.priceMatrix = '';
        this.accountSettings = '';
        this.productDetails = '';
        this.allgroupname = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]); //  '' is the initial value.
    }
    spinnerStart() {
        this.spinner.show();
    }
    spinnerClose() {
        this.spinner.hide();
    }
    login(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + "/admin/loginAdmin", data);
    }
    addWard(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + "/admin/createAndUpdateWard", data);
    }
    addAllWard() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + "/admin/getAllWards");
    }
    deleteWard(id) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + "/admin/deleteWardById", id);
    }
}
ServiceService.ɵfac = function ServiceService_Factory(t) { return new (t || ServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
ServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServiceService, factory: ServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

// import {A11yModule} from '@angular/cdk/a11y';
// import {ClipboardModule} from '@angular/cdk/clipboard';
// import {DragDropModule} from '@angular/cdk/drag-drop';
// import {PortalModule} from '@angular/cdk/portal';
// import {ScrollingModule} from '@angular/cdk/scrolling';
// import {CdkStepperModule} from '@angular/cdk/stepper';
// import {CdkTableModule} from '@angular/cdk/table';
// import {CdkTreeModule} from '@angular/cdk/tree';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import {MatBadgeModule} from '@angular/material/badge';
// import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
// import {MatButtonModule} from '@angular/material/button';
// import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import {MatCardModule} from '@angular/material/card';

// import {MatChipsModule} from '@angular/material/chips';
// import {MatStepperModule} from '@angular/material/stepper';

// import {MatDialogModule} from '@angular/material/dialog';
// import {MatDividerModule} from '@angular/material/divider';

// import {MatGridListModule} from '@angular/material/grid-list';























class DemoMaterialModule {
}
DemoMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DemoMaterialModule });
DemoMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DemoMaterialModule_Factory(t) { return new (t || DemoMaterialModule)(); }, imports: [
        // A11yModule,
        // ClipboardModule,
        // CdkStepperModule,
        // CdkTableModule,
        // CdkTreeModule,
        // DragDropModule,
        // MatAutocompleteModule,
        // MatBadgeModule,
        // MatBottomSheetModule,
        // MatButtonModule,
        // MatButtonToggleModule,
        // MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
        // MatChipsModule,
        // MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
        // MatDialogModule,
        // MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
        // MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_23__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["OverlayModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoMaterialModule, { exports: [
        // A11yModule,
        // ClipboardModule,
        // CdkStepperModule,
        // CdkTableModule,
        // CdkTreeModule,
        // DragDropModule,
        // MatAutocompleteModule,
        // MatBadgeModule,
        // MatBottomSheetModule,
        // MatButtonModule,
        // MatButtonToggleModule,
        // MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
        // MatChipsModule,
        // MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
        // MatDialogModule,
        // MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
        // MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_23__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["OverlayModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    // A11yModule,
                    // ClipboardModule,
                    // CdkStepperModule,
                    // CdkTableModule,
                    // CdkTreeModule,
                    // DragDropModule,
                    // MatAutocompleteModule,
                    // MatBadgeModule,
                    // MatBottomSheetModule,
                    // MatButtonModule,
                    // MatButtonToggleModule,
                    // MatCardModule,
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                    // MatChipsModule,
                    // MatStepperModule,
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                    // MatDialogModule,
                    // MatDividerModule,
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                    // MatGridListModule,
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_23__["MatTreeModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["OverlayModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
                ]
            }]
    }], null, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    url: "https://dilip-hospital.herokuapp.com"
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/parulverma/Documents/untitled folder/cdsmrai-hospital/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map