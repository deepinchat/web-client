import { Component, Input, OnInit } from '@angular/core';
import { FileService } from '../../../core/services/file.service';
import { MatDialog } from '@angular/material/dialog';
import { ImageViewer } from '../image-viewer/image-viewer';

@Component({
  selector: 'deepin-image',
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent implements OnInit {
  @Input() fileId: string | null = null;
  imageUrl: string | null = null;
  constructor(
    private fileService: FileService,
    private dialog: MatDialog
  ) {

  }
  async ngOnInit() {
    if (this.fileId) {
      this.imageUrl = await this.fileService.getLocalDownloadUrl(this.fileId);
    }
  }

  onPreview() {
    if (this.imageUrl) {
      this.dialog.open(ImageViewer, {
        data: { imageUrl: this.imageUrl },
        width: 'auto',
        height: 'auto',
        maxWidth: '98vw',
        maxHeight: '98vh'
      });
    }
  }
}
