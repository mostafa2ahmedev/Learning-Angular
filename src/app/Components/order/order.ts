import { Component, NgModule } from '@angular/core';
import { Products } from '../products/products';
import { FormsModule, NgModel } from '@angular/forms';
import { Icategory } from '../../Models/icategory';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [Products, FormsModule, CommonModule],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
  seletctedCategoryId: number = 0;
  categories: Icategory[];
  receivedTotalPrice: number = 0;
  constructor() {
    this.categories = [
      {
        id: 1,
        name: 'Laptop',
      },
      {
        id: 2,
        name: 'Mobile',
      },
      {
        id: 3,
        name: 'Watch',
      },
      {
        id: 4,
        name: 'Accessories',
      },
    ];
  }
  calcTotalPrice(top: number) {
    this.receivedTotalPrice = top;
  }
}
