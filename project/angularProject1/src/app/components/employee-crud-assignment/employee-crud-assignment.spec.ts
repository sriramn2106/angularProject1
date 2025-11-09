import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCrudAssignment } from './employee-crud-assignment';

describe('EmployeeCrudAssignment', () => {
  let component: EmployeeCrudAssignment;
  let fixture: ComponentFixture<EmployeeCrudAssignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCrudAssignment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCrudAssignment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
