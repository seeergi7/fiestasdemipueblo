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
var cities_component_1 = require('./cities.component');
var cities_routing_module_1 = require('./cities-routing.module');
var CitiesModule = (function () {
    function CitiesModule() {
    }
    CitiesModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, cities_routing_module_1.CitiesRoutingModule],
            declarations: [cities_component_1.CitiesComponent],
            exports: [cities_component_1.CitiesComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], CitiesModule);
    return CitiesModule;
}());
exports.CitiesModule = CitiesModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9jaXRpZXMvY2l0aWVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3JELHNDQUFvQyx5QkFBeUIsQ0FBQyxDQUFBO0FBTzlEO0lBQUE7SUFBNEIsQ0FBQztJQUw3QjtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUsMkNBQW1CLENBQUM7WUFDNUMsWUFBWSxFQUFFLENBQUMsa0NBQWUsQ0FBQztZQUMvQixPQUFPLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1NBQzNCLENBQUM7O29CQUFBO0lBQzBCLG1CQUFDO0FBQUQsQ0FBNUIsQUFBNkIsSUFBQTtBQUFoQixvQkFBWSxlQUFJLENBQUEiLCJmaWxlIjoiYXBwL3BhZ2VzL2NpdGllcy9jaXRpZXMubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ2l0aWVzQ29tcG9uZW50IH0gZnJvbSAnLi9jaXRpZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2l0aWVzUm91dGluZ01vZHVsZSB9IGZyb20gJy4vY2l0aWVzLXJvdXRpbmcubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ2l0aWVzUm91dGluZ01vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQ2l0aWVzQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQ2l0aWVzQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2l0aWVzTW9kdWxlIHsgfVxyXG4iXX0=
