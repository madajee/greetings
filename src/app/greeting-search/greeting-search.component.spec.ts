import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingSearchComponent } from './greeting-search.component';

describe('GreetingSearchComponent', () => {
  let component: GreetingSearchComponent;
  let fixture: ComponentFixture<GreetingSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
