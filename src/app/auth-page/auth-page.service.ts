/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthPageService {
  private _isUserAuthenticated = false;
  private _userLoginLocalId = null;
  private _token = null;

  constructor(private http: HttpClient) {}

  get isUserAuthenticated() {
    return this._isUserAuthenticated;
  }

  get userLoginLocalId() {
    return this._userLoginLocalId;
  }

  setUserId(userId: string) {
    this._userLoginLocalId = userId;
  }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKEY}`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
  }

  login(email: string, password: string) {
    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKEY}`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
  }
  logout() {
    this._isUserAuthenticated = false;
  }
}
