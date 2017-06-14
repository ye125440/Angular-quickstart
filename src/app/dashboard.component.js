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
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var DashboardComponent = (function () {
    // 告诉 Angular dashboardComponent 的构建需要 HeroService
    // HeroService 在根模块中声明了 providers 创建了一个单例对象
    // 所有组件都可以使用它 Angular 会把 HeroService 注入到 DashboardComponent
    function DashboardComponent(HeroService) {
        this.HeroService = HeroService;
        this.heroes = [];
    }
    // 实现生命周期钩子来完成 heroes 初始化 得到第2、3、4、5位英雄
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.HeroService.getHeroes()
            .then(function (heroesFromService) { return _this.heroes = heroesFromService.slice(1, 5); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        templateUrl: "./dashboard.component.html",
        styleUrls: ['./dashboard.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map