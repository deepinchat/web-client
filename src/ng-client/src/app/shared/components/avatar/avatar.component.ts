import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FileService } from '../../../core/services/file.service';

const COLORS = [
  '#FF6767',
  '#FFA467',
  '#FFD567',
  '#67FF7F',
  '#67D4FF',
  '#6781FF',
  '#A367FF',
  '#FF67D4',
  '#FF67A4',
  '#67FFD5'
]
@Component({
  selector: 'deepin-avatar',
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent implements OnInit, OnChanges {
  @Input() fileId?: string | null = null;
  @Input() displayName?: string = '';
  @Input() size: 'small' | 'default' | 'large' = 'default';
  @Input() shape: 'circle' | 'rounded' | 'square' = 'circle';
  backgroundColor: string = '';
  initials: string = '';
  imageUrl = '';
  constructor(
    private fileService: FileService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["firstName"] || changes["lastName"] || changes["displayName"]) {
      this.updateInitials();
      this.updateBackgroundColor();
    }
    if (changes["fileId"] && this.fileId) {
      this.loadImage(this.fileId);
    }
  }
  ngOnInit() {
    this.updateInitials();
    this.updateBackgroundColor();
    if (this.fileId) {
      this.loadImage(this.fileId);
    }
  }

  private updateInitials(): void {
    let initials = '';
    if (!initials && this.displayName) {
      initials = this.displayName.charAt(0);
    }

    this.initials = initials || '?';
  }
  private updateBackgroundColor(): void {
    if (!this.displayName) {
      this.backgroundColor = COLORS[0];
      return;
    }
    let sum = 0;
    for (let i = 0; i < this.displayName.length; i++) {
      sum += this.displayName.charCodeAt(i);
    }

    const colorIndex = sum % COLORS.length;
    this.backgroundColor = COLORS[colorIndex];
  }

  loadImage(id: string) {
    this.fileService.getLocalDownloadUrl(id).then(url => {
      this.imageUrl = url || '';
    }).catch(error => {
      console.error('Error loading image:', error);
      this.imageUrl = ''; // Reset image URL on error
    });
  }
}
