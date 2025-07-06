import { Injectable } from '@angular/core';
import { UserProfile } from '../models/user.model';
import { BehaviorSubject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: BehaviorSubject<UserProfile | null> = new BehaviorSubject<UserProfile | null>(null);
  public readonly user = this._user.asObservable();

  constructor(private httpClient: HttpClient) { }

  init() {
    this.getMyProfile().subscribe(res => {
      this._user.next(res);
    });
  }

  getMyProfile() {
    return this.httpClient.get<UserProfile>('/api/users/me')
      .pipe(map(res => {
        this._user.next(res);
        return res;
      }));
  }

  getUserById(id: string) {
    return this.httpClient.get<UserProfile>(`/api/users/${id}`);
  }
}
