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
var home_component_1 = require('./home.component');
var home_routing_module_1 = require('./home-routing.module');
var shared_module_1 = require('../../shared/shared.module');
var name_list_service_1 = require('../../shared/name-list/name-list.service');
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, home_routing_module_1.HomeRoutingModule, shared_module_1.SharedModule],
            declarations: [home_component_1.HomeComponent],
            exports: [home_component_1.HomeComponent],
            providers: [name_list_service_1.NameListService]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9leHBsb3JlL2hvbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsK0JBQThCLGtCQUFrQixDQUFDLENBQUE7QUFDakQsb0NBQWtDLHVCQUF1QixDQUFDLENBQUE7QUFDMUQsOEJBQTZCLDRCQUE0QixDQUFDLENBQUE7QUFDMUQsa0NBQWdDLDBDQUEwQyxDQUFDLENBQUE7QUFRM0U7SUFBQTtJQUEwQixDQUFDO0lBTjNCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSx1Q0FBaUIsRUFBRSw0QkFBWSxDQUFDO1lBQ3hELFlBQVksRUFBRSxDQUFDLDhCQUFhLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsOEJBQWEsQ0FBQztZQUN4QixTQUFTLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO1NBQzdCLENBQUM7O2tCQUFBO0lBQ3dCLGlCQUFDO0FBQUQsQ0FBMUIsQUFBMkIsSUFBQTtBQUFkLGtCQUFVLGFBQUksQ0FBQSIsImZpbGUiOiJhcHAvcGFnZXMvZXhwbG9yZS9ob21lLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2hvbWUtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XHJcbmltcG9ydCB7IE5hbWVMaXN0U2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9uYW1lLWxpc3QvbmFtZS1saXN0LnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIb21lUm91dGluZ01vZHVsZSwgU2hhcmVkTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtIb21lQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbSG9tZUNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbTmFtZUxpc3RTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7IH1cclxuIl19
