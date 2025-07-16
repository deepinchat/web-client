import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Chat, ChatRequest } from '../../../core/models/chat.model';
import { FileModel } from '../../../core/models/file.model';
import { ChatService } from '../../../core/services/chat.service';
import { AvatarComponent } from '../../../shared/components/avatar/avatar.component';
import { FileUploaderComponent } from '../../../shared/components/file-uploader/file-uploader.component';
import { FileUrlPipe } from '../../../shared/pipes/file-url.pipe';

@Component({
  selector: 'chat-editor',
  templateUrl: './editor.html',
  styleUrl: './editor.scss',
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatCheckbox,
    MatInputModule,
    FileUploaderComponent,
    AvatarComponent,
    FileUrlPipe
  ],
})
export class ChatEditor {
  @Input() chat?: Chat
  form?: FormGroup;
  isLoading = false;
  constructor(
    private fb: FormBuilder,
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.buildForm();
    if (this.chat && this.form) {
      this.form.patchValue(this.chat);
    }
  }

  formControlErrors(name: string) {
    return this.form?.get(name)?.errors;
  }

  formControlValue(name: string) {
    return this.form?.get(name)?.value;
  }

  buildForm() {
    this.form = this.fb.group({
      type: this.fb.control('group'),
      name: this.fb.control('', [Validators.required, Validators.maxLength(32)]),
      userName: this.fb.control('', [Validators.required, Validators.maxLength(32)]),
      description: this.fb.control('', [Validators.maxLength(256)]),
      isPublic: this.fb.control(true),
      avatarFileId: this.fb.control('')
    });
  }

  onSubmit(): Promise<void> {
    if (!this.form || this.isLoading || this.form.invalid) return Promise.reject('Form is invalid or already loading');
    this.isLoading = true;
    return new Promise<void>((resolve, reject) => {
      const chat = this.form!.value as ChatRequest;
      this.chatService.createOrUpdate(chat, this.chat?.id)
        .subscribe({
          next: () => {
            this.chatService.refresh();
            resolve();
          },
          error: (err) => {
            console.error('Failed to save chat:', err);
            reject(err);
          },
          complete: () => {
            this.isLoading = false;
          }
        })
    });
  }

  onFileUploaded(files: FileModel[]) {
    this.form?.get('avatarFileId')?.setValue(files[0].id);
  }
}
