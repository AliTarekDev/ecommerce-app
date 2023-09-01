import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = 'https://marvelhome.com.sa/api/';
  token: string;

  constructor(private http: HttpClient) {}

  register(userData: any) {
    return this.http.post(`${this.apiUrl}register`, userData);
  }

  login(userData: any) {
    return this.http.post(`${this.apiUrl}login`, userData).pipe(
      tap((user: any) => {
        console.log(user);
        this.token = user.token;
        localStorage.setItem('token', this.token);
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  logout() {}
}
