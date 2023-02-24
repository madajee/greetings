import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Greeting } from '../greeting';
import { GreetingService } from '../greeting.service';

@Component({
  selector: 'app-greeting-search',
  templateUrl: './greeting-search.component.html',
  styleUrls: ['./greeting-search.component.css']
})
export class GreetingSearchComponent implements OnInit {
  greetings$!: Observable<Greeting[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: GreetingService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.greetings$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchGreetings(term)),
    );
  }
}
