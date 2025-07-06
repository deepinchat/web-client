import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatList } from '@angular/material/list';
import { ChatListItemComponent } from '../chat-list-item/chat-list-item.component';
import { Chat, ChatSummary } from '../../../../core/models/chat.model';
import { ChatService } from '../../../../core/services/chat.service';
import { Subscription } from 'rxjs';
import { ChatHubService } from '../../../../core/services/chat-hub.service';
import { MatToolbar } from '@angular/material/toolbar';
import { MatInput, MatSuffix } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'deepin-chat-list',
  imports: [
    MatList,
    MatInput,
    MatSuffix,
    MatToolbar,
    MatFormFieldModule,
    MatIcon,
    ChatListItemComponent
  ],
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.scss'
})
export class ChatListComponent implements OnInit, OnDestroy {
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
