(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/add-ward/add-ward.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/add-ward/add-ward.component.ts ***!
  \**********************************************************/
/*! exports provided: AddWardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWardComponent", function() { return AddWardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/service.service */ "./src/app/core/service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function AddWardComponent_div_4_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddWardComponent_div_4_div_29_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ix_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.removeBlock(ix_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "invalid-danger": a0 }; };
function AddWardComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Ward Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Bed No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Bed no.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AddWardComponent_div_4_div_29_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const X_r1 = ctx.$implicit;
    const ix_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formGroupName", ix_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx_r0.submitted && X_r1.controls.wardname.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx_r0.submitted && X_r1.controls.price.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx_r0.submitted && X_r1.controls.bed_from.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, ctx_r0.submitted && X_r1.controls.bed_to.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, ctx_r0.submitted && X_r1.controls.status.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ix_r2 > 0);
} }
class AddWardComponent {
    constructor(fb, router, service, route) {
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.route = route;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.submitted = false;
        this.formErrors = {
            priceMatrix: this.priceMatrixErrors()
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.form = this.fb.group({
                'priceMatrix': this.fb.array([
                    this.addnewBlock()
                ])
            });
        });
    }
    addnewBlock() {
        return this.fb.group({
            'wardname': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'bed_from': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'bed_to': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'price': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'status': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    addBlock() {
        this.submitted = false;
        const control = this.form.controls['priceMatrix'];
        control.push(this.addnewBlock());
    }
    removeBlock(index) {
        if (index == 0) {
            return;
        }
        const control = this.form.controls['priceMatrix'];
        control.removeAt(index);
    }
    priceMatrixErrors() {
        return [{
                //  ---------------------forms errors on x level ------------------------
                baseSumInsured: '',
                // ---------------------------------------------------------------------
                'pricing': this.pricingErrors()
            }];
    }
    pricingErrors() {
        return [{
                //  ---------------------forms errors on y level ------------------------
                ageRange1: '',
                ageRange2: '',
                premiumAmount: '',
            }];
    }
    ngOnDestroy() {
        if (this.subscriptions) {
            this.subscriptions.unsubscribe();
        }
    }
    next() {
    }
}
AddWardComponent.ɵfac = function AddWardComponent_Factory(t) { return new (t || AddWardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
AddWardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddWardComponent, selectors: [["app-add-ward"]], decls: 15, vars: 2, consts: [[1, "setting_item"], [3, "formGroup"], ["class", "comapre_details comman_box mt-5 mb-5", "formArrayName", "priceMatrix", 4, "ngFor", "ngForOf"], [1, "row"], ["value", "Add X", 1, "col-sm-12", "text-center", 3, "click"], ["src", "../../../assets/images/plus.svg", "alt", ""], [1, "plustext"], [1, "flenewClientBlockb", "mb-5"], ["type", "submit", 1, "common_button", 3, "click"], ["formArrayName", "priceMatrix", 1, "comapre_details", "comman_box", "mt-5", "mb-5"], [1, ""], [1, "", 3, "formGroupName"], [1, "col-sm-6"], [1, "form-group"], [1, "form-group", 3, "ngClass"], ["type", "text", "formControlName", "wardname", 1, "form-control"], ["type", "text", "formControlName", "price", "placeholder", "price", "required", "", 1, "form-control"], [1, "col-sm-6", "col-lg-4"], ["type", "text", "formControlName", "bed_from", "placeholder", "Bed No.", "required", "", 1, "form-control"], ["type", "text", "formControlName", "bed_to", "placeholder", "Bed No.", "required", "", 1, "form-control"], ["type", "text", "formControlName", "status", "placeholder", "Status", "required", "", 1, "form-control"], ["class", "relativepositionx", 3, "click", 4, "ngIf"], [1, "relativepositionx", 3, "click"], ["src", "../../../assets/images/cross.svg", "alt", ""]], template: function AddWardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Add New Ward");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AddWardComponent_div_4_Template, 30, 17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddWardComponent_Template_div_click_6_listener() { return ctx.addBlock(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Add New Sum Insured");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddWardComponent_Template_button_click_13_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.form["controls"].priceMatrix["controls"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["@charset \"UTF-8\";\n*[_ngcontent-%COMP%] {\n  font-family: Poppins;\n}\n.comman_heading[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 56px;\n  line-height: 84px;\n  color: #337B94;\n}\n.comman_headingtext[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  color: #000000;\n}\n.common_button[_ngcontent-%COMP%] {\n  width: 158px;\n  background: #357C95;\n  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);\n  border-radius: 16px;\n  font-family: \"Inter\", sans-serif;\n  padding: 18px 0;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  color: #FFFFFF;\n  cursor: pointer;\n  border: none;\n  outline: none;\n}\n.ipadview[_ngcontent-%COMP%] {\n  display: none;\n}\n.flexsb[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.containerdiv[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 1440px;\n  margin: auto;\n}\n.rightside-layout[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.setting_item[_ngcontent-%COMP%] {\n  padding: 0px 45px 0 37px;\n}\n.leftsidebar[_ngcontent-%COMP%] {\n  width: 285px;\n}\n.productlist[_ngcontent-%COMP%] {\n  display: flex;\n}\n.productlist[_ngcontent-%COMP%]   .productName[_ngcontent-%COMP%] {\n  box-shadow: 3px 3px 14px #808080b8;\n  border-radius: 10px;\n  font-size: 16px;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  text-align: center;\n  cursor: pointer;\n  height: 100px;\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .dekstopview[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .ipadview[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .comman_heading[_ngcontent-%COMP%] {\n    font-family: Poppins;\n    font-size: 24px;\n    line-height: 36px;\n    color: #357C95;\n  }\n\n  .comman_headingtext[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n\n  .common_button[_ngcontent-%COMP%] {\n    width: 100%;\n    font-family: Poppins;\n    font-weight: 100;\n    font-size: 18px;\n    line-height: 16px;\n    text-align: center;\n    color: #FFFFFF;\n  }\n}\n.form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  position: absolute;\n  top: 100%;\n  left: 15px;\n  margin-top: -1px;\n}\n.invalid[_ngcontent-%COMP%] {\n  color: #FB3F4A;\n  position: absolute;\n  margin-top: 10px;\n  font-family: Poppins;\n  font-weight: 100;\n  font-size: 16px;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n.invalid-danger[_ngcontent-%COMP%] {\n  color: #FB3F4A !important;\n  margin: 0;\n}\n.select[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 40px;\n  width: 240px;\n  position: relative;\n  display: block;\n}\nselect[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 0 15px;\n  border: 0;\n  font-size: 16px;\n  width: 240px;\n  -webkit-appearance: none;\n  appearance: none;\n  background: #347b94;\n  background: #337B94;\n  box-shadow: 0px 10px 26px rgba(0, 0, 0, 0.25);\n  border-radius: 9.34043px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 20px;\n  color: #FFFFFF;\n  padding: 10px 26px;\n}\n.select[_ngcontent-%COMP%]:after {\n  content: \"\uF107\";\n  font-family: \"FontAwesome\";\n  color: #fff;\n  padding: 12px 8px;\n  position: absolute;\n  right: 30px;\n  top: -5px;\n  background: #347b94;\n  z-index: 1;\n  text-align: center;\n  width: 10%;\n  height: 100%;\n  pointer-events: none;\n  box-sizing: border-box;\n}\n.form-select[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.selectLabel[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.invalid-danger[_ngcontent-%COMP%] {\n  color: #FB3F4A !important;\n  margin: 0;\n}\n.relativepositiony[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: -7px;\n  cursor: pointer;\n}\n.relativepositiony[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 1rem;\n}\n.relativepositionx[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 27px;\n  top: 13px;\n  cursor: pointer;\n}\n.relativepositionx[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 1rem;\n}\n.buttondiv_search[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.buttondiv_search[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  background: #337B94;\n  box-shadow: 0px 10px 26px rgba(0, 0, 0, 0.25);\n  border-radius: 9.34043px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 20px;\n  color: #FFFFFF;\n  padding: 10px 26px;\n}\n.buttondiv_search[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 10%;\n  margin-left: 12px;\n}\n.buttondiv_search[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  background-position-x: 244px !important;\n  width: 100%;\n  max-width: 218px;\n}\n.comapre_details[_ngcontent-%COMP%] {\n  box-shadow: 3px 3px 14px #808080b8;\n  border-radius: 28px;\n  padding: 50px;\n  position: relative;\n}\n.comapre_details[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.comapre_details[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-6[_ngcontent-%COMP%] {\n  max-width: 45%;\n}\n.flenewClientBlockb[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.setting_item[_ngcontent-%COMP%] {\n  height: 90vh;\n  overflow: auto;\n}\n.setting_item[_ngcontent-%COMP%]   .headingsearch[_ngcontent-%COMP%] {\n  align-items: center;\n  margin: 60px 55px 30px 0;\n}\n.labelheading[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  color: #357C95;\n  margin-bottom: 22px;\n}\n.dottedborder[_ngcontent-%COMP%] {\n  background: gainsboro;\n  border: 1px solid black;\n  border-style: dashed;\n  border-radius: 28px;\n  padding: 80px 0;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  color: #357C95;\n  margin-bottom: 22px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 15px;\n  display: flex;\n  align-items: center;\n  color: #000000;\n  padding: 0 0 10px 0;\n  border: none;\n  border-bottom: 1.5px solid #347c94;\n  border-radius: 0;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2FkZC13YXJkL2FkZC13YXJkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3BhcnVsdmVybWEvRG9jdW1lbnRzL3VudGl0bGVkIGZvbGRlci9jZHNtcmFpLWhvc3BpdGFsL3NyYy9zaGFyZWQvc3R5bGUvZ2xvYmFsLnNjc3MiLCIvVXNlcnMvcGFydWx2ZXJtYS9Eb2N1bWVudHMvdW50aXRsZWQgZm9sZGVyL2Nkc21yYWktaG9zcGl0YWwvc3JjL3NoYXJlZC9zdHlsZS92YXJpYWJsZS5zY3NzIiwiL1VzZXJzL3BhcnVsdmVybWEvRG9jdW1lbnRzL3VudGl0bGVkIGZvbGRlci9jZHNtcmFpLWhvc3BpdGFsL3NyYy9hcHAvZGFzaGJvYXJkL2FkZC13YXJkL2FkZC13YXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLG9CQUFBO0FEQ0o7QUNFQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVDbUJLO0VEbEJMLGlCQ3lDSztFRHhDTCxjQUFBO0FEQ0o7QUNDQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QURFSjtBQ0FBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FER0o7QUNEQTtFQUNJLGFBQUE7QURJSjtBQ0ZBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FES0o7QUNIQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QURNSjtBQ0hBO0VBRUksV0FBQTtBREtKO0FDSEE7RUFDSSx3QkFBQTtBRE1KO0FDSEE7RUFDSSxZQUFBO0FETUo7QUNKQTtFQUNJLGFBQUE7QURPSjtBQ0hJO0VBRUksa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FESVI7QUNEQTtFQUNJO0lBQ0ksYUFBQTtFRElOOztFQ0ZFO0lBQ0ksY0FBQTtFREtOOztFQ0hFO0lBQ0ksb0JBQUE7SUFFSixlQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0VES0Y7O0VDSEU7SUFDSSxlQUFBO0VETU47O0VDSkU7SUFDSSxXQUFBO0lBQ0Esb0JBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtFRE9OO0FBQ0Y7QUNIQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBREtKO0FDREE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FESUo7QUNEQTtFQUFtQixjQUFBO0FES25CO0FHcklBO0VBQ0kseUJBQUE7RUFDQSxTQUFBO0FId0lKO0FHcklBO0VBRUksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBSHVJSjtBR3BJQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBSHVJSjtBR3BJQTtFQUNJLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBSHVJSjtBR3BJQTtFQUNJLGFBQUE7QUh1SUo7QUdwSUE7RUFDSSx1QkFBQTtBSHVJSjtBR3BJQTtFQUNJLHlCQUFBO0VBQ0EsU0FBQTtBSHVJSjtBR3JJQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FId0lKO0FHdklJO0VBQ0ksV0FBQTtBSHlJUjtBR3RJQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FIeUlKO0FHeElJO0VBQ0ksV0FBQTtBSDBJUjtBR3ZJQTtFQUVJLGtCQUFBO0FIeUlKO0FHeElJO0VBQ0ksbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBSDBJUjtBR3pJUTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBSDJJWjtBR3hJUTtFQUNJLHdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUgwSVo7QUd0SUE7RUFDSSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FIeUlKO0FHdklJO0VBQ0ksMkJBQUE7QUh5SVI7QUd4SVE7RUFDSSxjQUFBO0FIMElaO0FHdElBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FIeUlKO0FHdklBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUgwSUo7QUd6SUk7RUFDSSxtQkFBQTtFQUNBLHdCQUFBO0FIMklSO0FHdklBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBSDBJSjtBR3ZJQTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBSDBJSjtBR3hJQTtFQUNJLG1CQUFBO0FIMklKO0FHMUlJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBSDRJUjtBR3pJSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUgySVI7QUd6SUk7RUFDSSxnQkFBQTtBSDJJUiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9hZGQtd2FyZC9hZGQtd2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbioge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbn1cblxuLmNvbW1hbl9oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiA1NnB4O1xuICBsaW5lLWhlaWdodDogODRweDtcbiAgY29sb3I6ICMzMzdCOTQ7XG59XG5cbi5jb21tYW5faGVhZGluZ3RleHQge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmNvbW1vbl9idXR0b24ge1xuICB3aWR0aDogMTU4cHg7XG4gIGJhY2tncm91bmQ6ICMzNTdDOTU7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAxOHB4IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmlwYWR2aWV3IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZsZXhzYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNvbnRhaW5lcmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTQ0MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5yaWdodHNpZGUtbGF5b3V0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZXR0aW5nX2l0ZW0ge1xuICBwYWRkaW5nOiAwcHggNDVweCAwIDM3cHg7XG59XG5cbi5sZWZ0c2lkZWJhciB7XG4gIHdpZHRoOiAyODVweDtcbn1cblxuLnByb2R1Y3RsaXN0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wcm9kdWN0bGlzdCAucHJvZHVjdE5hbWUge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDE0cHggIzgwODA4MGI4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZGVrc3RvcHZpZXcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuaXBhZHZpZXcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmNvbW1hbl9oZWFkaW5nIHtcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgY29sb3I6ICMzNTdDOTU7XG4gIH1cblxuICAuY29tbWFuX2hlYWRpbmd0ZXh0IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAuY29tbW9uX2J1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICB9XG59XG4uZm9ybS1ncm91cCAuaW52YWxpZC1mZWVkYmFjayB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMTVweDtcbiAgbWFyZ2luLXRvcDogLTFweDtcbn1cblxuLmludmFsaWQge1xuICBjb2xvcjogI0ZCM0Y0QTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaW52YWxpZC1mZWVkYmFjayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW52YWxpZC1kYW5nZXIge1xuICBjb2xvcjogI0ZCM0Y0QSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG59XG5cbi5zZWxlY3Qge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAyNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuc2VsZWN0IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMjQwcHg7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjMzQ3Yjk0O1xuICBiYWNrZ3JvdW5kOiAjMzM3Qjk0O1xuICBib3gtc2hhZG93OiAwcHggMTBweCAyNnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDkuMzQwNDNweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgcGFkZGluZzogMTBweCAyNnB4O1xufVxuXG4uc2VsZWN0OmFmdGVyIHtcbiAgY29udGVudDogXCLvhIdcIjtcbiAgZm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEycHggOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzMHB4O1xuICB0b3A6IC01cHg7XG4gIGJhY2tncm91bmQ6ICMzNDdiOTQ7XG4gIHotaW5kZXg6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZvcm0tc2VsZWN0OjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zZWxlY3RMYWJlbCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW52YWxpZC1kYW5nZXIge1xuICBjb2xvcjogI0ZCM0Y0QSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG59XG5cbi5yZWxhdGl2ZXBvc2l0aW9ueSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogLTdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJlbGF0aXZlcG9zaXRpb255IGltZyB7XG4gIHdpZHRoOiAxcmVtO1xufVxuXG4ucmVsYXRpdmVwb3NpdGlvbngge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyN3B4O1xuICB0b3A6IDEzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yZWxhdGl2ZXBvc2l0aW9ueCBpbWcge1xuICB3aWR0aDogMXJlbTtcbn1cblxuLmJ1dHRvbmRpdl9zZWFyY2gge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnV0dG9uZGl2X3NlYXJjaCAuZm9ybS1zZWxlY3Qge1xuICBiYWNrZ3JvdW5kOiAjMzM3Qjk0O1xuICBib3gtc2hhZG93OiAwcHggMTBweCAyNnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDkuMzQwNDNweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgcGFkZGluZzogMTBweCAyNnB4O1xufVxuLmJ1dHRvbmRpdl9zZWFyY2ggLmZvcm0tc2VsZWN0IGltZyB7XG4gIHdpZHRoOiAxMCU7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuLmJ1dHRvbmRpdl9zZWFyY2ggc2VsZWN0IHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDI0NHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDIxOHB4O1xufVxuXG4uY29tYXByZV9kZXRhaWxzIHtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxNHB4ICM4MDgwODBiODtcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgcGFkZGluZzogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbWFwcmVfZGV0YWlscyAucm93IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLmNvbWFwcmVfZGV0YWlscyAucm93IC5jb2wtc20tNiB7XG4gIG1heC13aWR0aDogNDUlO1xufVxuXG4uZmxlbmV3Q2xpZW50QmxvY2tiIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc2V0dGluZ19pdGVtIHtcbiAgaGVpZ2h0OiA5MHZoO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5zZXR0aW5nX2l0ZW0gLmhlYWRpbmdzZWFyY2gge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDYwcHggNTVweCAzMHB4IDA7XG59XG5cbi5sYWJlbGhlYWRpbmcge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzU3Qzk1O1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xufVxuXG4uZG90dGVkYm9yZGVyIHtcbiAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gIHBhZGRpbmc6IDgwcHggMDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzU3Qzk1O1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xufVxuLmZvcm0tZ3JvdXAgaW5wdXQge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgcGFkZGluZzogMCAwIDEwcHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjMzQ3Yzk0O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufSIsIkBpbXBvcnQgJy4vdmFyaWFibGUuc2Nzcyc7XHJcbip7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxufVxyXG5cclxuLmNvbW1hbl9oZWFkaW5ne1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAkZm9udDU2O1xyXG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lODQ7XHJcbiAgICBjb2xvcjogIzMzN0I5NDtcclxufVxyXG4uY29tbWFuX2hlYWRpbmd0ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5jb21tb25fYnV0dG9ue1xyXG4gICAgd2lkdGg6IDE1OHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzM1N0M5NTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTZweCByZ2IoMCAwIDAgLyAyNSUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5pcGFkdmlld3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmZsZXhzYntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmNvbnRhaW5lcmRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIFxyXG59XHJcbi5yaWdodHNpZGUtbGF5b3V0e1xyXG4gICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uc2V0dGluZ19pdGVte1xyXG4gICAgcGFkZGluZzogMHB4IDQ1cHggMCAzN3B4O1xyXG59XHJcblxyXG4ubGVmdHNpZGViYXJ7XHJcbiAgICB3aWR0aDoyODVweDtcclxufVxyXG4ucHJvZHVjdGxpc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLy8gZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAucHJvZHVjdE5hbWV7XHJcbiAgICAgICAgLy8gd2lkdGg6IDIzJTtcclxuICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDE0cHggIzgwODA4MGI4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAuZGVrc3RvcHZpZXd7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5pcGFkdmlld3tcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5jb21tYW5faGVhZGluZ3tcclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIGNvbG9yOiAjMzU3Qzk1O1xyXG4gICAgfVxyXG4gICAgLmNvbW1hbl9oZWFkaW5ndGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuY29tbW9uX2J1dHRvbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgLmludmFsaWQtZmVlZGJhY2t7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgXHJcbn1cclxuXHJcbi5pbnZhbGlke1xyXG4gICAgY29sb3I6ICNGQjNGNEE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uaW52YWxpZC1mZWVkYmFja3sgZGlzcGxheTogYmxvY2s7IH0iLCIkZm9udDE6IDEwcHg7XHJcbiRmb250MjogMTNweDtcclxuJGZvbnQzOiAxNHB4O1xyXG4kZm9udDQ6IDE1cHg7XHJcbiRmb250NTogMTZweDtcclxuJGZvbnQ2OiAxOHB4O1xyXG4kZm9udDc6IDIwcHg7XHJcbiRmb250ODogMjJweDtcclxuJGZvbnQ5OiAyNnB4O1xyXG4kZm9udDEwOiAzMHB4O1xyXG4kZm9udDExOiAzNnB4O1xyXG4kZm9udDEyOiA0MHB4O1xyXG4kZm9udDEzOiA0NXB4O1xyXG4kZm9udDE0OiA1MHB4O1xyXG5cclxuLy9GT05UU1xyXG4vLyRmb250MTE6IDExcHg7XHJcbiRmb250MTU6IDE1cHg7XHJcbiRmb250MTY6IDE2cHg7XHJcbiRmb250MTg6IDE4cHg7XHJcbiRmb250MjA6IDIwcHg7XHJcbiRmb250MjI6IDIycHg7XHJcbiRmb250MjY6IDI2cHg7XHJcbiRmb250NTA6IDMwcHg7XHJcbiRmb250MzY6IDM2cHg7XHJcbiRmb250NDA6IDQwcHg7XHJcbiRmb250NDU6IDQ1cHg7XHJcbiRmb250NTU6IDU1cHg7XHJcbiRmb250NTY6IDU2cHg7XHJcbiRmb250NjA6IDYwcHg7XHJcblxyXG4vLyBmb250XHJcbiRmb250MDc6IDAuN3Z3O1xyXG4kZm9udDA4OiAwLjh2dztcclxuJGZvbnQxMDE6IDF2dztcclxuJGZvbnQxMTI6IDEuMnZ3O1xyXG4kZm9udDExMzogMS4zdnc7XHJcbiRmb250MTE1OiAxLjV2dztcclxuJGZvbnQxMDI6IDJ2dztcclxuJGZvbnQxMjU6IDIuNXZ3O1xyXG4kZm9udDEwMzogM3Z3O1xyXG4kZm9udDEwNDogNHZ3O1xyXG4kZm9udDEwNTogNXZ3O1xyXG5cclxuLy8gJGZvbnQxMTA6MnZ3O1xyXG5cclxuLy9MSU5FIEhFSUdIVFNcclxuJGxpbmUxMjogMTJweDtcclxuJGxpbmUzNDogMzRweDtcclxuJGxpbmU0NDogNDRweDtcclxuJGxpbmU2OTogNjlweDtcclxuJGxpbmU4NDogODRweDtcclxuXHJcbi8vTEVUVEVSIFNQQUNJTkdTXHJcbiRsZXR0ZXIxOiAxcHg7XHJcbiRsZXR0ZXIyOiAxLjVweDtcclxuJGxldHRlcjM6IDJweDtcclxuJGxldHRlcjQ6IDIuNXB4O1xyXG4kbGV0dGVyNTogNHB4O1xyXG4kbGV0dGVyNjogNnB4O1xyXG4kbGV0dGVyNzogOHB4O1xyXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9zaGFyZWQvc3R5bGUvZ2xvYmFsLnNjc3MnOyBcblxuLmludmFsaWQtZGFuZ2Vye1xuICAgIGNvbG9yOiAjRkIzRjRBICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uc2VsZWN0IHtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIG92ZXJmbG93OiBoaWRkZW47IFxuICAgIGhlaWdodDogNDBweDsgICAgXG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuc2VsZWN0eyAgICAgICBcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjMzQ3Yjk0O1xuICAgIGJhY2tncm91bmQ6ICMzMzdCOTQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjZweCByZ2IoMCAwIDAgLyAyNSUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDkuMzQwNDNweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgcGFkZGluZzogMTBweCAyNnB4O1xufVxuXG4uc2VsZWN0OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlxcZjEwN1wiO1xuICAgIGZvbnQtZmFtaWx5OiAnRm9udEF3ZXNvbWUnO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEycHggOHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMzBweDtcbiAgICB0b3A6IC01cHg7XG4gICAgYmFja2dyb3VuZDogIzM0N2I5NDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcbn1cblxuLmZvcm0tc2VsZWN0OjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICAvLyBtYXJnaW4tbGVmdDogMS4yNTVlbSAhaW1wb3J0YW50O1xufVxuLnNlbGVjdExhYmVse1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW52YWxpZC1kYW5nZXJ7XG4gICAgY29sb3I6ICNGQjNGNEEgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDA7XG59XG4ucmVsYXRpdmVwb3NpdGlvbnl7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogLTdweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDogMXJlbTtcbiAgICB9XG59XG4ucmVsYXRpdmVwb3NpdGlvbnh7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyN3B4O1xuICAgIHRvcDogMTNweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDogMXJlbTtcbiAgICB9XG59XG4uYnV0dG9uZGl2X3NlYXJjaHtcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAuZm9ybS1zZWxlY3R7XG4gICAgICAgIGJhY2tncm91bmQ6ICMzMzdCOTQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDI2cHggcmdiKDAgMCAwIC8gMjUlKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOS4zNDA0M3B4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDI2cHg7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNlbGVjdCB7XG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDI0NHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjE4cHg7XG5cbiAgICAgICAgICB9XG4gICAgfVxuLmNvbWFwcmVfZGV0YWlsc3tcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDE0cHggIzgwODA4MGI4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gbWFyZ2luLXJpZ2h0OiA0NXB4O1xuICAgIC5yb3d7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgLmNvbC1zbS02e1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA0NSU7XG4gICAgICAgIH1cbiAgICB9XG59XG4uZmxlbmV3Q2xpZW50QmxvY2tie1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnNldHRpbmdfaXRlbXtcbiAgICBoZWlnaHQ6IDkwdmg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgLmhlYWRpbmdzZWFyY2h7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogNjBweCA1NXB4IDMwcHggMDtcbiAgICB9XG59XG5cbi5sYWJlbGhlYWRpbmd7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogIzM1N0M5NTtcbiAgICBtYXJnaW4tYm90dG9tOjIycHg7XG4gICAgXG59XG4uZG90dGVkYm9yZGVye1xuICAgIGJhY2tncm91bmQ6IGdhaW5zYm9ybztcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICAgIHBhZGRpbmc6IDgwcHggMDtcbn1cbi5mb3JtLWdyb3Vwe1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgbGFiZWx7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICMzNTdDOTU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206MjJweDtcbiAgICAgICAgXG4gICAgfVxuICAgIGlucHV0e1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgcGFkZGluZzogMCAwIDEwcHggMDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjMzQ3Yzk0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cbiAgICBpbnB1dDpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxufVxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddWardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-add-ward',
                templateUrl: './add-ward.component.html',
                styleUrls: ['./add-ward.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_core_service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _ward_list_ward_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ward-list/ward-list.component */ "./src/app/dashboard/ward-list/ward-list.component.ts");
/* harmony import */ var _opd_registration_opd_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./opd-registration/opd-registration.component */ "./src/app/dashboard/opd-registration/opd-registration.component.ts");







const routes = [
    { path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'ward', component: _ward_list_ward_list_component__WEBPACK_IMPORTED_MODULE_3__["WardListComponent"] },
    { path: 'registration', component: _opd_registration_opd_registration_component__WEBPACK_IMPORTED_MODULE_4__["OpdRegistrationComponent"] },
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _ward_list_ward_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ward-list/ward-list.component */ "./src/app/dashboard/ward-list/ward-list.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material-module */ "./src/app/material-module.ts");
/* harmony import */ var _add_ward_add_ward_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-ward/add-ward.component */ "./src/app/dashboard/add-ward/add-ward.component.ts");
/* harmony import */ var _opd_registration_opd_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./opd-registration/opd-registration.component */ "./src/app/dashboard/opd-registration/opd-registration.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");











class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _ward_list_ward_list_component__WEBPACK_IMPORTED_MODULE_4__["WardListComponent"], _add_ward_add_ward_component__WEBPACK_IMPORTED_MODULE_6__["AddWardComponent"], _opd_registration_opd_registration_component__WEBPACK_IMPORTED_MODULE_7__["OpdRegistrationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _ward_list_ward_list_component__WEBPACK_IMPORTED_MODULE_4__["WardListComponent"], _add_ward_add_ward_component__WEBPACK_IMPORTED_MODULE_6__["AddWardComponent"], _opd_registration_opd_registration_component__WEBPACK_IMPORTED_MODULE_7__["OpdRegistrationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/opd-registration/opd-registration.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/opd-registration/opd-registration.component.ts ***!
  \**************************************************************************/
/*! exports provided: OpdRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpdRegistrationComponent", function() { return OpdRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service.service */ "./src/app/core/service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function OpdRegistrationComponent_div_83_div_47_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OpdRegistrationComponent_div_83_div_47_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ix_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.removeBlock(ix_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "invalid-danger": a0 }; };
function OpdRegistrationComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Discount Percentage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Net Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Category Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Discount Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Remark ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Tax Percentage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Tax Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, OpdRegistrationComponent_div_83_div_47_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const X_r1 = ctx.$implicit;
    const ix_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formGroupName", ix_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx_r0.submitted && X_r1.controls.date.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c0, ctx_r0.submitted && X_r1.controls.discount_percentage.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c0, ctx_r0.submitted && X_r1.controls.netamount.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c0, ctx_r0.submitted && X_r1.controls.categorytype.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c0, ctx_r0.submitted && X_r1.controls.discount_amount.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](22, _c0, ctx_r0.submitted && X_r1.controls.remark.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c0, ctx_r0.submitted && X_r1.controls.qty.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](26, _c0, ctx_r0.submitted && X_r1.controls.tax_percentage.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](28, _c0, ctx_r0.submitted && X_r1.controls.amount.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](30, _c0, ctx_r0.submitted && X_r1.controls.tax_amount.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ix_r2 > 0);
} }
class OpdRegistrationComponent {
    constructor(fb, router, service, route) {
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.route = route;
        this.submitted = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.registration = this.fb.group({
                patientname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{10}$')]],
                mobilenumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
                referenceby: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                referencemobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                gender: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                department: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                panel: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                doctor: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                adharno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                calculate_amount: this.fb.array([
                    this.addnewBlock()
                ])
                // ClientSPOCMobile: ['', [Validators.required, Validators.minLength(10), Validators.pattern('[0-9]{10}$')]],
            });
        });
    }
    addnewBlock() {
        return this.fb.group({
            date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            categorytype: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            qty: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            discount_percentage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            discount_amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tax_percentage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tax_amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            netamount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            remark: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    addBlock() {
        this.submitted = false;
        const control = this.registration.controls['calculate_amount'];
        control.push(this.addnewBlock());
    }
    removeBlock(index) {
        if (index == 0) {
            return;
        }
        const control = this.registration.controls['calculate_amount'];
        control.removeAt(index);
    }
    get f() { return this.registration.controls; }
    next() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submitted = true;
            if (this.registration.invalid || this.registration.value.DemoAccount == '0') {
                return;
            }
        });
    }
}
OpdRegistrationComponent.ɵfac = function OpdRegistrationComponent_Factory(t) { return new (t || OpdRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
OpdRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OpdRegistrationComponent, selectors: [["app-opd-registration"]], decls: 94, vars: 38, consts: [[1, "setting_item"], [1, "comapre_details", "comman_box", "mt-5", "mb-5"], [3, "formGroup"], [1, "row"], [1, "col-sm-6", "col-md-4"], [1, "form-group"], [1, "form-group", 3, "ngClass"], ["type", "text", "formControlName", "patientname", "name", "insta_id", "placeholder", "Name", "required", "", 1, "form-control"], ["type", "text", "formControlName", "address", "name", "insta_id", "placeholder", "Address", "required", "", 1, "form-control", 2, "text-transform", "uppercase"], ["type", "text", "formControlName", "referenceby", "name", "insta_id", "placeholder", "Reference by", "required", "", 1, "form-control"], [1, "select"], ["formControlName", "gender"], ["value", "0", "selected", "", "disabled", ""], ["value", "Male"], ["value", "Female"], ["type", "text", "formControlName", "age", "name", "insta_id", "placeholder", "Age", "required", "", 1, "form-control", 2, "text-transform", "uppercase"], ["type", "text", "formControlName", "email", "name", "insta_id", "placeholder", "Email ID", "required", "", 1, "form-control", 2, "text-transform", "uppercase"], ["type", "text", "formControlName", "referencemobile", "name", "insta_id", "placeholder", "Reference Mobile", "required", "", 1, "form-control"], ["formControlName", "department"], ["type", "text", "formControlName", "mobilenumber", "name", "insta_id", "placeholder", "Mobile number", "required", "", 1, "form-control"], ["type", "text", "formControlName", "adharno", "name", "insta_id", "placeholder", "Adhar Number", "required", "", 1, "form-control", 2, "text-transform", "uppercase"], ["formControlName", "panel"], ["value", "Yes"], ["value", "No"], ["formControlName", "doctor"], ["class", "comapre_details comman_box mt-5 mb-5", "style", "position: relative;", "formArrayName", "calculate_amount", 4, "ngFor", "ngForOf"], ["value", "Add X", 1, "col-sm-12", "text-center", 3, "click"], ["src", "../../../assets/images/plus.svg", "alt", ""], [1, "plustext"], [1, "flexsb", "mb-5", 2, "margin-right", "55px"], [3, "click"], [1, "common_button"], ["formArrayName", "calculate_amount", 1, "comapre_details", "comman_box", "mt-5", "mb-5", 2, "position", "relative"], [1, "", 3, "formGroupName"], [1, "col-sm-6", "col-md-3"], ["type", "text", "formControlName", "date", 1, "form-control"], ["type", "text", "formControlName", "discount_percentage", 1, "form-control"], ["type", "text", "formControlName", "netamount", 1, "form-control"], ["type", "text", "formControlName", "categorytype", 1, "form-control"], ["type", "text", "formControlName", "discount_amount", 1, "form-control"], ["type", "text", "formControlName", "remark", 1, "form-control"], ["type", "text", "formControlName", "qty", 1, "form-control"], ["type", "text", "formControlName", "tax_percentage", 1, "form-control"], ["type", "text", "formControlName", "amount", 1, "form-control"], ["type", "text", "formControlName", "tax_amount", 1, "form-control"], ["class", "relativepositionx", 3, "click", 4, "ngIf"], [1, "relativepositionx", 3, "click"], ["src", "../../../assets/images/cross.svg", "alt", ""]], template: function OpdRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Name Of Patient");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Reference by");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Please Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Email ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Reference Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Please Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Adhar Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Please Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Doctor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Please Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, OpdRegistrationComponent_div_83_Template, 48, 32, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OpdRegistrationComponent_Template_div_click_85_listener() { return ctx.addBlock(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Add New Sum Insured");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OpdRegistrationComponent_Template_div_click_91_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registration);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c0, ctx.submitted && ctx.f.patientname.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c0, ctx.submitted && ctx.f.address.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c0, ctx.submitted && ctx.f.referenceby.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c0, ctx.submitted && ctx.f.gender.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](22, _c0, ctx.submitted && ctx.f.age.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](26, _c0, ctx.submitted && ctx.f.referencemobile.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](28, _c0, ctx.submitted && ctx.f.department.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](30, _c0, ctx.submitted && ctx.f.mobilenumber.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](32, _c0, ctx.submitted && ctx.f.adharno.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](34, _c0, ctx.submitted && ctx.f.panel.value == "0"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](36, _c0, ctx.submitted && ctx.f.doctor.value == "0"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.registration["controls"].calculate_amount["controls"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["@charset \"UTF-8\";\n*[_ngcontent-%COMP%] {\n  font-family: Poppins;\n}\n.comman_heading[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 56px;\n  line-height: 84px;\n  color: #337B94;\n}\n.comman_headingtext[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  color: #000000;\n}\n.common_button[_ngcontent-%COMP%] {\n  width: 158px;\n  background: #357C95;\n  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);\n  border-radius: 16px;\n  font-family: \"Inter\", sans-serif;\n  padding: 18px 0;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  color: #FFFFFF;\n  cursor: pointer;\n  border: none;\n  outline: none;\n}\n.ipadview[_ngcontent-%COMP%] {\n  display: none;\n}\n.flexsb[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.containerdiv[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 1440px;\n  margin: auto;\n}\n.rightside-layout[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.setting_item[_ngcontent-%COMP%] {\n  padding: 0px 45px 0 37px;\n}\n.leftsidebar[_ngcontent-%COMP%] {\n  width: 285px;\n}\n.productlist[_ngcontent-%COMP%] {\n  display: flex;\n}\n.productlist[_ngcontent-%COMP%]   .productName[_ngcontent-%COMP%] {\n  box-shadow: 3px 3px 14px #808080b8;\n  border-radius: 10px;\n  font-size: 16px;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  text-align: center;\n  cursor: pointer;\n  height: 100px;\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .dekstopview[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .ipadview[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .comman_heading[_ngcontent-%COMP%] {\n    font-family: Poppins;\n    font-size: 24px;\n    line-height: 36px;\n    color: #357C95;\n  }\n\n  .comman_headingtext[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n\n  .common_button[_ngcontent-%COMP%] {\n    width: 100%;\n    font-family: Poppins;\n    font-weight: 100;\n    font-size: 18px;\n    line-height: 16px;\n    text-align: center;\n    color: #FFFFFF;\n  }\n}\n.form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  position: absolute;\n  top: 100%;\n  left: 15px;\n  margin-top: -1px;\n}\n.invalid[_ngcontent-%COMP%] {\n  color: #FB3F4A;\n  position: absolute;\n  margin-top: 10px;\n  font-family: Poppins;\n  font-weight: 100;\n  font-size: 16px;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n.invalid-danger[_ngcontent-%COMP%] {\n  color: #FB3F4A !important;\n  margin: 0;\n}\n.comapre_details[_ngcontent-%COMP%] {\n  box-shadow: 3px 3px 14px #808080b8;\n  border-radius: 28px;\n  padding: 50px;\n}\n.comapre_details[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.comapre_details[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-6[_ngcontent-%COMP%] {\n  max-width: 45%;\n}\n.setting_item[_ngcontent-%COMP%]   .headingsearch[_ngcontent-%COMP%] {\n  align-items: center;\n  margin: 60px 55px 30px 0;\n}\n.labelheading[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  color: #357C95;\n  margin-bottom: 22px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  color: #357C95;\n  margin-bottom: 22px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 15px;\n  display: flex;\n  align-items: center;\n  color: #000000;\n  padding: 0 0 10px 0;\n  border: none;\n  border-bottom: 1.5px solid #347c94;\n  border-radius: 0;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\nselect[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 0 15px;\n  border: 0;\n  font-size: 16px;\n  width: 240px;\n  -webkit-appearance: none;\n  appearance: none;\n  background: #347b94;\n  background: #337B94;\n  box-shadow: 0px 10px 26px rgba(0, 0, 0, 0.25);\n  border-radius: 9.34043px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 20px;\n  color: #FFFFFF;\n  padding: 10px 26px;\n}\n.select[_ngcontent-%COMP%]:after {\n  content: \"\uF107\";\n  font-family: \"FontAwesome\";\n  color: #fff;\n  position: absolute;\n  right: 30px;\n  top: -1px;\n  background: #347b94;\n  z-index: 1;\n  text-align: center;\n  pointer-events: none;\n  box-sizing: border-box;\n  position: relative;\n}\n.relativepositionx[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 27px;\n  top: 13px;\n  cursor: pointer;\n}\n.relativepositionx[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL29wZC1yZWdpc3RyYXRpb24vb3BkLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9wYXJ1bHZlcm1hL0RvY3VtZW50cy91bnRpdGxlZCBmb2xkZXIvY2RzbXJhaS1ob3NwaXRhbC9zcmMvc2hhcmVkL3N0eWxlL2dsb2JhbC5zY3NzIiwiL1VzZXJzL3BhcnVsdmVybWEvRG9jdW1lbnRzL3VudGl0bGVkIGZvbGRlci9jZHNtcmFpLWhvc3BpdGFsL3NyYy9zaGFyZWQvc3R5bGUvdmFyaWFibGUuc2NzcyIsIi9Vc2Vycy9wYXJ1bHZlcm1hL0RvY3VtZW50cy91bnRpdGxlZCBmb2xkZXIvY2RzbXJhaS1ob3NwaXRhbC9zcmMvYXBwL2Rhc2hib2FyZC9vcGQtcmVnaXN0cmF0aW9uL29wZC1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksb0JBQUE7QURDSjtBQ0VBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUNtQks7RURsQkwsaUJDeUNLO0VEeENMLGNBQUE7QURDSjtBQ0NBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBREVKO0FDQUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QURHSjtBQ0RBO0VBQ0ksYUFBQTtBRElKO0FDRkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QURLSjtBQ0hBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBRE1KO0FDSEE7RUFFSSxXQUFBO0FES0o7QUNIQTtFQUNJLHdCQUFBO0FETUo7QUNIQTtFQUNJLFlBQUE7QURNSjtBQ0pBO0VBQ0ksYUFBQTtBRE9KO0FDSEk7RUFFSSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QURJUjtBQ0RBO0VBQ0k7SUFDSSxhQUFBO0VESU47O0VDRkU7SUFDSSxjQUFBO0VES047O0VDSEU7SUFDSSxvQkFBQTtJQUVKLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7RURLRjs7RUNIRTtJQUNJLGVBQUE7RURNTjs7RUNKRTtJQUNJLFdBQUE7SUFDQSxvQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VET047QUFDRjtBQ0hBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FES0o7QUNEQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QURJSjtBQ0RBO0VBQW1CLGNBQUE7QURLbkI7QUdySUE7RUFDSSx5QkFBQTtFQUNBLFNBQUE7QUh3SUo7QUd0SUE7RUFDSSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBSHlJSjtBR3ZJSTtFQUNJLDZCQUFBO0FIeUlSO0FHeElRO0VBQ0ksY0FBQTtBSDBJWjtBR3JJSTtFQUNJLG1CQUFBO0VBQ0Esd0JBQUE7QUh3SVI7QUdwSUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FIdUlKO0FHcElBO0VBQ0ksbUJBQUE7QUh1SUo7QUd0SUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FId0lSO0FHcklJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBSHVJUjtBR3JJSTtFQUNJLGdCQUFBO0FIdUlSO0FHbElBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FIcUlKO0FHbElBO0VBQ0ksWUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBSHFJSjtBR25JQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FIc0lKO0FHcklJO0VBQ0ksV0FBQTtBSHVJUiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9vcGQtcmVnaXN0cmF0aW9uL29wZC1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4qIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG59XG5cbi5jb21tYW5faGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogNTZweDtcbiAgbGluZS1oZWlnaHQ6IDg0cHg7XG4gIGNvbG9yOiAjMzM3Qjk0O1xufVxuXG4uY29tbWFuX2hlYWRpbmd0ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5jb21tb25fYnV0dG9uIHtcbiAgd2lkdGg6IDE1OHB4O1xuICBiYWNrZ3JvdW5kOiAjMzU3Qzk1O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMThweCAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5pcGFkdmlldyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mbGV4c2Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jb250YWluZXJkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucmlnaHRzaWRlLWxheW91dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2V0dGluZ19pdGVtIHtcbiAgcGFkZGluZzogMHB4IDQ1cHggMCAzN3B4O1xufVxuXG4ubGVmdHNpZGViYXIge1xuICB3aWR0aDogMjg1cHg7XG59XG5cbi5wcm9kdWN0bGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucHJvZHVjdGxpc3QgLnByb2R1Y3ROYW1lIHtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxNHB4ICM4MDgwODBiODtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmRla3N0b3B2aWV3IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmlwYWR2aWV3IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5jb21tYW5faGVhZGluZyB7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgIGNvbG9yOiAjMzU3Qzk1O1xuICB9XG5cbiAgLmNvbW1hbl9oZWFkaW5ndGV4dCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgLmNvbW1vbl9idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgfVxufVxuLmZvcm0tZ3JvdXAgLmludmFsaWQtZmVlZGJhY2sge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG59XG5cbi5pbnZhbGlkIHtcbiAgY29sb3I6ICNGQjNGNEE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmludmFsaWQtZmVlZGJhY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmludmFsaWQtZGFuZ2VyIHtcbiAgY29sb3I6ICNGQjNGNEEgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY29tYXByZV9kZXRhaWxzIHtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxNHB4ICM4MDgwODBiODtcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgcGFkZGluZzogNTBweDtcbn1cbi5jb21hcHJlX2RldGFpbHMgLnJvdyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmNvbWFwcmVfZGV0YWlscyAucm93IC5jb2wtc20tNiB7XG4gIG1heC13aWR0aDogNDUlO1xufVxuXG4uc2V0dGluZ19pdGVtIC5oZWFkaW5nc2VhcmNoIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA2MHB4IDU1cHggMzBweCAwO1xufVxuXG4ubGFiZWxoZWFkaW5nIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzM1N0M5NTtcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzU3Qzk1O1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xufVxuLmZvcm0tZ3JvdXAgaW5wdXQge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgcGFkZGluZzogMCAwIDEwcHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjMzQ3Yzk0O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG5zZWxlY3Qge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAyNDBweDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICMzNDdiOTQ7XG4gIGJhY2tncm91bmQ6ICMzMzdCOTQ7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDI2cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogOS4zNDA0M3B4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBwYWRkaW5nOiAxMHB4IDI2cHg7XG59XG5cbi5zZWxlY3Q6YWZ0ZXIge1xuICBjb250ZW50OiBcIu+Eh1wiO1xuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzBweDtcbiAgdG9wOiAtMXB4O1xuICBiYWNrZ3JvdW5kOiAjMzQ3Yjk0O1xuICB6LWluZGV4OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5yZWxhdGl2ZXBvc2l0aW9ueCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDI3cHg7XG4gIHRvcDogMTNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJlbGF0aXZlcG9zaXRpb254IGltZyB7XG4gIHdpZHRoOiAxcmVtO1xufSIsIkBpbXBvcnQgJy4vdmFyaWFibGUuc2Nzcyc7XHJcbip7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxufVxyXG5cclxuLmNvbW1hbl9oZWFkaW5ne1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAkZm9udDU2O1xyXG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lODQ7XHJcbiAgICBjb2xvcjogIzMzN0I5NDtcclxufVxyXG4uY29tbWFuX2hlYWRpbmd0ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5jb21tb25fYnV0dG9ue1xyXG4gICAgd2lkdGg6IDE1OHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzM1N0M5NTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTZweCByZ2IoMCAwIDAgLyAyNSUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5pcGFkdmlld3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmZsZXhzYntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmNvbnRhaW5lcmRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIFxyXG59XHJcbi5yaWdodHNpZGUtbGF5b3V0e1xyXG4gICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uc2V0dGluZ19pdGVte1xyXG4gICAgcGFkZGluZzogMHB4IDQ1cHggMCAzN3B4O1xyXG59XHJcblxyXG4ubGVmdHNpZGViYXJ7XHJcbiAgICB3aWR0aDoyODVweDtcclxufVxyXG4ucHJvZHVjdGxpc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLy8gZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAucHJvZHVjdE5hbWV7XHJcbiAgICAgICAgLy8gd2lkdGg6IDIzJTtcclxuICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDE0cHggIzgwODA4MGI4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAuZGVrc3RvcHZpZXd7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5pcGFkdmlld3tcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5jb21tYW5faGVhZGluZ3tcclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIGNvbG9yOiAjMzU3Qzk1O1xyXG4gICAgfVxyXG4gICAgLmNvbW1hbl9oZWFkaW5ndGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuY29tbW9uX2J1dHRvbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgLmludmFsaWQtZmVlZGJhY2t7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgXHJcbn1cclxuXHJcbi5pbnZhbGlke1xyXG4gICAgY29sb3I6ICNGQjNGNEE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uaW52YWxpZC1mZWVkYmFja3sgZGlzcGxheTogYmxvY2s7IH0iLCIkZm9udDE6IDEwcHg7XHJcbiRmb250MjogMTNweDtcclxuJGZvbnQzOiAxNHB4O1xyXG4kZm9udDQ6IDE1cHg7XHJcbiRmb250NTogMTZweDtcclxuJGZvbnQ2OiAxOHB4O1xyXG4kZm9udDc6IDIwcHg7XHJcbiRmb250ODogMjJweDtcclxuJGZvbnQ5OiAyNnB4O1xyXG4kZm9udDEwOiAzMHB4O1xyXG4kZm9udDExOiAzNnB4O1xyXG4kZm9udDEyOiA0MHB4O1xyXG4kZm9udDEzOiA0NXB4O1xyXG4kZm9udDE0OiA1MHB4O1xyXG5cclxuLy9GT05UU1xyXG4vLyRmb250MTE6IDExcHg7XHJcbiRmb250MTU6IDE1cHg7XHJcbiRmb250MTY6IDE2cHg7XHJcbiRmb250MTg6IDE4cHg7XHJcbiRmb250MjA6IDIwcHg7XHJcbiRmb250MjI6IDIycHg7XHJcbiRmb250MjY6IDI2cHg7XHJcbiRmb250NTA6IDMwcHg7XHJcbiRmb250MzY6IDM2cHg7XHJcbiRmb250NDA6IDQwcHg7XHJcbiRmb250NDU6IDQ1cHg7XHJcbiRmb250NTU6IDU1cHg7XHJcbiRmb250NTY6IDU2cHg7XHJcbiRmb250NjA6IDYwcHg7XHJcblxyXG4vLyBmb250XHJcbiRmb250MDc6IDAuN3Z3O1xyXG4kZm9udDA4OiAwLjh2dztcclxuJGZvbnQxMDE6IDF2dztcclxuJGZvbnQxMTI6IDEuMnZ3O1xyXG4kZm9udDExMzogMS4zdnc7XHJcbiRmb250MTE1OiAxLjV2dztcclxuJGZvbnQxMDI6IDJ2dztcclxuJGZvbnQxMjU6IDIuNXZ3O1xyXG4kZm9udDEwMzogM3Z3O1xyXG4kZm9udDEwNDogNHZ3O1xyXG4kZm9udDEwNTogNXZ3O1xyXG5cclxuLy8gJGZvbnQxMTA6MnZ3O1xyXG5cclxuLy9MSU5FIEhFSUdIVFNcclxuJGxpbmUxMjogMTJweDtcclxuJGxpbmUzNDogMzRweDtcclxuJGxpbmU0NDogNDRweDtcclxuJGxpbmU2OTogNjlweDtcclxuJGxpbmU4NDogODRweDtcclxuXHJcbi8vTEVUVEVSIFNQQUNJTkdTXHJcbiRsZXR0ZXIxOiAxcHg7XHJcbiRsZXR0ZXIyOiAxLjVweDtcclxuJGxldHRlcjM6IDJweDtcclxuJGxldHRlcjQ6IDIuNXB4O1xyXG4kbGV0dGVyNTogNHB4O1xyXG4kbGV0dGVyNjogNnB4O1xyXG4kbGV0dGVyNzogOHB4O1xyXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9zaGFyZWQvc3R5bGUvZ2xvYmFsLnNjc3MnOyBcblxuLmludmFsaWQtZGFuZ2Vye1xuICAgIGNvbG9yOiAjRkIzRjRBICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwO1xufVxuLmNvbWFwcmVfZGV0YWlsc3tcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDE0cHggIzgwODA4MGI4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDQ1cHg7XG4gICAgLnJvd3tcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIC5jb2wtc20tNntcbiAgICAgICAgICAgIG1heC13aWR0aDogNDUlO1xuICAgICAgICB9XG4gICAgfVxufVxuLnNldHRpbmdfaXRlbXtcbiAgICAuaGVhZGluZ3NlYXJjaHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiA2MHB4IDU1cHggMzBweCAwO1xuICAgIH1cbn1cblxuLmxhYmVsaGVhZGluZ3tcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAjMzU3Qzk1O1xuICAgIG1hcmdpbi1ib3R0b206MjJweDtcbiAgICBcbn1cbi5mb3JtLWdyb3Vwe1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgbGFiZWx7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICMzNTdDOTU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206MjJweDtcbiAgICAgICAgXG4gICAgfVxuICAgIGlucHV0e1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgcGFkZGluZzogMCAwIDEwcHggMDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjMzQ3Yzk0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cbiAgICBpbnB1dDpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxufVxuXG5cbnNlbGVjdHsgICAgICAgXG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogIzM0N2I5NDtcbiAgICBiYWNrZ3JvdW5kOiAjMzM3Qjk0O1xuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDI2cHggcmdiKDAgMCAwIC8gMjUlKTtcbiAgICBib3JkZXItcmFkaXVzOiA5LjM0MDQzcHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHBhZGRpbmc6IDEwcHggMjZweDtcbn1cblxuLnNlbGVjdDphZnRlciB7XG4gICAgY29udGVudDogXCLvhIdcIjtcbiAgICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMzBweDtcbiAgICB0b3A6IC0xcHg7XG4gICAgYmFja2dyb3VuZDogIzM0N2I5NDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yZWxhdGl2ZXBvc2l0aW9ueHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDI3cHg7XG4gICAgdG9wOiAxM3B4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAxcmVtO1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OpdRegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-opd-registration',
                templateUrl: './opd-registration.component.html',
                styleUrls: ['./opd-registration.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_core_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/ward-list/ward-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/ward-list/ward-list.component.ts ***!
  \************************************************************/
/*! exports provided: WardListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WardListComponent", function() { return WardListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _add_ward_add_ward_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-ward/add-ward.component */ "./src/app/dashboard/add-ward/add-ward.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/service.service */ "./src/app/core/service.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");












function WardListComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ward ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WardListComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14 == null ? null : element_r14.wardid, "");
} }
function WardListComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Client Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WardListComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r16 == null ? null : element_r16.name, " ");
} }
function WardListComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WardListComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r17 == null ? null : element_r17.from);
} }
function WardListComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WardListComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r18 == null ? null : element_r18.to);
} }
function WardListComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WardListComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19 == null ? null : element_r19.price, " ");
} }
function WardListComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WardListComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-menu", null, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Edit Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r21);
} }
function WardListComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 34);
} }
function WardListComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 35);
} }
const _c0 = function () { return [5, 10, 20]; };
const ELEMENT_DATA = [
    { wardid: '1', name: 'Hydrogen', from: '1', to: 'H', price: '2000', action: '1' },
    { wardid: '1', name: 'Hydrogen', from: '1', to: 'H', price: '2000', action: '1' },
    { wardid: '1', name: 'Hydrogen', from: '1', to: 'H', price: '2000', action: '1' },
];
class WardListComponent {
    constructor(router, service, route, dialog) {
        this.router = router;
        this.service = service;
        this.route = route;
        this.dialog = dialog;
        this.displayedColumns = ['wardid', 'name', 'from', 'to', 'price', 'action'];
        this.dataSource = ELEMENT_DATA;
    }
    ngOnInit() {
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
        // this.dataSource.filter = filterValue.trim().toLowerCase();
        // if (this.dataSource.paginator) {
        //   this.dataSource.paginator.firstPage();
        // }
    }
    sortData(event) {
    }
    addnew() {
        const dialogRef = this.dialog.open(_add_ward_add_ward_component__WEBPACK_IMPORTED_MODULE_3__["AddWardComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
WardListComponent.ɵfac = function WardListComponent_Factory(t) { return new (t || WardListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
WardListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WardListComponent, selectors: [["app-ward-list"]], viewQuery: function WardListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 36, vars: 5, consts: [[1, "setting_item", "container"], [1, "flexsb", "headingsearch"], [1, "headingtext"], [1, "inputButtin", "flexsb"], [1, "mr-4", 2, "position", "relative"], ["type", "text", "placeholder", "Search", 3, "keyup"], ["src", "../../../assets/images/Vector.svg", "alt", ""], [1, "common_button", 3, "click"], [1, "comapre_details", "comman_box", "mb-5"], [1, "table-responsive"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "table", "table-hover", 3, "dataSource", "matSortChange"], ["matColumnDef", "wardid"], ["mat-sort-header", "wardid", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "from"], ["mat-sort-header", "from", "mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "to"], ["matColumnDef", "price"], ["matColumnDef", "action"], ["mat-header-cell", "", "class", "wpx-100", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-sort-header", "wardid", "mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-sort-header", "from", "mat-header-cell", ""], ["mat-header-cell", "", 1, "wpx-100"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 1, "tablebutton", 3, "matMenuTriggerFor"], ["aria-hidden", "true", 1, "fa", "fa-ellipsis-v"], ["menu", "matMenu"], ["mat-menu-item", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function WardListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Group Health");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " | Group Accident");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function WardListComponent_Template_input_keyup_8_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WardListComponent_Template_div_click_10_listener() { return ctx.addnew(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add New Ward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function WardListComponent_Template_table_matSortChange_14_listener($event) { return ctx.sortData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, WardListComponent_th_16_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, WardListComponent_td_17_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, WardListComponent_th_19_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, WardListComponent_td_20_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, WardListComponent_th_22_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, WardListComponent_td_23_Template, 3, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, WardListComponent_th_25_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, WardListComponent_td_26_Template, 3, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, WardListComponent_th_28_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, WardListComponent_td_29_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, WardListComponent_th_31_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, WardListComponent_td_32_Template, 8, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, WardListComponent_tr_33_Template, 1, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, WardListComponent_tr_34_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-paginator", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCell"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRow"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: Poppins;\n}\n\n.comman_heading[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 56px;\n  line-height: 84px;\n  color: #337B94;\n}\n\n.comman_headingtext[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  color: #000000;\n}\n\n.common_button[_ngcontent-%COMP%] {\n  width: 158px;\n  background: #357C95;\n  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);\n  border-radius: 16px;\n  font-family: \"Inter\", sans-serif;\n  padding: 18px 0;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  color: #FFFFFF;\n  cursor: pointer;\n  border: none;\n  outline: none;\n}\n\n.ipadview[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.flexsb[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.containerdiv[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 1440px;\n  margin: auto;\n}\n\n.rightside-layout[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.setting_item[_ngcontent-%COMP%] {\n  padding: 0px 45px 0 37px;\n}\n\n.leftsidebar[_ngcontent-%COMP%] {\n  width: 285px;\n}\n\n.productlist[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.productlist[_ngcontent-%COMP%]   .productName[_ngcontent-%COMP%] {\n  box-shadow: 3px 3px 14px #808080b8;\n  border-radius: 10px;\n  font-size: 16px;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  text-align: center;\n  cursor: pointer;\n  height: 100px;\n  display: flex;\n  align-items: center;\n}\n\n@media (max-width: 768px) {\n  .dekstopview[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .ipadview[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .comman_heading[_ngcontent-%COMP%] {\n    font-family: Poppins;\n    font-size: 24px;\n    line-height: 36px;\n    color: #357C95;\n  }\n\n  .comman_headingtext[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n\n  .common_button[_ngcontent-%COMP%] {\n    width: 100%;\n    font-family: Poppins;\n    font-weight: 100;\n    font-size: 18px;\n    line-height: 16px;\n    text-align: center;\n    color: #FFFFFF;\n  }\n}\n\n.form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  position: absolute;\n  top: 100%;\n  left: 15px;\n  margin-top: -1px;\n}\n\n.invalid[_ngcontent-%COMP%] {\n  color: #FB3F4A;\n  position: absolute;\n  margin-top: 10px;\n  font-family: Poppins;\n  font-weight: 100;\n  font-size: 16px;\n}\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.common_button[_ngcontent-%COMP%] {\n  width: 135px;\n  height: 42px;\n  padding: 11px 0;\n  border-radius: 8px;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 22px;\n  color: #B2B3BD;\n  padding: 29px 17px;\n  border-bottom: 2px solid #E4E4E4;\n  vertical-align: middle;\n  text-align: center;\n}\n\n.table[_ngcontent-%COMP%]   .tablebutton[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  padding: 0 10px;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.comapre_details[_ngcontent-%COMP%] {\n  box-shadow: 3px 3px 14px #808080b8;\n  border-radius: 28px;\n  padding: 16px;\n}\n\n.setting_item[_ngcontent-%COMP%]   .headingsearch[_ngcontent-%COMP%] {\n  align-items: center;\n  margin: 60px 0px 30px 0;\n}\n\n.setting_item[_ngcontent-%COMP%]   .headingsearch[_ngcontent-%COMP%]   .inputButtin[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n\n.setting_item[_ngcontent-%COMP%]   .inputButtin[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 212px;\n  height: 41px;\n  padding: 16px 35px 16px 42px;\n  background: #E4E4E4;\n  border-radius: 8px;\n  outline: none;\n  border: navajowhite;\n  line-height: 22px;\n}\n\n.setting_item[_ngcontent-%COMP%]   .inputButtin[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 8px;\n  top: 9px;\n  width: 21px;\n}\n\n.setting_item[_ngcontent-%COMP%]   .headingtext[_ngcontent-%COMP%] {\n  font-weight: 300 !important;\n}\n\n.setting_item[_ngcontent-%COMP%]   .headingtext[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXJ1bHZlcm1hL0RvY3VtZW50cy91bnRpdGxlZCBmb2xkZXIvY2RzbXJhaS1ob3NwaXRhbC9zcmMvc2hhcmVkL3N0eWxlL2dsb2JhbC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvd2FyZC1saXN0L3dhcmQtbGlzdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9wYXJ1bHZlcm1hL0RvY3VtZW50cy91bnRpdGxlZCBmb2xkZXIvY2RzbXJhaS1ob3NwaXRhbC9zcmMvc2hhcmVkL3N0eWxlL3ZhcmlhYmxlLnNjc3MiLCIvVXNlcnMvcGFydWx2ZXJtYS9Eb2N1bWVudHMvdW50aXRsZWQgZm9sZGVyL2Nkc21yYWktaG9zcGl0YWwvc3JjL2FwcC9kYXNoYm9hcmQvd2FyZC1saXN0L3dhcmQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG9CQUFBO0FDQUo7O0FER0E7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlRW1CSztFRmxCTCxpQkV5Q0s7RUZ4Q0wsY0FBQTtBQ0FKOztBREVBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxhQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUNJSjs7QURGQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNLSjs7QURGQTtFQUVJLFdBQUE7QUNJSjs7QURGQTtFQUNJLHdCQUFBO0FDS0o7O0FERkE7RUFDSSxZQUFBO0FDS0o7O0FESEE7RUFDSSxhQUFBO0FDTUo7O0FERkk7RUFFSSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNHUjs7QURBQTtFQUNJO0lBQ0ksYUFBQTtFQ0dOOztFRERFO0lBQ0ksY0FBQTtFQ0lOOztFREZFO0lBQ0ksb0JBQUE7SUFFSixlQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0VDSUY7O0VERkU7SUFDSSxlQUFBO0VDS047O0VESEU7SUFDSSxXQUFBO0lBQ0Esb0JBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtFQ01OO0FBQ0Y7O0FERkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNHSjs7QURBQTtFQUFtQixjQUFBO0FDSW5COztBRXBJQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FGdUlKOztBRW5JSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FGc0lSOztBRXBJSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FGc0lSOztBRWpJQTtFQUNJLHdCQUFBO0FGb0lKOztBRWpJQTtFQUNJLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FGb0lKOztBRWhJSTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7QUZtSVI7O0FFbElRO0VBQ0ksZUFBQTtBRm9JWjs7QUVoSVE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FGa0laOztBRS9IUTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FGaUlaOztBRTlISTtFQUNJLDJCQUFBO0FGZ0lSOztBRS9IUTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7QUZpSVoiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvd2FyZC1saXN0L3dhcmQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vdmFyaWFibGUuc2Nzcyc7XHJcbip7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxufVxyXG5cclxuLmNvbW1hbl9oZWFkaW5ne1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAkZm9udDU2O1xyXG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lODQ7XHJcbiAgICBjb2xvcjogIzMzN0I5NDtcclxufVxyXG4uY29tbWFuX2hlYWRpbmd0ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5jb21tb25fYnV0dG9ue1xyXG4gICAgd2lkdGg6IDE1OHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzM1N0M5NTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTZweCByZ2IoMCAwIDAgLyAyNSUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5pcGFkdmlld3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmZsZXhzYntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmNvbnRhaW5lcmRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIFxyXG59XHJcbi5yaWdodHNpZGUtbGF5b3V0e1xyXG4gICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uc2V0dGluZ19pdGVte1xyXG4gICAgcGFkZGluZzogMHB4IDQ1cHggMCAzN3B4O1xyXG59XHJcblxyXG4ubGVmdHNpZGViYXJ7XHJcbiAgICB3aWR0aDoyODVweDtcclxufVxyXG4ucHJvZHVjdGxpc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLy8gZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAucHJvZHVjdE5hbWV7XHJcbiAgICAgICAgLy8gd2lkdGg6IDIzJTtcclxuICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDE0cHggIzgwODA4MGI4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAuZGVrc3RvcHZpZXd7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5pcGFkdmlld3tcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5jb21tYW5faGVhZGluZ3tcclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIGNvbG9yOiAjMzU3Qzk1O1xyXG4gICAgfVxyXG4gICAgLmNvbW1hbl9oZWFkaW5ndGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuY29tbW9uX2J1dHRvbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgLmludmFsaWQtZmVlZGJhY2t7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgXHJcbn1cclxuXHJcbi5pbnZhbGlke1xyXG4gICAgY29sb3I6ICNGQjNGNEE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uaW52YWxpZC1mZWVkYmFja3sgZGlzcGxheTogYmxvY2s7IH0iLCIqIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG59XG5cbi5jb21tYW5faGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogNTZweDtcbiAgbGluZS1oZWlnaHQ6IDg0cHg7XG4gIGNvbG9yOiAjMzM3Qjk0O1xufVxuXG4uY29tbWFuX2hlYWRpbmd0ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5jb21tb25fYnV0dG9uIHtcbiAgd2lkdGg6IDE1OHB4O1xuICBiYWNrZ3JvdW5kOiAjMzU3Qzk1O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMThweCAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5pcGFkdmlldyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mbGV4c2Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jb250YWluZXJkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucmlnaHRzaWRlLWxheW91dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2V0dGluZ19pdGVtIHtcbiAgcGFkZGluZzogMHB4IDQ1cHggMCAzN3B4O1xufVxuXG4ubGVmdHNpZGViYXIge1xuICB3aWR0aDogMjg1cHg7XG59XG5cbi5wcm9kdWN0bGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucHJvZHVjdGxpc3QgLnByb2R1Y3ROYW1lIHtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxNHB4ICM4MDgwODBiODtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmRla3N0b3B2aWV3IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmlwYWR2aWV3IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5jb21tYW5faGVhZGluZyB7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgIGNvbG9yOiAjMzU3Qzk1O1xuICB9XG5cbiAgLmNvbW1hbl9oZWFkaW5ndGV4dCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgLmNvbW1vbl9idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgfVxufVxuLmZvcm0tZ3JvdXAgLmludmFsaWQtZmVlZGJhY2sge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG59XG5cbi5pbnZhbGlkIHtcbiAgY29sb3I6ICNGQjNGNEE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmludmFsaWQtZmVlZGJhY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNvbW1vbl9idXR0b24ge1xuICB3aWR0aDogMTM1cHg7XG4gIGhlaWdodDogNDJweDtcbiAgcGFkZGluZzogMTFweCAwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi50YWJsZSB0aCwgLnRhYmxlIHRkIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICNCMkIzQkQ7XG4gIHBhZGRpbmc6IDI5cHggMTdweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFNEU0RTQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50YWJsZSAudGFibGVidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmNvbWFwcmVfZGV0YWlscyB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTRweCAjODA4MDgwYjg7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5zZXR0aW5nX2l0ZW0gLmhlYWRpbmdzZWFyY2gge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDYwcHggMHB4IDMwcHggMDtcbn1cbi5zZXR0aW5nX2l0ZW0gLmhlYWRpbmdzZWFyY2ggLmlucHV0QnV0dGluIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLnNldHRpbmdfaXRlbSAuaW5wdXRCdXR0aW4gaW5wdXQge1xuICB3aWR0aDogMjEycHg7XG4gIGhlaWdodDogNDFweDtcbiAgcGFkZGluZzogMTZweCAzNXB4IDE2cHggNDJweDtcbiAgYmFja2dyb3VuZDogI0U0RTRFNDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5hdmFqb3doaXRlO1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cbi5zZXR0aW5nX2l0ZW0gLmlucHV0QnV0dGluIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOHB4O1xuICB0b3A6IDlweDtcbiAgd2lkdGg6IDIxcHg7XG59XG4uc2V0dGluZ19pdGVtIC5oZWFkaW5ndGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcbn1cbi5zZXR0aW5nX2l0ZW0gLmhlYWRpbmd0ZXh0IHNwYW4ge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iLCIkZm9udDE6IDEwcHg7XHJcbiRmb250MjogMTNweDtcclxuJGZvbnQzOiAxNHB4O1xyXG4kZm9udDQ6IDE1cHg7XHJcbiRmb250NTogMTZweDtcclxuJGZvbnQ2OiAxOHB4O1xyXG4kZm9udDc6IDIwcHg7XHJcbiRmb250ODogMjJweDtcclxuJGZvbnQ5OiAyNnB4O1xyXG4kZm9udDEwOiAzMHB4O1xyXG4kZm9udDExOiAzNnB4O1xyXG4kZm9udDEyOiA0MHB4O1xyXG4kZm9udDEzOiA0NXB4O1xyXG4kZm9udDE0OiA1MHB4O1xyXG5cclxuLy9GT05UU1xyXG4vLyRmb250MTE6IDExcHg7XHJcbiRmb250MTU6IDE1cHg7XHJcbiRmb250MTY6IDE2cHg7XHJcbiRmb250MTg6IDE4cHg7XHJcbiRmb250MjA6IDIwcHg7XHJcbiRmb250MjI6IDIycHg7XHJcbiRmb250MjY6IDI2cHg7XHJcbiRmb250NTA6IDMwcHg7XHJcbiRmb250MzY6IDM2cHg7XHJcbiRmb250NDA6IDQwcHg7XHJcbiRmb250NDU6IDQ1cHg7XHJcbiRmb250NTU6IDU1cHg7XHJcbiRmb250NTY6IDU2cHg7XHJcbiRmb250NjA6IDYwcHg7XHJcblxyXG4vLyBmb250XHJcbiRmb250MDc6IDAuN3Z3O1xyXG4kZm9udDA4OiAwLjh2dztcclxuJGZvbnQxMDE6IDF2dztcclxuJGZvbnQxMTI6IDEuMnZ3O1xyXG4kZm9udDExMzogMS4zdnc7XHJcbiRmb250MTE1OiAxLjV2dztcclxuJGZvbnQxMDI6IDJ2dztcclxuJGZvbnQxMjU6IDIuNXZ3O1xyXG4kZm9udDEwMzogM3Z3O1xyXG4kZm9udDEwNDogNHZ3O1xyXG4kZm9udDEwNTogNXZ3O1xyXG5cclxuLy8gJGZvbnQxMTA6MnZ3O1xyXG5cclxuLy9MSU5FIEhFSUdIVFNcclxuJGxpbmUxMjogMTJweDtcclxuJGxpbmUzNDogMzRweDtcclxuJGxpbmU0NDogNDRweDtcclxuJGxpbmU2OTogNjlweDtcclxuJGxpbmU4NDogODRweDtcclxuXHJcbi8vTEVUVEVSIFNQQUNJTkdTXHJcbiRsZXR0ZXIxOiAxcHg7XHJcbiRsZXR0ZXIyOiAxLjVweDtcclxuJGxldHRlcjM6IDJweDtcclxuJGxldHRlcjQ6IDIuNXB4O1xyXG4kbGV0dGVyNTogNHB4O1xyXG4kbGV0dGVyNjogNnB4O1xyXG4kbGV0dGVyNzogOHB4O1xyXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9zaGFyZWQvc3R5bGUvZ2xvYmFsLnNjc3MnOyBcblxuLmNvbW1vbl9idXR0b257XG4gICAgd2lkdGg6IDEzNXB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBwYWRkaW5nOiAxMXB4IDA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4gLnRhYmxle1xuICAgIHRoLCB0ZHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgY29sb3I6ICNCMkIzQkQ7XG4gICAgICAgIHBhZGRpbmc6IDI5cHggMTdweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFNEU0RTQ7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLnRhYmxlYnV0dG9ue1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgfVxuICAgXG59XG5cbmJ1dHRvbjpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jb21hcHJlX2RldGFpbHN7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxNHB4ICM4MDgwODBiODtcbiAgICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgLy8gbWFyZ2luLXJpZ2h0OiA0NXB4O1xufVxuLnNldHRpbmdfaXRlbXtcbiAgICAuaGVhZGluZ3NlYXJjaHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiA2MHB4IDBweCAzMHB4IDA7XG4gICAgICAgIC5pbnB1dEJ1dHRpbntcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaW5wdXRCdXR0aW57XG4gICAgICAgIGlucHV0e1xuICAgICAgICAgICAgd2lkdGg6IDIxMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTZweCAzNXB4IDE2cHggNDJweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFNEU0RTQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyOiBuYXZham93aGl0ZTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIFxuICAgICAgICB9XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDhweDtcbiAgICAgICAgICAgIHRvcDogOXB4O1xuICAgICAgICAgICAgd2lkdGg6IDIxcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmhlYWRpbmd0ZXh0e1xuICAgICAgICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WardListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ward-list',
                templateUrl: './ward-list.component.html',
                styleUrls: ['./ward-list.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_core_service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map