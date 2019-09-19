import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
})
export class HeroDetailsComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {
    /* Check for id in params */
    const id = +this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.messageService.add('No valid hero id found');
      this.location.go('/dashboard');
    } else {
      this.getHero(id);
    }
  }

  getHero(id: number) {
    this.heroService.getHeroById(id).subscribe(hero => (this.hero = hero));
  }

  goBack() {
    this.location.back();
  }
}
