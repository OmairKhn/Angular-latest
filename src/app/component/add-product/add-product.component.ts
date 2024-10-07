import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../types/product';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
product:Product={
  name:"",
  brand:"",
  image:"",
  currentPrice:0, 
  standardPrice:0,
  discount:0
}
producService=inject(ProductService);
router=inject(Router);
updateDiscount() {
  const currentPrice = Number(this.product.currentPrice); // Ensure it is a number
  const standardPrice = Number(this.product.standardPrice); 
  
  if (currentPrice && standardPrice && standardPrice > 0) {
    // Calculate discount percentage
    this.product.discount = Math.round(((standardPrice - currentPrice) / standardPrice) * 100);
    console.log(this.product.currentPrice);
    console.log(standardPrice);
    console.log(this.product.discount);
  } else {
    this.product.discount = 0; // Set discount to 0 if prices are invalid
  }
}
addProduct(){
console.log("form submitted",this.product)
this.producService.addProducts(this.product).subscribe(result=>{
  alert("product saved")
  this.router.navigateByUrl("/")
})
}
}
