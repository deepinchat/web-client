import { Component, Inject } from '@angular/core';
import { ContactModel, UpdateContactRequest } from '../../../core/models/contacts.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ContactService } from '../../../core/services/contact.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'contact-editor-dialog',
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatIcon,
    MatProgressSpinner,
    MatButton,
    MatFormField,
    MatInputModule,
    MatLabel
  ],
  templateUrl: './editor-dialog.html',
  styleUrl: './editor-dialog.scss'
})
export class ContactEditorDialog {
  form?: FormGroup;
  isLoading = false;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ContactEditorDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { contact: ContactModel },
    private snackBar: MatSnackBar,
    private contactService: ContactService
  ) { }
  ngOnInit() {
    this.buildForm();
    if (this.data.contact && this.form) {
      this.form.patchValue(this.data.contact);
    }
  }

  formControlErrors(name: string) {
    return this.form?.get(name)?.errors;
  }

  formControlValue(name: string) {
    return this.form?.get(name)?.value;
  }

  buildForm() {
    this.form = this.fb.group({
      name: this.fb.control('', [Validators.maxLength(32)]),
      notes: this.fb.control('', [Validators.maxLength(1024)]),
    });
  }

  onSubmit() {
    if (!this.form || this.isLoading || this.form.invalid)
      return;
    this.isLoading = true;
    const contact = this.form!.value as UpdateContactRequest;
    this.contactService.update(this.data.contact.id, contact)
      .subscribe({
        next: (updatedContact) => {
          this.dialogRef.close(updatedContact);
        },
        error: (err) => {
          console.error('Failed to update contact', err);
          this.snackBar.open('Failed to update contact.', 'Close', { duration: 3000 });
        },
        complete: () => {
          this.isLoading = false;
        }
      })
  }

  onCancel() {
    this.dialogRef.close();
  }
}
