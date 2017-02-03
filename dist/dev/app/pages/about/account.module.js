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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9hYm91dC9hY2NvdW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLGtDQUFpQyxxQkFBcUIsQ0FBQyxDQUFBO0FBQ3ZELHVDQUFxQywwQkFBMEIsQ0FBQyxDQUFBO0FBT2hFO0lBQUE7SUFBNkIsQ0FBQztJQUw5QjtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUsNkNBQW9CLENBQUM7WUFDN0MsWUFBWSxFQUFFLENBQUMsb0NBQWdCLENBQUM7WUFDaEMsT0FBTyxFQUFFLENBQUMsb0NBQWdCLENBQUM7U0FDNUIsQ0FBQzs7cUJBQUE7SUFDMkIsb0JBQUM7QUFBRCxDQUE3QixBQUE4QixJQUFBO0FBQWpCLHFCQUFhLGdCQUFJLENBQUEiLCJmaWxlIjoiYXBwL3BhZ2VzL2Fib3V0L2FjY291bnQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQWNjb3VudENvbXBvbmVudCB9IGZyb20gJy4vYWNjb3VudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY2NvdW50Um91dGluZ01vZHVsZSB9IGZyb20gJy4vYWNjb3VudC1yb3V0aW5nLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEFjY291bnRSb3V0aW5nTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtBY2NvdW50Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQWNjb3VudENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFjY291bnRNb2R1bGUgeyB9XHJcbiJdfQ==
