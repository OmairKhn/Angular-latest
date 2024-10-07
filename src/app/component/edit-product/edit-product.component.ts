import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  formBuilder = inject(FormBuilder);
  productService = inject(ProductService);
  activatedRoute = inject(ActivatedRoute);
  router=inject(Router);
  productForm: FormGroup = this.formBuilder.group({
    id:[''],
    name: ['', Validators.required],
    brand: ['', Validators.required],
    image: ['', Validators.required],
    currentPrice: ['', [Validators.required, Validators.min(1)]],
    standardPrice: ['', [Validators.required, Validators.min(1)]],
    discount: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
  });
  product: any;

  ngOnInit() {
    let productId = this.activatedRoute.snapshot.params['id'];
    this.productService.getProductByid(productId).subscribe(result => {
      this.productForm.patchValue(result);
    });
  }
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
  editProduct() {
    if(this.productForm.invalid){
      alert("please provide all the field")
      return
    }
this.productService.updateProduct(this.productForm.value).subscribe(result=>{
  alert("product update")
  this.router.navigateByUrl("/")
})
  }
}
