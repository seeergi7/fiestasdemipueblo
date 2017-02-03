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
var cities_component_1 = require('./cities.component');
var CitiesRoutingModule = (function () {
    function CitiesRoutingModule() {
    }
    CitiesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'cities', component: cities_component_1.CitiesComponent }
                ])
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], CitiesRoutingModule);
    return CitiesRoutingModule;
}());
exports.CitiesRoutingModule = CitiesRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9jaXRpZXMvY2l0aWVzLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFVckQ7SUFBQTtJQUFtQyxDQUFDO0lBUnBDO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZLENBQUMsUUFBUSxDQUFDO29CQUNwQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUU7aUJBQy9DLENBQUM7YUFDSDtZQUNELE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7U0FDeEIsQ0FBQzs7MkJBQUE7SUFDaUMsMEJBQUM7QUFBRCxDQUFuQyxBQUFvQyxJQUFBO0FBQXZCLDJCQUFtQixzQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9wYWdlcy9jaXRpZXMvY2l0aWVzLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ2l0aWVzQ29tcG9uZW50IH0gZnJvbSAnLi9jaXRpZXMuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcclxuICAgICAgeyBwYXRoOiAnY2l0aWVzJywgY29tcG9uZW50OiBDaXRpZXNDb21wb25lbnQgfVxyXG4gICAgXSlcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaXRpZXNSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=
