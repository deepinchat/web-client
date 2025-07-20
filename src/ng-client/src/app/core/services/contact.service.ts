import { Injectable } from '@angular/core';
import { AddContactRequest, ContactModel, ContactQuery, UpdateContactRequest } from '../models/contacts.model';
import { HttpClient } from '@angular/common/http';
import { PagedResult } from '../models/pagination.model';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private _contactChanged = new BehaviorSubject<ContactModel | null>(null);
  contactChanged$ = this._contactChanged.asObservable();
  constructor(private httpClient: HttpClient) { }

  create(request: AddContactRequest) {
    return this.httpClient.post<ContactModel>('/api/contacts', request)
      .pipe(tap(contact => this._contactChanged.next(contact)));
  }

  getById(id: string) {
    return this.httpClient.get<ContactModel>(`/api/contacts/${id}`);
  }

  update(id: string, request: UpdateContactRequest) {
    return this.httpClient.put<ContactModel>(`/api/contacts/${id}`, request)
      .pipe(tap(contact => this._contactChanged.next(contact)));
  }

  delete(id: string) {
    return this.httpClient.delete(`/api/contacts/${id}`);
  }

  getPagedList(query: ContactQuery) {
    return this.httpClient.get<PagedResult<ContactModel>>('/api/contacts', {
      params: {
        offset: query.offset,
        limit: query.limit,
        search: query.search || ''
      }
    });
  }
}
