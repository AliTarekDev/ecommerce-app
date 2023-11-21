import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://furniture.marvelhome.com.sa/api/';

  constructor(private http: HttpClient) {}

  addProduct(product: any) {
    return this.http.post(`${this.apiUrl}services/products`, product);
  }

  getAllCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}category`);
  }

  getProductList(dataObj?: any, categoriesFilter?: any): Observable<any> {
    let params = new HttpParams();
    if (dataObj) {
      params = params.append('page_size', dataObj.pageSize);
      params = params.append('page_number', dataObj.pageNumber);
    }

    if (categoriesFilter) {
      params = params.append('category_ids', JSON.stringify(categoriesFilter));
    }

    return this.http.get<any>(`${this.apiUrl}get-products`, { params }).pipe(
      tap((res) => {
        console.log(res);
      })
    );
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.apiUrl}services/products/${id}`);
  }

  getProduct(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}specific-product/${id}`);
  }

  updateProduct(product: any, productId) {
    return this.http.post(
      `${this.apiUrl}services/update-product/${productId}`,
      product
    );
  }
}
