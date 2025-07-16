import { Injectable } from '@angular/core';
import { ContactModel, ContactQuery, ContactRequest } from '../models/contacts.model';
import { HttpClient } from '@angular/common/http';
import { PagedResult } from '../models/pagination.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  create(request: ContactRequest) {
    return this.httpClient.post<ContactModel>('/api/contacts', request);
  }

  getById(id: string) {
    return this.httpClient.get<ContactModel>(`/api/contacts/${id}`);
  }

  update(id: string, request: ContactRequest) {
    return this.httpClient.put<ContactModel>(`/api/contacts/${id}`, request);
  }

  delete(id: string) {
    return this.httpClient.delete(`/api/contacts/${id}`);
  }

  getPaged(query: ContactQuery) {
    return this.httpClient.get<PagedResult<ContactModel>>('/api/contacts', {
      params: {
        offset: query.offset,
        limit: query.limit,
        search: query.search || ''
      }
    });

  }
}
