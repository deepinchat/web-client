import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../core/services/contact.service';
import { MatFormField, MatInputModule, MatLabel } from "@angular/material/input";
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'contact-edit',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatLabel,
    MatFormField,
    MatButton,
    MatIcon,
    MatDatepickerModule,
  ],
  templateUrl: './edit.html',
  styleUrl: './edit.scss',
  providers: [provideNativeDateAdapter()],
})
export class ContactEdit implements OnInit {
  form?: FormGroup;
  isLoading = false;
  id?: string;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private contactService: ContactService
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
    this.form = new FormGroup({
      name: this.fb.control(''),
      firstName: this.fb.control(''),
      lastName: this.fb.control(''),
      email: this.fb.control(''),
      phoneNumber: this.fb.control(''),
      company: this.fb.control(''),
      birthday: this.fb.control(''),
      address: this.fb.control(''),
      notes: this.fb.control('')
    });
  }

  onSubmit() {
    if (!this.form) {
      return;
    }
    this.isLoading = true;
    const request = this.form.value;
    if (this.id) {
      this.contactService.update(this.id, request).subscribe({
        next: (contact) => {
          console.log('Contact updated successfully', contact);
        },
        error: (ex) => {
          console.error('Failed to update contact', ex);
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    } else {
      this.contactService.create(request).subscribe({
        next: (contact) => {
          console.log('Contact created successfully', contact);
        },
        error: (ex) => {
          console.error('Failed to create contact', ex);
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    }
  }
}
