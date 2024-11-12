import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductManagerComponent } from './components/product-manager/product-manager.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'manager', component: ProductManagerComponent },
  { path: 'product/add', component: ProductManagerComponent },
  { path: 'product/edit/:id', component: ProductManagerComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
