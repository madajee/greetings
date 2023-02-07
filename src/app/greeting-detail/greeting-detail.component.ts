import { Component, Input } from '@angular/core';
import { Greeting } from '../greeting';

@Component({
  selector: 'app-greeting-detail',
  templateUrl: './greeting-detail.component.html',
  styleUrls: ['./greeting-detail.component.css']
})
export class GreetingDetailComponent {
  @Input() greeting?: Greeting;
}
