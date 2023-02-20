import { Component } from '@angular/core';
import { Greeting } from '../greeting';
//import { GREETINGS } from '../mock-greetings';
import { GreetingService } from '../greeting.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent {
  greetings: Greeting[] = [];

  constructor(private greetingService: GreetingService) {}

  getGreetings(): void {

    this.greetingService.getGreetings()
      .subscribe(greetings => this.greetings = greetings);
  }

  ngOnInit(): void {
    this.getGreetings();
  }

  add(greetEn: string, greetLang: string, greetTranslated: string): void {
    const greet_en = greetEn.trim();
    const lang = greetLang.trim();
    const greet = greetTranslated.trim();
    if (! greetEn ||  !greetLang || !greetTranslated) { return; }
    this.greetingService.addGreeting({ greet_en, lang, greet} as Greeting)
      .subscribe(greeting => {
        this.greetings.push(greeting);
      });
  }

  delete(hero: Greeting): void {
    this.greetings = this.greetings.filter(h => h !== hero);
    this.greetingService.deleteGreeting(hero.id).subscribe();
  }
}
