import { Component } from '@angular/core';
import { BrandService } from '../../../core/services/brand.service';
import { CustomTableComponent } from '../../../shared/custom-table/custom-table.component';
import { Brand } from '../../../core/models/brand.model';
import { CommonModule } from '@angular/common';
import { CustomLinkButtonComponent } from '../../../shared/custom-link-button/custom-link-button.component';
import { CustomTitleComponent } from '../../../shared/custom-title/custom-title.component';
@Component({
  selector: 'app-brand-list',
  imports: [CommonModule, CustomTableComponent, CustomLinkButtonComponent, CustomTitleComponent],
  templateUrl: './brand-list.component.html',
  styleUrl: './brand-list.component.css',
  standalone: true
})

export class BrandListComponent {
  columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Nombre'  }
  ];
  public brands:Brand[] = [];

  constructor(private brandService: BrandService){}

  ngOnInit(): void{
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(res => {
      this.brands = res;
    });
  }

  openDeleteDialog(brand:Brand) {
    console.log('Brand', brand);
  }
}
