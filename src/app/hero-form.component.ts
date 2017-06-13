import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
	// tslint:disable-next-line:indent
	selector: 'hero-form', // 在 app.module.ts 的 @Component template 中
	templateUrl: './hero-form.component.html'
})
export class HeroFormComponent {

	// tslint:disable-next-line:indent
	powers = ['Really Smart', 'Super Flexible',
			  'Super Hot', 'Weather Changer'];

	// tslint:disable-next-line:indent
	model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
	// tslint:disable-next-line:indent
	submitted = false;
	onSubmit() {
		// tslint:disable-next-line:indent
		this.submitted = true;
	}

	// get diagnostic(): string {
	// 	return JSON.stringify(this.model);
	// }

	// tslint:disable-next-line:indent
	newHero() {
		// tslint:disable-next-line:indent
		this.model = new Hero(42, '', '');
	}
}
