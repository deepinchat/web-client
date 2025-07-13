import { Component } from '@angular/core';
import { MatSuffix, MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatList } from '@angular/material/list';
import { MatToolbar } from '@angular/material/toolbar';
import { Subscription } from 'rxjs';
import { ChatSummary } from '../../../core/models/chat.model';
import { ChatHubService } from '../../../core/services/chat-hub.service';
import { ChatService } from '../../../core/services/chat.service';
import { ChatListItem } from '../list-item/list-item';

@Component({
  selector: 'chat-list',
  templateUrl: './list.html',
  styleUrl: './list.scss',
  imports: [
    MatList,
    MatInput,
    MatSuffix,
    MatToolbar,
    MatFormFieldModule,
    MatIcon,
    ChatListItem
  ],
})
export class ChatList {

  chats: ChatSummary[] = [];
  isLoading = false;
  openedChatId: string = '';
  subscription = new Subscription();
  constructor(private chatService: ChatService, private chatHubService: ChatHubService) {
    this.subscription.add(
      this.chatService.chat.subscribe((chat) => {
        this.openedChatId = chat?.id || '';
      })
    );
    this.subscription.add(
      this.chatService.chatChanged.subscribe(() => {
        this.loadChats();
      }));
    this.subscription.add(
      this.chatHubService.newMessage$.subscribe(message => {
        if (message) {
          console.log('New message received:', message);
        }
      })
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.loadChats();
  }

  onChat(summary: ChatSummary) {
    this.openedChatId = summary.chat.id;
    this.chatService.open(summary.chat);
  }

  private loadChats() {
    if (this.isLoading) return;
    this.isLoading = true;
    this.chatService.getList().subscribe({
      next: (chats) => {
        this.chats = chats;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}
