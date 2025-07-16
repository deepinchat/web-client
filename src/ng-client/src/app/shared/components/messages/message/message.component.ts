import { Component, input, Input, OnInit } from '@angular/core';
import { Message, MessageAttachment } from '../../../../core/models/message.model';
import { FormatTimePipe } from '../../../pipes/format-time.pipe';
import { MessageAttachmentComponent } from '../attachment/attachment.component';
import { UserAvatar } from '../../users/avatar/avatar';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'deepin-message',
  imports: [
    MatGridListModule,
    UserAvatar,
    FormatTimePipe,
    MessageAttachmentComponent
  ],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent implements OnInit {
  @Input() message?: Message;
  @Input() isMyMessage: boolean = false;
  medias: MessageAttachment[] = [];

  ngOnInit(): void {
    if (this.message && this.message.attachments) {
      this.medias = this.message.attachments.filter(attachment =>
        attachment.type === 'image' || attachment.type === 'video'
      );
    }
  }

}
