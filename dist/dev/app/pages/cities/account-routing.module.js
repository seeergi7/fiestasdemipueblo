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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9jaXRpZXMvYWNjb3VudC1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLGtDQUFpQyxxQkFBcUIsQ0FBQyxDQUFBO0FBVXZEO0lBQUE7SUFBb0MsQ0FBQztJQVJyQztRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxxQkFBWSxDQUFDLFFBQVEsQ0FBQztvQkFDcEIsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtpQkFDcEQsQ0FBQzthQUNIO1lBQ0QsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztTQUN4QixDQUFDOzs0QkFBQTtJQUNrQywyQkFBQztBQUFELENBQXBDLEFBQXFDLElBQUE7QUFBeEIsNEJBQW9CLHVCQUFJLENBQUEiLCJmaWxlIjoiYXBwL3BhZ2VzL2NpdGllcy9hY2NvdW50LXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQWNjb3VudENvbXBvbmVudCB9IGZyb20gJy4vYWNjb3VudC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xyXG4gICAgICB7IHBhdGg6ICdtaS1hY2NvdW50JywgY29tcG9uZW50OiBBY2NvdW50Q29tcG9uZW50IH1cclxuICAgIF0pXHJcbiAgXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjb3VudFJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==
