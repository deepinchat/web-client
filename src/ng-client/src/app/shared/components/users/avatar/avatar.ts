import { Component, Input, OnInit } from '@angular/core';
import { UserProfile } from '../../../../core/models/user.model';
import { AvatarComponent } from '../../avatar/avatar.component';

@Component({
  selector: 'user-avatar',
  imports: [
    AvatarComponent
  ],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss'
})
export class UserAvatar implements OnInit {
  @Input() profile?: UserProfile;
  @Input() size: 'small' | 'default' | 'large' = 'default';
  @Input() shape: 'circle' | 'rounded' | 'square' = 'circle';
  displayName?: string;

  ngOnInit(): void {
    this.displayName = this.profile?.name || this.profile?.firstName || this.profile?.lastName || this.profile?.username || '';
  }
}
