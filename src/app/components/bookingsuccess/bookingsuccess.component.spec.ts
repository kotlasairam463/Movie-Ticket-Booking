import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsuccessComponent } from './bookingsuccess.component';

describe('BookingsuccessComponent', () => {
  let component: BookingsuccessComponent;
  let fixture: ComponentFixture<BookingsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingsuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
