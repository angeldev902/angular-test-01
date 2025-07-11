import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Brand } from '../models/brand.model';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient: HttpClient) { }

  getBrands(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(`${environment.apiBaseUrl}/api/brands/`);
  }
}
