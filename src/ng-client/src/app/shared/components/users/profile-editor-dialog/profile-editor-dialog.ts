import { Component, ViewChild } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ProfileEditor } from '../profile-editor/profile-editor';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'profile-editor-dialog',
  templateUrl: './profile-editor-dialog.html',
  styleUrl: './profile-editor-dialog.scss',
  imports: [
    MatDialogModule,
    MatIcon,
    MatProgressSpinner,
    MatButton,
    ProfileEditor
  ],
})
export class ProfileEditorDialog {
  @ViewChild('profileEditor') profileEditor!: ProfileEditor;
  constructor(
    private dialogRef: MatDialogRef<ProfileEditorDialog>,
    private snackBar: MatSnackBar,
  ) { }

  onSubmit() {
    this.profileEditor.onSubmit()
      .then(() => {
        this.dialogRef.close();
        this.snackBar.open('Profile updated successfully', 'Close', {
          duration: 3000
        });
      });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
