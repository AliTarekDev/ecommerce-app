import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = 'https://marvelhome.com.sa/api/services/';
  constructor(private http: HttpClient) {}

  getProductList(dataObj: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('page_size', dataObj.pageSize);
    params = params.append('page_number', dataObj.pageNumber);
    return this.http.get<any>(`${this.apiUrl}products`, { params }).pipe(
      tap((res) => {
        console.log(res);
      })
    );
  }
}
