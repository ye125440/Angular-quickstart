import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-app', // Angular 会把 AppComponent 的一个实例插入到 'my-app' 这个标签中
  // 内联模版 也可以用 templateUrl 属性把模版定义在独立的 html 文件中
  template: `
    <hero-form></hero-form>
  `
})
export class AppComponent  { 

}

