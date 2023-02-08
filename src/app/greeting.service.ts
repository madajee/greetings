import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Greeting } from './greeting';
import { GREETINGS } from './mock-greetings';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor(private messageService: MessageService) { }


  getGreetings(): Observable<Greeting[]> {
    const greetings = of(GREETINGS);
    this.messageService.add('GreetingService: fetched greetings');
    return greetings;
  }

  getGreeting(id: number): Observable<Greeting> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const greeting = GREETINGS.find(h => h.id === id)!;
    this.messageService.add(`GreetingService: fetched greeting id=${id}`);
    return of(greeting);
  }
}
