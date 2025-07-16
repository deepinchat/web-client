import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../core/services/contact.service';
import { MatFormField, MatInputModule, MatLabel, MatError } from "@angular/material/input";
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'contact-edit',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatLabel,
    MatFormField,
    MatError,
    MatButton,
    MatIcon,
    MatDatepickerModule,
    MatCardModule,
    MatProgressSpinner,
  ],
  templateUrl: './edit.html',
  styleUrl: './edit.scss',
  providers: [provideNativeDateAdapter()],
})
export class ContactEdit implements OnInit {
  form?: FormGroup;
  isLoading = false;
  isSaving = false;
  id?: string;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private contactService: ContactService,
    private snackBar: MatSnackBar
  ) {
    this.id = this.route.snapshot.params['id'];
    route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.buildForm();
    if (this.id) {
      this.loadContact(this.id);
    }
  }

  private loadContact(id: string) {
    if (!this.id) {
      return;
    }
    this.isLoading = true;
    this.contactService.getById(this.id).subscribe({
      next: (contact) => {
        this.form?.patchValue(contact);
      },
      error: (ex) => {
        console.error('Failed to load contact', ex);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  private buildForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      firstName: [''],
      lastName: [''],
      email: ['', [Validators.email]],
      phoneNumber: [''],
      company: [''],
      birthday: [''],
      address: [''],
      notes: ['']
    });
  }

  getErrorMessage(fieldName: string): string {
    const field = this.form?.get(fieldName);
    if (field?.hasError('required')) {
      return `${fieldName === 'name' ? 'Display name' : fieldName} is required`;
    }
    if (field?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    if (field?.hasError('minlength')) {
      return 'Name must be at least 2 characters long';
    }
    return '';
  }

  onCancel() {
    this.router.navigate(['/contacts']);
  }

  onSubmit() {
    if (!this.form || this.form.invalid) {
      this.markFormGroupTouched();
      return;
    }
    
    this.isSaving = true;
    const request = this.form.value;
    
    if (this.id) {
      this.contactService.update(this.id, request).subscribe({
        next: (contact) => {
          this.snackBar.open('Contact updated successfully!', 'Close', { 
            duration: 3000,
            panelClass: ['success-snackbar']
          });
          this.router.navigate(['/contacts']);
        },
        error: (ex) => {
          console.error('Failed to update contact', ex);
          this.snackBar.open('Failed to update contact. Please try again.', 'Close', { 
            duration: 3000,
            panelClass: ['error-snackbar']
          });
        },
        complete: () => {
          this.isSaving = false;
        }
      });
    } else {
      this.contactService.create(request).subscribe({
        next: (contact) => {
          this.snackBar.open('Contact created successfully!', 'Close', { 
            duration: 3000,
            panelClass: ['success-snackbar']
          });
          this.router.navigate(['/contacts']);
        },
        error: (ex) => {
          console.error('Failed to create contact', ex);
          this.snackBar.open('Failed to create contact. Please try again.', 'Close', { 
            duration: 3000,
            panelClass: ['error-snackbar']
          });
        },
        complete: () => {
          this.isSaving = false;
        }
      });
    }
  }

  private markFormGroupTouched() {
    if (this.form) {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form?.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }
}
