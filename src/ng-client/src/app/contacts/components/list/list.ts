import { Component, OnInit } from '@angular/core';
import { ContactModel, ContactQuery } from '../../../core/models/contacts.model';
import { PagedResult } from '../../../core/models/pagination.model';
import { ContactService } from '../../../core/services/contact.service';
import { MatListModule } from "@angular/material/list";
import { ContactListItem } from '../list-item/list-item';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'contact-list',
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatPaginatorModule,
    MatDividerModule,
    MatTooltipModule,
    ContactListItem
  ],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class ContactList implements OnInit {
  query: ContactQuery = {
    offset: 0,
    limit: 20,
    search: ''
  }
  result: PagedResult<ContactModel> = new PagedResult<ContactModel>();
  isLoading = false;
  searchTerm = '';
  private searchSubject = new Subject<string>();

  constructor(
    private contactService: ContactService,
    private router: Router
  ) {
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(searchTerm => {
      this.query.search = searchTerm;
      this.query.offset = 0;
      this.loadContacts();
    });

  }

  ngOnInit() {
    this.loadContacts();
    this.contactService.contactChanged$.subscribe(() => {
      this.loadContacts();
    });
  }

  loadContacts() {
    this.isLoading = true;
    this.contactService.getPagedList(this.query).subscribe({
      next: (result) => {
        this.result = result;
      },
      error: (ex) => {
        console.error('Failed to load contacts', ex);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  onSearchChange(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.searchSubject.next(searchTerm);
  }

  clearSearch() {
    this.searchTerm = '';
    this.onSearchChange('');
  }

  onPageChange(event: PageEvent) {
    this.query.offset = event.pageIndex * event.pageSize;
    this.query.limit = event.pageSize;
    this.loadContacts();
  }

  onAddContact() {
    this.router.navigate(['/contacts/new']);
  }

  refresh() {
    this.loadContacts();
  }
}
