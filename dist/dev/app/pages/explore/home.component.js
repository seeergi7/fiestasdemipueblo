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
var name_list_service_1 = require('../../shared/name-list/name-list.service');
var HomeComponent = (function () {
    function HomeComponent(nameListService) {
        this.nameListService = nameListService;
        this.newName = '';
        this.names = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getNames();
    };
    HomeComponent.prototype.getNames = function () {
        var _this = this;
        this.nameListService.get()
            .subscribe(function (names) { return _this.names = names; }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.addName = function () {
        this.names.push(this.newName);
        this.newName = '';
        return false;
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
        }), 
        __metadata('design:paramtypes', [name_list_service_1.NameListService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9leHBsb3JlL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsa0NBQWdDLDBDQUEwQyxDQUFDLENBQUE7QUFXM0U7SUFZRSx1QkFBbUIsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBVm5ELFlBQU8sR0FBVyxFQUFFLENBQUM7UUFFckIsVUFBSyxHQUFVLEVBQUUsQ0FBQztJQVFvQyxDQUFDO0lBS3ZELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUtELGdDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFO2FBQ3ZCLFNBQVMsQ0FDUixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixFQUMzQixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQVEsS0FBSyxFQUE5QixDQUE4QixDQUN4QyxDQUFDO0lBQ04sQ0FBQztJQU1ELCtCQUFPLEdBQVA7UUFFRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUEvQ0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSxxQkFBcUI7WUFDbEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDbEMsQ0FBQzs7cUJBQUE7SUE0Q0Ysb0JBQUM7QUFBRCxDQTNDQSxBQTJDQyxJQUFBO0FBM0NZLHFCQUFhLGdCQTJDekIsQ0FBQSIsImZpbGUiOiJhcHAvcGFnZXMvZXhwbG9yZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hbWVMaXN0U2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9uYW1lLWxpc3QvbmFtZS1saXN0LnNlcnZpY2UnO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzZC1ob21lJyxcclxuICB0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydob21lLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBuZXdOYW1lOiBzdHJpbmcgPSAnJztcclxuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuICBuYW1lczogYW55W10gPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgSG9tZUNvbXBvbmVudCB3aXRoIHRoZSBpbmplY3RlZFxyXG4gICAqIE5hbWVMaXN0U2VydmljZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TmFtZUxpc3RTZXJ2aWNlfSBuYW1lTGlzdFNlcnZpY2UgLSBUaGUgaW5qZWN0ZWQgTmFtZUxpc3RTZXJ2aWNlLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lTGlzdFNlcnZpY2U6IE5hbWVMaXN0U2VydmljZSkge31cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBuYW1lcyBPbkluaXRcclxuICAgKi9cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZ2V0TmFtZXMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZSB0aGUgbmFtZUxpc3RTZXJ2aWNlIG9ic2VydmFibGVcclxuICAgKi9cclxuICBnZXROYW1lcygpIHtcclxuICAgIHRoaXMubmFtZUxpc3RTZXJ2aWNlLmdldCgpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgbmFtZXMgPT4gdGhpcy5uYW1lcyA9IG5hbWVzLFxyXG4gICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvclxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHVzaGVzIGEgbmV3IG5hbWUgb250byB0aGUgbmFtZXMgYXJyYXlcclxuICAgKiBAcmV0dXJuIHtib29sZWFufSBmYWxzZSB0byBwcmV2ZW50IGRlZmF1bHQgZm9ybSBzdWJtaXQgYmVoYXZpb3IgdG8gcmVmcmVzaCB0aGUgcGFnZS5cclxuICAgKi9cclxuICBhZGROYW1lKCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gVE9ETzogaW1wbGVtZW50IG5hbWVMaXN0U2VydmljZS5wb3N0XHJcbiAgICB0aGlzLm5hbWVzLnB1c2godGhpcy5uZXdOYW1lKTtcclxuICAgIHRoaXMubmV3TmFtZSA9ICcnO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
