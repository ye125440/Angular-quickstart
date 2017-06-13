import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroFormComponent } from './hero-form.component'

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule
  ], //  1.本模块声明的组件模板需要的类所在的其它模块。
  declarations: [ 
    AppComponent,
    HeroFormComponent // 7.把HeroFormComponent添加到ngModule装饰器的declarations列表中，使HeroFormComponent组件在整个模块中可见
  ], // 2.声明本模块中拥有的视图类。Angular 有三种视图类：组件、指令和管道。
  bootstrap:    [ AppComponent ] // 指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性。
  // 3.provider:  [ ]  服务的创建者，并加入到全局服务列表中，可用于应用任何部分。
  // 4.export:    [ ]  declarations 的子集，可用于其它模块的组件模板。
})
export class AppModule { }  // 5.语句只是用于演示如何导出的，它在这个例子中并不是必须的。根模块不需要导出任何东西，因为其它组件不需要导入根模块。
// 6.通过引导根模块来启动应用。 在开发期间，你通常在一个main.ts文件中引导AppModule