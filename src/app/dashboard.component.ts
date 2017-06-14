import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-dashboard',
  templateUrl: `./dashboard.component.html`,
  styleUrls: [ './dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  // 告诉 Angular dashboardComponent 的构建需要 HeroService
  // HeroService 在根模块中声明了 providers 创建了一个单例对象
  // 所有组件都可以使用它 Angular 会把 HeroService 注入到 DashboardComponent
  constructor(private HeroService: HeroService) {}

  // 实现生命周期钩子来完成 heroes 初始化 得到第2、3、4、5位英雄
  ngOnInit(): void {
    this.HeroService.getHeroes()
      .then(heroesFromService => this.heroes = heroesFromService.slice(1, 5));
  }

}
