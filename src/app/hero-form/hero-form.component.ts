import { Component } from '@angular/core';
import { HeroModel } from '../hero-model';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer']

  model = new HeroModel(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  newHero(){
    this.model = new HeroModel(42, '', '');
  }

  onSubmit() { this.submitted = true; }
}
