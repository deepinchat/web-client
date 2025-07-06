import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chat, ChatRequest, ChatSummary, ChatType } from '../models/chat.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private _chatChanged = new Subject<boolean>();
  private _currentChat: BehaviorSubject<Chat | null> = new BehaviorSubject<Chat | null>(null);
  public readonly chat = this._currentChat.asObservable();
  public readonly chatChanged = this._chatChanged.asObservable();

  constructor(private httpClient: HttpClient) { }

  open(chat: Chat) {
    this._currentChat.next(chat);
  }

  close() {
    this._currentChat.next(null);
  }

  refresh() {
    this._chatChanged.next(true);
  }

  getList() {
    return this.httpClient.get<ChatSummary[]>(`/api/chats`);
  }

  get(id: string, type: ChatType) {
    return this.httpClient.get<Chat>(type === 'group' ?
      `/api/v1/chats/group/${id}` :
      `/api/v1/chats/direct/${id}`);
  }

  create(request: ChatRequest) {
    return this.httpClient.post<Chat>(`/api/chats/group`, request);
  }


  update(request: ChatRequest, chatId: string) {
    return this.httpClient.put<Chat>(`/api/chats/${chatId}`, {
      id: chatId,
      ...request
    });
  }

  createOrUpdate(request: ChatRequest, chatId?: string) {
    if (chatId) {
      return this.update(request, chatId);
    } else {
      return this.create(request);
    }
  }

  getMembers(chatId: string, offset: number, limit: number) {
    return this.httpClient.get(`/api/chats/${chatId}/members?offset=${offset}&limit=${limit}`);
  }

  readMessage(chatId: string, messageId: string) {
    return this.httpClient.post(`/api/chats/${chatId}/read-status`, {
      chatId,
      messageId
    });
  }
}
