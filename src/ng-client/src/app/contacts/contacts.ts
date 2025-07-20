import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ContactList } from './components/list/list';
import { RouterOutlet } from '@angular/router';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatInputModule, MatLabel } from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddContactDialog } from './components/add-dialog/add-dialog';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    MatToolbar,
    MatToolbarRow,
    MatIcon,
    MatIconButton,
    MatLabel,
    MatInputModule,
    MatFormFieldModule,
    ContactList
  ],
})
export class Contacts implements AfterViewInit {
  @ViewChild(ContactList) contactList!: ContactList;
  searchControl = new FormControl('');
  constructor(
    private dialog: MatDialog
  ) {

  }

  ngAfterViewInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(searchTerm => {
      if (this.contactList) {
        this.contactList.onSearchChange(searchTerm || '');
      }
    });
  }

  clearSearch() {
    this.searchControl.setValue('');
  }

  addContact() {
    this.dialog.open(AddContactDialog, {
      width: '400px',
      disableClose: true,
      autoFocus: false
    });
  }
}
