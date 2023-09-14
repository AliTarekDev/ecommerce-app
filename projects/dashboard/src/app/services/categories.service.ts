import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  apiUrl = 'https://furniture.marvelhome.com.sa/api/';

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}category`);
  }
}
