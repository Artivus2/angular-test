import { Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductsComponent } from './pages/products/products.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ProfileDetailComponent } from './pages/profile-detail/profile-detail.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '/products', pathMatch: 'full'
    },
    {
        path: 'products', component: ProductsComponent,
        title: 'Home | Products'
    },
    {
        path: 'product/:id',
        component: ProductDetailComponent,
        // data: product,
        title: 'Single Product'
    },
    {
        path: 'cart', component: CartComponent,
        title: 'Cart'
    },
    {
        path: 'login', component: AuthComponent,
        title: 'Auth | Login'
    },
    {
        path: 'profile/:id', component: ProfileDetailComponent,
        title: 'Profile'
    },
];
