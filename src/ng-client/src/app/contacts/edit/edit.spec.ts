import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEdit } from './edit';

describe('ContactEdit', () => {
  let component: ContactEdit;
  let fixture: ComponentFixture<ContactEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
