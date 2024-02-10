import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { IProduct } from '../../models/IProduct';
import { ProductService } from '../../services/api.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, RouterModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductsComponent implements OnInit, OnChanges {

  _api = inject(ProductService)
  catService = inject(CategoryService)
  route = inject(ActivatedRoute)
  router = inject(Router)
  products!: IProduct[]
  categories!: string[]

  queryParam!: string

  ngOnInit(): void {
    this.getAllProducts()
    this.getAllCategory()
    console.log('from query', this.queryParam);


  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('from query', this.queryParam);
  }

  query(value: any) {
    const searchTerm = value.target.value
    if (searchTerm !== '') {
      this.getAllProductByQuery(searchTerm)
    } else {
      this.getAllProducts()
    }

  }

  getAllProductByQuery(query: string) {
    this._api.getProductsByQuery(query).subscribe((data: any) => {
      console.log(data);
      this.products = data.products
    })
  }

  // get all products
  getAllProducts() {
    this._api.getAll().subscribe({
      next: (data: any) => {
        console.log(data);
        this.products = data.products
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  // get all categories
  getAllCategory() {
    this.catService.getAllCategory().subscribe({
      next: (category: any) => {
        this.categories = category
      }
    })
  }

  // add to cart
  onAddCart(p: any) {
    // this.cartItems.push(p)
  }

  getProductsByCat(data: any) {
    if (data === 'all') {
      this.getAllProducts()
      this.router.navigate(['/products'], { queryParams: { 'category': null } })
    } else {
      this.catService.getProdByCategory(data).subscribe({
        next: (products: any) => {
          this.products = products.products
          console.log(products);
          this.router.navigate(['/products'], { queryParams: { 'category': data } })
        }
      })
    }
  }



}
