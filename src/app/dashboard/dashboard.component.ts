import { Component } from '@angular/core';
import { Greeting } from '../greeting';
import { GreetingService } from '../greeting.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  greetings: Greeting[] = [];

  constructor(private greetingService: GreetingService) {}

  getGreetings(): void {

    this.greetingService.getGreetings()
      .subscribe(greetings => this.greetings = greetings.slice(0, 5));
  }

  ngOnInit(): void {
    this.getGreetings();
  }
}
