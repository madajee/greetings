import { Component, Input } from '@angular/core';
import { Greeting } from '../greeting';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GreetingService } from '../greeting.service';

@Component({
  selector: 'app-greeting-detail',
  templateUrl: './greeting-detail.component.html',
  styleUrls: ['./greeting-detail.component.css']
})
export class GreetingDetailComponent {
  greeting: Greeting | undefined;

  constructor(
    private route: ActivatedRoute,
    private greetingService: GreetingService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getGreeting();
  }

  getGreeting(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.greetingService.getGreeting(id)
      .subscribe(greeting => this.greeting = greeting);
  }

  goBack(): void {
    this.location.back();
  }

}
