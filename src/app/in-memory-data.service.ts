import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Greeting} from './greeting';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const greetings = [
      { id: 1, greet_en: 'hello', lang: 'es', greet: 'Hola'},
      { id: 2, greet_en: 'good morning', lang: 'es', greet: 'buenos dias'},
      { id: 3, greet_en: 'hello', lang: 'fr', greet: 'Bonjour'},
      { id: 4, greet_en: 'hello', lang: 'hi', greet: 'Namaste'}
    ];
    return {greetings};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(greetings: Greeting[]): number {
    return greetings.length > 0 ? Math.max(...greetings.map(greeting => greeting.id)) + 1 : 3;
  }
}
