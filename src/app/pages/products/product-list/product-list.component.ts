import { Component } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { CustomTableComponent } from '../../../shared/custom-table/custom-table.component';
import { Product, ProductResponse } from '../../../core/models/product.model';
import { CommonModule } from '@angular/common';
import { CustomLinkButtonComponent } from '../../../shared/custom-link-button/custom-link-button.component';
import { CustomTitleComponent } from '../../../shared/custom-title/custom-title.component';
@Component({
  selector: 'app-product-list',
  imports: [CommonModule, CustomTableComponent, CustomLinkButtonComponent, CustomTitleComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  standalone: true
})
export class ProductListComponent {
  columns: { key: string; label: string; type?: 'text' | 'currency' | 'date' | 'object' }[] = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'category', label: 'Category', type: 'object' },
    { key: 'brand', label: 'Brand', type: 'object' },
    { key: 'price', label: 'Price', type: 'currency' }
  ];

  totalProducts = 0;
  limit = 5;
  products:Product[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void{
    this.fetchPage(0);
  }

  fetchPage(pageIndex: number) {
    const offset = pageIndex + 1;
    this.productService.getProductsWithCallback(offset, this.limit, (res: any) => {
      this.products = res.data;
      this.totalProducts = res.total;
      console.log('Callback ejecutado con paginación:', this.products);
  });
  }

  openDeleteDialog(product:Product) {

  }
}
