import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'image-viewer',
  imports: [
    MatDialogModule
  ],
  templateUrl: './image-viewer.html',
  styleUrl: './image-viewer.scss'
})
export class ImageViewer {
  @Input() imageUrl?: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { imageUrl?: string },
    private dialogRef: MatDialogRef<ImageViewer>) {
    if (data.imageUrl) {
      this.imageUrl = data.imageUrl;
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
