import { DatePipe, AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatListItem, MatListItemAvatar, MatListItemTitle, MatListItemLine, MatListItemMeta } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { ChatSummary } from '../../../core/models/chat.model';
import { AvatarComponent } from '../../../shared/components/avatar/avatar.component';
import { FileUrlPipe } from '../../../shared/pipes/file-url.pipe';
import { SubStringPipe } from '../../../shared/pipes/sub-string.pipe';

@Component({
  selector: 'chat-list-item',
  templateUrl: './list-item.html',
  styleUrl: './list-item.scss',
  imports: [
    DatePipe,
    AsyncPipe,
    RouterLink,
    MatListItem,
    MatListItemAvatar,
    MatListItemTitle,
    MatListItemLine,
    MatListItemMeta,
    MatBadge,
    SubStringPipe,
    AvatarComponent,
    FileUrlPipe
  ],
})
export class ChatListItem {
  @Input() item!: ChatSummary;
  @Input() isActive = false;
}
