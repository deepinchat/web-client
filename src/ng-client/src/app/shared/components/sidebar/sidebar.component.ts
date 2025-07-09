import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ChatEditorComponent } from '../chats/chat-editor/chat-editor.component';
import { ThemeType, LayoutService } from '../../../core/services/layout.service';
import { MatButtonModule } from '@angular/material/button';
import { ProfileEditor } from '../users/profile-editor/profile-editor';
import { ProfileEditorDialog } from '../users/profile-editor-dialog/profile-editor-dialog';
import { UserAvatar } from "../users/avatar/avatar";
import { UserService } from '../../../core/services/user.service';
import { UserProfile } from '../../../core/models/user.model';

@Component({
  selector: 'deepin-sidebar',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatListModule,
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatDialogModule,
    MatButtonModule,
    UserAvatar
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  theme: ThemeType;
  profile?: UserProfile;
  constructor(
    private dialog: MatDialog,
    private layoutService: LayoutService,
    private userService: UserService
  ) {
    this.theme = this.layoutService.defaultTheme;
    this.layoutService.theme.subscribe(res => {
      this.theme = res;
    });
    this.userService.user.subscribe(user => {
      this.profile = user;
    });
  }

  toggleTheme() {
    const nextTheme = this.theme === 'light' ? 'dark' : 'light';
    this.layoutService.changeTheme(nextTheme);
  }

  createGroup() {
    this.dialog.open(ChatEditorComponent, {
      data: { type: 'group' },
      minWidth: 400,
      height: 'auto'
    });
  }

  createChannel() {
    this.dialog.open(ChatEditorComponent, {
      data: { type: 'channel' },
      minWidth: 400,
      height: 'auto'
    });
  }

  openProfileEditor() {
    this.dialog.open(ProfileEditorDialog, {
      minWidth: 400,
      height: 'auto'
    });
  }
}
