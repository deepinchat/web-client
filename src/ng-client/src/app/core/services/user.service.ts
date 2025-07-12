import { Injectable } from '@angular/core';
import { UserProfile, UserProfileRequest, UserSearchRequest } from '../models/user.model';
import { BehaviorSubject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PagedResult } from '../models/pagination.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: BehaviorSubject<UserProfile | undefined> = new BehaviorSubject<UserProfile | undefined>(undefined);
  public readonly user = this._user.asObservable();

  constructor(private httpClient: HttpClient) { }

  init() {
    this.getMyProfile().subscribe(res => {
      this._user.next(res);
    });
  }

  get currentUser() {
    return this._user.value;
  }

  getMyProfile() {
    return this.httpClient.get<UserProfile>('/api/users/me')
      .pipe(map(res => {
        this._user.next(res);
        return res;
      }));
  }

  getProfileById(id: string) {
    return this.httpClient.get<UserProfile>(`/api/users/${id}`);
  }

  updateProfile(request: UserProfileRequest) {
    return this.httpClient.put<UserProfile>('/api/users/me', request)
      .pipe(map(res => {
        this._user.next(res);
        return res;
      }));
  }

  search(request: UserSearchRequest) {
    return this.httpClient.get<PagedResult<UserProfile>>('/api/users/search', {
      params: {
        search: request.search || '',
        limit: request.limit,
        offset: request.offset
      }
    });
  }
}
