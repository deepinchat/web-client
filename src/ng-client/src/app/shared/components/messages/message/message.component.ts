import { Component, Input } from '@angular/core';
import { Message } from '../../../../core/models/message.model';
import { FormatTimePipe } from '../../../pipes/format-time.pipe';
import { MessageAttachmentComponent } from '../attachment/attachment.component';
import { UserAvatar } from '../../users/avatar/avatar';

@Component({
  selector: 'deepin-message',
  imports: [
    UserAvatar,
    FormatTimePipe,
    MessageAttachmentComponent
  ],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  @Input() message?: Message;
}
