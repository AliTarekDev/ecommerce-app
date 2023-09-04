import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = 'https://furniture.marvelhome.com.sa/api/';
  token: string;

  constructor(
    private http: HttpClient,
    private _Router: Router,
    private route: ActivatedRoute
  ) {}

  register(userData: any) {
    return this.http.post(`${this.apiUrl}register`, userData);
  }

  login(userData: any) {
    return this.http.post(`${this.apiUrl}login`, userData).pipe(
      tap((user: any) => {
        console.log(user);
        this.token = user.token;
        localStorage.setItem('token', this.token);
        const currentURL = this._Router.url;
        const containsArabic = currentURL.includes('ar');
        const containsEnglish = currentURL.includes('en');

        if (containsArabic) {
          this._Router.navigate(['/ar/home']);
        }

        if (containsEnglish) {
          this._Router.navigate(['/en/home']);
        }
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  logout() {}
}
