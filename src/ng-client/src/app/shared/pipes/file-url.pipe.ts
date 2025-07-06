import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileUrl'
})
export class FileUrlPipe implements PipeTransform {
  transform(fileId: string) {
    return fileId ? `/storage/api/v1/files/${fileId}` : null;
  }
}
