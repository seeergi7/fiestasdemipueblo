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
var account_component_1 = require('./account.component');
var account_routing_module_1 = require('./account-routing.module');
var AccountModule = (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, account_routing_module_1.AccountRoutingModule],
            declarations: [account_component_1.AccountComponent],
            exports: [account_component_1.AccountComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AccountModule);
    return AccountModule;
}());
exports.AccountModule = AccountModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9jaXRpZXMvYWNjb3VudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxrQ0FBaUMscUJBQXFCLENBQUMsQ0FBQTtBQUN2RCx1Q0FBcUMsMEJBQTBCLENBQUMsQ0FBQTtBQU9oRTtJQUFBO0lBQTZCLENBQUM7SUFMOUI7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLDZDQUFvQixDQUFDO1lBQzdDLFlBQVksRUFBRSxDQUFDLG9DQUFnQixDQUFDO1lBQ2hDLE9BQU8sRUFBRSxDQUFDLG9DQUFnQixDQUFDO1NBQzVCLENBQUM7O3FCQUFBO0lBQzJCLG9CQUFDO0FBQUQsQ0FBN0IsQUFBOEIsSUFBQTtBQUFqQixxQkFBYSxnQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9wYWdlcy9jaXRpZXMvYWNjb3VudC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBY2NvdW50Q29tcG9uZW50IH0gZnJvbSAnLi9hY2NvdW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjY291bnRSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hY2NvdW50LXJvdXRpbmcubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQWNjb3VudFJvdXRpbmdNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0FjY291bnRDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtBY2NvdW50Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjb3VudE1vZHVsZSB7IH1cclxuIl19
