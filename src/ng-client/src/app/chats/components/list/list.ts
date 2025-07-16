import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatList } from '@angular/material/list';
import { Subscription } from 'rxjs';
import { ChatSummary } from '../../../core/models/chat.model';
import { ChatHubService } from '../../../core/services/chat-hub.service';
import { ChatService } from '../../../core/services/chat.service';
import { ChatListItem } from '../list-item/list-item';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'chat-list',
  templateUrl: './list.html',
  styleUrl: './list.scss',
  imports: [
    ReactiveFormsModule,
    MatList,
    MatFormFieldModule,
    MatToolbarModule,
    ChatListItem
  ],
})
export class ChatList {
  chats: ChatSummary[] = [];
  isLoading = false;
  openedChatId: string = '';
  subscription = new Subscription();
  searchControl = new FormControl('');
  constructor(
    private chatService: ChatService,
    private chatHubService: ChatHubService) {
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
