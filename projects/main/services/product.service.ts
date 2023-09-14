import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from '../src/app/modules/product/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = 'https://furniture.marvelhome.com.sa/api/';
  constructor(private http: HttpClient) {}

  getProductList(dataObj: any, categoriesFilter?: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('page_size', dataObj.pageSize);
    params = params.append('page_number', dataObj.pageNumber);

    if (categoriesFilter) {
      params = params.append('category_ids', JSON.stringify(categoriesFilter));
    }

    return this.http.get<any>(`${this.apiUrl}get-products`, { params }).pipe(
      tap((res) => {
        console.log(res);
      })
    );
  }

  getProduct(id: any): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}services/products/${id}`);
  }

  getAllCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}category`);
  }
}
