import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  formBuilder = inject(FormBuilder);
  productService = inject(ProductService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  
  productForm: FormGroup = this.formBuilder.group({
    id: [''],
    name: ['', Validators.required],
    brand: ['', Validators.required],
    image: ['', Validators.required],
    currentPrice: ['', [Validators.required, Validators.min(1)]],
    standardPrice: ['', [Validators.required, Validators.min(1)]],
    discount: ['', [Validators.min(0), Validators.max(100)]] // Set discount disabled
  });

  ngOnInit() {
    const productId = this.activatedRoute.snapshot.params['id'];
    this.productService.getProductByid(productId).subscribe(result => {
      this.productForm.patchValue(result);
      // Initial discount calculation
    });

    // Subscribe to value changes
  
  }



  editProduct() {
    if (this.productForm.invalid) {
      alert("Please provide all the fields.");
      return;
    }

    this.productService.updateProduct(this.productForm.value).subscribe(result => {
      alert("Product updated successfully.");
      this.router.navigateByUrl("/");
    });
  }
}
