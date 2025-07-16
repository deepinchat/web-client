import { Pipe, PipeTransform } from '@angular/core';
import { FileService } from '../../core/services/file.service';

@Pipe({
  name: 'fileUrl'
})
export class FileUrlPipe implements PipeTransform {
  constructor(
    private fileService: FileService
  ) { }

  async transform(fileId: string): Promise<string> {
    return await this.fileService.getLocalDownloadUrl(fileId).then(url => {
      return url || '';
    }).catch(error => {
      console.error('Error loading file URL:', error);
      return '';
    });
  }
}
