import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Greeting } from './greeting';
import { GREETINGS } from './mock-greetings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  private greetingsUrl = 'api/greetings';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, private messageService: MessageService) { }


  getGreetings(): Observable<Greeting[]> {
    //const greetings = of(GREETINGS);
    const greetings = this.http.get<Greeting[]>(this.greetingsUrl)
    .pipe(
      tap(_ => this.log('fetched greetings')),
      catchError(this.handleError<Greeting[]>('getGreetings', []))
    );
    this.messageService.add('GreetingService: fetched greetings');
    return greetings;
  }

  getGreeting(id: number): Observable<Greeting> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const url = `${this.greetingsUrl}/${id}`;
    // const greeting = GREETINGS.find(h => h.id === id)!;
    // this.messageService.add(`GreetingService: fetched greeting id=${id}`);
    // return of(greeting);
    return this.http.get<Greeting>(url).pipe(
      tap(_ => this.log(`fetched greeting id=${id}`)),
      catchError(this.handleError<Greeting>(`getGreeting id=${id}`))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`GreetingService: ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
    };
  }
  /** PUT: update the hero on the server */
updateHero(hero: Greeting): Observable<any> {
  return this.http.put(this.greetingsUrl, hero, this.httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${hero.id}`)),
    catchError(this.handleError<any>('updateHero'))
  );
  }

  /** POST: add a new hero to the server */
addGreeting(greeting: Greeting): Observable<Greeting> {
  return this.http.post<Greeting>(this.greetingsUrl, greeting, this.httpOptions).pipe(
    tap((newGreeting: Greeting) => this.log(`added greeting w/ id=${newGreeting.id}`)),
    catchError(this.handleError<Greeting>('addGreeting'))
  );
  }
/** DELETE: delete the hero from the server */
deleteGreeting(id: number): Observable<Greeting> {
  const url = `${this.greetingsUrl}/${id}`;

  return this.http.delete<Greeting>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted greeting id=${id}`)),
    catchError(this.handleError<Greeting>('deleteGreeting'))
  );
  }

}
