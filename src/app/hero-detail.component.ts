import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Hero } from './hero';

import { HeroService } from './hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private router: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.router.params
      .switchMap((params: Params) =>
      this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
  this.heroService.update(this.hero)
    .then(() => this.goBack());
  }
}
