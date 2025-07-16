import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatEditor } from './editor';

describe('ChatEditor', () => {
  let component: ChatEditor;
  let fixture: ComponentFixture<ChatEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
