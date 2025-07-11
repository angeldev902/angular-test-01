import { Routes } from '@angular/router';
//Guards

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { 
        path: 'auth/login', 
        loadComponent: () => import('../app/pages/auth/auth-login/auth-login.component').then(m => m.AuthLoginComponent),
        canActivate: [] 
    },
    { 
        path: 'auth/forgot', 
        loadComponent: () => import('../app/pages/auth/auth-forgot-password/auth-forgot-password.component').then(m => m.AuthForgotPasswordComponent),
        canActivate: [] 
    },
    { 
        path: 'dashboard', 
        loadComponent: () => import('../app/pages/products/product-list/product-list.component').then(m => m.ProductListComponent),
        canActivate: [] 
    },
    { 
        path: 'brands', 
        loadComponent: () => import('../app/pages/brands/brand-list/brand-list.component').then(m => m.BrandListComponent),
        canActivate: [] 
    },
    { 
        path: 'brands/new', 
        loadComponent: () => import('../app/pages/brands/brand-detail/brand-detail.component').then(m => m.BrandDetailComponent),
        canActivate: [] 
    },
    { 
        path: 'brands/detail/:brandId', 
        loadComponent: () => import('../app/pages/brands/brand-detail/brand-detail.component').then(m => m.BrandDetailComponent),
        canActivate: [] 
    },
    { 
        path: 'categories', 
        loadComponent: () => import('../app/pages/categories/category-list/category-list.component').then(m => m.CategoryListComponent),
        canActivate: [] 
    },
    { 
        path: 'categories/new', 
        loadComponent: () => import('../app/pages/categories/category-detail/category-detail.component').then(m => m.CategoryDetailComponent),
        canActivate: [] 
    },
    { 
        path: 'categories/detail/:categoryId', 
        loadComponent: () => import('../app/pages/categories/category-detail/category-detail.component').then(m => m.CategoryDetailComponent),
        canActivate: [] 
    },
    { 
        path: 'products', 
        loadComponent: () => import('../app/pages/products/product-list/product-list.component').then(m => m.ProductListComponent),
        canActivate: [] 
    },
    { 
        path: 'products/new', 
        loadComponent: () => import('../app/pages/products/product-detail/product-detail.component').then(m => m.ProductDetailComponent),
        canActivate: [] 
    },
    { 
        path: 'products/detail/:productId', 
        loadComponent: () => import('../app/pages/products/product-detail/product-detail.component').then(m => m.ProductDetailComponent),
        canActivate: [] 
    },
];
