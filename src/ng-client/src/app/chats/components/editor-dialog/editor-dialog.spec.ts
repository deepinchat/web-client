import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatEditorDialog } from './editor-dialog';

describe('ChatEditorDialog', () => {
  let component: ChatEditorDialog;
  let fixture: ComponentFixture<ChatEditorDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatEditorDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatEditorDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
