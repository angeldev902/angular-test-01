import { Component } from '@angular/core';
import { CategoryService } from '../../../core/services/category.service';
import { CustomTableComponent } from '../../../shared/custom-table/custom-table.component';
import { Category } from '../../../core/models/category.model';
import { CommonModule } from '@angular/common';
import { CustomLinkButtonComponent } from '../../../shared/custom-link-button/custom-link-button.component';
import { CustomTitleComponent } from '../../../shared/custom-title/custom-title.component';
@Component({
  selector: 'app-category-list',
  imports: [CommonModule, CustomTableComponent, CustomLinkButtonComponent, CustomTitleComponent],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
  standalone: true
})
export class CategoryListComponent {
  columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name'  }
  ];
  public categories:Category[] = [];

  constructor(private categoryService: CategoryService){}

  ngOnInit() {
    this.getCategories();
  }

  async getCategories(){
    try {
      const res = await this.categoryService.getCategories();
      this.categories = res;
    } catch (err) {
      console.error('Error al obtener categorías:', err);
    }
  }

  openDeleteDialog(category:Category) {
    console.log('Category', category);
  }
}
