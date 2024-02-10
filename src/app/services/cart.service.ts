import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  CartItems = signal<any[]>([])
  constructor() { }


  addToCart(item: any) {
    this.CartItems.set(item)
  }

  getCartItems() {
    return this.CartItems
  }




}
