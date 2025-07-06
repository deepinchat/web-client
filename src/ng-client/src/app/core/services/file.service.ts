import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileModel } from '../models/file.model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  static cachedUrls: Map<string, string> = new Map<string, string>();
  constructor(private httpClient: HttpClient) { }
  get(id: string) {
    return this.httpClient.get<FileModel>(`/api/files/${id}`);
  }

  upload(file: File, container?: string, storageKey?: string) {
    const formData = new FormData();
    formData.append('file', file);
    if (container) {
      formData.append('container', container);
    }
    if (storageKey) {
      formData.append('storageKey', storageKey);
    }
    return this.httpClient.post<FileModel>(`/api/files`, formData);
  }

  download(id: string) {
    return this.httpClient.get(`/api/files/${id}/download`, {
      responseType: 'blob'
    })
  }

  async getLocalDownloadUrl(id: string) {
    if (!id) return null;
    if (FileService.cachedUrls.has(id)) {
      return FileService.cachedUrls.get(id)!;
    }
    const blob = await firstValueFrom(this.download(id));
    const objectUrl = URL.createObjectURL(blob);
    FileService.cachedUrls.set(id, objectUrl);
    return objectUrl;
  }

  getTemporaryDownloadToken(id: string) {
    return this.httpClient.get<{ token: string }>(`/api/files/${id}/download-token`);
  }

  async getTemporaryDownloadUrl(id: string, token?: string) {
    if (!token) {
      token = (await firstValueFrom(this.getTemporaryDownloadToken(id))).token;
    }
    return `/api/files/${id}/download/${token}`;
  }
}
