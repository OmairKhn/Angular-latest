import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from './types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpClient=inject(HttpClient)
  constructor() { }
  getProducts(){
    return this.httpClient.get<Product[]>("http://localhost:3000/products");
  }
  getProductByid(id:number){
    return this.httpClient.get<Product>("http://localhost:3000/products/"+id);
  }
  addProducts(product: Product) {
    // Send product as the body of the POST request
    return this.httpClient.post<Product>("http://localhost:3000/products", product);
  }
  updateProduct(product: Product) {
    // Send product as the body of the POST request
    return this.httpClient.put<Product>("http://localhost:3000/products/"+product.id, product);
  }
}
