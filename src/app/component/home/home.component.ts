import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   products = [
    {
      id: 1,
      brand: 'Apple',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZygosKSxjeH8_EoMSIiZB4wJz3V4rKoiXkg&s',
      currentPrice: 999,
      standardPrice: 1299,
      discount: 23,
      name: 'iPhone 13'
    },
    {
      id: 2,
      brand: 'Samsung',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZygosKSxjeH8_EoMSIiZB4wJz3V4rKoiXkg&s',
      currentPrice: 799,
      standardPrice: 999,
      discount: 20,
      name: 'Samsung Galaxy'
    },
    {
      id: 3,
      brand: 'Google',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZygosKSxjeH8_EoMSIiZB4wJz3V4rKoiXkg&s',
      currentPrice: 599,
      standardPrice: 699,
      discount: 14,
      name: 'Google Pixel 6'
    }
  ];
  onViewProduct(event:any){
    console.log("view call ",event)
  }

}
