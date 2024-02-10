import { Location } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'https://dummyjson.com'
  path = 'products'

  loc = inject(Location)

  constructor(private http: HttpClient) { }

  getAll(query?: string) {

    return this.http.get<IProduct[]>(`${this.baseUrl}/${this.path}`)
  }
  getAProduct(id: any) {
    return this.http.get<IProduct>(`${this.baseUrl}/${this.path}/` + id)
  }

  getProductsByQuery(query: string) {
    const queryParam = new HttpParams().set('q', query)
    return this.http.get<IProduct[]>(`${this.baseUrl}/${this.path}/` + 'search', { params: queryParam })
  }

  back() {
    this.loc.back()
  }
}
