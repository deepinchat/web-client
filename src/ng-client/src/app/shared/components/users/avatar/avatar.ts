import { Component, Input, OnInit } from '@angular/core';
import { UserProfile } from '../../../../core/models/user.model';
import { AvatarComponent } from '../../avatar/avatar.component';
import { FileUrlPipe } from '../../../pipes/file-url.pipe';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'user-avatar',
  imports: [
    AsyncPipe,
    FileUrlPipe,
    AvatarComponent
  ],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss'
})
export class UserAvatar implements OnInit {
  @Input() profile?: UserProfile;
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() shape: 'circle' | 'rounded' | 'square' = 'circle';
  displayName?: string;

  ngOnInit(): void {
    this.displayName = this.profile?.name || this.profile?.firstName || this.profile?.lastName || this.profile?.userName || '';
  }
}
