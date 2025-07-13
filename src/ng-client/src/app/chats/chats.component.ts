import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatList } from './components/list/list';

@Component({
  selector: 'deepin-chats',
  imports: [
    RouterOutlet,
    ChatList
  ],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.scss'
})
export class ChatsComponent {

}
