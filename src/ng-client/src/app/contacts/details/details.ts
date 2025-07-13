import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../core/services/contact.service';
import { ContactModel } from '../../core/models/contacts.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'contact-details',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  templateUrl: './details.html',
  styleUrl: './details.scss'
})
export class ContactDetails implements OnInit {
  id: string = '';
  contact?: ContactModel;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService,
    private snackBar: MatSnackBar
  ) {
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.loadContact(this.id);
      }
    });
  }

  ngOnInit(): void {
    if (this.id) {
      this.loadContact(this.id);
    }
  }

  private loadContact(id: string) {
    if (!id) {
      return;
    }

    this.isLoading = true;
    this.contactService.getById(id).subscribe({
      next: (contact) => {
        this.contact = contact;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading contact:', err);
        this.isLoading = false;
        this.snackBar.open('Failed to load contact details', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    });
  }

  onEdit() {
    if (this.contact) {
      this.router.navigate(['/contacts', this.contact.id, 'edit']);
    }
  }

  onBack() {
    this.router.navigate(['/contacts']);
  }

  onToggleStar() {
    if (!this.contact) return;

    // TODO: Implement star/unstar functionality
    this.snackBar.open(
      this.contact.isStarred ? 'Contact unstarred' : 'Contact starred',
      'Close',
      { duration: 2000 }
    );
  }

  onToggleBlock() {
    if (!this.contact) return;

    // TODO: Implement block/unblock functionality
    this.snackBar.open(
      this.contact.isBlocked ? 'Contact unblocked' : 'Contact blocked',
      'Close',
      { duration: 2000 }
    );
  }

  formatDate(date: Date): string {
    if (!date) return '';
    return new Date(date).toLocaleDateString();
  }

  formatBirthday(birthday: string): string {
    if (!birthday) return '';
    return new Date(birthday).toLocaleDateString();
  }
}
