import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-app', // Angular 会把 AppComponent 的一个实例插入到 'my-app' 这个标签中
  // 内联模版 也可以用 templateUrl 属性把模版定义在独立的 html 文件中
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name }}
      </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
  `
})
export class AppComponent  { 
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windsorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Mageneta'),
    new Hero(20, 'Tornado'),
  ];
  myHero = this.heroes[0];
}

