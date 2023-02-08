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
}