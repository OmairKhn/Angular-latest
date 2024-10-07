import { Component, inject } from '@angular/core';
import { ProductService } from '../../product.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../types/product';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
product!:Product;
ProductService=inject(ProductService)
activatedRoute=inject(ActivatedRoute)
ngOnInit(){
  let productId=this.activatedRoute.snapshot.params["id"];
  this.ProductService.getProductByid(productId).subscribe(result=>{
    this.product=result
  })  
}
}
