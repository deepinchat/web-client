import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ChatEditor } from '../editor/editor';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ChatService } from '../../../core/services/chat.service';
import { Chat } from '../../../core/models/chat.model';

@Component({
  selector: 'chat-editor-dialog',
  imports: [
    MatDialogModule,
    MatIcon,
    MatProgressSpinner,
    MatButton,
    ChatEditor
  ],
  templateUrl: './editor-dialog.html',
  styleUrl: './editor-dialog.scss'
})
export class ChatEditorDialog implements OnInit {
  @ViewChild('chatEditor') chatEditor!: ChatEditor;
  chat?: Chat;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    private dialogRef: MatDialogRef<ChatEditorDialog>,
    private snackBar: MatSnackBar,
    private chatService: ChatService
  ) { }

  ngOnInit(): void {
    if (this.data.id) {
      this.chatService.get(this.data.id, 'group').subscribe({
        next: (chat) => {
          this.chat = chat;
        },
        error: (err) => {
          this.snackBar.open('Failed to load chat', 'Close', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
          console.error('Error loading chat:', err);
        }
      });
    }
  }

  onSubmit() {
    this.chatEditor.onSubmit()
      .then(() => {
        this.dialogRef.close();
        this.snackBar.open('Chat update successfully', 'Close', {
          duration: 3000
        });
      });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
