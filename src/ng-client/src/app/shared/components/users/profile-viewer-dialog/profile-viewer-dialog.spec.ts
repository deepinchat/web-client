import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileViewerDialog } from './profile-viewer-dialog';

describe('ProfileViewerDialog', () => {
  let component: ProfileViewerDialog;
  let fixture: ComponentFixture<ProfileViewerDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileViewerDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileViewerDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
