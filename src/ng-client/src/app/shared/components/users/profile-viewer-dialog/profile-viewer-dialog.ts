import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ProfileViewer } from '../profile-viewer/profile-viewer';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { UserProfile } from '../../../../core/models/user.model';
import { UserService } from '../../../../core/services/user.service';
import { MatButton } from '@angular/material/button';
import { ProfileEditorDialog } from '../profile-editor-dialog/profile-editor-dialog';

@Component({
  selector: 'app-profile-viewer-dialog',
  imports: [
    MatDialogModule,
    MatIcon,
    MatProgressSpinner,
    MatButton,
    ProfileViewer
  ],
  templateUrl: './profile-viewer-dialog.html',
  styleUrl: './profile-viewer-dialog.scss'
})
export class ProfileViewerDialog implements OnInit {
  @ViewChild('profileEditor') profileEditor!: ProfileViewer;
  isLoading = false;
  profile?: UserProfile;
  isMyself = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<ProfileViewerDialog>,
    private snackBar: MatSnackBar,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getProfileById(this.data.id).subscribe({
      next: (profile) => {
        this.profile = profile;
        this.isMyself = this.data.id === this.userService.currentUser?.id;
      },
      error: (err) => {
        this.snackBar.open('Failed to load profile', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
        console.error('Error loading profile:', err);
      }
    });
  }

  onClose() {
    this.dialogRef.close();
  }

  onAdd() {

  }

  onEdit() {
    this.dialogRef.close();
    this.dialog.open(ProfileEditorDialog, {
      width: '400px'
    });
  }
}
