import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAssignmentItem } from './product-assignment-item';

describe('ProductAssignmentItem', () => {
  let component: ProductAssignmentItem;
  let fixture: ComponentFixture<ProductAssignmentItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductAssignmentItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAssignmentItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
