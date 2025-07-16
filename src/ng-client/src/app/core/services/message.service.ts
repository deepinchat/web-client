import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message, MessageQuery, MessageRequest } from '../models/message.model';
import { PagedResult } from '../models/pagination.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private httpClient: HttpClient) { }

  getMessages(query: MessageQuery) {
    return this.httpClient.get<PagedResult<Message>>(`/api/messages`, {
      params: {
        chatId: query.chatId,
        sortBy: query.direction === 'forward' ? 'desc' : 'asc',
        limit: query.limit,
        offset: query.offset,
        anchorSquence: query.anchorSquence
      }
    });
  }

  getMessage(id: string) {
    return this.httpClient.get<Message>(`/api/messages/${id}`);
  }

  send(request: MessageRequest) {
    return this.httpClient.post<Message>(`/api/messages`, request);
  }

  markAsRead(chatId: string, messageId: string) {
    return this.httpClient.post(`/api/v1/chats/${chatId}/messages/${messageId}/read`, {});
  }
}
