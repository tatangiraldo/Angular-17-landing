import { Routes } from '@angular/router';
import { ProductComponent } from './components/pages/product/product.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';

export const routes: Routes = [
    {path: '', component: ProductComponent},
    {path: 'products', component: ProductComponent},
    {path: 'products/:id', component: ProductDetailsComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
