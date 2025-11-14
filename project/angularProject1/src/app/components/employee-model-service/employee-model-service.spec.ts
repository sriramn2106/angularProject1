import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeModelService } from './employee-model-service';

describe('EmployeeModelService', () => {
  let component: EmployeeModelService;
  let fixture: ComponentFixture<EmployeeModelService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeModelService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeModelService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
