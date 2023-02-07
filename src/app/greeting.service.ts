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
}
