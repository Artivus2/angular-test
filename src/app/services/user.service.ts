import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient)
  url = 'https://dummyjson.com'
  path = 'users'


  // get user request
  getUser(id: any): Observable<IUser> {
    return this.http.get<IUser>(`${this.url}/${this.path}/` + id, {
      headers: {
        'content-type': 'application/json'
      }
    })
  }
}
