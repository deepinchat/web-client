import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, DatePipe } from '@angular/common';
import { UserProfile, UserSearchRequest } from '../core/models/user.model';
import { Chat } from '../core/models/chat.model';
import { Message } from '../core/models/message.model';
import { UserAvatar } from '../shared/components/users/avatar/avatar';
import { AvatarComponent } from '../shared/components/avatar/avatar.component';
import { PagedResult } from '../core/models/pagination.model';
import { UserService } from '../core/services/user.service';
import { debounceTime, distinctUntilChanged, firstValueFrom, of, switchMap } from 'rxjs';
import { FileUrlPipe } from '../shared/pipes/file-url.pipe';
import { ImageComponent } from '../shared/components/image/image.component';

@Component({
  selector: 'search',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatCardModule,
    UserAvatar,
    AvatarComponent,
    DatePipe,
    FileUrlPipe
  ],
  templateUrl: './search.html',
  styleUrl: './search.scss'
})
export class Search implements OnInit {
  searchControl = new FormControl('');
  isLoading = false;
  hasSearched = false;
  userQuery: UserSearchRequest = {
    offset: 0,
    limit: 20,
    search: ''
  };
  userResults: PagedResult<UserProfile> = new PagedResult<UserProfile>();

  chats: Chat[] = [];
  messages: Message[] = [];
  bots: UserProfile[] = [];
  chatsCount = 0;
  messagesCount = 0;
  botsCount = 0;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe({
      next: (query) => {
        if (!query || query.trim().length === 0) {
          return;
        }
        this.search(query.trim());
      },
      error: (error) => {
        console.log('Search error (using mock data):', error);
      }
    });
  }

  private search(query: string) {
    try {
      this.isLoading = true;
      this.hasSearched = true;

      // Update user query
      this.userQuery.search = query;

      // Search users
      this.searchUsers();
    } catch (error) {
      console.error('Search error:', error);
      this.clearResults();
      this.hasSearched = false;
    } finally {
      this.isLoading = false;
    }
  }

  private async searchUsers() {
    this.userResults = await firstValueFrom(this.userService.search(this.userQuery));
  }

  private clearUserResults() {
    this.userResults = new PagedResult<UserProfile>();
  }

  private clearResults() {
    this.clearResults();
    this.hasSearched = false;
  }

  onUserClick(user: UserProfile) {
    // Handle user click - navigate to user profile or start chat
    console.log('User clicked:', user);
  }

  onChatClick(chat: Chat) {
    // Handle chat click - navigate to chat
    console.log('Chat clicked:', chat);
  }

  onMessageClick(message: Message) {
    // Handle message click - navigate to message
    console.log('Message clicked:', message);
  }

  onBotClick(bot: UserProfile) {
    // Handle bot click - navigate to bot or start conversation
    console.log('Bot clicked:', bot);
  }
}
