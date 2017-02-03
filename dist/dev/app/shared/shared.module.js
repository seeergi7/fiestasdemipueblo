"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var toolbar_component_1 = require('./toolbar/toolbar.component');
var navbar_component_1 = require('./navbar/navbar.component');
var name_list_service_1 = require('./name-list/name-list.service');
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule,
            providers: [name_list_service_1.NameListService]
        };
    };
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule],
            declarations: [toolbar_component_1.ToolbarComponent, navbar_component_1.NavbarComponent],
            exports: [toolbar_component_1.ToolbarComponent, navbar_component_1.NavbarComponent,
                common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThDLGVBQWUsQ0FBQyxDQUFBO0FBQzlELHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLGtDQUFpQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQy9ELGlDQUFnQywyQkFBMkIsQ0FBQyxDQUFBO0FBQzVELGtDQUFnQywrQkFBK0IsQ0FBQyxDQUFBO0FBWWhFO0lBQUE7SUFPQSxDQUFDO0lBTlEsb0JBQU8sR0FBZDtRQUNFLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxDQUFDLG1DQUFlLENBQUM7U0FDN0IsQ0FBQztJQUNKLENBQUM7SUFaSDtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUscUJBQVksQ0FBQztZQUNyQyxZQUFZLEVBQUUsQ0FBQyxvQ0FBZ0IsRUFBRSxrQ0FBZSxDQUFDO1lBQ2pELE9BQU8sRUFBRSxDQUFDLG9DQUFnQixFQUFFLGtDQUFlO2dCQUN6QyxxQkFBWSxFQUFFLG1CQUFXLEVBQUUscUJBQVksQ0FBQztTQUMzQyxDQUFDOztvQkFBQTtJQVFGLG1CQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSxvQkFBWSxlQU94QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci90b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5hdmJhckNvbXBvbmVudCB9IGZyb20gJy4vbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOYW1lTGlzdFNlcnZpY2UgfSBmcm9tICcuL25hbWUtbGlzdC9uYW1lLWxpc3Quc2VydmljZSc7XHJcblxyXG4vKipcclxuICogRG8gbm90IHNwZWNpZnkgcHJvdmlkZXJzIGZvciBtb2R1bGVzIHRoYXQgbWlnaHQgYmUgaW1wb3J0ZWQgYnkgYSBsYXp5IGxvYWRlZCBtb2R1bGUuXHJcbiAqL1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1Rvb2xiYXJDb21wb25lbnQsIE5hdmJhckNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1Rvb2xiYXJDb21wb25lbnQsIE5hdmJhckNvbXBvbmVudCxcclxuICAgIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogU2hhcmVkTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtOYW1lTGlzdFNlcnZpY2VdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=
