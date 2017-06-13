"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var hero_form_component_1 = require("./hero-form.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}()); // 5.语句只是用于演示如何导出的，它在这个例子中并不是必须的。根模块不需要导出任何东西，因为其它组件不需要导入根模块。
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            hero_form_component_1.HeroFormComponent // 7.把HeroFormComponent添加到ngModule装饰器的declarations列表中，使HeroFormComponent组件在整个模块中可见
        ],
        bootstrap: [app_component_1.AppComponent] // 指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性。
    })
], AppModule);
exports.AppModule = AppModule;
// 6.通过引导根模块来启动应用。 在开发期间，你通常在一个main.ts文件中引导AppModule 
//# sourceMappingURL=app.module.js.map