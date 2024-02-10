import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginReq, UserRresponse } from '../pages/auth/user.interface';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient)
  url = 'https://dummyjson.com'
  path = 'auth/login'

  router = inject(Router)

  currentUser = signal<UserRresponse | undefined | null>(null)
  platformId!: Object;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.platformId = platformId;

  }

  // to set token
  setToken(token: string) {
    isPlatformBrowser(this.platformId) && localStorage.setItem('token', token)
  }


  // login request
  login(data: LoginReq): Observable<UserRresponse> {
    return this.http.post<UserRresponse>(`${this.url}/${this.path}`, data)
  }

  // set user to signal
  setCurrentUser(user: UserRresponse | undefined | null) {
    this.currentUser.set(user)
  }

  // get token
  getToken() {
    isPlatformBrowser(this.platformId) && localStorage.getItem('token')
  }

  // remove token
  removeToken() {
    isPlatformBrowser(this.platformId) && localStorage.removeItem('')
  }

  logout() {
    this.removeToken()
    this.setCurrentUser(null)
    this.router.navigateByUrl('/login')
  }



}
