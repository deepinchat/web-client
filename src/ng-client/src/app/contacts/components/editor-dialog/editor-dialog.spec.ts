import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDialog } from './editor-dialog';

describe('EditorDialog', () => {
  let component: EditorDialog;
  let fixture: ComponentFixture<EditorDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
