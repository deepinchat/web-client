import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatList } from './components/list/list';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ChatEditorDialog } from './components/editor-dialog/editor-dialog';
import { MatDialog } from '@angular/material/dialog';
import { ChatService } from '../core/services/chat.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'deepin-chats',
  imports: [
    ReactiveFormsModule,
    RouterOutlet,
    MatToolbarModule,
    MatInput,
    MatFormFieldModule,
    MatIcon,
    MatIconButton,
    ChatList
  ],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.scss'
})
export class ChatsComponent {
  searchControl = new FormControl('');
  constructor(
    private dialog: MatDialog,
    private chatService: ChatService) { }


  onCreateChat() {
    this.dialog.open(ChatEditorDialog, {
      width: '480px'
    }).afterClosed().subscribe(result => {
      if (result) {
        this.chatService.open(result);
      }
    });
  }

  clearSearch() {
    this.searchControl.setValue('');
  }
}
