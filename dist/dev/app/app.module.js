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
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
var account_module_1 = require('./pages/account/account.module');
var home_module_1 = require('./pages/home/home.module');
var cities_module_1 = require('./pages/cities/cities.module');
var explore_module_1 = require('./pages/explore/explore.module');
var shared_module_1 = require('./shared/shared.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                shared_module_1.SharedModule.forRoot(),
                account_module_1.AccountModule,
                home_module_1.HomeModule,
                cities_module_1.CitiesModule,
                explore_module_1.ExploreModule
            ],
            declarations: [app_component_1.AppComponent],
            providers: [{
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/'
                }],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLG1DQUFpQyxzQkFBc0IsQ0FBQyxDQUFBO0FBR3hELCtCQUE4QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQy9ELDRCQUEyQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3RELDhCQUE2Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBQzVELCtCQUE4QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRy9ELDhCQUE2Qix3QkFBd0IsQ0FBQyxDQUFBO0FBcUJ0RDtJQUFBO0lBQXlCLENBQUM7SUFuQjFCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLGdDQUFhO2dCQUNiLGlCQUFVO2dCQUNWLHFDQUFnQjtnQkFDaEIsNEJBQVksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3RCLDhCQUFhO2dCQUNiLHdCQUFVO2dCQUNWLDRCQUFZO2dCQUNaLDhCQUFhO2FBQ2Q7WUFDRCxZQUFZLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQzVCLFNBQVMsRUFBRSxDQUFDO29CQUNWLE9BQU8sRUFBRSxzQkFBYTtvQkFDdEIsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUIsQ0FBQztZQUNGLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FFMUIsQ0FBQzs7aUJBQUE7SUFDdUIsZ0JBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsaUJBQVMsWUFBSSxDQUFBIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBBUFBfQkFTRV9IUkVGIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xyXG5cclxuLy8gUGFnZXNcclxuaW1wb3J0IHsgQWNjb3VudE1vZHVsZSB9IGZyb20gJy4vcGFnZXMvYWNjb3VudC9hY2NvdW50Lm1vZHVsZSc7XHJcbmltcG9ydCB7IEhvbWVNb2R1bGUgfSBmcm9tICcuL3BhZ2VzL2hvbWUvaG9tZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBDaXRpZXNNb2R1bGUgfSBmcm9tICcuL3BhZ2VzL2NpdGllcy9jaXRpZXMubW9kdWxlJztcclxuaW1wb3J0IHsgRXhwbG9yZU1vZHVsZSB9IGZyb20gJy4vcGFnZXMvZXhwbG9yZS9leHBsb3JlLm1vZHVsZSc7XHJcblxyXG4vLyBTaGFyZWRcclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICBIdHRwTW9kdWxlLFxyXG4gICAgQXBwUm91dGluZ01vZHVsZSxcclxuICAgIFNoYXJlZE1vZHVsZS5mb3JSb290KCksXHJcbiAgICBBY2NvdW50TW9kdWxlLFxyXG4gICAgSG9tZU1vZHVsZSxcclxuICAgIENpdGllc01vZHVsZSxcclxuICAgIEV4cGxvcmVNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbe1xyXG4gICAgcHJvdmlkZTogQVBQX0JBU0VfSFJFRixcclxuICAgIHVzZVZhbHVlOiAnPCU9IEFQUF9CQVNFICU+J1xyXG4gIH1dLFxyXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==
