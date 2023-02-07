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
  selectedGreeting?: Greeting;

  constructor(private greetingService: GreetingService, private messageService: MessageService) {}

  getGreetings(): void {

    this.greetingService.getGreetings()
      .subscribe(greetings => this.greetings = greetings);
  }

  onSelect(greeting: Greeting): void {
    this.selectedGreeting = greeting;
    this.messageService.add(`GreetingsComponent: Selected greeting ${greeting.greet}, lang=${greeting.lang}`);
  }

  ngOnInit(): void {
    this.getGreetings();
  }
}
