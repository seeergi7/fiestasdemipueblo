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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9hY2NvdW50L2FjY291bnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msa0NBQWlDLHFCQUFxQixDQUFDLENBQUE7QUFDdkQsdUNBQXFDLDBCQUEwQixDQUFDLENBQUE7QUFPaEU7SUFBQTtJQUE2QixDQUFDO0lBTDlCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSw2Q0FBb0IsQ0FBQztZQUM3QyxZQUFZLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztZQUNoQyxPQUFPLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztTQUM1QixDQUFDOztxQkFBQTtJQUMyQixvQkFBQztBQUFELENBQTdCLEFBQThCLElBQUE7QUFBakIscUJBQWEsZ0JBQUksQ0FBQSIsImZpbGUiOiJhcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFjY291bnRDb21wb25lbnQgfSBmcm9tICcuL2FjY291bnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWNjb3VudFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FjY291bnQtcm91dGluZy5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBBY2NvdW50Um91dGluZ01vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQWNjb3VudENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0FjY291bnRDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50TW9kdWxlIHsgfVxyXG4iXX0=
