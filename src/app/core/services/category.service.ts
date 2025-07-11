import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Promise<any> {
    return firstValueFrom(
      this.http.get(`${environment.apiBaseUrl}/api/categories/`)
    );
  }
}
