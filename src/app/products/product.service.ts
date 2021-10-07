import { Category } from './category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createProduct(product: Product) {
    this.http.post(this.apiUrl + '/products', product)
  }

  getAllProducts(): Observable<any> {
    return this.http.get(this.apiUrl + '/products');
  }

  viewProduct(productId: Number): Observable<Product> {
    return this.http.get<Product>(this.apiUrl + '/products/' + productId);
  }

  updateProduct(productId: Number, product: Product): Observable<Product> {
    return this.http.put<Product>(this.apiUrl + '/products/' + productId, product);
  }

  deleteProduct(productId: Number):Observable<Product> {
    return this.http.delete<Product>(this.apiUrl + '/products/' + productId);
  }

  searchCategoryProduct(categoryId: number) {
    return this.http.get<Product[]>(this.apiUrl + '/products?category_id=' + categoryId);
  }

  searchDateProduct(date: any) {
    return this.http.get(this.apiUrl + '/category=' + date);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl + '/categories');
  }

}
