import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  http = inject(HttpClient)

  getAllCategory() {
    return this.http.get(`${environment.baseUrl}/${environment.categoryPath}`)
  }

  getProdByCategory(category: any) {
    const params = new HttpParams()
      .set('category', category)
    return this.http.get(`${environment.baseUrl}/${environment.productPath}/` + 'category' + '/' + category, { params: params })
  }


}
