import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeServiceAssignment } from './employee-service-assignment';

describe('EmployeeServiceAssignment', () => {
  let component: EmployeeServiceAssignment;
  let fixture: ComponentFixture<EmployeeServiceAssignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeServiceAssignment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeServiceAssignment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
