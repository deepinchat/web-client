import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditorDialog } from './profile-editor-dialog';

describe('ProfileEditorDialog', () => {
  let component: ProfileEditorDialog;
  let fixture: ComponentFixture<ProfileEditorDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileEditorDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileEditorDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
