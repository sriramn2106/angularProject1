import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crudcomponent } from './crudcomponent';

describe('Crudcomponent', () => {
  let component: Crudcomponent;
  let fixture: ComponentFixture<Crudcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Crudcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Crudcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
