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
var router_1 = require('@angular/router');
var account_component_1 = require('./account.component');
var AccountRoutingModule = (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'mi-account', component: account_component_1.AccountComponent }
                ])
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());
exports.AccountRoutingModule = AccountRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9hY2NvdW50L2FjY291bnQtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxrQ0FBaUMscUJBQXFCLENBQUMsQ0FBQTtBQVV2RDtJQUFBO0lBQW9DLENBQUM7SUFSckM7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AscUJBQVksQ0FBQyxRQUFRLENBQUM7b0JBQ3BCLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7aUJBQ3BELENBQUM7YUFDSDtZQUNELE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7U0FDeEIsQ0FBQzs7NEJBQUE7SUFDa0MsMkJBQUM7QUFBRCxDQUFwQyxBQUFxQyxJQUFBO0FBQXhCLDRCQUFvQix1QkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9wYWdlcy9hY2NvdW50L2FjY291bnQtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBY2NvdW50Q29tcG9uZW50IH0gZnJvbSAnLi9hY2NvdW50LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXHJcbiAgICAgIHsgcGF0aDogJ21pLWFjY291bnQnLCBjb21wb25lbnQ6IEFjY291bnRDb21wb25lbnQgfVxyXG4gICAgXSlcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50Um91dGluZ01vZHVsZSB7IH1cclxuIl19
