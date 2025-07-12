import { Component } from '@angular/core';
import { ContactList } from './components/list/list';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatInputModule, MatLabel } from "@angular/material/input";
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
  imports: [
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule,
    MatToolbar,
    MatToolbarRow,
    MatIcon,
    MatIconButton,
    MatLabel,
    MatInputModule,
    ContactList
  ],
})
export class Contacts {
  searchControl = new FormControl('');
}
