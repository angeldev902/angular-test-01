import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductsWithCallback(
    page: number,
    limit: number,
    callback: (products: Product[]) => void
  ): void {
    const url = `${environment.apiBaseUrl}/api/products/?page=${page}&limit=${limit}`;

    this.http.get<Product[]>(url).subscribe({
      next: (res) => {
        callback(res);
      },
      error: (err) => {
        console.error('Error al obtener productos paginados', err);
      }
    });
  }

}
