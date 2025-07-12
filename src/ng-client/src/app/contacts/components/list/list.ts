import { Component, OnInit } from '@angular/core';
import { ContactModel, ContactQuery } from '../../../core/models/contacts.model';
import { PagedResult } from '../../../core/models/pagination.model';
import { ContactService } from '../../../core/services/contact.service';
import { MatListModule } from "@angular/material/list";
import { ContactListItem } from '../list-item/list-item';

@Component({
  selector: 'contact-list',
  imports: [
    MatListModule,
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

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.isLoading = true;
    this.contactService.getPaged(this.query).subscribe({
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
}
