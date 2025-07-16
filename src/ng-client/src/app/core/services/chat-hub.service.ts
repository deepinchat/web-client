import { Injectable } from '@angular/core';
import { HttpTransportType, HubConnection, HubConnectionBuilder, LogLevel, Subject } from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../models/message.model';
import { Chat } from '../models/chat.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ChatHubService {
  private _newMessage = new BehaviorSubject<Message | null>(null);
  private _newChat = new BehaviorSubject<Chat | null>(null);
  public newMessage$ = this._newMessage.asObservable();
  public newChat$ = this._newChat.asObservable();
  private hubConnection?: HubConnection;
  constructor(
    private messageService: MessageService,
  ) {
  }

  public start() {
    this.register();
    this.stablishConnection()
      ?.then(() => {
        this.registerHandlers();
      });
  }

  public stop() {
    this.hubConnection?.stop();
  }

  private register() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(`/hub/chats`, {
        transport: HttpTransportType.WebSockets
      })
      .configureLogging(LogLevel.Information)
      .withAutomaticReconnect()
      .build();
  }

  private stablishConnection() {
    return this.hubConnection?.start()
      .then(() => {
        console.log('Hub connection started')
      })
      .catch(() => {
        console.log('Error while establishing connection')
      });
  }

  private registerHandlers() {
    this.hubConnection?.on('NewMessage', (res: { chatId: string, id: string }) => {
      console.log('NewMessage', res);
      this.messageService.getMessage(res.id).subscribe(msg => {
        this._newMessage.next(msg);
      });
    });
  }
}
