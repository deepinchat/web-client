import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileViewer } from './profile-viewer';

describe('ProfileViewer', () => {
  let component: ProfileViewer;
  let fixture: ComponentFixture<ProfileViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
