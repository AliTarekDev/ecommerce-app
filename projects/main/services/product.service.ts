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

  getProductList(
    dataObj: any,
    categoriesFilter?: any[],
    filterByPrice?: string,
    filterByName?: string
  ): Observable<any> {
    let params = new HttpParams();
    if (dataObj?.pageSize && dataObj?.pageNumber) {
      params = params.append('page_size', dataObj.pageSize);
      params = params.append('page_number', dataObj.pageNumber);
    }

    if (categoriesFilter?.length > 0) {
      //params = params.append('category_ids', JSON.stringify(categoriesFilter));
      params = params.delete('page_size');
      params = params.delete('page_number');
      categoriesFilter.forEach((el, i) => {
        params = params.append(`category_ids[${i}]`, JSON.stringify(el));
      });
      return this.http.get<any>(
        `${this.apiUrl}services/get-products-By/category`,
        { params }
      );
    } else if (filterByPrice) {
      return this.http.get<any>(
        `${this.apiUrl}services/get-products-By/${filterByPrice}`
      );
    } else if (filterByName) {
      let params = new HttpParams();
      params = params.append('sended_value', filterByName);
      return this.http.get<any>(`${this.apiUrl}services/get-products-By/name`, {
        params,
      });
    } else return this.http.get<any>(`${this.apiUrl}get-products`, { params });
  }

  getProduct(id: any): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}specific-product/${id}`);
  }

  getAllCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}category`);
  }
}
