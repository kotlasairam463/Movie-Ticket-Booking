import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintasksComponent } from './admintasks.component';

describe('AdmintasksComponent', () => {
  let component: AdmintasksComponent;
  let fixture: ComponentFixture<AdmintasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmintasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmintasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
