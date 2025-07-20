import { Component, Input } from '@angular/core';
import { ContactModel } from '../../../core/models/contacts.model';
import { RouterLink } from '@angular/router';
import { AsyncPipe, DatePipe, CommonModule } from '@angular/common';
import { MatListItem, MatListItemAvatar, MatListItemTitle, MatListItemMeta, MatListItemLine } from '@angular/material/list';
import { FileUrlPipe } from '../../../shared/pipes/file-url.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AvatarComponent } from '../../../shared/components/avatar/avatar.component';
import { SubStringPipe } from '../../../shared/pipes/sub-string.pipe';

@Component({
  selector: 'contact-list-item',
  imports: [
    CommonModule,
    DatePipe,
    RouterLink,
    MatListItem,
    MatListItemAvatar,
    MatListItemTitle,
    MatListItemMeta,
    MatListItemLine,
    MatButtonModule,
    MatChipsModule,
    MatTooltipModule,
    FileUrlPipe,
    AsyncPipe,
    AvatarComponent
  ],
  templateUrl: './list-item.html',
  styleUrl: './list-item.scss'
})
export class ContactListItem {
  @Input() contact?: ContactModel;

  getSubtitle(): string {
    if (!this.contact) return '';

    const parts = [];
    if (this.contact.profile.company) parts.push(this.contact.profile.company);
    if (this.contact.profile.email) parts.push(this.contact.profile.email);

    return parts.join(' • ') || 'No additional information';
  }

  getInitials(): string {
    if (!this.contact) return '?';

    const name = this.contact.name || '';
    const nameParts = name.trim().split(' ');

    if (nameParts.length >= 2) {
      return (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase();
    } else if (nameParts.length === 1 && nameParts[0]) {
      return nameParts[0][0].toUpperCase();
    }

    return '?';
  }

  hasContactInfo(): boolean {
    return !!(this.contact?.profile.email || this.contact?.profile.phoneNumber);
  }
}
