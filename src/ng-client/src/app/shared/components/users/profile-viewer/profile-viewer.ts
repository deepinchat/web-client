import { Component, Input } from '@angular/core';
import { UserProfile } from '../../../../core/models/user.model';
import { MatCardModule } from '@angular/material/card';
import { FileUrlPipe } from '../../../pipes/file-url.pipe';
import { AsyncPipe, DatePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'profile-viewer',
  imports: [
    MatCardModule,
    MatIcon,
    FileUrlPipe,
    AsyncPipe,
    DatePipe
  ],
  templateUrl: './profile-viewer.html',
  styleUrl: './profile-viewer.scss'
})
export class ProfileViewer {
  @Input() profile?: UserProfile;
}
