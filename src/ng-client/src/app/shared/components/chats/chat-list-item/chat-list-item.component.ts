import { Component, Input } from '@angular/core';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { MatListItem, MatListItemAvatar, MatListItemLine, MatListItemMeta, MatListItemTitle, MatListModule } from '@angular/material/list';
import { MatBadge } from '@angular/material/badge';
import { RouterLink } from '@angular/router';
import { AvatarComponent } from '../../avatar/avatar.component';
import { Chat, ChatSummary } from '../../../../core/models/chat.model';
import { SubStringPipe } from '../../../pipes/sub-string.pipe';
import { FileUrlPipe } from '../../../pipes/file-url.pipe';

@Component({
  selector: 'deepin-chat-list-item',
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
  templateUrl: './chat-list-item.component.html',
  styleUrl: './chat-list-item.component.scss'
})
export class ChatListItemComponent {
  @Input() item!: ChatSummary;
  @Input() isActive = false;
}
