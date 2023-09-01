import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = 'https://marvelhome.com.sa/api/services/';
  constructor(private http: HttpClient) {}

  getProductList(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}products`).pipe(
      tap((res) => {
        console.log(res);
      })
    );
  }
}
