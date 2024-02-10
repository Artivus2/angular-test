import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/api.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ProductDetailComponent implements OnInit {


  route = inject(ActivatedRoute)
  id: any;
  apiService = inject(ProductService)
  cartService = inject(CartService)
  product: any

  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log(params['id']);
      this.id = params['id'];
    })
    this.getProduct()
  }

  getProduct() {
    this.apiService.getAProduct(this.id).subscribe({
      next: (data) => {
        // console.log(data);
        this.product = data
      },
      error: () => {
        console.log('Error');

      },

    })
  }

  discountedPrice() {
    const price = this.product.price
    const discount = price * this.product.discountPercentage / 100
    return price - discount
  }

  addToCart(data: any) {
    this.cartService.addToCart(data)
  }


}
