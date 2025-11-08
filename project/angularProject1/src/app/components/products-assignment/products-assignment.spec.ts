import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAssignment } from './products-assignment';

describe('ProductsAssignment', () => {
  let component: ProductsAssignment;
  let fixture: ComponentFixture<ProductsAssignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsAssignment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsAssignment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
