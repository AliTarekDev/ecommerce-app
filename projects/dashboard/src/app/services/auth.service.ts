import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = 'https://furniture.marvelhome.com.sa/api/';
  token: string;
  constructor(private http: HttpClient, private _router: Router) {}

  login(userData: any) {
    return this.http.post(`${this.apiUrl}login`, userData).pipe(
      tap((user: any) => {
        this.token = user.token;
        localStorage.setItem('token', this.token);

        this._router.navigate['/'];
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this._router.navigateByUrl('/login');
  }
}
