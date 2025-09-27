import { Component } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { HighlightCard } from '../../Directives/highlight-card';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule, HighlightCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: Iproduct[];
  categories: Icategory[];
  seletctedCategoryId: number = 0;
  total: number = 0;
  myDate: Date = new Date();
  constructor() {
    this.products = [
      {
        id: 100,
        name: 'Dell Laptop',
        price: 50000,
        quantity: 1,
        imgUrl: 'https://picsum.photos/seed/picsum/200/300',
        catId: 1,
      },
      {
        id: 200,
        name: 'Assus Laptop',
        price: 50000,
        quantity: 0,
        imgUrl: 'https://picsum.photos/seed/picsum/200/300',
        catId: 1,
      },
      {
        id: 300,
        name: 'Lenovo Laptop',
        price: 50000,
        quantity: 2,
        imgUrl: 'https://picsum.photos/seed/picsum/200/300',
        catId: 1,
      },
      {
        id: 400,
        name: 'Iphone',
        price: 50000,
        quantity: 3,
        imgUrl: 'https://picsum.photos/seed/picsum/200/300',
        catId: 3,
      },
      {
        id: 500,
        name: 'MSI Laptop',
        price: 50000,
        quantity: 3,
        imgUrl: 'https://picsum.photos/seed/picsum/200/300',
        catId: 1,
      },
      {
        id: 600,
        name: 'Watch ',
        price: 50000,
        quantity: 3,
        imgUrl: 'https://picsum.photos/seed/picsum/200/300',
        catId: 2,
      },
      {
        id: 700,
        name: 'AirPods',
        price: 50000,
        quantity: 4,
        imgUrl: 'https://picsum.photos/seed/picsum/200/300',
        catId: 4,
      },
    ];
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

  buy(count: string, price: number) {
    this.total += +count * price; //casting
  }
  change() {
    this.seletctedCategoryId = 3;
  }
  trackItem(index: number, item: Iproduct): number {
    return item.id;
  }
}
