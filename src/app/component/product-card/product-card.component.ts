import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../types/product';
import { RupeePipe } from '../../rupee.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule,UpperCasePipe,RupeePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
@Input() product!:Product;
@Output() viewProduct=new EventEmitter<Number>();

view(){
  console.log("view")
  this.viewProduct.emit(this.product.id)

}
}
