import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';

const LOGIN_URL = 'http://localhost:8080/v1/login';
const AUTH_TOKEN_NAME = 'authToken';

@Injectable({
  providedIn: 'root',
})
export class AuthCoreService {
  private isAuthenticatedSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  public isAuthenticated$(): Observable<boolean> {
    let token = this.getToken();
    if (token === undefined || token === null) {
      this.isAuthenticatedSubject.next(false);
      return this.isAuthenticatedSubject.asObservable();
    }
    return this.isAuthenticatedSubject.asObservable();
  }

  public login(username: string, password: string) {
    return this.http
      .get(LOGIN_URL, {
        headers: {
          authorization: this.createBasicAuthToken(username, password),
        },
      })
      .pipe(
        map((res) => {
          this.registerSuccessfulLogin(
            `${window.btoa(username + ':' + password)}`
          );
          this.setIsAuthenticated(true);
        })
      );
  }

  public logout() {
    sessionStorage.removeItem(AUTH_TOKEN_NAME);
    this.setIsAuthenticated(false);
    this.router.navigate(['/logout']);
  }

  public getToken() {
    return sessionStorage.getItem(AUTH_TOKEN_NAME);
  }

  private registerSuccessfulLogin(token: string) {
    sessionStorage.setItem(AUTH_TOKEN_NAME, token);
    this.setIsAuthenticated(true);
  }

  private setIsAuthenticated(isAuthenticated: boolean): void {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }

  private createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ':' + password);
  }
}