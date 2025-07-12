import { Component, Input } from '@angular/core';
import { ContactModel } from '../../../core/models/contacts.model';
import { RouterLink } from '@angular/router';
import { AsyncPipe, DatePipe } from '@angular/common';
import { MatListItem, MatListItemAvatar, MatListItemTitle, MatListItemMeta } from '@angular/material/list';
import { FileUrlPipe } from '../../../shared/pipes/file-url.pipe';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'contact-list-item',
  imports: [
    DatePipe,
    RouterLink,
    MatListItem,
    MatListItemAvatar,
    MatListItemTitle,
    MatListItemMeta,
    FileUrlPipe,
    AsyncPipe,
    MatIcon
  ],
  templateUrl: './list-item.html',
  styleUrl: './list-item.scss'
})
export class ContactListItem {
  @Input() contact?: ContactModel;
}
