import { Component, OnDestroy } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../../core/services/user.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ContactService } from '../../../core/services/contact.service';
import { FormErrors } from '../../../shared/components/form-errors/form-errors';
import { ErrorHandler } from '../../../core/services/error-handler';

@Component({
  selector: 'add-contact-dialog',
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatIcon,
    MatProgressSpinner,
    MatButton,
    MatFormField,
    MatInputModule,
    MatLabel,
    FormErrors
  ],
  templateUrl: './add-dialog.html',
  styleUrl: './add-dialog.scss'
})
export class AddContactDialog implements OnDestroy {
  identityControl = new FormControl('', [Validators.required, Validators.maxLength(50)]);
  isLoading = false;
  constructor(
    private dialogRef: MatDialogRef<AddContactDialog>,
    private snackBar: MatSnackBar,
    private contactService: ContactService,
    private errorHandler: ErrorHandler
  ) { }

  ngOnDestroy(): void {
    this.errorHandler.clearError();
  }


  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.identityControl.invalid || this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.errorHandler.clearError();
    const identity = this.identityControl.value?.trim();
    this.contactService.create({
      userIdentity: identity!
    }).subscribe({
      next: () => {
        this.snackBar.open(`Contact with identity ${identity} added successfully.`, 'Close', { duration: 3000 });
        this.dialogRef.close(true);
        this.identityControl.setValue('');
      },
      error: (err) => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}
